export const WorkflowStatus = {
    PUBLISHED: "PUBLISHED",
    DRAFT: "DRAFT",
}

export const WorkflowStatusColors = {
    [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorkflowStatus.PUBLISHED]: "bg-primary"
}