<nav class="navbar has-shadow pl-5 pr-5" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item primary-color is-size-4 logo-title" href="/{{baseUrl}}">
            WPSP
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" id="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
            <a aria-label="introduction" onclick="navigateTo('/introduction')" class="navbar-item">Introduction</a>
            <a aria-label="share-your-story" onclick="navigateTo('/share-your-story')" class="navbar-item">Share Your Story</a>
            <a aria-label="events" onclick="navigateTo('/events')" class="navbar-item">Events</a>
            <a aria-label="about" onclick="navigateTo('/about')" class="navbar-item">About</a>
        </div>
    </div>
</nav>
<script>
document.addEventListener('DOMContentLoaded', () => {
    // code for the burger menu
    const burger = document.getElementById('navbar-burger');

    burger.addEventListener('click', () => {
        target = document.getElementById('navbar-menu');
        burger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });

    const navbar = document.getElementById('navbar-menu');
    let currentLocation = window.location.pathname;
    for (let tag of navbar.getElementsByTagName('a')) {
        // highlight the nav button for current page
        if (currentLocation.includes(tag.getAttribute('aria-label'))) {
            tag.classList.add('is-active', 'is-tab');
        }
        // add listener for collapsing burger menu when clicked
        tag.addEventListener('click', () => {
            navbar.classList.remove('is-active');
        });
    }
});
</script>