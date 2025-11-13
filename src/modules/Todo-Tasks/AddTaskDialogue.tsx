import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "@/Redux/features/todo/taskSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { ITask } from "@/types";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FiPlus, FiSave, FiX } from "react-icons/fi";

function AddTaskDialogue() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const taskData = {
      ...data,
      dueDate: data.dueDate ? data.dueDate.toISOString() : "",
    };
    console.log(taskData);
    dispatch(addTask(taskData as ITask));
    toast.success("Add your task");
    form.reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all cursor-pointer">
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
                  <Label
                    htmlFor="task-priority"
                    className="text-slate-700 dark:text-slate-300 font-semibold"
                  >
                    Priority
                  </Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full py-5">
                      <SelectValue placeholder="Priority Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="low">🟢Low Priority</SelectItem>
                        <SelectItem value="medium">
                          🟡Medium Priority
                        </SelectItem>
                        <SelectItem value="high">🔴High Priority</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* Date Picker */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-4">
                  <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold">
                    Due Date
                  </FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-between font-normal h-11"
                        >
                          {field.value
                            ? field.value.toLocaleDateString() // সরাসরি Date object থেকে
                            : "Select date"}
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date); // ✅ Date object রাখুন, string না!
                          setOpen(false);
                        }}
                        captionLayout="dropdown"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter className="mt-5">
              <DialogClose asChild className="flex gap-2 sm:gap-0 ">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <FiX className="mr-2" />
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all cursor-pointer"
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
