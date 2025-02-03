import { PrismaClient } from "@prisma/client";



export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;