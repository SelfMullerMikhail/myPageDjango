"use strict"

// links
const twitter = document.querySelector(".twitter");
const telegramm = document.querySelector(".telegramm");
const instagramm = document.querySelector(".instagramm");
const whatsapp = document.querySelector(".whatsapp");
const number = document.querySelector(".number");
const github = document.querySelector('.github')
const linkedin = document.querySelector(".linkedin")
const hhanter = document.querySelector(".hhanter")
const messegeButton = document.querySelector(".messege");
const writeMe = document.querySelector(".writeMe");
const discord = document.querySelector(".discord");


function copyHidden(el, time) {
    function hidden() {
        el.style.display = "none"
    }
    setTimeout(hidden, time);
}

twitter.addEventListener("click", () => {
    window.open('https://twitter.com/Preensikl', '_blank');
})

telegramm.addEventListener("click", () => {
    window.open('https://t.me/mihail_muller', '_blank');
})

instagramm.addEventListener("click", () => {
    window.open("https://www.instagram.com/mihail_muller_", "_blank");
})

whatsapp.addEventListener("click", () => {
    window.open("https://wa.me/79996149718", "_blank");
    // document.querySelector(".strelka3").classList.remove('displaOn');
    // document.querySelector(".whatsAppText").classList.remove('displaOn');
    // alert("Thank You!")
})

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/mihail-kornyushenko-864734233/", "_blank");
})

hhanter.addEventListener("click", () => {
    window.open("https://hh.ru/resume/f984a146ff0b280d290039ed1f5a3263745a67", "_blank")
})

discord.addEventListener("click", () => {
    window.open("https://discordapp.com/users/767869190220152845/", "_blank")
})



github.addEventListener("click", () => {
    window.open("https://github.com/preensikl", "_blank");
})

number.addEventListener("click", () => {
    navigator.clipboard.writeText("905075310855")
    number.children[2].style.display = "block";
    number.children[1].style.display = 'block';
    copyHidden(number.children[2], 3000);
    copyHidden(number.children[1], 15000);

})

// function lockScreenHidden
function lockScreenHidden() {
    lockScreen.style.opacity = ".5";
    lockScreen.style.zIndex = "2";
    lockScreen.style.display = 'block';
    // alert("This feature is in development");
}

// screensLock
const lockScreen = document.querySelector(".lockScreen");
const commentsButton = document.querySelector(".commentsButton");
const comments = document.querySelector(".comments2");

lockScreen.addEventListener("click", () => {
    lockScreen.style.zIndex = '0';
    lockScreen.style.display = 'none';
    writeMe.style.display = "none";
})

messegeButton.addEventListener('click', () => {
    writeMe.style.display = "block";
    lockScreenHidden();
})

const borderCollor = document.querySelector(".borderCollor")
// messege
borderCollor.addEventListener("click", el => {
    if (el.target.classList.contains('borderCollor')) {
        return;
    }
    el.target.style.boxShadow = "0 0 10px 5px rgba(221, 221, 221, 1)";
    console.log(el.target)
})
borderCollor.addEventListener("focusout", el => {
    el.target.style.boxShadow = "";
})

commentsButton.addEventListener("click", () => {
    comments.classList.toggle('hidden');
})

commentsButton.addEventListener("click", () => {
    commentsButton.classList.toggle('redComments');
})

let counter = 0;
// const strelkaOn = document.querySelector(".strelka")
// const skillsButtom = document.querySelector(".skillsButtom");
// skillsButtom.addEventListener("mouseover", () => {
//     document.querySelector(".strelka1").classList.remove('displaOn');
//     document.querySelector(".iSearchWorkText").classList.remove("displaOn");
//     document.querySelector(".strelka2").classList.add('displaOn');
//     document.querySelector(".contactMe").classList.add('displaOn');
//     counter = 1;
// })

// const contactsButtom = document.querySelector(".contactsButtom");
// contactsButtom.addEventListener("mouseover", () => {
//     document.querySelector(".strelka2").classList.remove('displaOn');
//     document.querySelector(".contactMe").classList.remove('displaOn');
//     if (counter == 1) {
//         document.querySelector(".strelka3").classList.add('displaOn');
//         document.querySelector(".whatsAppText").classList.add('displaOn');
//     }
// })




