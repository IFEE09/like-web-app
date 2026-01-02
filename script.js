// Initial Setup
console.log('LIKE Website Loaded');

// Header Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Dropdown Toggle (Multiple)
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();

        const currentMenu = toggle.nextElementSibling; // The .dropdown-menu sibling
        const currentIcon = toggle.querySelector('i');

        // Close other open menus
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== currentMenu) {
                menu.classList.remove('show');
                // Reset other icons
                const otherToggle = menu.previousElementSibling;
                if (otherToggle) {
                    const otherIcon = otherToggle.querySelector('i');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Toggle current
        currentMenu.classList.toggle('show');

        // Rotate icon
        if (currentMenu.classList.contains('show')) {
            currentIcon.style.transform = 'rotate(180deg)';
        } else {
            currentIcon.style.transform = 'rotate(0deg)';
        }
    });
});

// Close when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });

    // Reset all icons
    document.querySelectorAll('.dropdown-toggle i').forEach(icon => {
        icon.style.transform = 'rotate(0deg)';
    });
});

// Image Modal Functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const lineupItems = document.querySelectorAll('.lineup-item');

// Open modal when clicking on lineup item
lineupItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modal.classList.add('active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
