
function listar() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function (xhr) {

        },
        success: function (data) {
            $.each(data, function (index, element) {
                $(".re1").append(
                        "<tr><td>" + element.userId + "</td><td>"
                        + element.id + "</td><td>" + element.title + "</td><td>"
                        + element.body + "</td></tr>"
                        );
            });
        }
    });
}

function busqueda() {
    let ID = $("input:text[name=ID]").val();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        dataType: 'JSON',
        data: "data",
        success: function (data) {
            $.each(data, function (index, element) {
                if (element.userId == ID) {
                    $(".re1").append(
                            "<tr><td>" + element.userId + "</td><td>"
                            + element.id + "</td><td>" + element.title + "</td><td>"
                            + element.body + "</td></tr>"
                            )
                }
            })
        }

    })
}