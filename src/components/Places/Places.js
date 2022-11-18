import Card from "../Card/Card";

function Places({ cards, userId, onCardClick, onDeleteButtonClick }) {
  return (
    <section className="places">
      <ul className="places__cards">
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            userId={userId}
            onCardClick={onCardClick}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default Places;