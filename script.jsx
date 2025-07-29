const { Bar } = ReactChartjs2;
Chart.register(Chart.BarController, Chart.CategoryScale, Chart.LinearScale, Chart.Tooltip, Chart.Legend);


function App() {
  const data = {
    labels: Array.from({ length: 11 }, (_, i) => `Year ${i}`),
    datasets: [
      {
        label: 'Cumulative Rent ($)',
        backgroundColor: '#4F46E5',
        data: [0, 72500, 147000, 225000, 305000, 388000, 473000, 560000, 649000, 740000, 833000]
      },
      {
        label: 'Cumulative Owner Cash Out ($)',
        backgroundColor: '#EC4899',
        data: [770000, 910000, 1055000, 1210000, 1377000, 1557000, 1750000, 1956000, 2175000, 2407000, 2653000]
      }
    ]
  };
  const options = { responsive: true, scales: { y: { beginAtZero: true } } };
  return (
    <main className="container">
      <h1>Is it Smarter to Rent or Buy in Palo Alto?</h1>
      <p>Our 10-year model, sensitivity analysis & Monte Carlo simulation suggest renting outperforms buying under most realistic assumptions.</p>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
      <a href="#" className="btn">Download full PDF analysis</a>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
