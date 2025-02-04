'use client'
import TooltipWrapper from "@/components/tooltip-wrapper";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Trash2 } from "lucide-react";
import DeleteWorkflow from "./delete-workflow";
import { DeleteWorkflowById } from "@/actions/workflow/workflow";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const WorkflowAction = ({ id }) => {
  const router = useRouter()
  const { mutate: handleDeleteWorkflow, isPending } = useMutation({
    mutationFn: async () => DeleteWorkflowById(id),
    onError: () => {
      toast.error("Failed to delete workflow 🥲", { id: "delete-workflow" });
    },
    onSuccess: () => {
      toast.success("Workflow has been deleted 😀", { id: "delete-workflow" });
      router.refresh();
    },
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <TooltipWrapper content="More Actions">
            <div className="flex items-center justify-center w-full h-full">
              <MoreVertical size={18} />
            </div>
          </TooltipWrapper>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        {/* <DropdownMenuItem> */}
        <DeleteWorkflow handleDeleteWorkflow={handleDeleteWorkflow} isPending={isPending} />
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkflowAction;
