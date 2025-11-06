import { Link } from "react-router";
import {
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiZap,
  FiStar,
  FiUsers,
} from "react-icons/fi";
function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                ✨ Welcome to TaskMaster
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent leading-tight">
              Organize Your Life,
              <br />
              One Task at a Time
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              The simple, powerful way to manage your tasks and boost
              productivity. Stay focused, get things done, and achieve your
              goals effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/add-task"
                className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
              >
                <span>Get Started Free</span>
                <FiZap className="group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                to="/tasks"
                className="flex items-center gap-2 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-purple-200 dark:border-purple-700"
              >
                <span>View Tasks</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  1000+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  50K+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Tasks Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  99%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Stay Productive
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple yet powerful features designed to help you manage tasks
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <FiCheckCircle className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Easy Task Management
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Create, edit, and organize your tasks with a simple and
                intuitive interface. Add priorities and due dates effortlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <FiClock className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Track Progress
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Monitor your completed tasks and see your productivity grow.
                Stay motivated with visual progress indicators.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <FiTrendingUp className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Boost Productivity
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Focus on what matters most. Prioritize tasks and manage your
                time effectively to achieve more every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-slate-800 dark:via-purple-900/20 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Get Started in
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                3 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Start managing your tasks in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-purple-500/30">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Create Tasks
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Add your tasks with descriptions, priorities, and due dates.
                It's quick and easy!
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-purple-500/30">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Organize & Prioritize
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Arrange tasks by priority and manage them efficiently to stay on
                top of your work.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-purple-500/30">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                Complete & Celebrate
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Mark tasks as complete and watch your productivity soar.
                Celebrate your achievements!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              What Our
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Users Say
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Join thousands of satisfied users
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "TaskMaster has completely transformed how I manage my daily
                tasks. It's simple, elegant, and incredibly effective!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Product Manager
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "Finally, a task manager that doesn't overcomplicate things.
                TaskMaster keeps me focused and productive every day."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Michael Chen
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Software Developer
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-100 dark:border-slate-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "I love how intuitive and beautiful TaskMaster is. It makes task
                management actually enjoyable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  EP
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Emily Parker
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Freelance Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
