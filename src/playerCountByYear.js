import Chart from 'chart.js/auto';

(async function() {
    const playerVsYear = [ //array for year and player counts
        { year: 2014, count: 59118 },
        { year: 2015, count: 22383 },
        { year: 2016, count: 61323 },
        { year: 2017, count: 63810 },
        { year: 2018, count: 67582 },
        { year: 2019, count: 85218 },
        { year: 2020, count: 97970 },
        { year: 2021, count: 245243 },
        { year: 2022, count: 155229 },
        { year: 2023, count: 177765 },
        { year: 2024, count: 191360 },
        { year: 2025, count: 262284 },
    ];

    function averageUpdatesAYear(playerVsYear) { //function to get the average of the count in updateVsYr array
        let sum = 0;
        for (let i = 0; i < playerVsYear.length; i++) {
            sum += playerVsYear[i].count;
        }
        return sum / playerVsYear.length
      } 
      //for loop is looping through the array starting at i which is set to 0 and itterating until the array is complete
      //we only want to average out the count so .count is used after the array call "playerVsYear[i].count"
    
      function displayAveragePlayers() { //function to update HTML content
        const avgCount = averageUpdatesAYear(playerVsYear).toFixed(0); 
        document.getElementById("AvgPlayers").textContent = `The overall average number of players per month over the course of the games lifetime is ${avgCount}.`
      }
      //Calling the function setting the average number and storing it in a new varibale. .toFixed(0) is used to removed the decimal places
      //document.getElementById to link to the id on a P tag in inxex.html. .textContent will change the placeholder text in the tag to =
    
      displayAveragePlayers();

    new Chart(
        document.getElementById('playerCountByYr'),
        {
            type: 'line',
            data: {
                labels: playerVsYear.map(row => row.year),
                datasets: [{
                    label: 'Rust Player Count by Year',
                    data: playerVsYear.map(row => row.count),
                    borderColor: 'white',
                    backgroundColor: 'white',
                }]
            }
        }
    );

})();
