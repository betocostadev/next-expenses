import { PrismaClient } from '@prisma/client'
// This is meant to avoid Next.js hot reloading to keep creating another instance of the db

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db
}
