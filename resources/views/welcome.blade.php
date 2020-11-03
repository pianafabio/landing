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
        <div id="contattaci">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2><strong>Excepteur sint occaecat cupidatat non proident.<strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h2>
                        <div class="text-center">
                            <button class="richiedi_info">
                                Richiedi Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>

        </footer>
        <!-- React JS -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
