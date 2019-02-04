var url = 'http://127.0.0.1:8000/book/';
function onSuccess(date) {
    //console.log(date);
}

$(function() {
    $.ajax({
        url: url,
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function(result) {
        onSuccess(result);
        var lastTr = document.querySelector('tr:last-child');
        var newDiv = document.createElement("div");
        var lastDiv = document.querySelector('div:last-child');
        //console.log(td);
        for(var i=0; i<result.length; i++){
            var cloneTr = lastTr.cloneNode(true);
            lastTr.parentElement.appendChild(cloneTr);
            //cloneTr.children[0].innerText = result[i].id;
            //cloneTr.children[1].innerText = result[i].author;
            cloneTr.children[0].innerText = result[i].title;
            lastTr.appendChild(newDiv);
            //console.log(result[i].author, result[i].title);

        }
    });
});

// No jQuery example
// @see https://blog.garstasio.com/you-dont-need-jquery/ajax/#sending-and-receiving-json
// var xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         var result = JSON.parse(xhr.responseText);
//         onSuccess(result);
//     }
//     else {
//         alert('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send();
// for(field in object){
//  object[field];
// }
