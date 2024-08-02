/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Grade as PrismaGrade,
  Submission as PrismaSubmission,
} from "@prisma/client";

export class GradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GradeCountArgs, "select">): Promise<number> {
    return this.prisma.grade.count(args);
  }

  async grades(args: Prisma.GradeFindManyArgs): Promise<PrismaGrade[]> {
    return this.prisma.grade.findMany(args);
  }
  async grade(args: Prisma.GradeFindUniqueArgs): Promise<PrismaGrade | null> {
    return this.prisma.grade.findUnique(args);
  }
  async createGrade(args: Prisma.GradeCreateArgs): Promise<PrismaGrade> {
    return this.prisma.grade.create(args);
  }
  async updateGrade(args: Prisma.GradeUpdateArgs): Promise<PrismaGrade> {
    return this.prisma.grade.update(args);
  }
  async deleteGrade(args: Prisma.GradeDeleteArgs): Promise<PrismaGrade> {
    return this.prisma.grade.delete(args);
  }

  async getSubmission(parentId: string): Promise<PrismaSubmission | null> {
    return this.prisma.grade
      .findUnique({
        where: { id: parentId },
      })
      .submission();
  }
}
