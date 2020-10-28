<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Landing | Piana Fabio</title>
    </head>
    <body>
        <h1 class="left-heading">Landing Page</h1>
        <div id="blocco_1">
            <img src="{{ asset('images/Servizio/Group.jpg') }}" class="blocco_1_image">
            <div class="blocco_1_text">
                <h2>Sezione 1 lorem ipsum dolor sit amet.</h2>
                <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <a href="#">Scopri di più</a>
            </div>
        </div>
        <!-- React JS -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
