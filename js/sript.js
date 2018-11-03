window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // Window Tab
  let glazTab = document.querySelectorAll('.link-tab'),
      glBlock = document.querySelector('.glazing_slider'),
      body = document.querySelector('body'),
      glazContent = document.querySelectorAll('.glaz-content');
      function hideGlaz(h) {
        for(let i = h; i < glazContent.length; i++){
          glazContent[i].classList.remove('show');
          glazContent[i].classList.add('hide');
          glazTab[i].classList.remove('active');
        }
      }
      hideGlaz(1);

      function showGlaz(s) {
        if (glazContent[s].classList.contains('hide')) {
          glazContent[s].classList.remove('hide');
          glazContent[s].classList.add('show');
          glazTab[s].classList.add('active');
        }
      }
    // Decoration Tab
    let decTab = document.querySelectorAll('.dec-tab'),
        noClick = document.querySelectorAll('.no_click'),
        decorContent = document.querySelectorAll('.decor-content');
      function hideDecor(h) {
        for (let i = h; i < decorContent.length; i++) {
          decorContent[i].classList.remove('show');
          decorContent[i].classList.add('hide');
          noClick[i].classList.remove('after_click');
        }
      }
      hideDecor(1);

      function showDecor(s) {
        if (decorContent[s].classList.contains('hide')) {
          decorContent[s].classList.remove('hide');
          decorContent[s].classList.add('show');
          noClick[s].classList.add('after_click');
        }
      }
  body.addEventListener('click', function (e) {
    let target = e.target;
    if (target && target.classList.contains('link-tab')) {
      for (let i = 0; i < glazTab.length; i++) {
        if (target == glazTab[i]) {
          hideGlaz(0);
          showGlaz(i);
          break;
        }
      }
    }
    if (target && target.classList.contains('dec-tab')) {
      for (let i = 0; i < decTab.length; i++) {
        if (target == decTab[i]) {
          hideDecor(0);
          showDecor(i);
          break;
        }
      }
    }
    console.log(target);
  });
});