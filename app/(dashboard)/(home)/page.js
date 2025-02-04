import { auth } from '@/auth'
import React from 'react'

const HomePage = async () => {
    const session = await auth()
    return (
        <code>{JSON.stringify(session, null, 10)}</code>
    )
}

export default HomePage