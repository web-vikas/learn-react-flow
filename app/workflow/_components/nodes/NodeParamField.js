"use client"
import { Input } from '@/components/ui/input'
import { TaskParamsType } from '@/constants/workflow'
import React, { useCallback } from 'react'
import StringParam from './params/StringParam'
import { useReactFlow } from '@xyflow/react'

const NodeParamField = ({ param, nodeId }) => {
    const { updateNodeData, getNode } = useReactFlow()
    const node = getNode(nodeId)
    const value = node?.data?.inputs?.[param.name]

    const updateNodeParamValue = useCallback((newValue) => {
        updateNodeData(nodeId, {
            inputs: {
                ...node?.data?.inputs,
                [param.name]: newValue
            }
        })
    }, [updateNodeData, param.name, nodeId, node?.data?.inputs])

    switch (param.type) {
        case TaskParamsType.STRING:
            return <StringParam param={param} value={value} updateNodeParamValue={updateNodeParamValue} />
        default: return <div className="w-full">
            <p className='text-xs text-muted-foreground'>Not Implemented</p>

        </div>
    }
}

export default NodeParamField