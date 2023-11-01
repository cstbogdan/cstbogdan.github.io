function displayDate(date) {
    // console.warn("display", date);

    var dateHTML = "";
    date.forEach(function(date){
        // console.info(date);
        dateHTML += 
       
        ` <tr>
        <td>${date.date}</td>
        <td>Costache Bogdan</td>
        <td>${date.project}</td>
        <td>
            <a href="${date.url}">link</a>
        </td>
        <td>xe</td>
       </tr>`;
    });

    // console.warn(dateHTML);

    document.querySelector('table tbody').innerHTML = dateHTML;
        
    }
    

function loadDate() {
    fetch("data/projects.json")
    .then(function(r) {
        return r.json();
    })
    .then(function(date){
        displayDate(date);
    });
}

loadDate();