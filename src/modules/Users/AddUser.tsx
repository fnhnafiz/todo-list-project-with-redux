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
import { addUser } from "@/Redux/features/users/userSlice";
import { useAppDispatch } from "@/Redux/hooks";
import type { IUser } from "@/types";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import Users from "./Users";
import { useState } from "react";

function AddUser() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as IUser));
    console.log(data);
    toast.success("User added!!");
    form.reset();
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="my-12 ">
          <Button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all cursor-pointer block mx-auto ">
            <FiPlus className="text-lg" />
            <span>Users</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Please enter the user name below. Click submit to add the user.
            </DialogDescription>
          </DialogHeader>

          {/* Shadcn Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* User Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold">
                      User Name <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Enter user name..."
                        className="border-slate-300 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500 dark:bg-slate-800 dark:text-slate-100 h-11"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Footer Buttons */}
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button
                  type="submit"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Users components */}
      <Users />
    </div>
  );
}

export default AddUser;
