import SignupFormProvider from '@/components/forms/sign-up/form-provider'
import React from 'react'
import RegistrationFormStep from '../../../components/forms/sign-up/registration-step'
import ButtonHandler from '@/components/forms/sign-up/button-handler'
import HighLightBar from '@/components/forms/sign-up/highlight-bar'


type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
        <div className='flex flex-col h-full gap-3'>
            <SignupFormProvider>
              <div className='flex flex-col gap-3'>
                <RegistrationFormStep />
                <ButtonHandler />
              </div>
              <HighLightBar />
            </SignupFormProvider>
        </div>
    </div>
  )
}

export default SignUp