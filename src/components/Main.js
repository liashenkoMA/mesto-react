import React from "react";
import { api } from "../utils/Api.js";
import { Card } from "./Card.js";

export function Main(props) {

  const [userName, setName] = React.useState();
  const [userDescription, setDescription] = React.useState();
  const [userAvatar, setAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((res) => {
      setName(res[0].name);
      setDescription(res[0].about);
      setAvatar(res[0].avatar);
      setCards(res[1]);
    })
    .catch((err) => {
      console.log(err)
    });
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__content">
          <div className="profile__icon">
            <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
            <button type="button" onClick={props.onEditAvatar} className="profile__edit-avatar-button" aria-label="Редактировать аватар"></button>
          </div>
          <div className="profile__info">
            <div className="profile__person">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" onClick={props.onEditProfile} className="profile__edit-button" aria-label="Редактировать профиль"></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" onClick={props.onAddPlace} className="profile__button" aria-label="Добавить изображение"></button>
      </section>

      <section className="elements" aria-label="Фотографии пользователя">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>

    </main>
  )
}