import Popup from "../Popup/Popup";

function PopupWithForm({name, isOpen, onClose, title, onSubmit, children, buttonText}) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <h3 className={`popup__title popup__title_type_${name}`}>{title}</h3>
      <form
        className={`form form_type_${name}`}
        name={name}
        onSubmit={onSubmit}
      >
        {children}
        <button type="submit" className="form__button">
          {buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
