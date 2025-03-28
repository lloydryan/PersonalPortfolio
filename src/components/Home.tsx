import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-container container mt-5 p-5">
      <h1 className="home-h1">Lloyd Ryan Largo</h1>
      <h2 className="home-h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        temporibus.
      </h2>
      <p className="home-p">
        Fugit culpa omnis perferendis vitae voluptatem quibusdam asperiores
        blanditiis a magni fuga ea velit nihil fugiat neque accusantium, aut
        qui.
      </p>
      <button className="start-btn" onClick={handleClick}>
        Let's Get Started <span className="arrow-icon">➜</span>
      </button>
    </div>
  );
};

export default Home;
