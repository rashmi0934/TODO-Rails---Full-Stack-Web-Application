/*
// JavaScript to toggle the sidebar menu
function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}
*/
// JavaScript to toggle the sidebar menu and shift the main content
function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    var wrapper = document.querySelector('.wrapper');
    sidebar.classList.toggle('open');
    wrapper.classList.toggle('menu-open');
}

function toggleProfilePanel() {
    var panel = document.getElementById('profile-panel');
    var button = document.querySelector('.profile-toggle');

    if (!panel || !button) {
        return;
    }

    var isOpen = panel.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen.toString());
}

document.addEventListener('click', function (event) {
    var panel = document.getElementById('profile-panel');
    var button = document.querySelector('.profile-toggle');

    if (!panel || !button) {
        return;
    }

    if (!panel.contains(event.target) && !button.contains(event.target)) {
        panel.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
    }
});
