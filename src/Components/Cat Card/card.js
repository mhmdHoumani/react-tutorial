import "./card.css";
// import img from "../../../public/Images/Cats/"

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`../../../public/Images/Cats/${props.img}`}
        className="cat-img"
        alt="cats"
      />
      <h3>{props.name}</h3>
      <br />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
