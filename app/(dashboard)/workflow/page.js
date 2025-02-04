import { Suspense } from "react";
import CreateWorkflow from "./_components/create-workflow-dialog";
import UserWorkflowSkelton from "./_components/skeletons/user-workflow-skelton";
import UserWorkflow from "./_components/user-workflow";

const WorkFlowPage = async () => {
  return (
    <div className="flex-1 flex flex-col h-full justify-center">
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-xl">Workflow</h1>
          <p className="text-xs">Manage your Workflow</p>
        </div>
        <CreateWorkflow />
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowSkelton />}>
          <UserWorkflow />
        </Suspense>
      </div>
    </div>
  );
};

export default WorkFlowPage;
