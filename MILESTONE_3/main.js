// array images  title  text
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// variabili
let questaImages = '';
let questoThumbnails = '';

// creo ciclo for
for (let i = 0; i < items.length; i++) {

    // images
    questaImages += `<div class="item">
                        <img src="${items[i]}">
        
                        <div class="text">
                            <h2>${title[i]}</h2>
                            <p>${text[i]}</p>
                        </div>
                    </div> `

                console.log(questaImages);

    // thumbnails
    questoThumbnails += `<div class="thumbnails">
                            <img src="${items[i]}">
                        </div>`

                        console.log(questoThumbnails);
}

//creo le slide - rendo visibile nell'html
let containerLeft = document.querySelector('.container-left');
containerLeft.innerHTML += questaImages;

let containerRight = document.querySelector('.container-right');
containerRight.innerHTML += questoThumbnails;



// inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 0;

// all'immagine corrisponde esattamente la sua miniatura selezionata

// images + active 
let tutteImages = document.getElementsByClassName('item');
tutteImages[currentSlide].classList.add('active');

 // thumbnails + active 
let tuttoThumbnails = document.getElementsByClassName('thumbnails');
tuttoThumbnails[currentSlide].classList.add('active');




// rendere attivo il nostro carousel attivando i pulsanti
document.getElementsByClassName('item')[currentSlide].classList.add('active');
document.getElementsByClassName('thumbnails')[currentSlide].classList.add('active');

// variabili attribuite alle classi delle frecce
const prev = document.querySelector('.top');
const next = document.querySelector('.bottom');


// freccia top
next.addEventListener('click', 
function(){

    currentSlide++;

    if(currentSlide > items.length - 1){
        currentSlide = 0;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.thumbnails.active').classList.remove('active');

    document.getElementsByClassName('item')[currentSlide].classList.add('active');
    document.getElementsByClassName('thumbnails')[currentSlide].classList.add('active');
}
);


// freccia bottom
prev.addEventListener('click', 

function(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = items.length - 1;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.thumbnails.active').classList.remove('active');
    
    document.getElementsByClassName('item')[currentSlide].classList.add('active');
    document.getElementsByClassName('thumbnails')[currentSlide].classList.add('active');
}
);