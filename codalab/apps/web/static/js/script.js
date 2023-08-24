var cont = 0;
var isSignIn = true;
var time_line_init_width = $("#time_line").width();

function sliderButton1() {
  $("#slider-1").addClass("translate-x-[50%]");
  $("#slider-1").removeClass("translate-x-[-100%]");
  $("#slider-2").addClass("translate-x-[100%]");
  $("#slider-2").removeClass("translate-x-[-50%]");
  $("#sButton2").addClass("bg-[rgba(255,255,255,0.29)]");
  $("#sButton2").removeClass("bg-[#9affff]");
  $("#sButton1").addClass("bg-[#9affff]");
  $("#sButton1").removeClass("bg-[rgba(255,255,255,0.29)]");
  cont = 0;
}
sliderButton1();
function sliderButton2() {
  $("#slider-1").removeClass("translate-x-[50%]");
  $("#slider-1").addClass("translate-x-[-100%]");
  $("#slider-2").removeClass("translate-x-[100%]");
  $("#slider-2").addClass("translate-x-[-50%]");
  $("#sButton1").addClass("bg-[rgba(255,255,255,0.29)]");
  $("#sButton1").removeClass("bg-[#9affff]");
  $("#sButton2").addClass("bg-[#9affff]");
  $("#sButton2").removeClass("bg-[rgba(255,255,255,0.29)]");
  cont = 1;
}

function sliderBack() {
  if (cont > 0) {
    sliderButton1();
    cont--;
  }
}

function sliderForward() {
  if (cont < 2) {
    sliderButton2()
    cont++;
  }
}

setInterval(() => {
  if(cont == 1){
    sliderButton2();
    cont = 2;
  }else{
    sliderButton1();
    cont = 1;
  }
}, 3333);

function setActive(e) {
  $(".custom-indicator").each(function () {
    $(this).removeClass("selected");
  });
  e.classList.add("selected");
}

function toggleSign() {
  var btn = $("#btnSign");
  var mes = $("#suggestion-sign");
  var overlay = $("#overlay");
  var scnSignIn = $("#screenSignIn");
  var scnSignUp = $("#screenSignUp");
  if (isSignIn) {
    btn.text("Sign In");
    mes.text("Already have an account?");
    overlay.removeClass("translate-x-[101%]");
    overlay.addClass("translate-x-[-1%]");
    overlay.css("box-shadow","10px 0px 15px -8px black");
    scnSignIn.removeClass("opacity-1");
    scnSignIn.addClass("opacity-0");
    scnSignUp.removeClass("opacity-0");
    scnSignUp.addClass("opacity-1");
  } else {
    btn.text("Sign Up");
    mes.text("Don’t have an account?");
    overlay.addClass("translate-x-[101%]");
    overlay.removeClass("translate-x-[-1%]");
    overlay.css("box-shadow","-10px 0px 15px -8px black");
    scnSignIn.addClass("opacity-1");
    scnSignIn.removeClass("opacity-0");
    scnSignUp.addClass("opacity-0");
    scnSignUp.removeClass("opacity-1");
  }
  isSignIn = !isSignIn;
}

var isDropped = false;

function toggleUserOptions(){
  var btnUp = $("#triangle-up");
  var btnDown = $("#triangle-down");
  var optList = $("#user-options");
  if(isDropped){
    btnUp.addClass("hidden");
    btnDown.removeClass("hidden");
    optList.addClass("hidden");
  }
  else{
    btnUp.removeClass("hidden");
    btnDown.addClass("hidden");
    optList.removeClass("hidden");
  }
  isDropped = !isDropped
}

function glowBorder(e){
  e.classList.add("gradient-border");
}

function glowBorderOff(e){
  e.classList.remove("gradient-border");
}

$(window).ready(function () {
  $("#sButton1").addClass("bg-[#9affff]");
});

$(window).resize(function(){
  if($('#time_locs').width() / time_line_init_width * 100 > 141){
    return;
  }
  var strPercent = $('#time_locs').width() / time_line_init_width * 100 + "%";
  $('#time_locs').css("scale", strPercent);
});

var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
// Scroll event
$(window).on("scroll", function() {
  if(window.scrollY < 234){
      $("#toTop").addClass("hidden");
  }
  else{
      $("#toTop").removeClass("hidden");
      if(window.scrollY >= limit - window.innerHeight - 80){ //estimate footer scrollY: 80px
          $("#toTop").removeClass("bg-gradient-to-r from-[#9affff] to-[#478eee]");
          $("#toTop").addClass("bg-[#111160]");
      }
      else{
          $("#toTop").addClass("bg-gradient-to-r from-[#9affff] to-[#478eee]");
          $("#toTop").removeClass("bg-[#111160]");
      }
  }
  // Control footer on scroll
  footerChecker();
});

// Go to top
$("#toTop").on("click", function () {
  // Html works for FFX but not Chrome
  // Body works for Chrome but not FFX
  // This strange selector seems to work universally
  $("html, body").animate({scrollTop: 0}, 500);
});


// Control footer init
function footerChecker(){
  var footer = document.querySelector("footer");
  var rect = document.querySelector("footer").getBoundingClientRect();
  if(!rect) return;
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if(!(rect.bottom < 0 || rect.top - viewHeight >= 0 - rect.height)){
    footer.style.position = "fixed";
    footer.style.bottom = "0px";
  }
  else{
    footer.style.position = "static";
  }
}
footerChecker();