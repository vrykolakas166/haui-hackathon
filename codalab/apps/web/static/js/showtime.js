var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
// Scroll event
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
        setTimeout($("milestone_1").addClass("translate-y-[-75px] opacity-100"), $("milestone_1").data("ind") * 300);
        setTimeout($("milestone_2").addClass("translate-y-[90px] opacity-100"), $("milestone_2").data("ind") * 300);
        setTimeout($("milestone_3").addClass("translate-y-[-75px] opacity-100"), $("milestone_3").data("ind") * 300);
        setTimeout($("milestone_4").addClass("translate-y-[90px] opacity-100"), $("milestone_4").data("ind") * 300);
        setTimeout($("milestone_5").addClass("translate-y-[-75px] opacity-100"), $("milestone_5").data("ind") * 300);
        setTimeout($("milestone_6").addClass("translate-y-[90px] opacity-100"), $("milestone_6").data("ind") * 300);
        setTimeout($("milestone_7").addClass("translate-y-[-110px] opacity-100"), $("milestone_7").data("ind") * 300);
    } else {
        $("milestone_1").removeClass("translate-y-[-75px] opacity-100");
        $("milestone_2").removeClass("translate-y-[90px] opacity-100"); 
        $("milestone_3").removeClass("translate-y-[-75px] opacity-100");
        $("milestone_4").removeClass("translate-y-[90px] opacity-100"); 
        $("milestone_5").removeClass("translate-y-[-75px] opacity-100");
        $("milestone_6").removeClass("translate-y-[90px] opacity-100");
        $("milestone_7").removeClass("translate-y-[-110px] opacity-100");
    }
});

// Go to top
$("#toTop").on("click", function () {
    // Html works for FFX but not Chrome
    // Body works for Chrome but not FFX
    // This strange selector seems to work universally
    $("html, body").animate({scrollTop: 0}, 500);
});