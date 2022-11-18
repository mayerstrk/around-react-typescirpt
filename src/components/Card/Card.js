function Card({card, userId, onCardClick, onDeleteButtonClick}) {
  return (
    <li className="card">
      <div className="card__photo-container">
        <img
          src={card.link}
          alt="Place goes here"
          className="card__photo"
          onClick={() => onCardClick(card)}
        />
        <button
          type="button"
          className={`card__delete-button ${
            card.owner._id === userId ? "card__delete-button_visible" : ""
          }`}
          onClick={() => onDeleteButtonClick(card)}
        ></button>
      </div>
      <div className="card__bar">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__likesContainer">
          <button type="button" className="card__like-button"></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;