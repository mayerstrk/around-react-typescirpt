import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddCardPopup({ isOpen, isLoading, onClose, onSubmit }) {
  const newCard = {}
  const onNameChange = (e) => {
    newCard.name = e.target.value;
  }
  const onLinkChange = (e) => {
    newCard.link = e.target.value;
  }
  return (
    <PopupWithForm
      name="add-card"
      isOpen={isOpen}
      isLoading={isLoading}
      title="New place"
      onClose={onClose}
      onSubmit={(e) => onSubmit(e, newCard)}
      buttonText={isLoading ? "Saving..." : "Create"}
    >
      <div className="form__input-container">
        <input
          type="text"
          maxLength="30"
          id="input-cardName"
          name="name"
          placeholder="Name"
          className="form__input form__input_valid form__input_type_title"
          onChange={onNameChange}
          required
        />
        <span className="form__error form__error_type_title">.</span>
      </div>
      <div className="form__input-container">
        <input
          type="url"
          id="input-link"
          name="link"
          placeholder="Image URL"
          className="form__input form__input_valid form__input_type_url"
          onChange={onLinkChange}
          required
        />
        <span className="form__error form__error_type_url">.</span>
      </div>
    </PopupWithForm>
  );
}

export default AddCardPopup;
