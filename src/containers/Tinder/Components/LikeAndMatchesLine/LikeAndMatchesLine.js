import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { data, options } from './config';

export default class LikeAndMatchesLine extends Component {
  render() {
    return <Line data={data} options={options} height={90} />;
  }
}
