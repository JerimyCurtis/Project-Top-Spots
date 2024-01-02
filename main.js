$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        createHTML(data);
    })
    .fail(function(error) {
        console.error('Error reading JSON file:', error);
    });

    function createHTML(data) {
        var container = $('#dynamic-content');
        var table = $('<table>');
        var headerRow = $('<tr>');
        headerRow.append($('<th>').text('Name'));
        headerRow.append($('<th>').text('Description'));
        headerRow.append($('<th>').text('Location'));
        
        table.append(headerRow);

        $.each(data, function(index, item) {
            var row = $('<tr>');
            row.append($('<td>').text(item.name));
            row.append($('<td>').text(item.description));
            row.append($('<td>').text('Latitude: ' + item.location[0] + ', Longitude: ' + item.location[1]));

            table.append(row);
        });

        container.append(table);
    }
});