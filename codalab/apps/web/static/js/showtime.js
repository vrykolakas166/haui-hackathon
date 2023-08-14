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

// Scroll event
$(window).on("scroll", function() {
    //// showtime
    // Challenge
    var challenge = document.getElementById("challeng-img");
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
        setTimeout(() => $("#milestone_1").addClass("showtime-element translate-y-[-75px] opacity-100"), $("#milestone_1").data("ind") * 300);
        setTimeout(() => $("#milestone_2").addClass("showtime-element translate-y-[90px] opacity-100"), $("#milestone_2").data("ind") * 300);
        setTimeout(() => $("#milestone_3").addClass("showtime-element translate-y-[-75px] opacity-100"), $("#milestone_3").data("ind") * 300);
        setTimeout(() => $("#milestone_4").addClass("showtime-element translate-y-[90px] opacity-100"), $("#milestone_4").data("ind") * 300);
        setTimeout(() => $("#milestone_5").addClass("showtime-element translate-y-[-75px] opacity-100"), $("#milestone_5").data("ind") * 300);
        setTimeout(() => $("#milestone_6").addClass("showtime-element translate-y-[90px] opacity-100"), $("#milestone_6").data("ind") * 300);
        setTimeout(() => $("#milestone_7").addClass("showtime-element translate-y-[-110px] opacity-100"), $("#milestone_7").data("ind") * 300);
    } else {
        $("#milestone_1").removeClass("translate-y-[-75px] opacity-100 showtime-element");
        $("#milestone_2").removeClass("translate-y-[90px] opacity-100 showtime-element"); 
        $("#milestone_3").removeClass("translate-y-[-75px] opacity-100 showtime-element");
        $("#milestone_4").removeClass("translate-y-[90px] opacity-100 showtime-element"); 
        $("#milestone_5").removeClass("translate-y-[-75px] opacity-100 showtime-element");
        $("#milestone_6").removeClass("translate-y-[90px] opacity-100 showtime-element");
        $("#milestone_7").removeClass("translate-y-[-110px] opacity-100 showtime-element");
    }

    // What others say
    var messages = document.getElementById("messages");
    windowHeight = window.innerHeight;
    elementTop = messages.getBoundingClientRect().top;
    elementVisible = 150;

    const text = "What others say about";
    const letterContainer = document.querySelector(".letter-container");
    if (elementTop < windowHeight - elementVisible) {
        for (const char of text) {
            const letterSpan = document.createElement("span");
            letterSpan.classList.add("animated_letter");
            letterSpan.textContent = char === " " ? "\u00A0" : char;
            letterContainer.appendChild(letterSpan);
        }
        objSpan = document.createElement("span");
        objSpan.classList.add("animated_letter sr-only sm:not-sr-only");
        objSpan.innerHTML = " HaUI Hackathon";
        letterContainer.appendChild(objSpan);
    } else {
        letterContainer.innerHTML = "";
    }
});