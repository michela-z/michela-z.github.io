$(document).ready(function (){

    //mobile navbar
    $(".menu-btn").click(function(){
        $(".nav").addClass("show");
    })
    $(".cancel-btn").click(function(){
        $(".nav").removeClass("show");
    })

    //mouse sulle anteprime
    $('.card').on({
        mouseover: function(){
            $(this).addClass("active").find('.info').show();
        },
        mouseleave: function(){
            $(this).removeClass("active").find('.info').hide();
        }
    })

});


// NIMAZIONE MANO SULL'INDICE
let mano = document.querySelector('.mano')

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