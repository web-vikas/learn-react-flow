export function createFlowNode(nodeType, position) {
    return {
        id: crypto.randomUUID(),
        type: "FlowScrapeNode",
        dragHandle: ".drag-handle",
        data: {
            type: nodeType,
            input: {}
        },
        position: position ?? { x: 0, y: 0 }
    }
}