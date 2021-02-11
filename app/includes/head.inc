<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="/css/styles.css">
<link rel="icon" href="/img/favicon.png" type="image/png" sizes="16x16">
<script>
    function navigateTo(location, timeout=400) {
        document.body.classList.add('fade');
        setTimeout(() => { window.location = '{{baseUrl}}' + location; }, timeout);
    }

    window.onload = function() {
        document.body.classList.remove('fade');
    }
</script>