import PopupWithForm from "../PopupWithForm/PopupWithForm";

function DeleteCardPopup({isOpen, isLoading, onClose, onSubmit}) {
  return (
    <PopupWithForm name='delete-card' isOpen={isOpen} onClose={onClose} title='Are you sure?' onSubmit={onSubmit} buttonText={`${isLoading ? 'Saving...' : 'Yes'}`}/>
  )
}

export default DeleteCardPopup;