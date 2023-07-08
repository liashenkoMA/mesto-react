export function Card(props) {

  const isOwn = props.card.owner._id === props.currentUser._id;
  const isLike = props.card.likes.some(i => i._id === props.currentUser._id);
  const cardLikeButtonClassName = (
    `element__button ${isLike && 'element__button_type_active'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  };

  function handleLikeClick() {
    props.onCardLike(props.card);
  };

  function handleDeleteCard() {
    props.onCardDelete(props.card);
  };

  return (
    <div className="element">
    {isOwn && <button type="button" onClick={handleDeleteCard} className="element__trash" aria-label="Удалить карточку"></button>}
    <img src={props.card.link} onClick={handleClick} alt={props.card.name} className="element__img" />
    <div className="element__info">
      <h2 className="element__title">{props.card.name}</h2>
      <div className="element__likes">
        <button type="button" className={cardLikeButtonClassName} aria-label="Мне нравится" onClick={handleLikeClick}></button>
        <span className="element__like">{props.card.likes.length}</span>
      </div>
    </div>
  </div>
  );
}