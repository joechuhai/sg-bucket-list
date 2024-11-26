// src/app/api/bucket-list/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const items = await prisma.bucketItem.findMany({
    where: { enabled: true },
    orderBy: { order: 'asc' }
  })
  return NextResponse.json(items)
}