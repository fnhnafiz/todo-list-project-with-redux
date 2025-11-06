import type { RootState } from "@/Redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish the Task Manager app and deploy it.",
      dueDate: "2025-02-28",
      isCompleted: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Write Documentation",
      description: "Create README and code comments for clarity.",
      dueDate: "2025-03-02",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: 3,
      title: "Team Meeting",
      description: "Discuss project updates and next sprint plan.",
      dueDate: "2025-02-26",
      isCompleted: true,
      priority: "low",
    },
    {
      id: 4,
      title: "Review Pull Requests",
      description: "Check pending PRs and merge after testing.",
      dueDate: "2025-02-27",
      isCompleted: false,
      priority: "medium",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.allTodoTasks.task;
};

export default taskSlice.reducer;
