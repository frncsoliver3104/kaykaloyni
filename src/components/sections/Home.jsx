import { RevealOnScroll } from "../RevealOnScroll";
import image from "./khyle.png"; // Adjust the path as needed
import "./photo.css";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
<img
            src={image} // Use the imported image here
            alt="A visual representation of my web development skills" // Provide a more descriptive alt text
            className="rounded-lg" // Add margin-bottom for spacing
          />
      <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Khyle Alexander Pabalinas
          </h1>
              

        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mb-8">
            I am a web developer with a passion for creating beautiful and functional web applications.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>

          </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};