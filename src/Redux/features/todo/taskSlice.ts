import type { RootState } from "@/Redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "sfsdfs",
      title: "Completed Full stack web devolopment",
      description:
        "Professionally cultivate sustainable imperatives whereas end-to-end methodologies. Globally integrate high-quality portals vis-a-vis cost effective benefits. Synergistically drive collaborative models with holistic metrics. Uniquely seize sustainable.",
      priority: "low",
      dueDate: "2025-11-04T18:00:00.000Z",
      isCompleted: false,
    },
  ],
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      //   const id = uuidv4();
      //   const taskData = {
      //     ...action.payload,
      //     id,
      //     isCompleted: false,
      //   };
      //   state.task.push(taskData);
      // },
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedTask: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.allTodoTasks.tasks;
};

export const { addTask, toggleCompletedTask } = taskSlice.actions;
export default taskSlice.reducer;
