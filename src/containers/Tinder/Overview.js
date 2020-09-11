import React, { Component, lazy } from 'react';
import Data from './data.json';
import { Row, Col } from 'antd';

import Dropzone from '@imd/components/uielements/dropzone';
import { notification } from '@imd/components';
import PageHeader from '@imd/components/utility/pageHeader';
import Box from '@imd/components/utility/box';
import LayoutWrapper from '@imd/components/utility/layoutWrapper';
import ContentHolder from '@imd/components/utility/contentHolder';
import DropzoneWrapper from './Overview.styles';
import SaleWidget from '@imd/containers/Widgets/Sale/SaleWidget';

import basicStyle from '@imd/assets/styles/constants';
import IsoWidgetsWrapper from '@imd/containers/Widgets/WidgetsWrapper';

import CardWidget from '@imd/containers/Widgets/Card/CardWidget';
import IntlMessages from '@imd/components/utility/intlMessages';
import LikeAndMatchesLine from './Components/LikeAndMatchesLine/LikeAndMatchesLine';

//Charts
const TotalMatchesAndImpressionLine = lazy(() => import('./Components/TotalMatchesAndImpressionLine/TotalMatchesAndImpressionLine'));
const MessagePie = lazy(() => import('./Components/MessagePie/MessagePie'));
const MessageMatchPie = lazy(() => import('./Components/MessageMatchPie/MessageMatchPie'));
const MatchesBar = lazy(() => import('./Components/MatchesBar/MatchesBar'));
const SwipePie = lazy(() => import('./Components/SwipePie/SwipePie'));

export default class extends Component {
  render() {

    var numMatches = 0;
    for (const match in Data.Usage.matches) {
      numMatches += Data.Usage.matches[match];
    };

    var numMessages = 0;
    for (const match in Data.Usage.messages_received) {
      numMessages += Data.Usage.messages_received[match];
    };

    for (const match in Data.Usage.messages_received) {
      numMessages += Data.Usage.messages_received[match];
    };

    var numImpressions = 0;
    for (const match in Data.Usage.app_opens) {
      numImpressions += Data.Usage.app_opens[match];
    };

    const CARD_WIDGET = [
    {
      icon: 'ion-ios-people',
      iconcolor: '#F6638E',
      number: numMatches.toString(),
      text: 'widget.tinder.matches.text',
    },
    {
      icon: 'ion-chatbox',
      iconcolor: '#1069D9',
      number: numMessages.toString(),
      text: 'widget.tinder.messages.text',
    },
    {
      icon: 'ion-eye',
      iconcolor: '#FEAC01',
      number: numImpressions.toString(),
      text: 'widget.tinder.impressions.text',
    },
  ];

  const SALE_WIDGET = [
    {
      label: 'Most Messages',
      price: '25',
      details: 'widget.salewidget1.details',
      fontColor: '#F75D81',
    },
    {
      label: 'Longest Conversation',
      price: '8d 5h',
      details: 'widget.salewidget2.details',
      fontColor: '#F75D81',
    },
    {
      label: 'Average Messages',
      price: '6',
      details: 'widget.salewidget3.details',
      fontColor: '#F75D81',
    },
    {
      label: 'Most Matches In A Day',
      price: '8',
      details: 'widget.salewidget4.details',
      fontColor: '#F75D81',
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
                  number={widget.number}
                  text={<IntlMessages id={widget.text} />}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>
          <Col lg={18} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <Box style={{height: 448}} title="Total Matches and App Opens by Day">
                <ContentHolder>
                  <TotalMatchesAndImpressionLine />
                </ContentHolder>
              </Box>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
          {SALE_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id={widget.label} />}
                  price={<IntlMessages id={widget.price} />}
                  details={<IntlMessages id={widget.details} />}
                  fontColor={widget.fontColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <Box title="Total Matches and App Opens by Day">
                <ContentHolder>
                  <MatchesBar />
                </ContentHolder>
              </Box>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <Box height={450} title="Messages Sent vs Messages Received">
                <MessagePie />
              </Box>
            </IsoWidgetsWrapper>
          </Col>
          <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper> 
              <Box height={450} title="Matches Messaged vs Matches Ignored">
                  <MessageMatchPie />
              </Box>
            </IsoWidgetsWrapper>
          </Col>
          <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper> 
              <Box height={450} title="Swipe Lefts vs Swipe Rights">
                  <SwipePie />
              </Box>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={24} md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <Box title="Match Probability by Day">
                <ContentHolder>
                  <LikeAndMatchesLine />
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
