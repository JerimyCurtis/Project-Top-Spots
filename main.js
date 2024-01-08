//Get data from json and send to function createTable when called
$.getJSON('data.json', function (data) {
    createTable(data);
})
//Create error message for failed json retreival
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

        // Create a link to Google Maps using latitude and longitude
        var locationLink = $('<a>').attr('href', 'https://www.google.com/maps?q=' + data[i].location[0] + ',' + data[i].location[1]).text('View on Map');
        var locationCell = $('<td>').append(locationLink);

        row.append(nameCell, descriptionCell, locationCell);
        table.append(row);
    } 
    }
    //Create a page search function
    const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'https://www.sandiego.gov/';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);

