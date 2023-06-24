export function PopupWithForm(props) {
  return (
      <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`${props.name}`} noValidate>
            {props.children}
          </form>
          <button type="button" onClick={props.onClose} className="popup__button-close" aria-label="Закрыть окно"></button>
        </div>
      </div>
  )
}