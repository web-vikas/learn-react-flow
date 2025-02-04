"use server";

import { auth } from "@/auth";
import { WorkflowStatus } from "@/constants/workflow";
import { db } from "@/lib/prisma";
export async function CreateWorkflowApi(data) {
  const session = await auth();
  if (!session) throw new Error("No session");

  return await db.WorkFLow.create({
    data: {
      userId: session.user.id,
      name: data.name,
      description: data.description,
      definitions: "this is a defecation",
      status: WorkflowStatus.DRAFT,
    },
  });
}
export async function GetWorkflowForUser() {
  const session = await auth();
  if (!session) throw new Error("No session");
  return db.WorkFLow.findMany({ where: { userId: session.user.id } });
}
