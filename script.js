document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('rentVsBuyChart').getContext('2d');

    const years = Array.from({ length: 11 }, (_, i) => `Year ${i}`);
    const rentCosts = [0, 60000, 121800, 185454, 251024, 318573, 388168, 459879, 533777, 609934, 688423];
    const buyCosts = [500000, 535000, 571550, 609709, 649538, 691102, 734468, 779706, 826888, 876088, 927381];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Cumulative Rent Cost',
                    data: rentCosts,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Cumulative Buy Cost (including equity)',
                    data: buyCosts,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Cumulative Cost of Renting vs. Buying in Palo Alto (10-Year Projection)'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Cumulative Cost ($)'
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
});