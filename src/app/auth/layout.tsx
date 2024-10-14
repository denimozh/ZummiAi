import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = async ({ children }: Props) => {
    const user = await currentUser();

    if (user) redirect("/");

    return (
        <div className='h-screen flex w-full justify-center'>
            <div className='w-[600px] ld:w-full flex flex-col items-start p-6'>
                <p className='font-semibold text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>Zummi-AI</p>
                {children}
            </div>
            <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
                <h2 className="text-gravel md:text-4xl font-bold">
                    Hi, I’m your AI powered sales assistant, Zummi!
                </h2>
                <p className="text-iridium md:text-sm mb-10">
                    Zummi-AI is capable of capturing lead information without a form...{' '}
                <br />
                    something never done before 😉
                </p>
                <Image
                    src="/images/app-ui.png"
                    alt="app image"
                    loading="lazy"
                    sizes="30"
                    className="absolute shrink-0 !w-[1600px] top-48"
                    width={0}
                    height={0}
                />
            </div>
        </div>
    )
}

export default layout