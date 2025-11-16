export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
  assignedTo: string | null; // user will be in task or no user info in task that's why string or null
}

export interface IUser {
  id: string;
  name: string;
}
