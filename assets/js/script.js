//  NAVBAR MOBILE MODE
let navbar = document.querySelector("#navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = () => {
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// mouse sulle anteprime 

let anteprima = document.querySelector('.img-anteprima');
let etichettaAntep = document.querySelector('.etichetta');

anteprima.addEventListener('mouseover', function() {
    etichettaAntep.style.visibility = 'visible';
    anteprima.style.filter = 'blur(3px)';
})
anteprima.addEventListener('mouseleave', function() {
    etichettaAntep.style.visibility = 'hidden';
    anteprima.style.filter = 'blur(0px)';
})
etichettaAntep.addEventListener('mouseover', function() {
    etichettaAntep.style.visibility = 'visible';
    anteprima.style.filter = 'blur(3px)';
})


let title = document.createElement('p');

function over(e) {
    let text = e.getAttribute('data-title');
    e.style.filter = 'blur(3px)';
    title.className = 'etichetta';
    title.innerHTML = text;
    e.append(title);
    console.log(text);
};

function leave(e) {
    e.style.filter = 'blur(0px)';
};

// MANO PUNTATORE
let containerImage = document.querySelector('.image');
let mano = document.createElement('img');
mano.src = 'assets/images/mano.png'
mano.className = 'mano';
containerImage.append(mano);

let navOne = document.querySelector('.nav-1');
let navTwo = document.querySelector('.nav-2');
let navThree = document.querySelector('.nav-3');
let navFour = document.querySelector('.nav-4');


function nullPosition() {
    mano.style.transform = null;
}

navOne.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(-180px) translateY(-10px) rotate(-70deg)" ;
});
navOne.addEventListener('mouseout', nullPosition);

navTwo.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(-145px) translateY(55px) rotate(-70deg)" ;
});
navTwo.addEventListener('mouseout', nullPosition);

navThree.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(150px) translateY(-30px) rotate(40deg)" ;
});
navThree.addEventListener('mouseout', nullPosition);

navFour.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(110px) translateY(30px) rotate(40deg)" ;
});
navFour.addEventListener('mouseout', nullPosition);