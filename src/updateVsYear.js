import Chart from 'chart.js/auto'

(async function() { //array for year and update count
  const updateVsYr = [
    { year: 2014, count: 170 },
    { year: 2015, count: 159 },
    { year: 2016, count: 104 },
    { year: 2017, count: 113 },
    { year: 2018, count: 53 },
    { year: 2019, count: 61 },
    { year: 2020, count: 66 },
    { year: 2021, count: 58 },
    { year: 2022, count: 78 },
    { year: 2023, count: 69 },
    { year: 2024, count: 68 },
    { year: 2025, count: 4 },
  ];

  function averageUpdatesAYear(updateVsYr) { //function to get the average of the count in updateVsYr array
    let sum = 0;
    for (let i = 0; i < updateVsYr.length; i++) {
        sum += updateVsYr[i].count;
    }
    return sum / updateVsYr.length
  }
  //same process as in playerCountByYear.js - loop for average update count

  function displayAverageUpdates() { //function to update HTML content
    const avgCount = averageUpdatesAYear(updateVsYr).toFixed(0);
    document.getElementById("pTag").textContent = `The average number of updates produced over the course of the games lifetime is ${avgCount}`
  }

  displayAverageUpdates(); //calling the function to update the HTML

  new Chart(
    document.getElementById('updateVsYear'),
    {
      type: 'bar',
      data: {
        labels: updateVsYr.map(row => row.year),
        datasets: [
          {
            label: 'Rust Updates Released Per Year',
            data: updateVsYr.map(row => row.count),
            borderColor: 'white',
            backgroundColor: 'white',
            fill: true,
          }
        ]
      }
    }
  );
})();

