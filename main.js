$(document).ready(function() {
$.getJSON('data.json', function(data){
    createHTML(data);
})
.fail(function(error) {
    console.error('Error reading JSON file:', error);
});
function createHTML(data){
    var container = $('#dynamic-content');
    var table = $('<table>');
    var headerRow = $('<tr>');
    headerRow.append($('<th>').text('Name'));
    
    table.append(headerRow);
    
    $.each(data, function(index, item){
        var row = $('<tr>');
        row.append($('<td>').text(item.name));
        table.append(row);
    })
}
});
