import { Link } from "react-router";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h2 className="text-2xl font-bold">TaskMaster</h2>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Manage your tasks efficiently with our intuitive platform. Stay
              productive, organized, and achieve your goals effortlessly.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:hello@taskmaster.com"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  to="/completed"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Completed
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-4 text-sm">
              Get productivity tips & updates delivered to your inbox
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <button className="w-full bg-white text-purple-600 px-4 py-2.5 rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>© {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
