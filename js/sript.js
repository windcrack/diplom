window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let glazTab = document.querySelectorAll('.link-tab'),
      glBlock = document.querySelector('.glazing_slider'),
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

      glBlock.addEventListener('click', function (e) {
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
        });
});