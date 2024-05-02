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
// window.onscroll = () => {
//     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
// }


// MOSTRA EMAIL
const email = document.querySelector('.far')
const emailAddress = document.querySelector('.email-adrss')
email.addEventListener('mouseenter', function() {
    emailAddress.classList.add('show-email');
})
email.addEventListener('mouseleave', function() {
    emailAddress.classList.remove('show-email');
})


// mouse sulle anteprime 
let cards = document.querySelectorAll('.card');
let info = document.querySelectorAll('.info')

const body = document.body;

cards.forEach(card => {
    card.addEventListener('mouseover', (event) => {
        //removeActive()
        card.classList.add('active')
        //console.log('active');
        event.target.childNodes[3].style.display = 'inline'      
    })
});

cards.forEach(card => {
    card.addEventListener('mouseleave', (event) => {
        //console.log('mouse leave');
        //console.log(event.target);
        event.target.classList.remove('active')
        info.forEach(i => {
            i.style.display = "none"
        })
    })
})

// const removeActive = () => {
//     cards.forEach(card => {
//         card.classList.remove('active')
//     })
// }


// MANO PUNTATORE
let containerImage = document.querySelector('.image');
let mano = document.createElement('img');
mano.src = 'assets/images/mano.png'
mano.className = 'mano';
containerImage.append(mano);

//let navOne = document.querySelector('.nav-1');
let navOne = document.querySelector('.nav-1');
let navTwo = document.querySelector('.nav-2');
let navThree = document.querySelector('.nav-3');

let socialOne = document.querySelector('.fa-instagram');
let socialTwo = document.querySelector('.fa-github');
let socialThree = document.querySelector('.fa-linkedin');
let socialFour = document.querySelector('.fa-at');


function nullPosition() {
    mano.style.transform = null;
}

// NAV BAR LEFT     

navOne.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(-180px) translateY(-50px) rotate(-50deg)" ;
});
navOne.addEventListener('mouseout', nullPosition);

navTwo.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(-150px) translateY(10px) rotate(-60deg)" ;
});
navTwo.addEventListener('mouseout', nullPosition);

navThree.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(-120px) translateY(50px) rotate(-70deg)" ;
});
navThree.addEventListener('mouseout', nullPosition);


// NAV BAR RIGHT

socialOne.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(140px) translateY(-90px) rotate(30deg)" ;
});
socialOne.addEventListener('mouseout', nullPosition);

socialTwo.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(140px) translateY(-50px) rotate(35deg)" ;
});
socialTwo.addEventListener('mouseout', nullPosition);

socialThree.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(120px) translateY(-10px) rotate(45deg)" ;
});
socialThree.addEventListener('mouseout', nullPosition);

socialFour.addEventListener('mouseover', function() {
    mano.style.transform = "translateX(100px) translateY(20px) rotate(50deg)" ;
});
socialFour.addEventListener('mouseout', nullPosition);