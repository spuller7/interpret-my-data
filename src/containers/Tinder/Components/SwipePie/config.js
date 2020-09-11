//Load in data
import UserData from '../../data.json';

//Process Data

var numRightSwipes = 0;
var numLeftSwipes = 0;
Object.keys(UserData.Usage.swipes_likes).forEach(function(date) {
    numRightSwipes += UserData.Usage.swipes_likes[date];
    numLeftSwipes += UserData.Usage.swipes_passes[date];
});

const data = {
    labels: ['Likes', 'Dislikes'],
    datasets: [
      {
        data: [numRightSwipes, numLeftSwipes],
        backgroundColor: ['#FF6384', '#48A6F2'],
        hoverBackgroundColor: ['#FF6384', '#48A6F2'],
      },
    ],
  };
  
  export { data };
  