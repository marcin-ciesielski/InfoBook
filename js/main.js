var url = 'http://127.0.0.1:8000/book/';


var $bookList = $('#books');
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function(response) {
        for(var i= 0; i < response.length; i++) {
            var $li = $('<li data-id="' + response[i].id + '">');
            $li.text(response[i].title);
            var $div = $('<div class="alert alert-dismissible alert-secondary description hidden">');
            $bookList.append($li);
            $div.insertAfter($li);
        }
    });

    //Zadanie 4 - wypełnienie div-a danymi

        $bookList.on('click', 'li', function() {
            var id = $(this).attr('data-id');
            var $desc = $(this).next();
            $desc.toggleClass('hidden');

            $.ajax({
                url: url + id,
                method: 'GET'
            }).done(function(response) {
                var $details = '<p><b>Autor:</b> ' + response.author + '</p>' +
                                '<p><b>ISBN:</b> ' + response.isbn + '</p>' +
                                '<p><b>Wydawca:</b> ' + response.publisher + '</p>' +
                                '<p><b>Gatunek:</b> ' + response.genre + '</p>';
                $desc.html($details);
            })
        });

