import { TaskRegistry } from "@/lib/workflow/task/Registry";
import NodeCard from "./NodeCard";
import NodeHeader from "./NodeHeader";
import NodeInputs from "./NodeInputs";
import { NodeInput } from "./NodeInput";

const { memo } = require("react");

const NodeComponent = memo(props => {
    const nodeData = props.data
    const task = TaskRegistry[nodeData.type]
    return <NodeCard nodeId={props.id} isSelected={props.selected}>
        <NodeHeader taskType={nodeData.type} />
        <NodeInputs>
            {task.inputs.map((input, key) => (
                <NodeInput input={input} key={key} nodeId={props.id} />
            ))
            }
        </NodeInputs>
    </NodeCard>
})

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";