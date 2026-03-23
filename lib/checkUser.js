import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const email =
            user.primaryEmailAddress?.emailAddress ||
            user.emailAddresses?.[0]?.emailAddress;
        const name = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();

        if (!email) {
            return await db.user.findUnique({
                where: {
                    clerkUserId: user.id,
                },
            });
        }

        const loggedInUser = await db.user.upsert({
            where: {
                clerkUserId: user.id,
            },
            update: {
                email,
                name: name || null,
                imageURL: user.imageUrl || null,
            },
            create: {
                clerkUserId: user.id,
                email,
                name: name || null,
                imageURL: user.imageUrl || null,
            },
        });

        return loggedInUser;
    } catch (e) {
        console.log(e.message);
        return null;
    }
};