var url = 'http://127.0.0.1:8000/book/';


var $bookList = $('#books');
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function(response) {
        for(var i= 0; i < response.length; i++) {
            var $li = $('<li data-id="' + response[i].id + '">');
            $li.text(response[i].title);
            var $div = $('<div class="description hidden">');
            $bookList.append($li);
            //$li.append($del);
            $div.insertAfter($li);
        }


    });

    //Zad 4
        $bookList.on('click', 'li', function(event) {
            var id = $(this).attr('data-id');
            var $desc = $(this).next();
            $desc.toggleClass('hidden');

            $.ajax({
                url: url + id,
                method: 'GET'
            }).done(function(response) {
                var $details = '<p><b>Autor:</b> ' + response.author + '</p>' +
                               '<p><b>Gatunek:</b> ' + response.genre + '</p>' +
                               '<p><b>Wydawca:</b> ' + response.publisher + '</p>' +
                               '<p><b>ISBN:</b> ' + response.isbn + '</p>';
                $desc.html($details);

            })
        });

