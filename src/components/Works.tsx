import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Work.css"; // Custom styles for layout

// Import images
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import TechCarousel, { techStack } from "./TechCarousel";

const Works = () => {
  const [selectedWork, setSelectedWork] = useState<{
    id: number;
    title: string;
    image: string;
    description: string;
    gallery: string[];
  } | null>(null);

  const works = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: project1,
      description:
        "This is an e-commerce platform with a seamless UI/UX experience.",
      gallery: [project2, project4, project3],
    },
    {
      id: 2,
      title: "Movie Searcher & Chat App",
      image: project2,
      description:
        "A web movie searcher and a real-time chat application using WebSockets and Node.js.",
      gallery: [project1, project3, project5],
    },
    {
      id: 3,
      title: "Project 3",
      image: project3,
      description:
        "A CMS system for content management with rich text editing.",
      gallery: [project1, project4, project6],
    },
    {
      id: 4,
      title: "Project 4",
      image: project4,
      description: "A portfolio website built using React and Bootstrap.",
      gallery: [project2, project3, project5],
    },
    {
      id: 5,
      title: "Web Design for a Company",
      image: project5,
      description:
        "A web design concept focused on minimalism for a corporate client.",
      gallery: [project1, project3, project6],
    },
    {
      id: 6,
      title: "SafeTrack",
      image: project6,
      description:
        "A mobile application built using Flutter for real-time tracking.",
      gallery: [project2, project4, project5],
    },
  ];

  return (
    <div className="container text-center py-5 mt-5">
      <br />
      <h1 className="mb-4">Most Recent Projects</h1>

      {/* Grid Layout */}
      <div className="row g-5">
        {works.map((work) => (
          <div key={work.id} className="col-12 col-sm-6 col-md-4">
            <div className="work-card" onClick={() => setSelectedWork(work)}>
              <img src={work.image} alt={work.title} className="img-fluid" />
              <div className="work-title">{work.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedWork && (
        <div className="modal show d-block modal-fullscreen" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{selectedWork.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedWork(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-grid">
                  {/* Main Image (Div 1) */}
                  <div className="main-image">
                    <img
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      className="img-fluid"
                    />
                  </div>
                  {/* Thumbnail 1 (Div 2) */}
                  <div className="thumb thumb-1">
                    <img
                      src={selectedWork.gallery[0]}
                      alt={`${selectedWork.title} thumbnail 1`}
                      className="img-fluid"
                    />
                  </div>
                  {/* Thumbnail 2 (Div 3) */}
                  <div className="thumb thumb-2">
                    <img
                      src={selectedWork.gallery[1]}
                      alt={`${selectedWork.title} thumbnail 2`}
                      className="img-fluid"
                    />
                  </div>
                  {/* Thumbnail 3 (Div 4) */}
                  <div className="thumb thumb-3">
                    <img
                      src={selectedWork.gallery[2]}
                      alt={`${selectedWork.title} thumbnail 3`}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <p>{selectedWork.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {selectedWork && <div className="modal-backdrop show"></div>}

      <br />
      <br />
      <TechCarousel techStack={techStack} />
    </div>
  );
};

export default Works;
