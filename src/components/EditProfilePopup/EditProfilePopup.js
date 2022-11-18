import PopupWithForm from '../PopupWithForm/PopupWithForm'

function EditProfilePopup({isOpen, isLoading, onClose, onSubmit}) {
  const inputValues = {}

  const onNameChange = (e) => {
    inputValues.name = e.target.value
  }

  const onAboutChange = (e) => {
    inputValues.about = e.target.value
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit-profile"
      buttonText={`${isLoading ? "Saving..." : "Save"}`}
      isOpen={isOpen}
      onClose={onClose}
    onSubmit={(e) => onSubmit(e, inputValues)}
    >
      <fieldset className="form__fieldset">
        <div className="form__input-container">
          <input
            type="text"
            id="input-name"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Name"
            className="form__input form__input_valid form__input_type_name"
            onChange={onNameChange}
            required
          />
          <span className="form__error form__error_type_name">.</span>
        </div>
        <div className="form__input-container">
          <input
            type="text"
            id="input-profileAbout"
            name="about"
            minLength="2"
            maxLength="200"
            placeholder="About you"
            className="form__input form__input_valid form__input_type_about"
            onChange={onAboutChange}
            required
          />
          <span className="form__error form__error_type_about">.</span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;