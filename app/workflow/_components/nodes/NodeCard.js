"use client"

import { cn } from "@/lib/utils"
import { useReactFlow } from "@xyflow/react"

const NodeCard = ({ children, nodeId, isSelected }) => {
    const { getNode, setCenter } = useReactFlow()
    return (
        <div className={cn("rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col",
            isSelected && "border-primary")}
            onDoubleClick={() => {
                const node = getNode(nodeId)
                if (!node) return;
                const { position, measured } = node
                const x = position.x + measured.width / 2
                const y = position.y + measured.height / 2
                if (x == undefined || y == undefined) return;
                setCenter(x, y, {
                    zoom: 1,
                    duration: 500,
                })
            }}
        >
            {children}
        </div >)
}

export default NodeCard