import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">HCI Design Task</h3>
              <p className="text-gray-400 mb-4">
                Create task to enhance Design thinking skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/design/DtsJttReYnqD6zZEymBLBF/Untitled?node-id=0-1&p=f&t=K1Fv69kLiOpnivhv-0" // Replace with the actual project link
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Succor</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, allowing students to choose a desired program they want.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/proto/hV2AFXr9V9IM6huJhyaBYA/Succor?node-id=908-2300&t=TKaOtBqpj0m9uTdj-0&scaling=min-zoom&content-scaling=fixed&page-id=274%3A13" // Replace with the actual project link
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
          >
            <h3 className="text-xl font-bold mb-2">Awesometodos</h3>
            <p className="text-gray-400 mb-4">
              A full stack web app todo task to practice my web development
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
               href="https://kaloysomee.onrender.com/?fbclid=IwY2xjawJbLI5leHRuA2FlbQIxMAABHY2QW3IdPRWWhq0puOq_vkJcrowSsZX_4tXYZ98ljEDtIc4Eq9Kh_CUUWg_aem__uIcmncV2qhhbZOMQBrPqA"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};