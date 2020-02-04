import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/camera_side.png");
const tmImage = require("../../../assets/images/mgan_thumb.jpg");
const mgImage = require("../../../assets/images/mg_thumb.jpg");
const djImage = require("../../../assets/images/dj_thumb.jpg");
const usImage = require("../../../assets/images/us_thumb.jpg");

class GlLobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    };
  }
  toggleTab1() {
    console.info('tab1');
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    console.info('tab2');
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    console.info('tab3');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    console.info('tab4');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    // let AppComponent = null;
    // if (this.state.tab1) {
    //   console.info('tab1 render');
    //   AppComponent = First;
    // } else if(this.state.tab2) {
    //   console.info('tab2 render');
    //   AppComponent = Second;
    // } else if(this.state.tab3) {
    //   console.info('tab3 render');
    //   AppComponent = First;
    // } else {
    //   console.info('tab4 render');
    //   AppComponent = Second;
    // }
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>사진첩</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <ScrollView>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>       
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={{ marginTop: -4, marginBottom: -4 }}>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>이태민씨 기록</Text>
                      <Text note>Anthony</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={tmImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={{ marginTop: -16, marginBottom: -16 }}>
                      <Icon active name="camera" />
                      <Text>2019.09.01 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>       
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={{ marginTop: -4, marginBottom: -4 }}>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>이민혁 김수진 기록</Text>
                      <Text note>Mikhail ♡ Grace</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={mgImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={{ marginTop: -16, marginBottom: -16 }}>
                      <Icon active name="camera" />
                      <Text>2017.12.24 / 2018.09.16 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>         
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={{ marginTop: -4, marginBottom: -4 }}>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>대전댁/바드실 기록</Text>
                      <Text note>김종원 ♡ 류효선</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={djImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={{ marginTop: -16, marginBottom: -16 }}>
                      <Icon active name="camera" />
                      <Text>1985.08.09 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>       
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={{ marginTop: -4, marginBottom: -4 }}>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>음성댁 기록</Text>
                      <Text note>이창현 ♡ 김명자</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={usImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={{ marginTop: -16, marginBottom: -16 }}>
                      <Icon active name="camera" />
                      <Text>1984.09.27 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
          </ScrollView>
        </Content>


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => {
                                                              this.toggleTab1();
                                                              this.props.navigation.navigate('Main');
                                                            }}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {
                                                              this.toggleTab2();
                                                              this.props.navigation.navigate('GlLobby');
                                                            }}>
              <Icon active={this.state.tab2} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => {
                                                              this.toggleTab3();
                                                              this.props.navigation.navigate('MvLobby');
                                                            }}>
              <Icon active={this.state.tab3} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              this.toggleTab4();
                                                              //this.props.navigation.navigate('IconText');
                                                            }}>
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default GlLobby;
