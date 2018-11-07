export function calc() {
  let coldBox = document.querySelector(".cold"),
    hotBox = document.querySelector(".hoot"),
    body = document.querySelector('body'),
    form = document.querySelector(".form_calc"),
    modalNext = document.querySelector('.popup_calc_profile'),
    modalEnd = document.querySelector('.popup_calc_end'),
    modalCalc = document.querySelector('.popup_calc'),
    balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
    balconBig = document.querySelectorAll(".big_img > img"),
    formDataCalk = new FormData(),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Loading...",
      success: "Мы скоро с вами свяжемся!",
      failure: "Произошла ошибка"
    };

  balconIcons.forEach((icon, index) => {
    icon.addEventListener("click", event => {
      event.preventDefault();
      balconIcons.forEach(icon => {
        icon.style.width = "20%";
        icon.classList.remove("choosen");
      });
      balconBig.forEach(img => {
        img.style.display = "none";
      });
      event.target.style.width = "30%";
      event.target.classList.add("choosen");
      balconBig[index].style.display = "inline-block";
    });
  });
  body.addEventListener("click", (e) => {
    let width = document.querySelector("#width").value,
      height = document.querySelector("#height").value,
      type = document.querySelector(".choosen");
    let target = e.target;
    if (target.classList.contains('popup_calc_button')) {
      if (width == "" || height == "" || width == "0" || height == "0" || type == null) {
        alert("Введите высоту и ширину, выбирите форму балкона!");
      } else {
        formDataCalk.append("form", type.alt);
        formDataCalk.append("width", width);
        formDataCalk.append("height", height);
        modalNext.style.display = 'block';
        modalCalc.style.display = 'none';
      }
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
          formDataCalk.append("Вид", "Холодный");
        } else {
          formDataCalk.append("Вид", "Теплый");
        }
        formDataCalk.append("Тип", viewType);
        modalNext.style.display = 'none';
        modalEnd.style.display = 'block';
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
}