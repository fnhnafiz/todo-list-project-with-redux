import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/todo/taskSlice";
import userReducer from "./features/users/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allTodoTasks: taskReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
