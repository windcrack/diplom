export function tabs(){

  'use strict';
  // Window Tab
  let glazTab = document.querySelectorAll('.glazing_block'),
    glazLink = document.querySelectorAll('.link-tab'),
    body = document.querySelector('body'),
    modalHeader = document.querySelector('.popup_engineer'),
    modalCalc = document.querySelector('.popup_calc'),
    modalPhone = document.querySelector('.popup'),
    modalNext = document.querySelector('.popup_calc_profile'),
    modalEnd = document.querySelector('.popup_calc_end'),
    glazContent = document.querySelectorAll('.glaz-content');

  function hideGlaz(h) {
    for (let i = h; i < glazContent.length; i++) {
      glazContent[i].classList.remove('show');
      glazContent[i].classList.add('hide');
      glazLink[i].classList.remove('active');
    }
  }
  hideGlaz(1);

  function showGlaz(s) {
    if (glazContent[s].classList.contains('hide')) {
      glazContent[s].classList.remove('hide');
      glazContent[s].classList.add('show');
      glazLink[s].classList.add('active');
    }
  }
  // Decoration Tab
  let decTab = document.querySelectorAll('.no_click'),
    decorContent = document.querySelectorAll('.decor-content');

  function hideDecor(h) {
    for (let i = h; i < decorContent.length; i++) {
      decorContent[i].classList.remove('show');
      decorContent[i].classList.add('hide');
      decTab[i].classList.remove('after_click');
    }
  }
  hideDecor(1);

  function showDecor(s) {
    if (decorContent[s].classList.contains('hide')) {
      decorContent[s].classList.remove('hide');
      decorContent[s].classList.add('show');
      decTab[s].classList.add('after_click');
    }
  }
  body.addEventListener('click', function (e) {

    let target = e.target;
    if (target && target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block')) {
      for (let i = 0; i < glazTab.length; i++) {
        if (target == glazTab[i] || target.parentNode == glazTab[i]) {
          hideGlaz(0);
          showGlaz(i);
          // break;
        }
      }
    }
    if (target && target.classList.contains('no_click') || target.parentNode.classList.contains('no_click')) {

      for (let i = 0; i < decTab.length; i++) {
        if (target == decTab[i] || target.parentNode == decTab[i]) {
          hideDecor(0);
          showDecor(i);
          break;
        }
      }
    }
    // Modal btn  
    if (e.target.classList.contains('header_btn')) {
      modalHeader.style.display = 'block';
    } else if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer')) {
      modalHeader.style.display = 'none';
    }
    if (target.classList.contains('phone_link')) {
      e.preventDefault();
      modalPhone.style.display = 'block';
    } else if (target.classList.contains('popup_close') || target.classList.contains('popup')) {
      modalPhone.style.display = 'none';
    }
    if (target.classList.contains('glazing_price_btn')) {
      modalCalc.style.display = 'block';
    } else if (target.classList.contains('popup_calc_close') || target.classList.contains('popup_calc')) {
      modalCalc.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_profile')) {
      modalNext.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_end_close') || target.classList.contains('popup_calc_end')) {
      modalEnd.style.display = 'none';
    }
  });
  setTimeout(() => {
    modalPhone.style.display = 'block';
  }, 60000);
}