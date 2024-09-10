/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserStats as PrismaUserStats } from "@prisma/client";

export class UserStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserStatsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userStats.count(args);
  }

  async userStatsItems(
    args: Prisma.UserStatsFindManyArgs
  ): Promise<PrismaUserStats[]> {
    return this.prisma.userStats.findMany(args);
  }
  async userStats(
    args: Prisma.UserStatsFindUniqueArgs
  ): Promise<PrismaUserStats | null> {
    return this.prisma.userStats.findUnique(args);
  }
  async createUserStats(
    args: Prisma.UserStatsCreateArgs
  ): Promise<PrismaUserStats> {
    return this.prisma.userStats.create(args);
  }
  async updateUserStats(
    args: Prisma.UserStatsUpdateArgs
  ): Promise<PrismaUserStats> {
    return this.prisma.userStats.update(args);
  }
  async deleteUserStats(
    args: Prisma.UserStatsDeleteArgs
  ): Promise<PrismaUserStats> {
    return this.prisma.userStats.delete(args);
  }
}
