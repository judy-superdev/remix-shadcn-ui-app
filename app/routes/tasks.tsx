import { type MetaFunction, json } from "@remix-run/node";
import { FC, useEffect } from "react";
import TaskPage from "../components/tasks/page";
import { useLoaderData } from "@remix-run/react";
import { taskSchema } from "../components/tasks/data/schema";

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

// SEO
export const meta: MetaFunction = () => {
  return [{ title: "Tasks" }, { name: "description", content: "" }];
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/components/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export const loader = async () => {
  const tasks = await getTasks();
  return json({ tasks });
};

const Tasks: FC = () => {
  const { tasks } = useLoaderData<typeof loader>();
  return <>{tasks.length > 0 && <TaskPage tasks={tasks} />}</>;
};

export default Tasks;
