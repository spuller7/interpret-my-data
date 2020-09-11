import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { data } from './config';

export default class TotalMatchesAndImpressionLine extends Component {
  render() {
    return <Line data={data} height={90} />;
  }
}
