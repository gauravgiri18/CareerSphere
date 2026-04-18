import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <SignIn forceRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding" />
  )
}

export default page
