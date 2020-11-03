<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Landing | Piana Fabio</title>
    </head>
    <body>
        <h1 class="left-heading">Landing Page</h1>
        <div id="react-root"></div>
        <div id="footer"></div>
        <!-- React JS -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
