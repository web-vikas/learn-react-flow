import { GetWorkflowForUser } from "@/actions/workflow/workflow";
import { AlertCircle, BriefcaseIcon } from "lucide-react";
import CreateWorkflow from "./create-workflow-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WorkflowCard from "./workflow-card";

export default async function UserWorkflow() {
  const workflow = await GetWorkflowForUser();

  if (!workflow)
    return <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later 🥲
      </AlertDescription>
    </Alert>

  return (
    <div>
      {workflow.length === 0 ? (
        <>
          <div className="flex justify-center p-4 sm:p-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400 mb-4">
                <BriefcaseIcon
                  className="h-8 w-8 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <CreateWorkflow isTitle="Create you first workflow" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div >
          <div className="flex flex-col gap-4">
            {workflow.length > 0 &&
              workflow.map((item) => (
                <WorkflowCard workflow={item} key={item.id} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
