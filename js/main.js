var url = 'http://127.0.0.1:8000/book/';


var $bookList = $('#books');
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function(result) {
        for(var i= 0; i < result.length; i++) {
            var $li = $('<li data-id="' + result[i].id + '">');
            $li.text(result[i].title);
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
            }).done(function(result) {
                var $details = '<p><b>Autor:</b> ' + result.author + '</p>' +
                                '<p><b>ISBN:</b> ' + result.isbn + '</p>' +
                                '<p><b>Wydawca:</b> ' + result.publisher + '</p>' +
                                '<p><b>Gatunek:</b> ' + result.genre + '</p>';
                $desc.html($details);
            })
        });

