import NodeCard from "./NodeCard";
import NodeHeader from "./NodeHeader";

const { memo } = require("react");

const NodeComponent = memo(props => {
    const nodeData = props.data
    return <NodeCard nodeId={props.id} isSelected={props.selected}>

        <NodeHeader taskType={nodeData.type} />
    </NodeCard>
})

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";