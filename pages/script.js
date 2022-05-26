import { buttonRu, buttonEn, title ,leadTitle, leadSubtitle, leadImage, leadCaption, introTitle, 
  introText, introSubtitles, placeTitles, placeLinks, placeImages, placeParagraphs, 
  coverTitle, coverSubtitle, footerLinks, footerCopy } from '../utils/constants.js'
import { ru, en } from '../utils/container.js'

const changeLanguage = (lang) => {
  title.textContent = lang.title;
  leadTitle.textContent = lang.leadTitle;
  leadSubtitle.textContent = lang.leadSubtitle;
  leadImage.src = lang.leadImage.src;
  leadImage.alt = lang.leadImage.alt;
  leadCaption.textContent = lang.leadCaption;
  introTitle.textContent = lang.introTitle;
  introText.textContent = lang.introText;
  introSubtitles.forEach((subtitle, i = 0) => {
    subtitle.textContent = lang.introSubtitles[i];
    i++;
  });
  placeTitles.forEach((title, i = 0) => {
    title.textContent = lang.placeTitles[i];
    i++;
  });
  placeLinks.forEach((link, i = 0) => {
    link.title = lang.placeTitles[i];
    i++;
  });
  placeImages.forEach((image, i = 0) => {
    image.alt = lang.placeTitles[i];
    i++;
  });
  placeParagraphs.forEach((paragraph, i = 0) => {
    paragraph.textContent = lang.placeParagraphs[i];
    i++;
  });
  coverTitle.textContent = lang.coverTitle;
  coverSubtitle.textContent = lang.coverSubtitle;
  footerLinks.forEach((link, i = 0) => {
    link.textContent = lang.footerLinks[i].text;
    link.title = lang.footerLinks[i].linkTitle;
    i++;
  });
  footerCopy.textContent = lang.footerCopy;
}

const activateButton = () => {
  buttonRu.classList.toggle('header__link_active');
  buttonEn.classList.toggle('header__link_active');
}


changeLanguage(ru);


buttonRu.addEventListener('click', function () {
  activateButton();
  changeLanguage(ru);
});

buttonEn.addEventListener('click', function () {
  activateButton();
  changeLanguage(en);
});