function Popup({name, isOpen, onClose, children, componentSpecificClass}) {
    return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? "popup_visible" : ""
      }`}
    >
      <div className={`popup__window popup__window_type_${name} ${componentSpecificClass ? componentSpecificClass : ''}`}>
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
