import { deletedUser, selectUser } from "@/Redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Trash2, User } from "lucide-react";

function Users() {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleDeletedUser = (id: string) => {
    dispatch(deletedUser(id));
  };
  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        Users List
      </h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
        >
          <div>
            <div className="bg-gray-400 w-8 h-8 flex flex-col items-center justify-center rounded-full">
              <User className="text-white " />
            </div>
            {/* User Info */}
            <div className="text-lg font-medium text-slate-800 dark:text-slate-200">
              {user.name}
            </div>
          </div>

          {/* Delete Icon */}
          <button
            onClick={() => handleDeletedUser(user.id)}
            className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
          >
            <Trash2
              className="text-red-600 dark:text-red-400 cursor-pointer"
              size={20}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
