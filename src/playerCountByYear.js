import Chart from 'chart.js/auto';

(async function() {
    const playerVsYear = [
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
                    fill: true,
                }]
            }
        }
    );

})();
