<nav class="navbar has-shadow pl-5 pr-5" role="navigation" aria-label="main navigation">
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
            <a href="../introduction" class="navbar-item is-uppercase">Introduction</a>
            <a href="../share-a-story" class="navbar-item is-uppercase">Share a Story</a>
            <a href="../events" class="navbar-item is-uppercase">Events</a>
            <a href="../about" class="navbar-item is-uppercase">About</a>
        </div>
    </div>
</nav>
<script>
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('navbar-burger');

    burger.addEventListener('click', () => {
        target = document.getElementById('navbar-menu');
        burger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });

});
</script>