import { GetWorkflowForUser } from "@/actions/workflow/workflow";
import { waitFor } from "@/lib/watiFor";
import { BriefcaseIcon } from "lucide-react";
import CreateWorkflow from "./create-workflow-dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function UserWorkflow() {
  const workflow = await GetWorkflowForUser();
  console.log(workflow);
  await waitFor(3000);
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
        <div>
          <div className="flex flex-col gap-4">
            {workflow.length > 0 &&
              workflow.map((item) => (
                <Card key={item._id}>
                  <div className="flex items-center justify-center">
                    <CardContent>
                      <h3>{item.name}</h3>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
          {/* <CreateWorkflow isTitle='Create a new workflow'/> */}
        </div>
      )}
    </div>
  );
}
