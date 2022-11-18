import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup({ isOpen, isLoading, onClose, onSubmit}) {
  let avatarUrl = "";
  const onProfileUrlChange = (e) => {
    avatarUrl = e.target.value;
  };
  return (
    <PopupWithForm
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(e) => onSubmit(e, avatarUrl)}
      title="Change profile picture"
      buttonText={`${isLoading ? "Saving..." : "Save"}`}
    >
      <div className="form__input-container">
        <input
          type="url"
          id="input-profileUrl"
          name="link"
          placeholder="Image URL"
          className="form__input form__input_valid form__input_type_url"
          onChange={onProfileUrlChange}
          required
        />
        <span className="form__error form__error_type_url">.</span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
