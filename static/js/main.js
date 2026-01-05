let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");
let slide4 = document.getElementById("slide-4");
let slide5 = document.getElementById("slide-5");
let slide6 = document.getElementById("slide-6");
let slide7 = document.getElementById("slide-7");
const audio = document.getElementById("audio");

slide1.querySelector("button").addEventListener("click", async function() {
    audio.volume = 0.25;
    if (audio.paused) {
        audio.play();
    }
    showSlide2();
});

slide2.querySelector("button").addEventListener("click", function() {
    showSlide3();
});

slide3.querySelector("button").addEventListener("click", function() {
    showSlide4();
});

slide4.querySelector("button").addEventListener("click", function() {
    showSlide5();
});

slide5.querySelector("button").addEventListener("click", function() {
    showSlide6();
});

slide6.querySelector("button").addEventListener("click", async function() {
    showSlide7();
});

slide7.querySelector("button").addEventListener("click", async function() {
    alert("Thank you for your time Angie! I really appreciate it.");
    showSlide1();
});

function showSlide1() {
    slide1.classList.remove("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide4.classList.add("hidden");
    slide5.classList.add("hidden");
    slide6.classList.add("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "inherit";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "none";
        slide5.style.display = "none";
        slide6.style.display = "none";
        slide7.style.display = "none";
    }, 500);
}

function showSlide2() {
    slide1.classList.add("hidden");
    slide2.classList.remove("hidden");
    slide3.classList.add("hidden");
    slide4.classList.add("hidden");
    slide5.classList.add("hidden");
    slide6.classList.add("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "inherit";
        slide3.style.display = "none";
        slide4.style.display = "none";
        slide5.style.display = "none";
        slide6.style.display = "none";
        slide7.style.display = "none";
    }, 500);
}

function showSlide3() {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.remove("hidden");
    slide4.classList.add("hidden");
    slide5.classList.add("hidden");
    slide6.classList.add("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "inherit";
        slide4.style.display = "none";
        slide5.style.display = "none";
        slide6.style.display = "none";
        slide7.style.display = "none";
    }, 500);
}

function showSlide4() {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide4.classList.remove("hidden");
    slide5.classList.add("hidden");
    slide6.classList.add("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "inherit";
        slide5.style.display = "none";
        slide6.style.display = "none";
        slide7.style.display = "none";
    }, 500);
}

function showSlide5() {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide4.classList.add("hidden");
    slide5.classList.remove("hidden");
    slide6.classList.add("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "none";
        slide5.style.display = "inherit";
        slide6.style.display = "none";
        slide7.style.display = "none";
    }, 500);
}

function showSlide6() {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide4.classList.add("hidden");
    slide5.classList.add("hidden");
    slide6.classList.remove("hidden");
    slide7.classList.add("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "none";
        slide5.style.display = "none";
        slide6.style.display = "inherit";
        slide7.style.display = "none";
    }, 500);
}

function showSlide7() {
    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide4.classList.add("hidden");
    slide5.classList.add("hidden");
    slide6.classList.add("hidden");
    slide7.classList.remove("hidden");
    setTimeout(function() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "none";
        slide4.style.display = "none";
        slide5.style.display = "none";
        slide6.style.display = "none";
        slide7.style.display = "inherit";
    }, 500);
}