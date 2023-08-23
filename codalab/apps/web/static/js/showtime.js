////What do others say section
const insideElementsContainer = document.querySelector(".in-elements");
let messageTitle = "";

// Simulate fetching data from the server (you would replace this with your actual data)
const numberOfElements = 10; // Change this based on data
const names = [
  "Tô Minh Tiến",
  "Nguyễn Bảo Hiển",
  "Trần Huy Tuấn",
  "Hoàng Ngọc Thạch",
  "Danyl Barrack",
  "Nguyễn Xuân Hãn",
  "Liko Phomvihane",
  "Phạm Vương Việt",
  "Phan Việt An",
  "Keowynn Phaophanit",
]; // 10 fake names for data
const contents = [
  "The prospect of participating in this event ignited a rush of excitement within me, fueling my determination to unveil my talents and originality. Despite the jitters, the chance to challenge myself spurred me onward.",
  "As I readied myself to exhibit my abilities and imaginative thinking, an overwhelming sense of enthusiasm flooded my being. The tension was tangible, yet the chance to exceed my limits motivated me to persevere.",
  "This contest stirred up a profound sense of anticipation within me as I geared up to display my aptitudes and innovative spirit. The nervousness was undeniable, but the prospect of stretching my capabilities impelled me ahead.",
  "In the lead-up to showcasing my skills and ingenuity, a wave of excitement washed over me, propelling my determination to the forefront. Despite the unease, the opportunity to surpass my own boundaries acted as a driving force.",
  "The thought of presenting my abilities and creative flair in this competition ignited a surge of excitement, spurring my commitment to excel. Amidst the nervous energy, the chance to test my limits provided unwavering motivation.",
  "Preparing to demonstrate my skills and imaginative prowess in this competition filled me with a potent mix of enthusiasm and nervous energy. The allure of pushing my boundaries propelled me forward despite the apprehension.",
  "As the event approached, I found myself enveloped in anticipation, ready to exhibit my skills and innovative thinking. The jitters were real, yet the opportunity to expand my horizons served as an irresistible catalyst.",
  "The upcoming competition had me brimming with excitement, eager to showcase my skills and creative thinking. Though the nerves were palpable, the chance to exceed my own limitations drove me steadily onward.",
  "The impending contest sparked a deep-seated excitement within me as I readied myself to unveil my talents and imaginative ideas. The anxiety was present, but the prospect of pushing my boundaries was a potent motivator.",
  "This competition filled me with excitement as I prepared to showcase my skills and creativity. The nerves were palpable, but the opportunity to push my boundaries drove me forward.",
]; // 10 fake contents for data

const elements = [];

// Create and append the inelement elements
for (let i = 0; i < numberOfElements; i++) {
  var inelementString = `<div class="inelement flex items-start justify-center w-[90%] gap-4">
                                <img src="/static/img/icon_mini_avatar.png" alt="" width="100" class="rounded-lg shadow-md border">
                                <div>
                                    <div class="font-semibold text-[18px]">${names[i]}</div>
                                    <div class="text-[16px]">${contents[i]}</div>
                                </div>
                            </div>`;
  const inelementElement = document.createElement("div");
  inelementElement.innerHTML = inelementString;

  const inelement = inelementElement.querySelector(".inelement");
  insideElementsContainer.appendChild(inelement);
  elements.push(inelement);
}

let currentIndex = 0;
let delay = 0;
let timePerWordMilliseconds = 220; // avarage milisecond of a normal to read a single word

// Count words function of content to dynamicly adjust the delay
function countWords(str) {
  const wordCount = str.trim().split(/\s+/).length;
  return wordCount;
}

function focusNextElement() {
  // before index ++
  elements[currentIndex].classList.add("previous");
  elements[currentIndex].classList.remove("active");

  // index ++
  if (currentIndex > elements.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = elements.length - 1;
  }
  currentIndex = (currentIndex + 1) % elements.length;

  // after index ++
  elements[currentIndex].classList.remove("next");
  elements[currentIndex].classList.add("active");
  // dynamic delay
  delay = countWords(contents[currentIndex]) * timePerWordMilliseconds;

  // hidden and show top 3 elements
  elements.forEach((element, index) => {
    if (currentIndex + 1 > elements.length - 1) {
      if (index == currentIndex || index == currentIndex - 1 || index == 0) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    } else if (currentIndex == 0) {
      elements.forEach((element, index) => {
        if (index == 0 || index == 1 || index == elements.length - 1) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      });
    } else {
      elements.forEach((element, index) => {
        if (
          index == currentIndex ||
          index == currentIndex - 1 ||
          index == currentIndex + 1
        ) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      });
    }
  });

  if (currentIndex + 1 > elements.length - 1) {
    elements[0].classList.remove("previous");
    elements[0].classList.add("next");
  } else {
    elements[currentIndex + 1].classList.remove("previous");
    elements[currentIndex + 1].classList.add("next");
  }
}

