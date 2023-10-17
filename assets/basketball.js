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
// grabs team list for nav bar 
document.addEventListener("DOMContentLoaded", function () {
    function populateDropdowns(teams) {
        // Get all elements with class 'team-dropdown'
        const dropdowns = document.querySelectorAll('.team-dropdown');

        // Iterate through each dropdown
        dropdowns.forEach(dropdown => {
          const defaultOption = document.createElement('option');
            defaultOption.text = "Select a Team";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            dropdown.add(defaultOption);

          // Iterate through the teams and create an option for each
           
            teams.forEach(team => {
                const option = document.createElement('option');
                option.value = team.toLowerCase().replace(/\s/g, ''); // Convert team name to lowercase and remove spaces
                option.text = team;
                dropdown.add(option);
            });
        });
    }

    // Call the function with the nbaTeams array
    populateDropdowns(nbaTeams);

});
// basketball.js

// // Function to fetch NBA standings
// async function fetchNBAStandings() {
//     const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '4f7674b837mshd6881d85361539ap1a8291jsn961969652d7c',
//             'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching NBA standings:', error);
//         return null;
//     }
// }

// Function to save data to local storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to retrieve data from local storage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to update team dropdowns
function updateTeamDropdowns() {
    const teamDropdowns = document.querySelectorAll('.team-dropdown');
    nbaTeams.forEach(team => {
        teamDropdowns.forEach(dropdown => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            dropdown.appendChild(option);
        });
    });
}

function handleTeamSelection() {
    const teamDropdown = document.querySelector('.team-dropdown');
    const selectedTeam = teamDropdown.value;

    // Retrieve NBA standings data from local storage
    const nbaStandings = getFromLocalStorage('nbaStandings');

    if (nbaStandings) {
        // Find the selected team's data
        const selectedTeamData = nbaStandings.response.find(team => team.team.name === selectedTeam);

        if (selectedTeamData) {
            const teamLogoUrl = selectedTeamData.team.logo;
            const teamLogoElement = teamDropdown.parentElement.querySelector('#team-logo');
            teamLogoElement.src = teamLogoUrl;
        }
    }
}

// Add event listener to the team dropdowns for change events
const teamDropdowns = document.querySelectorAll('.team-dropdown');
teamDropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', handleTeamSelection);
    console.log(handleTeamSelection, "worked!");
});



// // Call the function to fetch NBA standings and save to local storage
// fetchNBAStandings().then(data => {
//     if (data) {
//         saveToLocalStorage('nbaStandings', data);
//         updateTeamDropdowns();
//     console.log(data);
//     }
// });
