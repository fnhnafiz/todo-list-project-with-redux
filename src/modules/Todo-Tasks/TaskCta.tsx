import { FiUsers, FiZap } from "react-icons/fi";
import { Link } from "react-router";

function TaskCta() {
  return (
    <>
      {/* CTA Section */}
      <section className="max-w-7xl rounded-4xl mx-auto py-12 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className=" px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiUsers className="text-white" />
            <span className="text-white font-semibold">
              Join 1000+ productive users
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Productivity?
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Start organizing your tasks today and experience the difference.
            It's free, simple, and powerful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/add-task"
              className="flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>Start Managing Tasks</span>
              <FiZap />
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskCta;
