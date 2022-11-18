import Popup from "../Popup/Popup";

function ImagePopup({name, isOpen, selectedCard, onClose}) {
  return (
    <Popup name={'image'} isOpen={isOpen} onClose={onClose} componentSpecificClass={'image-popup'}>
      <div className="image-popup__image-container">
        <img className="image-popup__image" src={selectedCard ? selectedCard.link : ''} />
      </div>
      <h2 className="image-popup__image-title">{selectedCard ? selectedCard.name: ''}</h2>
    </Popup>
  );
}

export default ImagePopup;