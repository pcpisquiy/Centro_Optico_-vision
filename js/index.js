$(document).ready(function () {
  console.log("jquery is working");
  $("#Catalogo").carousel({
    pause: true,
    interval: false,
  });
  miFuncionAjax();
  AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
  });

  $(".btn_pages").mousedown(function () {
    var sonido = new Audio();
    sonido.src = "next-pages.mp3";
    sonido.play();
  });

  function miFuncionAjax() {
    $.ajax("./php/Count_catalogo.php", {
      success: function (data) {
        let limite = data;
        let template = ``;
        for (let x = 1; x <= limite; x++) {
          console.log(x);
          if (x >= 2 && x <= 9) {
            template += `
          <div class="carousel-item ">
          <img
            src="./img/Catalogo/CATALOGO_00${x}.png"
            class="d-block img_catalogo"
            alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <label class="text-black bg-primary">${x} de ${limite}</label>
          </div>
        </div>`;
          } else if (x >= 10) {
            template += `
          <div class="carousel-item ">
          <img
            src="./img/Catalogo/CATALOGO_0${x}.png"
            class="d-block img_catalogo"
            alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <label class="text-black bg-primary">${x} de ${limite}</label>
      </div>
        </div>`;
          } else {
            template += `
          <div class="carousel-item active">
          <img
            src="./img/Catalogo/CATALOGO_00${x}.png"
            class="d-block img_catalogo"
            alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <label class="text-black bg-primary">${x} de ${limite}</label>
          </div>
        </div>`;
          }
        }
        $("#elementos_carrousel").html(template);
      },
      error: function () {
        alert("There was some error performing the AJAX call!");
      },
    });
  }
});
$(window).scroll(function () {
  if ($("#menu").offset().top > 56) {
    $("#menu").addClass("color_nav_scroll");
  } else {
    $("#menu").removeClass("color_nav_scroll");
  }
});
