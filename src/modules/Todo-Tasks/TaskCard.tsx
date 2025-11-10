import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FiCalendar, FiClock, FiEdit2, FiTrash2 } from "react-icons/fi";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
  dueDate: string;
  createdAt: string;
}
interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(task.priority);
  return (
    <div
      className={`group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border transition-all hover:shadow-xl hover:scale-[1.01] ${
        isChecked
          ? "border-green-200 dark:border-green-800 opacity-75"
          : "border-slate-200 dark:border-slate-700"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="mt-1">
          <Checkbox className="w-6 h-6 rounded-lg border-2 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600" />
        </div>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center  gap-2 mb-2">
            <h3
              className={`text-lg font-semibold text-slate-800 dark:text-slate-200 ${
                isChecked
                  ? "line-through text-slate-500 dark:text-slate-500"
                  : ""
              }`}
            >
              {task.title}
            </h3>
            {/* Priority Badge */}
            <span
              className={cn("w-3 h-3  rounded-full", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></span>
          </div>

          {task.description && (
            <p
              className={`text-slate-600 dark:text-slate-400 mb-3 ${
                isChecked ? "line-through" : ""
              }`}
            >
              {task.description}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            {task.dueDate && (
              <div className="flex items-center gap-1.5">
                <FiCalendar className="text-purple-600 dark:text-purple-400" />
                <span>{new Date(task.dueDate).toLocaleString()}</span>
              </div>
            )}
            {task.createdAt && (
              <div className="flex items-center gap-1.5">
                <FiClock className="text-purple-600 dark:text-purple-400" />
                <span>{task.createdAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => {
              /* Edit functionality */
            }}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            aria-label="Edit task"
          >
            <FiEdit2 className="text-lg" />
          </button>

          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-all"
            aria-label="Delete task"
          >
            <FiTrash2 className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
