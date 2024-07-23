'use client'

import { SessionProvider } from 'next-auth/react'

interface Props {
    children: React.ReactNode
}

const SessionAuthProvider = ({children}: Props) => {
    return (
    <div>
        <SessionProvider>{children}</SessionProvider>
    </div>
    )
}

export default SessionAuthProvider
