import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../../public/favicon.png";
import AddTaskDialogue from "@/modules/Todo-Tasks/AddTaskDialogue";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 py-3.5">
        <div className="flex justify-between items-center">
          {/* Logo with gradient */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all group-hover:scale-105 ">
              <span className="text-white font-bold text-lg">
                <img src={logo} alt="logo" className="" />
              </span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TaskMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Tasks
            </Link>
            <Link
              to="/completed-task"
              className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Completed
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Add Task Button - Desktop */}
            {/* <Link
              to="/add-task"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              <FiPlus className="text-lg" />
              <span>Add Task</span>
            </Link> */}
            {/* Task Modal */}
            <AddTaskDialogue />
            {/* Task Modal */}

            {/* Mode Toggle */}
            <div className="hidden md:block">
              <ModeToggle />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              aria-label="Toggle menu"
            >
              {open ? (
                <FiX className="text-2xl text-slate-700 dark:text-slate-300" />
              ) : (
                <FiMenu className="text-2xl text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top-5">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Tasks
            </Link>
            <Link
              to="/completed-task"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              Completed
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
            >
              About
            </Link>

            <div className="pt-3 space-y-3 border-t border-slate-200 dark:border-slate-700">
              {/* <Button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                <FiPlus className="text-lg" />
                <span>
                  <AddTaskDialogue />
                </span>
              </Button> */}
              {/* <AddTaskDialogue /> */}

              <div className="flex justify-center">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
