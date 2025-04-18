import "../styles/About.css";
import ConnectWithMe from "./Connect";
import { techStack } from "./TechCarousel";

const groupedTechStack = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Flutter"],
  Backend: ["Node.js", "Python", "PHP", "Flask", "Laravel", "Java"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  "Cloud & DevOps": ["AWS", "Google Cloud"],
  "UI/UX": ["Figma", "Framer"],
  "Data Visualization": ["Chart.js"],
};

const About = () => {
  return (
    <div className="container text-center p-5">
      <br />
      <h1 className="text-3xl font-bold mt-5">About Me</h1>
      <h1 className="text-center">Hi 👋, I'm Lloyd Ryan Largo</h1>
      <h3 className="text-center">
        A passionate Web Developer from the Philippines
      </h3>

      <h3 className="text-left mt-4">Languages and Tools:</h3>
      <div className="tech-grid">
        {Object.entries(groupedTechStack).map(
          ([category, techNames], index) => {
            let delay;

            // Set specific delays based on index
            switch (index) {
              case 0:
                delay = 100;
                break;
              case 1:
                delay = 250;
                break;
              case 2:
                delay = 450;
                break;
              case 3:
                delay = 100;
                break;
              case 4:
                delay = 250;
                break;
              case 5:
                delay = 450;
                break;
              default:
                delay = index * 200; // Default delay for other cards
            }

            return (
              <div
                key={category}
                className="tech-card"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay={window.innerWidth > 768 ? delay : 0} // Apply only on larger screens
              >
                <h4 className="tech-category">{category}</h4>
                <div className="tech-icons">
                  {techStack
                    .filter((tech) => techNames.includes(tech.name))
                    .map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.src}
                        alt={tech.name}
                        className="tech-icon"
                      />
                    ))}
                </div>
              </div>
            );
          }
        )}
      </div>

      <br />
      <br />
      <ConnectWithMe />
    </div>
  );
};

export default About;
