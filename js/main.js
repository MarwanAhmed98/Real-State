var bar = document.getElementById("bar");
var NavLinks = document.getElementById("Nav-Links");
const navLinks = document.querySelector(".Nav-Links ul");
let started = false;
function startCounter() {
    const counter = document.getElementById("counter-section");
    let count = 0;
    const target = 34;
    const speed = 50;

    const interval = setInterval(() => {
        count++;
        counter.textContent = count;
        if (count === target) {
            clearInterval(interval);
        }
    }, speed);
}
let started2 = false;
window.addEventListener("scroll", () => {
    const counterSection = document.getElementById("counter-section");
    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
        started = true;
        startCounter();
    }
});

function couterStart() {
    const counter2 = document.getElementById("counter-section2");
    let count2 = 0;
    let Target = 12;
    let Speed = 50;

    const Interval = setInterval(() => {
        count2++;
        counter2.innerText = count2;
        if (count2 === Target) {
            clearInterval(Interval);
        }
    }, Speed);
}

window.addEventListener("scroll", () => {
    const counterSection2 = document.getElementById("counter-section2");
    const TopSection = counterSection2.getBoundingClientRect().top;

    if (TopSection < window.innerHeight && !started2) {
        started2 = true;
        couterStart();
    }
});
let started3 = false;
function finalCounter() {
    const counter3 = document.getElementById("counter-section3");
    let count3 = 0;
    let goal = 24;
    let speed3 = 50;
    const interval3 = setInterval(() => {
        count3++;
        counter3.textContent = count3;
        if (count3 == goal) {
            clearInterval(interval3)
        }
    }, speed3);
};
window.addEventListener("scroll", () => {
    const counterSection3 = document.getElementById("counter-section3");
    const MyTop = counterSection3.getBoundingClientRect().top;
    if (MyTop < window.innerHeight && !started3) {
        started3 = true;
        finalCounter();
    }
})


