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


////What do others say section
const insideElementsContainer = document.querySelector('.in-elements');

// Simulate fetching data from the server (you would replace this with your actual data)
const numberOfElements = 10; // Change this based on data
const elements = [];
// Change content here or bring in loop based on data
const content = "This competition filled me with excitement as I prepared to showcase my skills and creativity. The nerves were palpable, but the opportunity to push my boundaries drove me forward.";

// Create and append the inelement elements
for (let i = 0; i < numberOfElements; i++) {
    var inelementString = `<div class="inelement flex items-start justify-center w-[90%] gap-4">
                                <img src="https://picsum.photos/id/17/800/800" alt="" width="100" class="rounded-lg shadow-md">
                                <div>
                                    <div class="font-semibold text-[18px]">Name ${i}</div>
                                    <div class="text-[16px]">${content}</div>
                                </div>
                            </div>`
    const inelementElement  = document.createElement('div');
    inelementElement .innerHTML = inelementString;

    const inelement = inelementElement.querySelector('.inelement');
    insideElementsContainer.appendChild(inelement);
    elements.push(inelement);
}

let currentIndex = 0;
let delay = 0;
let timePerWordMilliseconds  = 220; // avarage milisecond of a normal to read a single word

// Count words function of content to dynamicly adjust the delay
function countWords(str) {
    const wordCount = str.trim().split(/\s+/).length;
    return wordCount;
}

function focusNextElement() {

    // before index ++
    elements[currentIndex].classList.add('previous');
    elements[currentIndex].classList.remove('active');

    // index ++
    if(currentIndex > elements.length - 1){
        currentIndex = 0;
    }
    if(currentIndex < 0){
        currentIndex = elements.length - 1;
    }
    currentIndex = (currentIndex + 1) % elements.length;

    // after index ++
    elements[currentIndex].classList.remove('next');
    elements[currentIndex].classList.add('active');

    // hidden and show top 3 elements
    elements.forEach((element, index) => {
        if(currentIndex + 1 > elements.length - 1){
            if(index == currentIndex || index == currentIndex - 1 || index == 0 ){
                element.classList.remove('hidden');
            }
            else{
                element.classList.add('hidden');
            }
        }
        else if(currentIndex == 0){
            elements.forEach((element, index) => {
                if(index == 0 || index == 1 || index == elements.length-1 ){
                    element.classList.remove('hidden');
                }
                else{
                    element.classList.add('hidden');
                }
            });
        }
        else{
            elements.forEach((element, index) => {
                if(index == currentIndex || index == currentIndex - 1 || index == currentIndex + 1 ){
                    element.classList.remove('hidden');
                }
                else{
                    element.classList.add('hidden');
                }
            });
        }
    });
    
    if(currentIndex + 1 > elements.length - 1){
        elements[0].classList.remove('previous');
        elements[0].classList.add('next');
    }
    else{
        elements[currentIndex + 1].classList.remove('previous');
        elements[currentIndex + 1].classList.add('next');
    }
}

// Initial setup
elements[currentIndex].classList.add('active');
elements[elements.length - 1].classList.add('previous');

elements[currentIndex + 1].classList.add('next');
elements.forEach((element, index) => {
    if(index == 0 || index == 1 || index == elements.length-1 ){
        element.classList.remove('hidden');
    }
    else{
        element.classList.add('hidden');
    }
});
delay = countWords(content) * timePerWordMilliseconds;
setInterval(focusNextElement, delay);

var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
// scroll event
$(window).on("scroll", function() {
  if(window.scrollY < 234){
    if(!$("#toTop").hasClass("hidden")){
      $("#toTop").addClass("hidden");
    }
  }
  else{
    if($("#toTop").hasClass("hidden")){
      $("#toTop").removeClass("hidden");
    }
    if(window.scrollY >= limit - window.innerHeight - 130){
      if($("#toTop").hasClass("bg-gradient-to-r from-[#9affff] to-[#478eee]")){
        $("#toTop").removeClass("bg-gradient-to-r from-[#9affff] to-[#478eee]");
      }
      if(!$("#toTop").hasClass("bg-[#111160]")){
        $("#toTop").addClass("bg-[#111160]");
      }
    }
    else{
      if(!$("#toTop").hasClass("bg-gradient-to-r from-[#9affff] to-[#478eee]")){
        $("#toTop").addClass("bg-gradient-to-r from-[#9affff] to-[#478eee]");
      }
      if($("#toTop").hasClass("bg-[#111160]")){
        $("#toTop").removeClass("bg-[#111160]");
      }
    }
  }
  
});

// go to top
$("#toTop").on("click", function () {
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate({scrollTop: 0}, 500);
});