import "./card.css";
import catImg1 from "../../Images/Cat Images/cat-image-1.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={catImg1} className="cat-img" alt="cat 1" />
      <h3>Mr.Whiskerson</h3>
      <br />
      <p>(212) 555-1234</p>
      <p>mr.whiskaz@catnap.meow</p>
    </div>
  );
};

export default Card;
