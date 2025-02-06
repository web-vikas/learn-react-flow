"use client";
import { UpdateWorkflow } from "@/actions/workflow/workflow";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createWorkflowSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, PenBoxIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// Define the schema using Zod

export default function EditWorkflow({ data }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "" || data.name,
      description: "" || data.description,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: UpdateWorkflow,
    onError: (error) => {
      toast.error("Failed to update workflow 🥲", { id: "update-workflow" });
    },
    onSuccess: (data) => {
      toast.success("Workflow has been updated 😀", { id: "update-workflow" });
      setIsOpen(false);
      form.reset();
      // router.refresh();
    },
  });

  const onSubmit = useCallback(
    (values) => {
      toast.loading("update workflow 🫸", {
        id: "update-workflow",
      });
      mutate({ id: data.id, values });
    },
    [mutate]
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <PenBoxIcon size={16} /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit WorkFLow</DialogTitle>
          <DialogDescription>
            Make changes to your workflow here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter workflow name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="animate-spin" /> : "Proceed"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
