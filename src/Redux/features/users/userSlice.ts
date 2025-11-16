import type { RootState } from "@/Redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "dsfklsdf",
      name: "Tanvir Hossain",
    },
    {
      id: "dsfsdfklsdf",
      name: "Mawardi Mohammad Modhukhali",
    },
  ],
};

type DraftTask = Pick<IUser, "name">;

const createUser = (userData: DraftTask): IUser => {
  return { id: nanoid(), ...userData };
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftTask>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deletedUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { addUser,deletedUser } = userSlice.actions;
export default userSlice.reducer;
