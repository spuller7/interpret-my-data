import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Dropzone from '@imd/components/uielements/dropzone';
import { notification } from '@imd/components';
import PageHeader from '@imd/components/utility/pageHeader';
import Box from '@imd/components/utility/box';
import LayoutWrapper from '@imd/components/utility/layoutWrapper';
import ContentHolder from '@imd/components/utility/contentHolder';
import DropzoneWrapper from './Overview.styles';

import basicStyle from '@imd/assets/styles/constants';
import FrappeChart from 'frappe-charts/dist/frappe-charts.min.esm';
import * as configs from './config';
import 'frappe-charts/dist/frappe-charts.min.css';
import IsoWidgetsWrapper from '@imd/containers/Widgets/WidgetsWrapper';

import CardWidget from '@imd/containers/Widgets/Card/CardWidget';
import IntlMessages from '@imd/components/utility/intlMessages';

export default class extends Component {

  componentDidMount() {
    new FrappeChart(configs.impressionsLineChart);
  }

  render() {

    const CARD_WIDGET = [
    {
      icon: 'ion-ios-people',
      iconcolor: '#42A5F5',
      number: '210',
      text: 'widget.tinder.matches.text',
    },
    {
      icon: 'ion-chatbox',
      iconcolor: '#F75D81',
      number: '540',
      text: 'widget.tinder.messages.text',
    },
    {
      icon: 'ion-trophy',
      iconcolor: '#FEAC01',
      number: 'widget.cardwidget3.number',
      text: 'widget.cardwidget3.text',
    },
  ];

    //##########
    //Dropzone
    //##########
    const componentConfig = {
      iconFiletypes: ['.json'],
      method: true,
      showFiletypeIcon: false,
      uploadMultiple: false,
      maxFilesize: 2, // MB
      maxFiles: 1,
      dictRemoveFile: 'Delete',
      dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
      postUrl: '/upload',
    };
    const djsConfig = {
      acceptedFiles: '.json',
      params: {
        account: "tinder"
      }
    };
    const eventHandlers = {
      addedfile: file => notification('success', `${file.name} added`),
      success: file =>
        notification('success', `${file.name} successfully uploaded`),
      error: error => notification('error', 'Server is not set in the demo'),
    };

    const { rowStyle, colStyle, gutter } = basicStyle;

    return (
      <LayoutWrapper>
        <PageHeader>Overview</PageHeader>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            {CARD_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>
          <Col lg={18} md={12} sm={12} xs={24} style={colStyle}>
          <IsoWidgetsWrapper>
            <Box style={{height: 448}} title={configs.impressionsLineChart.header}>
              <ContentHolder>
                <div id={configs.impressionsLineChart.parentId} />
              </ContentHolder>
            </Box>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        <Box>
          <ContentHolder>
            <DropzoneWrapper>
              <Dropzone
                config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
              />
            </DropzoneWrapper>
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  };
}
