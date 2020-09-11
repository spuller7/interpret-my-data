//Load in data
import UserData from '../../data.json';

//Process Data
var messagesReceivedPerDay = UserData.Usage.messages_received;
var messagesSentPerDay = UserData.Usage.messages_sent;

var totalMessagesReceived = 0;
var totalMessagesSent = 0;

Object.keys(messagesReceivedPerDay).forEach(function(date) {
    totalMessagesReceived += messagesReceivedPerDay[date];
    totalMessagesSent += messagesSentPerDay[date];
});

const data = {
    labels: ['Messages Sent', 'Messages Received'],
    datasets: [
      {
        data: [totalMessagesReceived, totalMessagesSent],
        backgroundColor: ['#FF6384', '#48A6F2'],
        hoverBackgroundColor: ['#FF6384', '#48A6F2'],
      },
    ],
  };
  
  export { data };
  