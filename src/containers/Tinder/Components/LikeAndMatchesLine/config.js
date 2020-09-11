import moment from 'moment'
//Load in data
import UserData from '../../data.json';

//Process Data
var matchesPerDay = UserData.Usage.matches;
var likesPerDay = UserData.Usage.swipes_likes;

var currentTotalMatches = 0;
var currentTotalLikes = 0;
var dates = [];
var matchProbabilityPerDay = [];
var totalLikesPerDay = [];
var totalMatchesPerDay = [];

Object.keys(matchesPerDay).forEach(function(date) {
    dates.push(moment(date).format('MM/DD'));
    currentTotalMatches += matchesPerDay[date];
    currentTotalLikes += likesPerDay[date];
    
    totalMatchesPerDay.push(currentTotalMatches);
    totalLikesPerDay.push(currentTotalLikes);
    matchProbabilityPerDay.push(currentTotalMatches/currentTotalLikes * 100);
});

const data = {
    labels: dates,
    datasets: [
      {
        label: 'Match Probability',
        yAxisID: 'B',
        lineTension: 0.1,
        backgroundColor: 'rgba(34,168,49,0.2)',
        borderColor: 'rgba(34,168,49,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointHitRadius: 10,
        data: matchProbabilityPerDay,
      }, {
        label: 'Likes',
        yAxisID: 'A',
        data: totalLikesPerDay,
        borderColor: 'rgba(3,30,229,1)',
        backgroundColor: 'rgba(218,86,245,0.0)',
      },{
        label: 'Matches',
        yAxisID: 'A',
        data: totalMatchesPerDay,
        borderColor: '#F6638E',
        backgroundColor: 'rgba(218,86,245,0.0)',
      },
    ],
  };

const options = {
    scales: {
        yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
        }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return value + '%';
                }
            }
        }]
    }
};
  
  export { data, options };
  