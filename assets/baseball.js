const mlbTeams = [
    "Arizona Diamondbacks",
    "Atlanta Braves",
    "Baltimore Orioles",
    "Boston Red Sox",
    "Chicago White Sox",
    "Chicago Cubs",
    "Cincinnati Reds",
    "Cleveland Guardians",
    "Colorado Rockies",
    "Detroit Tigers",
    "Houston Astros",
    "Kansas City Royals",
    "Los Angeles Angels",
    "Los Angeles Dodgers",
    "Miami Marlins",
    "Milwaukee Brewers",
    "Minnesota Twins",
    "New York Yankees",
    "New York Mets",
    "Oakland Athletics",
    "Philadelphia Phillies",
    "Pittsburgh Pirates",
    "San Diego Padres",
    "San Francisco Giants",
    "Seattle Mariners",
    "St. Louis Cardinals",
    "Tampa Bay Rays",
    "Texas Rangers",
    "Toronto Blue Jays",
    "Washington Nationals"
];

document.addEventListener("DOMContentLoaded", function() {
    var teamDropdown = document.getElementById("teamDropdown");

    for (var i = 0; i < mlbTeams.length; i++) {
        var teamName = mlbTeams[i];
        var listItem = document.createElement("a");
        listItem.classList.add("dropdown-item");
        listItem.href = "#"
        listItem.innerText = teamName;
        teamDropdown.appendChild(listItem);
    }
})