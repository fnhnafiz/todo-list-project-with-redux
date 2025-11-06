import TaskCard from "@/modules/Todo-Tasks/TaskCard";
import TaskCta from "@/modules/Todo-Tasks/TaskCta";
import { selectTask } from "@/Redux/features/todo/taskSlice";
import { useAppSelector } from "@/Redux/hooks";
import { FiInbox, FiFilter, FiCheckCircle } from "react-icons/fi";

function Tasks() {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900 py-10">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Tasks
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Manage and organize your tasks efficiently
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Total Tasks
                  </p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-1">
                    {tasks.length}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FiInbox className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Pending
                  </p>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                    {tasks.filter((task) => !task.isCompleted).length}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <FiFilter className="text-2xl text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Completed
                  </p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">
                    {tasks.filter((task) => task.isCompleted).length}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <FiCheckCircle className="text-2xl text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Tasks List */}
          {tasks.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mx-auto mb-6">
                <FiInbox className="text-5xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                No Tasks Yet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Start by creating your first task to get organized!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="my-12">
        <TaskCta />
      </div>
    </div>
  );
}

export default Tasks;
