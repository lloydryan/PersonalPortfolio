import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Achievements.css"; // Import the CSS file

import certificate1 from "../assets/images/cert/image (1).png";
import certificate2 from "../assets/images/cert/image (2).png";
import certificate3 from "../assets/images/cert/image (3).png";
import certificate4 from "../assets/images/cert/image (4).png";
import certificate5 from "../assets/images/cert/image (5).png";

const achievementsData = [
  {
    title: "Cybersecurity",
    provider: "Information Technology Specialist",
    date: "December 18, 2024",
    image: certificate1,
  },
  {
    title: "Network Security",
    provider: "Information Technology Specialist",
    date: "July 15, 2024",
    image: certificate2,
  },
  {
    title: "Networking",
    provider: "Information Technology Specialist",
    date: "October 7, 2023",
    image: certificate3,
  },
  {
    title: "HTML and CSS",
    provider: "Information Technology Specialist",
    date: "May 19, 2023",
    image: certificate4,
  },
  {
    title: "Databases",
    provider: "Information Technology Specialist",
    date: "March 15, 2023",
    image: certificate5,
  },
];

const Achievements = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS

    // Update screen size on resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto text-center p-5 mt-5">
      <h1 className="text-4xl font-bold text-teal-800 mt-3 mb-5">
        Achievements & Certifications
      </h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-6">
        {achievementsData.map((achievement, index) => {
          let delay;

          // Custom delay for larger screens
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
            default:
              delay = index * 200;
          }

          return (
            <div
              key={index}
              className="col"
              data-aos={isSmallScreen ? "fade-left" : "fade-up"}
              data-aos-delay={isSmallScreen ? 0 : delay} // No delay on small screens
            >
              <div className="card achievement-card">
                {/* Image Section */}
                <div className="position-relative">
                  <img
                    src={achievement.image}
                    className="card-img-top achievement-img"
                    alt={achievement.title}
                  />
                </div>

                {/* Divider */}
                <div className="achievement-divider"></div>

                {/* Text Section */}
                <div className="card-body achievement-text">
                  <h5 className="achievement-title">{achievement.title}</h5>
                  <p className="achievement-provider">
                    <strong>{achievement.provider}</strong>
                  </p>
                  <p className="achievement-date">{achievement.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
