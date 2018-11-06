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
      modalEnd = document.querySelector('.popup_calc_end'),
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
    let decTab = document.querySelectorAll('.decoration_item'),
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
      // картинки в калькуляторе
      let typeRef = document.querySelectorAll('.type-ref'),
          imgContent = document.querySelectorAll('.img-content');
      function hideImg(h) {
        for(let i = h; i < imgContent.length; i++){
          imgContent[i].classList.remove('show');
          imgContent[i].classList.add('hide');
          typeRef[i].classList.remove('activ');
        }
      }
      hideImg(1);
      function showImg(s) {
        if (imgContent[s].classList.contains('hide')) {
          imgContent[s].classList.remove('hide');
          imgContent[s].classList.add('show');
          typeRef[s].classList.add('activ');
        }
      }
  body.addEventListener('click', function (e) {
    let target = e.target;
    if (target && target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block')) {
      for (let i = 0; i < glazTab.length; i++) {
        if (target == glazTab[i] || target.parentNode == glazTab[i]) {
          hideGlaz(0);
          showGlaz(i);
          break;
        }
      }
    }
    if (target && target.classList.contains('decoration_item') || target.parentNode.classList.contains('decoration_item')) {
      for (let i = 0; i < decTab.length; i++) {
        if (target == decTab[i] || target.parentNode == decTab[i]) {
          hideDecor(0);
          showDecor(i);
          break;
        }
      }
    }
    if (target && target.classList.contains('type-ref')) {
      for (let i = 0; i < typeRef.length; i++) {
        if (target == typeRef[i] || target.parentNode == typeRef[i]) {
          hideImg(0);
          showImg(i);
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
      modalPhone.style.display = 'block';
    } else if (target.classList.contains('popup_close') || target.classList.contains('popup')) {
      modalPhone.style.display = 'none';
    }
    if (target.classList.contains('glazing_price_btn')) {
      modalCalc.style.display = 'block';
    } else if (target.classList.contains('popup_calc_close') || target.classList.contains('popup_calc')) {
      modalCalc.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_button')) {
      modalNext.style.display = 'block';
      modalCalc.style.display = 'none';
    } else if (target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_profile')) {
      modalNext.style.display = 'none';
    }
    if (target.classList.contains('popup_calc_profile_button')) {
      modalNext.style.display = 'none';
      modalEnd.style.display = 'block';
    } else if (target.classList.contains('popup_calc_end_close') || target.classList.contains('popup_calc_end')) {
      modalEnd.style.display = 'none';
    }
  });
  // calc
  let coldBox = document.querySelector(".cold"),
    hotBox = document.querySelector(".hoot"),
    form = document.querySelector(".form_calc"),
    formDataCalk = new FormData(),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Loading...",
      success: "Мы скоро с вами свяжемся!",
      failure: "Произошла ошибка"
    };

  body.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains('popup_calc_button')) {
      let width = document.querySelector("#width").value,
        height = document.querySelector("#height").value;
      formDataCalk.append("width", width);
      formDataCalk.append("height", height);
    }
  });

  coldBox.addEventListener("click", () => {
    hotBox.checked = false;
  });

  hotBox.addEventListener("click", () => {
    coldBox.checked = false;
  });

  body.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains('popup_calc_profile_button')) {
      let viewType = document.querySelector("#view_type").value;
      if (!hotBox.checked && !coldBox.checked) {
        alert("Выберите тип профиля для рассчета.");
      } else {
        if (coldBox.checked) {
          formDataCalk.append("profile_type", "cold");
        } else {
          formDataCalk.append("profile_type", "hoot");
        }
        formDataCalk.append("view_type", viewType);
      }
    } 
  });

  function clearInputs() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
      input.value = "";
    });
    formDataCalk = new FormData();
    setTimeout(function () {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.querySelector("#calc_user_name").value,
        phone = document.querySelector("#calc_phone").value;

    formDataCalk.append("name", name);
    formDataCalk.append("phone", phone);

    form.appendChild(statusMessage);

    function postData(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              resolve();
            }
          } else {
            reject();
          }
        };
        request.send(data);
      });
    }
    postData(formDataCalk)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInputs);
  });
  // Validator
   body.addEventListener('input', (e) => {
     let target = e.target;
      if (target.classList.contains('val')) {
        target.value = target.value.replace(/[^0-9]/g, '');
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
  //  Sed form
    let sendRequest = function (target) {

      let message = {
          loading: "Загрузка....",
          success: "Спасибо! Скоро мы с вами свяжемся!",
          failure: "Что-то пошло не так..."
        },
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        target.appendChild(statusMessage);
      let formData = new FormData(target),
        obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);

      function postData(json) {

        return new Promise(function (resolve, reject) {

          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status === 200) {
              resolve();
            } else {
              reject();
            }
          };
          request.send(json);
        });
      }

      function clearInput() {
        let input = target.getElementsByTagName('input');
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
        setTimeout(() => {
          statusMessage.innerHTML = "";
        }, 10000);
      }
      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    };
    body.addEventListener('submit', e => {
      e.preventDefault();
      let target = e.target;

      if (target.classList.contains('form')) {
        sendRequest(target);
      }
    });
});