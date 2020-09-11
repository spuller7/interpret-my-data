//Load in data
import UserData from '../../data.json';

//Process Data
var lastMatchMessages = UserData.Messages[Object.keys(UserData.Messages)[0]];
var messagesToUniqueMatches = lastMatchMessages['messages'][0]['to'];

//repeat code
var numMatches = 0;
for (const match in UserData.Usage.matches) {
    numMatches += UserData.Usage.matches[match];
};

var matchesIgnored = numMatches - messagesToUniqueMatches;

const data = {
    labels: ['Matches Messaged', 'Matches Ignored'],
    datasets: [
      {
        data: [messagesToUniqueMatches, matchesIgnored],
        backgroundColor: ['#FF6384', '#48A6F2'],
        hoverBackgroundColor: ['#FF6384', '#48A6F2'],
      },
    ],
  };
  
  export { data };
  