var host = 'http://localhost:8000';

$('#submit').click(function (e) {
    $.ajax(host + '/forecast/' + $('#date').val())
        .done(OnAPILoad)
        .fail(OnAPIFail);
});

function OnAPILoad(result) {
    var html =
        '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>Date</th><th>Max Temp</th><th>Min Temp</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        result.map(function (r) {
            return '<tr><th>' + r.DATE + '</th><th>' + r.TMAX + '</th><th>' + r.TMIN + '</th></tr>';
        }).join('') +
        '</tbody>' +
        '</table>';

    $('#results').html(html);
    $('#error').text('');
}

function OnAPIFail(err) {
    $('#error').text(err.responseText || 'Request failed');
}