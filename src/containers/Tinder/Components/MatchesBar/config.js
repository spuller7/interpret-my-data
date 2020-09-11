//Load in data
import UserData from '../../data.json';

//Process Data
var messages = UserData.Messages;
var matches = [];
var numMessagesForMatches = [];

Object.keys(messages).forEach(function(match) {
    matches.push(messages[match]["match_id"]);

    var numMessages = 0;
    Object.keys(messages[match]['messages']).forEach(function(message) {
        numMessages++;
    });

    numMessagesForMatches.push(numMessages);
});

const data = {
    labels: matches,
    datasets: [
      {
        label: 'Messages',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: numMessagesForMatches,
      },
    ],
  };
  
  const barSettings = {
    height: 350,
  };
  
  export { data, barSettings };
  