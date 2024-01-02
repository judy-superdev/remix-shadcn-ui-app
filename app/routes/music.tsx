import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import MusicPage from "../components/music/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Music" },
    { name: "description", content: "" },
  ];
};

const Music: FC = () => {
  return (
    <MusicPage />
  );
};

export default Music;
