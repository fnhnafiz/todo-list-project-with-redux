import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { FiPlus, FiSave, FiX } from "react-icons/fi";

function AddTaskDialogue() {
  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all">
          <FiPlus className="text-lg" />
          <span>Add Task</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Create New Task
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            Add a new task to your list. Fill in the details below and click
            save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* Shdcn form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Task Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <div className="grid gap-3">
                      <Label
                        htmlFor="task-title"
                        className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-2"
                      >
                        Task Title
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        {...field}
                        value={field.value || ""}
                        id="task-title"
                        name="title"
                        placeholder="Enter your task title..."
                        className="border-slate-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:bg-slate-800 dark:text-slate-100 h-11"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Task Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <div className="grid gap-3">
                      <Label
                        htmlFor="task-description"
                        className="text-slate-700 dark:text-slate-300 font-semibold"
                      >
                        Description
                      </Label>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        id="task-description"
                        name="description"
                        placeholder="Add more details about your task..."
                        className="border-slate-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:bg-slate-800 dark:text-slate-100 min-h-[120px] resize-none"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Priority Selection */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <div className="grid gap-3">
                      <Label
                        htmlFor="task-priority"
                        className="text-slate-700 dark:text-slate-300 font-semibold"
                      >
                        Priority Level
                      </Label>
                      <select
                        {...field}
                        value={field.value || ""}
                        id="task-priority"
                        name="priority"
                        className="flex h-11 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      >
                        <option value="">Select priority...</option>
                        <option value="low">🟢 Low Priority</option>
                        <option value="medium">🟡 Medium Priority</option>
                        <option value="high">🔴 High Priority</option>
                      </select>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="mt-5">
              <DialogClose asChild className="flex gap-2 sm:gap-0 ">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <FiX className="mr-2" />
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                <FiSave className="mr-2" />
                Save Task
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskDialogue;
