import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer} from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  
  return (
    <div className="root">
      <div className="page">
        
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups}>
          <label className="popup__form-field">
            <input type="text" placeholder="Введите имя" id="name" className="popup__input popup__input_type_title"
              name="myName" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="text" placeholder="Расскажите о себе" id="about"
              className="popup__input popup__input_type_description" name="myDescription" required minLength="2"
              maxLength="200" />
            <span className="popup__input-error about-error"></span>
          </label>
          <button type="submit" className="popup__button" aria-label="Сохранить изменения">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="add-element" title="Новое место" isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups}>
          <label className="popup__form-field">
            <input type="text" placeholder="Название" id="input-place-name"
              className="popup__input popup__input_type_place-name" name="placeName" required minLength="2" maxLength="30" />
            <span className="popup__input-error input-place-name-error"></span>
          </label>
          <label className="popup__form-field">
            <input type="url" placeholder="Ссылка на картинку" id="input-image-link"
              className="popup__input popup__input_type_image-link" name="placeImg" required />
            <span className="popup__input-error input-image-link-error"></span>
          </label>
          <button type="submit" className="popup__button" aria-label="Сохранить карточку">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups}>
          <label className="popup__form-field">
            <input type="url" placeholder="Ссылка на аватарку" id="input-avatar-link"
              className="popup__input popup__input_type_avatar-link" name="avatarLink" required />
            <span className="popup__input-error input-avatar-link-error"></span>
          </label>
          <button type="submit" className="popup__button" aria-label="Сохранить аватарку">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="delete-element" title="Вы уверены?">
          <button type="submit" className="popup__button-delete" aria-label="Удалить карточку">Да</button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </div>
  );
}

export default App;
