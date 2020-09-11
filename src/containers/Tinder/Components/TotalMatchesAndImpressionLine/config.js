import moment from 'moment'
//Load in data
import UserData from '../../data.json';

//Process Data
var matchesPerDay = UserData.Usage.matches;
var appOpensPerDay = Object.values(UserData.Usage.app_opens);

var currentMatches = 0;
var totalMatchesPerDay = [];
var dates = [];
Object.keys(matchesPerDay).forEach(function(date) {
    dates.push(moment(date).format('MM/DD'));
    currentMatches += matchesPerDay[date];
    totalMatchesPerDay.push(currentMatches);
});

const data = {
    labels: dates,
    datasets: [
      {
        label: 'Matches',
        lineTension: 0.1,
        backgroundColor: 'rgba(252,48,120,0.2)',
        borderColor: 'rgba(252,48,120,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointHitRadius: 10,
        data: totalMatchesPerDay,
      }, {
        label: 'App Opens',
        data: appOpensPerDay,
        type: 'bar',
        backgroundColor: 'rgba(254,172,1)',
        borderColor: 'rgba(3,30,229,1)',
      },
    ],
  };
  
  export { data };
  