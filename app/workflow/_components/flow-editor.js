'use client'
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import React from 'react'
import "@xyflow/react/dist/style.css"
import { createFlowNode } from '@/lib/workflow/createFlowNode'
import { TaskType } from '@/constants/workflow'
import NodeComponent from './nodes/NodeComponent'

const nodeTypes = {
    FlowScrapeNode: NodeComponent,
}
const snapGrid = [50, 50]
const fitViewOptions = {
    padding: 0.4
}
const FlowEditor = ({ workflow }) => {
    const [nodes, setNodes, OnNodeChange] = useNodesState([
        createFlowNode(TaskType.LAUNCH_BROWSER)
    ])
    const [edges, setEdges, OnEdgesChange] = useEdgesState([])
    return (
        <main className='h-full w-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={OnNodeChange}
                onEdgesChange={OnEdgesChange}
                nodeTypes={nodeTypes}
                snapToGrid
                snapGrid={snapGrid}
                fitView
                fitViewOptions={fitViewOptions}
            >
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                <Controls position='top-left' fitViewOptions={fitViewOptions} />
            </ReactFlow>
        </main>
    )
}

export default FlowEditor