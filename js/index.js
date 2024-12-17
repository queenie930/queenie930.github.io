
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function showSection(sectionId) {
document.querySelectorAll('.section').forEach(section => {
section.classList.remove('active');
});
document.querySelectorAll('.tab').forEach(tab => {
tab.classList.remove('active');
});
document.getElementById(sectionId).classList.add('active');
document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

const skillDescriptions = {
    "HTML": "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
    "CSS": "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    "JavaScript": "JavaScript is a programming language that enables interactive web pages; it is an essential part of web applications.",
    "Bootstrap": "Bootstrap is a front-end framework for developing responsive and mobile-first websites.",
    "Git & GitHub": "Git is a version control system, while GitHub is a platform for hosting and collaborating on Git repositories."
};

// Event listener for when a skill is clicked
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        document.getElementById('skillDescription').innerText = skillDescriptions[skill];
    });
});

// Form submission with animation
document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();
const button = this.querySelector('button');
button.innerHTML = '<i class="fas fa-check"></i> Sent!';
button.classList.add('btn-success');
setTimeout(() => {
this.reset();
button.innerHTML = 'Send Message';
button.classList.remove('btn-success');
}, 3000);
});

// Add scroll reveal animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card, .section-title');
    elements.forEach(element => {
    if (isElementInViewport(element)) {
    element.classList.add('animate__animated', 'animate__fadeInUp');
    }
    });
    });
    
function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Typing effect function
function typeWriter(text, elementId, delay) {
    let i = 0;
    const element = document.getElementById(elementId);
    const typingDelay = delay || 100; // Default typing delay

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, typingDelay);
        }
    }
    type();
}

// Start typing effect
window.onload = function() {
    typeWriter("Hello, I'm Ry-ry", "typed-text", 100); // Typing effect for the first line
    setTimeout(() => {
        typeWriter("A Newbie Developer", "typed-text", 100); // Typing effect for the second line
    }, 3000); // Delay before starting the second line
};

document.getElementById('flip-card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});


function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.querySelector('.tab[onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');
}
