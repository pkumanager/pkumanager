var today = document.getElementById("today");

if (localStorage.getItem("day") !== null) {
    var list = JSON.parse(localStorage.getItem("day"));

    var table = "<thead><tr><th>" +
        "Description</th><th>" +
        "Phenyl&shy;alanine per 100&nbsp;g</th><th>" +
        "Protein per 100&nbsp;g</th><th>" +
        "Energy per 100&nbsp;g</th></tr></thead><tbody>";
    
    for (var i = 0; i < list.length; i++) {
        table += "<tr><td>" +
            list[i].desc + "</td><td class=\"nowrap\">" +
            list[i].phe + " mg</td><td class=\"nowrap\">" +
            list[i].prot + " g</td><td>" +
            list[i].kcal + " kcal</td></tr>";
    }
    
    table += "</tbody><br><p>Reset list under Settings.</p>";
    today.innerHTML = table;
} else {
    var empty = "<tbody><tr><td>No food added.</td></tr></tbody>";
    today.innerHTML = empty;
}