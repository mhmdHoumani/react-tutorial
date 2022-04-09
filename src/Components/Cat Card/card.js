import "./card.css";
// import img from "../../../public/Images/Cats/"

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`../../../public/Images/Cats/${props.card.img}`}
        className="cat-img"
        alt="cats"
      />
      <h3>{props.card.name}</h3>
      <br />
      <p>{props.card.phone}</p>
      <p>{props.card.email}</p>
    </div>
  );
};

export default Card;
