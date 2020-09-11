const basicData = {
    labels: [
      '12am-3am',
      '3am-6am',
      '6am-9am',
      '9am-12pm',
      '12pm-3pm',
      '3pm-6pm',
      '6pm-9pm',
      '9pm-12am',
    ],
  
    datasets: [
      {
        title: 'Some Data',
        color: 'light-blue',
        values: [25, 40, 30, 35, 8, 52, 17, -4],
      },
      {
        title: 'Another Set',
        color: 'violet',
        values: [25, 50, -10, 15, 18, 32, 27, 14],
      },
      {
        title: 'Yet Another',
        color: 'blue',
        values: [15, 20, -3, -15, 58, 12, -17, 37],
      },
    ],
  };
  
  const basicConfig = {
    height: 250,
    format_tooltip_x: d => (d + '').toUpperCase(),
    format_tooltip_y: d => d + ' pts',
  };
  const impressionsLineChart = {
    header: 'App Impressions',
    title: '',
    parent: '#impressionsLineChart',
    parentId: 'impressionsLineChart',
    type: 'line',
    data: basicData,
    ...basicConfig,
  };
  
  export {
    impressionsLineChart
  };
  