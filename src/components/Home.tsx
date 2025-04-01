import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const staticText = "Hi, I'm "; // This part remains unchanged
  const dynamicText = "Lloyd."; // This part will be erased and retyped
  const [typedText, setTypedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayAfterTyping = 1000; // Delay before erasing
    const delayAfterErasing = 500; // Delay before retyping

    const interval = setTimeout(
      () => {
        if (!isErasing && index < dynamicText.length) {
          setTypedText((prev) => prev + dynamicText[index]);
          setIndex(index + 1);
        } else if (isErasing && index > 0) {
          setTypedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else if (index === dynamicText.length) {
          setTimeout(() => setIsErasing(true), delayAfterTyping);
        } else if (index === 0 && isErasing) {
          setTimeout(() => setIsErasing(false), delayAfterErasing);
        }
      },
      isErasing ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(interval);
  }, [index, isErasing]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinking speed

    return () => clearInterval(cursorBlink);
  }, []);

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-container container mt-5 p-5">
      <h1
        className="home-h1"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {staticText}
        {typedText}
        <span className="cursor">{showCursor ? "|" : ""}</span>
      </h1>
      <div
        className="content"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <h2 className="home-h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          temporibus.
        </h2>
        <p className="home-p" data-aos-delay="1000">
          Fugit culpa omnis perferendis vitae voluptatem quibusdam asperiores
          blanditiis a magni fuga ea velit nihil fugiat neque accusantium, aut
          qui.
        </p>
        <button className="start-btn" onClick={handleClick}>
          Let's Get Started <span className="arrow-icon">➜</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
