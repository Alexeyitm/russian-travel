let buttonRu = document.querySelector('.header__button-ru')
let buttonEn = document.querySelector('.header__button-en')

buttonRu.addEventListener('click', function () {
  buttonRu.classList.add('header__link_active')
  buttonEn.classList.remove('header__link_active')
});

buttonEn.addEventListener('click', function () {
  buttonEn.classList.add('header__link_active')
  buttonRu.classList.remove('header__link_active')
});