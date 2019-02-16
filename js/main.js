var url = 'http://127.0.0.1:8000/book/';

var bookList = $('#books');
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function(result) {
        for(var i= 0; i < result.length; i++) {
            var li = $('<li data-id="' + result[i].id + '">');
            li.text(result[i].title);
            var div = $('<div class="alert alert-dismissible alert-secondary description hidden">');
            var del = $('<a href="#" class="del" style="margin-left: 10px">');
            del.text('Usuń');
            bookList.append(li);
            div.insertAfter(li);
            li.append(del);
        }

        //Zadanie 6
        del.on('click', function(event) {
            var id = $(this).parent().data('id');
            $.ajax({
                url: url + id,
                method: 'DELETE',
                data: 'pk="' + id +'"'
            }).done(function() {
                location.reload();
                alert('Książka usunięta');
            });
        });
    });

    //Zadanie 4 - wypełnienie div-a danymi

        bookList.on('click', 'li', function() {
            var id = $(this).attr('data-id');
            var desc = $(this).next();
            // desc.toggleClass('hidden');
            desc.toggle();

            $.ajax({
                url: url + id,
                method: 'GET'
            }).done(function(result) {
                var $details = '<p><b>Autor:</b> ' + result.author + '</p>' +
                                '<p><b>ISBN:</b> ' + result.isbn + '</p>' +
                                '<p><b>Wydawca:</b> ' + result.publisher + '</p>' +
                                '<p><b>Gatunek:</b> ' + result.genre + '</p>';
                desc.html($details);
            })
        });

    // Zadanie 5
    var form = $('form');
    var btn = $('button');

    //console.log($btn);
    btn.on('click', function(event) {
        event.preventDefault();

        var formData = {
            author: form.find('#author').val(),
            genre: form.find('#genre').val(),
            isbn: form.find('#isbn').val(),
            publisher: form.find('#publisher').val(),
            title: form.find('#title').val()
        };

        //console.log(formData);
        $.ajax({
            url: url,
            method: 'POST',
            data: formData,
            dataType: 'json'
        }).done(function(result) {
            alert("Książka dodana");
            location.reload();           //przeładowanie strony
        })
    });

