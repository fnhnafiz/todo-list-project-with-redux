import type { RootState } from "@/Redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = "asdfhjksdfsld";
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.task.push(taskData);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.allTodoTasks.task;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
