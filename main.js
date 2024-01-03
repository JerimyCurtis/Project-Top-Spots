$.getJSON('data.json', function (data) {
    createTable(data);
})
.fail(function (error) {
    console.error('Error reading JSON file:', error);
});

// Function to create links and populate the table
function createTable(data) {
    var table = $('#topSpotsTable tbody');

    for (var i = 0; i < data.length; i++) {
        var row = $('<tr>');

        // Populate cells
        var nameCell = $('<td>').text(data[i].name);
        var descriptionCell = $('<td>').text(data[i].description);

        // Creating a link to Google Maps using latitude and longitude
        var locationLink = $('<a>').attr('href', 'https://www.google.com/maps?q=' + data[i].location[0] + ',' + data[i].location[1]).text('View on Map');
        var locationCell = $('<td>').append(locationLink);

        row.append(nameCell, descriptionCell, locationCell);
        table.append(row);
        
    }
}