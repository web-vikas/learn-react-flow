import { auth } from '@/auth'
import React from 'react'

const HomePage = async () => {
    const session = await auth()
    return (
        <pre>{JSON.stringify(session, null, 10)}</pre>
    )
}

export default HomePage