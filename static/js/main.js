const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navContent = document.getElementById('nav-content');
const menuBars = menuToggle.getElementsByTagName('span');
let isOpen = false;
let lastScroll = 0;
const headerText = document.getElementById('header-text');
const desktopUsername = document.getElementById('desktop-username');
const myAvatar = document.getElementById('my-avatar');


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        myAvatar.classList.add('hidden')
        desktopUsername.classList.remove('pl-12')
    } else if (currentScroll < lastScroll) {
        // Scrolling up
        myAvatar.classList.remove('hidden')
        desktopUsername.classList.add('pl-12')
    }

    lastScroll = currentScroll;
});

// Function to close the menu
function openMenu() {
    isOpen = true;

    // Expand navbar
    navbar.classList.add('h-screen');
    navContent.classList.remove('h-0');
    navContent.classList.add('h-[calc(100vh-3.5rem)]');

    // Add zoom effect to logo and name
    const logo = navbar.querySelector('img');
    const name = navbar.querySelector('h1');
    const mobileUsername = document.getElementById('mobile-username');
    logo.classList.add('scale-125');
    name.classList.add('scale-110');
    mobileUsername.classList.remove('h-0');
    mobileUsername.classList.add('h-6');

    // Animate hamburger to X
    menuBars[0].classList.add('rotate-45', 'origin-top-left');
    menuBars[1].classList.add('opacity-0');
    menuBars[2].classList.add('-rotate-45', 'origin-bottom-left');
}

function closeMenu() {
    isOpen = false;

    // Collapse navbar
    navbar.classList.remove('h-screen');
    navContent.classList.remove('h-[calc(100vh-3.5rem)]');
    navContent.classList.add('h-0');

    // Remove zoom effect
    const logo = navbar.querySelector('img');
    const name = navbar.querySelector('h1');
    const mobileUsername = document.getElementById('mobile-username');
    logo.classList.remove('scale-125');
    name.classList.remove('scale-110');
    mobileUsername.classList.add('h-0');
    mobileUsername.classList.remove('h-6');

    // Animate X back to hamburger
    menuBars[0].classList.remove('rotate-45', 'origin-top-left');
    menuBars[1].classList.remove('opacity-0');
    menuBars[2].classList.remove('-rotate-45', 'origin-bottom-left');
}

// Toggle menu when hamburger is clicked
menuToggle.addEventListener('click', () => {
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Add click event listeners to all navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isOpen) {
            closeMenu();
        }
    });
});

// Also close menu when theme toggle is clicked
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (isOpen) {
            closeMenu();
        }
    });
}

lucide.createIcons();

