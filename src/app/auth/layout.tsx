import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = async ({ children }: Props) => {
    const user = await currentUser();

    if (user) redirect("/");

    return (
        <div>layout</div>
    )
}

export default layout