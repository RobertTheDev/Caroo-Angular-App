import { CarRequestResponse, Prisma } from '@prisma/client';
import { CreateCarRequestResponseSchemaType } from 'models/carRequestResponse/validators/createCarRequestResponse.schema';
import { UpdateCarRequestResponseSchemaType } from 'models/carRequestResponse/validators/updateCarRequestResponse.schema';
import prisma from 'api/utils/prisma';

// Create and return a new car request response.
export async function createOneCarRequestResponse(
  data: CreateCarRequestResponseSchemaType,
): Promise<CarRequestResponse> {
  return await prisma.carRequestResponse.create({
    data,
  });
}

// Delete one car request response by id.
export async function deleteOneCarRequestResponseById(
  id: string,
): Promise<CarRequestResponse> {
  return await prisma.carRequestResponse.delete({
    where: {
      id,
    },
  });
}

// Delete all car request responses.
export async function deleteAllCarRequestResponses(): Promise<Prisma.BatchPayload> {
  return await prisma.carRequestResponse.deleteMany();
}

// Delete all car request responses by matching car id.
export async function deleteAllCarRequestResponsesByCarRequestId(
  carRequestId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.carRequestResponse.deleteMany({
    where: {
      carRequestId,
    },
  });
}

// Delete all car request responses by matching user id.
export async function deleteAllCarRequestResponsesByUserId(
  userId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.carRequestResponse.deleteMany({
    where: {
      userId,
    },
  });
}

// Delete a car request response by id.
export async function deleteAllCarRequestResponseById(
  id: string,
): Promise<CarRequestResponse> {
  return await prisma.carRequestResponse.delete({
    where: {
      id,
    },
  });
}

// Return all car request responses.
export async function findAllCarRequestResponses(): Promise<
  CarRequestResponse[]
> {
  return await prisma.carRequestResponse.findMany({
    include: {
      user: true,
    },
  });
}

// Find all car request responses by matching car id.
export async function findAllCarRequestResponsesByCarRequestId(
  carRequestId: string,
): Promise<CarRequestResponse[]> {
  return await prisma.carRequestResponse.findMany({
    where: {
      carRequestId,
    },
    include: {
      user: true,
    },
  });
}

// Find all car request responses by matching user id.
export async function findAllCarRequestResponsesByUserId(
  userId: string,
): Promise<CarRequestResponse[]> {
  return await prisma.carRequestResponse.findMany({
    where: {
      userId,
    },
  });
}

// Find and return a car request response by id.
export async function findOneCarRequestResponseById(
  id: string,
): Promise<CarRequestResponse | null> {
  return await prisma.carRequestResponse.findUnique({
    where: {
      id,
    },
  });
}

// Update a car request response by matching id.
export async function updateOneCarRequestResponseById(
  data: UpdateCarRequestResponseSchemaType,
  id: string,
): Promise<CarRequestResponse> {
  return await prisma.carRequestResponse.update({
    data,
    where: {
      id,
    },
  });
}
