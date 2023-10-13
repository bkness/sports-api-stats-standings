Team Stats Comparison App
Overview
This is a web application designed to allow users to view and compare statistics and standings of two different sports teams. Additionally, users can access detailed information about each team's performance in their last five games. The app may also incorporate player statistics for a comprehensive analysis.

Features
Compare team statistics and standings
View detailed performance of each team's last five games
Incorporate player statistics for in-depth analysis (if applicable)
Technologies Used
Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: [Include backend technology if decided]
Database: [Include database technology if decided]

Usage
<li>Navigate to the homepage.</li>
<li>Select the sports teams you want to compare.</li>
<li>View the statistics, standings, and recent game performance.</li>

Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository
Create a new branch for your feature/bugfix
Make your changes
Submit a pull request
Roadmap
[List of planned features or improvements]
License
[Include license information]





body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.navbar {
    background-color: hsl(0, 0%, 20%);
    overflow: visible;
    display: flex;
}

.nav-list {
    list-style-type: none;
    display: flex;
}

.nav-list li {
    margin-right: 10px;
}

.nav-list li a {
    color: gray;
    text-decoration: none;
    padding: 14px 16px;
    display: block;
}

.nav-list li a:hover {
    background-color: #ddd;
    color: black;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: #333;
    color: white;
    padding: 14px 16px;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 2;
    list-style-type: none;
    padding: 0;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.home-buttons {
    text-align: center;
    margin: 20px 0;
}

.sport-button {
    font-size: 16px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
}

.sport-button:hover {
    background-color: #555;
}

.content {
    position: relative;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
}
