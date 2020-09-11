import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { data, barSettings } from './config';

export default class extends Component {
  render() {
    return (
      <div>
        <Bar
          data={data}
          width={barSettings.width}
          height={barSettings.height}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
