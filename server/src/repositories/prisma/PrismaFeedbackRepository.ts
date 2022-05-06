import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  IFeedbacksRepository,
} from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    //chamo o prisma depois a tabela feedback e o metodo de criação
    await prisma.feedback.create({
      data: {
        // type: req.body.type,
        // comment: req.body.comment,
        // screenshot: req.body.screenshot,
        type,
        comment,
        screenshot,
      },
    });
  }
}