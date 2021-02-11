<nav class="navbar has-shadow pl-5 pr-5 is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item primary-color is-uppercase is-size-4 logo-title">
            WIPS
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" id="navbar-burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
            <a aria-label="introduction" onclick="navigateTo('/introduction')" class="navbar-item is-uppercase">Introduction</a>
            <a aria-label="share-a-story" onclick="navigateTo('/share-a-story')" class="navbar-item is-uppercase">Share a Story</a>
            <a aria-label="events" onclick="navigateTo('/events')" class="navbar-item is-uppercase">Events</a>
            <a aria-label="about" onclick="navigateTo('/about')" class="navbar-item is-uppercase">About</a>
        </div>
    </div>
</nav>
<br>
<br>
<script>
document.addEventListener('DOMContentLoaded', () => {
    // code for the burger menu
    const burger = document.getElementById('navbar-burger');

    burger.addEventListener('click', () => {
        target = document.getElementById('navbar-menu');
        burger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });

    // code for navbar highlight
    const navbar = document.getElementById('navbar-menu');
    let currentLocation = window.location.pathname.replaceAll('/', '');
    for (let tag of navbar.getElementsByTagName('a')) {
        let tagLocation = tag.getAttribute('aria-label');
        if (tagLocation == currentLocation) {
            tag.classList.add('is-active', 'is-tab');
            break;
        }
    }

});
</script>