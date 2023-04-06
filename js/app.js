const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger-btn');
const cross = document.querySelector('#cross-btn');

const elementsToToggle = [menu, burger, cross];

// toggle on display burger button by default
burger.classList.toggle('disp');
 
// Add event listeners to burger, cross and menu elements that will toggle their 'disp' classes
burger.addEventListener('click', toggleDisp);
cross.addEventListener('click', toggleDisp);
menu.addEventListener('click', toggleDisp);

// Toggle 'disp' class for each of the given elements
function toggleDisp() {
    elementsToToggle.forEach(element => {
        element.classList.toggle('disp');
    });
}

