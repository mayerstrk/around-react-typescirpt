import { useState } from "react";
import Popup from "../Popup/Popup";

function ErrorPopup({isOpen, onClose, errorMessage}) {
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false)

  const onSeeDetailsClick = () => {
    setIsErrorMessageVisible(!isErrorMessageVisible)
  }

  return (
    <div className={`popup_type_error ${isOpen ? "popup_visible" : ""} error`}>
      <p className="error__text">
        <span className='error__see-more' onClick={onSeeDetailsClick}>{isErrorMessageVisible ? "See Less " : "An error occured (click to see details)"}</span>
        <span
          className={
            isErrorMessageVisible
              ? "error__message_visible"
              : "error__message_hidden"
          }
        >{errorMessage}</span>
      </p>
      <button
        type="button"
        className="error__close-button"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default ErrorPopup;
