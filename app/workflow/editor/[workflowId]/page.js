import { auth } from '@/auth'
import { db } from '@/lib/prisma'
import React from 'react'
import Editor from '../../_components/editor'

const WorkflowEditor = async ({ params }) => {
    const { workflowId } = await params
    const session = await auth()
    if (!session)
        return <div>Unauthorized</div>
    const workflow = await db.WorkFLow.findUnique({
        where: {
            id: workflowId,
            userId: session.user.id,
        }
    })
    if (!workflow)
        return <div>Workflow Not found</div>

    return (
        <Editor workflow={workflow} />
    )
}

export default WorkflowEditor