// Initial setup
elements[currentIndex].classList.add("active");
elements[elements.length - 1].classList.add("previous");

elements[currentIndex + 1].classList.add("next");
elements.forEach((element, index) => {
  if (index == 0 || index == 1 || index == elements.length - 1) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
});
delay = countWords(contents[0]) * timePerWordMilliseconds;
setInterval(focusNextElement, delay);

// Scroll event
$(window).on("scroll", function () {
  //// showtime
  // Challenge
  var challenge = document.getElementById("challenge-img");
  var windowHeight = window.innerHeight;
  var elementTop = challenge.getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    // Challenges
    challenge.classList.add("showtime-1");
    $("#challenge-text-1").addClass("showtime-1_1");
    $("#challenge-text-2").addClass("showtime-1_2");
    $("#challenge-text-3").addClass("showtime-1_3");
  } else {
    challenge.classList.remove("showtime-1");
    $("#challenge-text-1").removeClass("showtime-1_1");
    $("#challenge-text-2").removeClass("showtime-1_2");
    $("#challenge-text-3").removeClass("showtime-1_3");
  }

  // Milestone
  var milestone = document.getElementById("milestone");
  windowHeight = window.innerHeight;
  elementTop = milestone.getBoundingClientRect().top;
  elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    setTimeout(
      () =>
        $("#milestone_1").addClass(
          "showtime-element translate-y-[-75px] opacity-100"
        ),
      $("#milestone_1").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_2").addClass(
          "showtime-element translate-y-[90px] opacity-100"
        ),
      $("#milestone_2").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_3").addClass(
          "showtime-element translate-y-[-75px] opacity-100"
        ),
      $("#milestone_3").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_4").addClass(
          "showtime-element translate-y-[90px] opacity-100"
        ),
      $("#milestone_4").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_5").addClass(
          "showtime-element translate-y-[-75px] opacity-100"
        ),
      $("#milestone_5").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_6").addClass(
          "showtime-element translate-y-[90px] opacity-100"
        ),
      $("#milestone_6").data("ind") * 300
    );
    setTimeout(
      () =>
        $("#milestone_7").addClass(
          "showtime-element translate-y-[-110px] opacity-100"
        ),
      $("#milestone_7").data("ind") * 300
    );
  } else {
    $("#milestone_1").removeClass(
      "translate-y-[-75px] opacity-100 showtime-element"
    );
    $("#milestone_2").removeClass(
      "translate-y-[90px] opacity-100 showtime-element"
    );
    $("#milestone_3").removeClass(
      "translate-y-[-75px] opacity-100 showtime-element"
    );
    $("#milestone_4").removeClass(
      "translate-y-[90px] opacity-100 showtime-element"
    );
    $("#milestone_5").removeClass(
      "translate-y-[-75px] opacity-100 showtime-element"
    );
    $("#milestone_6").removeClass(
      "translate-y-[90px] opacity-100 showtime-element"
    );
    $("#milestone_7").removeClass(
      "translate-y-[-110px] opacity-100 showtime-element"
    );
  }

  // What others say show same time with milestone
  const letterContainer = document.querySelector(".letter-container");
  if (elementTop < windowHeight - elementVisible) {
    if (messageTitle === "") {
      messageTitle = "What others say about";
      let i = 1;
      for (const char of messageTitle) {
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("animated_letter");
        letterSpan.style = `--i: ${i};`;
        letterSpan.textContent = char === " " ? "\u00A0" : char;
        letterContainer.appendChild(letterSpan);
        i++;
      }
      const objSpanPa = document.createElement("div");
      objSpanPa.innerHTML = `<span style="--i: ${i};" class="sitename sr-only sm:not-sr-only">\u00A0HaUI Hackathon</span>`;
      var objSpan = objSpanPa.firstChild;
      letterContainer.appendChild(objSpan);
    }
  } else {
    messageTitle = "";
    letterContainer.innerHTML = "";
  }
});
