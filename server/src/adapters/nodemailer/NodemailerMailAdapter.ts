import { IMailAdapter, SendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({ //esse bloco de codigo eu peguei la no mailtrap
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f3491280485d0b",
    pass: "3a2593c42af579"
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Ingrid Paulino <ingridpaulino1012@gmail.com>", //Obs: no ambiente de produção isso é enviado para o site mailtrap
      subject,
      html: body,
    });
  }
}
