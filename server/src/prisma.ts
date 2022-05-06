//Arquivo que mostra logs no terminal
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // a cada auteração que o prisma fizer no banco de dados o query vai dar um log no terminal, assim consigo ver as alteraçoes sendo feitas
});