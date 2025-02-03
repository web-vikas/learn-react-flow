"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";
import { useState } from "react";

const WorkFlowPage = () => {
  const [workflow, setWorkflow] = useState(true);
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-4 sm:p-6">
        <div>
          <CardTitle className="text-xl sm:text-2xl">Workflows</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Manage your workflows
          </CardDescription>
        </div>
        <Button>
          Create Workflow
        </Button>
      </CardHeader>
      <CardContent className="flex justify-center p-4 sm:p-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400 mb-4">
            <BriefcaseIcon className="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <div>
            <Button >
              Create your first workflow
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkFlowPage;
