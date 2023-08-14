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
});