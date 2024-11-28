import { BoardData } from "./types";

export const initialData: BoardData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the trash" },
    "task-2": { id: "task-2", content: "Watch a movie" },
    "task-3": { id: "task-3", content: "Read a book" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
  },
  columnOrder: ["column-1"],
};
