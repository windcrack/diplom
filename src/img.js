export const img = () => {
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
}