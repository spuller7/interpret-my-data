import React, { Component } from 'react';
import LayoutContentWrapper from '@imd/components/utility/layoutWrapper';
import LayoutContent from '@imd/components/utility/layoutContent';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Blank Page</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
