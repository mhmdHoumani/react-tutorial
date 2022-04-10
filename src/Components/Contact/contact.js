import React from "react";
import "./contact.css";
import profile from "../../Images/Cats/cat-image-1.jpg";
import Star from "../Star/star";

const Contact = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+961 81 789 581",
    email: "john.doe@gmail.com",
    isFavorite: false,
  });

  const toggleFav = () => {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
    console.log(contact.isFavorite);
  };

  return (
    <section className="contact--card">
      <img src={profile} className="card--image" alt="profile" />
      <div className="card--info">
        <Star isFilled={contact.isFavorite} toggleClick={toggleFav} />
        <h2 className="card--name">
          {contact.firstName} {contact.lastName}
        </h2>
        <p className="card--contact">{contact.phone}</p>
        <p className="card--contact">{contact.email}</p>
      </div>
    </section>
  );
};

export default Contact;
