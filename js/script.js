//***OTVARANJE I ZATVARANJE KOSARICE***//
const basketButton = () => {
  let menu = document.querySelector(".project");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};

//***ZA DODATNE BODOVE***/
var up = 1;
var down = 3;

function show() {
  for (i = up; i <= down; i++) {
    document.getElementById("show" + i).style.display = "inline-flex";
  }
}

function buttonUp() {
  if (up <= 2 && down <= 5) {
    document.getElementById("show" + up).style.display = "none";
    up += 1;
    down += 1;

    for (i = up; i <= down; i++) {
      document.getElementById("show" + i).style.display = "inline-flex";
    }
  } else return;
}

function buttonDown() {
  if (up >= 2 && down >= 4) {
    document.getElementById("show" + down).style.display = "none";
    up -= 1;
    down -= 1;

    for (i = up; i <= down; i++) {
      document.getElementById("show" + i).style.display = "inline-flex";
    }
  } else return;
}

/***FUNKCIJA ZA ACTIVE***/
$("document").ready(function () {
  $(".line").click(function () {
    $(".line").removeClass("active");
    $(this).addClass("active");
  });
});
