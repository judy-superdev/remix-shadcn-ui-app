import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import MailPage from "../components/mail/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Mail" },
    { name: "description", content: "" },
  ];
};

const Mail: FC = () => {
  return (
    <MailPage />
  );
};

export default Mail;
