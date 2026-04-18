import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <SignUp forceRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding" />
  )
}

export default page
