window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // Window Tab
  let glazTab = document.querySelectorAll('.glazing_block'),
      glazLink = document.querySelectorAll('.link-tab'),
      body = document.querySelector('body'),
      modalHeader = document.querySelector('.popup_engineer'),
      modalCalc = document.querySelector('.popup_calc'),
      modalPhone = document.querySelector('.popup'),
      modalNext = document.querySelector('.popup_calc_profile'),
      glazContent = document.querySelectorAll('.glaz-content');
      function hideGlaz(h) {
        for(let i = h; i < glazContent.length; i++){
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
    if (target && target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block')) {
      console.log(target);
      for (let i = 0; i < glazTab.length; i++) {
        if (target == glazTab[i] || target.parentNode == glazTab[i]) {
          hideGlaz(0);
          showGlaz(i);
          // break;
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
    // Modal btn one
    if (e.target.classList.contains('header_btn')) {
      modalHeader.style.display = 'block';
    } else if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer') || e.target.matches('strong')) {
       modalHeader.style.display = 'none';
    }
    if (target.classList.contains('phone_link')) {
      modalPhone.style.display = 'block';
    } else if (target.classList.contains('popup_close') || target.classList.contains('popup') || e.target.matches('strong')) {
      modalPhone.style.display = 'none';
    }
    // Modal btn two
    if (target.classList.contains('glazing_price_btn')) {
      modalCalc.style.display = 'block';
    } else if (target.classList.contains('popup_calc_close') || target.classList.contains('popup_calc') || e.target.matches('strong')) {
      modalCalc.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_button')) {
      modalNext.style.display = 'block';
      modalCalc.style.display = 'none';
    } else if (target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_profile') || e.target.matches('strong')) {
      modalNext.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_profile_button')) {
      
    }
  }); 
  // img
   let minFoto = document.querySelectorAll(".foto-min"),
      foto = document.querySelector(".fotos"),
      maxFoto = document.createElement("div");
      maxFoto.classList.add("foto-max");
      foto.insertBefore(maxFoto, minFoto[0]);

   minFoto.forEach(function (foto, index) {
     foto.addEventListener("click", function (e) {
       e.preventDefault();
       maxFoto.innerHTML = `<img style="margin: auto;" src='./img/our_works/big_img/${index + 1}.png'>`;
       maxFoto.classList.remove("fadeout");
       maxFoto.classList.add("fadeIn");
       maxFoto.style.display = "flex";
     });
   });

   maxFoto.addEventListener("click", function (e) {
     if (e.target.classList.contains("foto-max")) {
       maxFoto.classList.remove("fadeIn");
       maxFoto.classList.add("fadeout");
       setTimeout(function () {
         maxFoto.innerHTML = "";
         maxFoto.style.display = "none";
       }, 180);
     } else if (e.target.matches("img")) {
       let fotos = parseInt(maxFoto.innerHTML.replace(/\D/g, "")),
          next = fotos + 1;
       if (next <= minFoto.length) {
         maxFoto.innerHTML = `<img style="margin: auto;" src='./img/our_works/big_img/${next}.png'>`;
       } else {
         maxFoto.innerHTML = `<img style="margin: auto;" src='./img/our_works/big_img/1.png'>`;
       }
     }
   });
  //  Timer
   let deadLine = '2019-06-4';

   let getTimeRem = endtime => {
     let t = Date.parse(deadLine) - Date.parse(new Date()),
       sec = Math.floor(t / 1000 % 60),
       min = Math.floor(t / 1000 / 60 % 60),
       hou = Math.floor((t / 1000 / 60 / 60) % 24),
       day = Math.floor(t / (1000 * 60 * 60 * 24));
       let arr = [hou, min, sec];
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] < 10) {
           arr[i]= "0" + arr[i];
         }
       }
     return {
       'total': t,
       'day': day,
       'hours': arr[0],
       'minutes': arr[1],
       'second': arr[2]
     };
   };

   let setClock = (id, endtime) => {
     let time = document.getElementById(id),
       days = time.querySelector('.days'),
       hours = time.querySelector('.hours'),
       minutes = time.querySelector('.minutes'),
       second = time.querySelector('.seconds');

     let updateClock = () => {
       let t = getTimeRem(endtime);
       days.textContent = t.day;
       hours.textContent = t.hours;
       minutes.textContent = t.minutes;
       second.textContent = t.second;
       if (t.total <= 0) {
         clearInterval(timeInterval);
         day.textContent = "00";
         hours.textContent = "00";
         minutes.textContent = "00";
         second.textContent = "00";
       }
     };
     let timeInterval = setInterval(updateClock, 1000);
   };

   setClock('timer', deadLine);

  //  Modal in 60 sec
   setTimeout(() => {
     modalPhone.style.display = 'block';
   }, 60000);
});