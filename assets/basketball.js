const nbaTeams = [
    'Atlanta Hawks',
    'Boston Celtics',
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'LA Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
];

document.addEventListener("DOMContentLoaded", function() {
    var teamDropdown = document.getElementById("teamDropdown");

    for (var i = 0; i < nbaTeams.length; i++) {
        var teamName = nbaTeams[i];
        var listItem = document.createElement("a");
        listItem.classList.add("dropdown-item");
        listItem.href = "#"; 
        listItem.innerText = teamName;
        teamDropdown.appendChild(listItem);
    }
});