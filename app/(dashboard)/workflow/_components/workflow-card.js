import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WorkflowStatus, WorkflowStatusColors } from "@/constants/workflow";
import { cn } from "@/lib/utils";
import { FileTextIcon, PenBoxIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import WorkflowAction from "./workflow-action";
import EditWorkflow from "./edit-workflow-dialog";

const WorkflowCard = ({ workflow }) => {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between h-[100px]">
        <div className="flex items-center justify-end space-x-3 ">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              WorkflowStatusColors[workflow.status]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold flex items-center">
              <Link
                href={`/workflow/editor/${workflow.id}`}
                className="flex items-center hover:underline"
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 round-full">
                  Draft
                </span>
              )}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Link
                        href={`/workflow/editor/${workflow.id}`}
                        className={cn(buttonVariants({
                            variant: 'outline',
                            size: 'sm'
                        }), 'flex items-center gap-2')}
                    >
                        <PenBoxIcon size={16} /> Edit
                    </Link> */}
          <EditWorkflow data={workflow} />

          <WorkflowAction id={workflow.id} />
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;
