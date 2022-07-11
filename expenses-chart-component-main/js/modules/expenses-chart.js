import expensesData from './expenses-data.js';

function displayExpensesChart() {
  const chartContainer = document.querySelector('.expenses__chart');
  const days = expensesData.map((data) => data.day);
  const expenses = expensesData.map((data) => data.amount);
  const maxExpense = Math.ceil(Math.max(...expenses)) + 15;
  const today = new Date().getDay();

  const setBarBackgroundColor = expenses.map((data, index) => {
    if (index === today) {
      return 'hsl(186, 34%, 60%)';
    }

    return 'hsl(10, 79%, 65%)';
  });

  const setBarHoverBackgroundColor = expenses.map((data, index) => {
    if (index === today) {
      return 'hsla(186, 34%, 60%, 0.7)';
    }

    return 'hsla(10, 79%, 65%, 0.7)';
  });

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = 'hsl(28, 10%, 53%)';

  Chart.Tooltip.positioners.customPositioner = function (
    elements,
    eventPosition
  ) {
    const tooltip = this;

    if (!elements[0]) {
      return {
        x: 0,
        y: 0,
      };
    }
    const model = elements[0].element;
    const x = model.x;
    const y = model.y - 35;

    return {
      x: x,
      y: y,
    };
  };

  const chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [
        {
          label: 'amount',
          data: expenses,
          backgroundColor: setBarBackgroundColor,
          hoverBackgroundColor: setBarHoverBackgroundColor,
          borderSkipped: false,
          borderRadius: 3,
        },
      ],
    },
    options: {
      barThickness: 32,
      scales: {
        x: {
          type: 'category',
          labels: days,
          grid: {
            display: false,
            borderColor: 'transparent',
          },
        },
        y: {
          labels: expenses,
          display: false,
          max: maxExpense,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          position: 'customPositioner',
          xAlign: 'center',
          yAlign: 'top',
          titleFont: "'DM Sans', sans-serif",
          backgroundColor: 'hsl(25, 47%, 15%)',
          caretSize: 0,
          displayColors: false,
          callbacks: {
            title: function (context) {
              let label = context[0].label;

              label = '';

              return label;
            },
            label: function (context) {
              let label = context.dataset.label || '';

              if (label) {
                label = '';
              }

              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(context.parsed.y);
              }

              return label;
            },
          },
        },
      },
    },
  });
}

export default displayExpensesChart;
