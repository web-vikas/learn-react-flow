"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { createWorkflowSchema } from "@/schema";
import { Textarea } from "@/components/ui/textarea";
import { CreateWorkflowApi } from "@/actions/workflow/workflow";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the schema using Zod

export default function CreateWorkflow({ isTitle }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { formState } = form
  const onSubmit = async (data) => {
    try {
      toast.loading("Creating workflow 🫸", { id: "create-workflow" });
      const response = await CreateWorkflowApi(data);
      if (response) {
        toast.success("Workflow created successfully 😀", { id: "create-workflow" });
        setIsOpen(false);
        form.reset();
        router.push(`/workflow/editor/${response.id}`)

      }
    } catch (error) {
      toast.error("Failed to create workflow 🥲", { id: "create-workflow" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          {isTitle ?? "Create workflow"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isTitle ?? "Create workflow"}</DialogTitle>
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

              <Button type="submit" disabled={formState.isLoading}>
                {formState.isLoading ? <Loader2 className="animate-spin" /> : "Proceed"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
