import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/camera_side.png");
//const tmImage = require("../../../assets/images/mgan_thumb.jpg");
const mgImage = require("../../../assets/images/mg_thumb.jpg");
const djImage = require("../../../assets/images/dj_thumb.jpg");
//const usImage = require("../../../assets/images/us_thumb.jpg");

class PrivateLobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer();}}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Private Memory</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#cdc4ff" }}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('GlPrivateList')}>       
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={styles.cardTop}>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>우리 사진첩</Text>
                      <Text note>Mikhail ♥ Grace</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 205,
                      flex: 1
                    }}
                    source={mgImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={styles.cardBottom}>
                      <Icon active name="camera" />
                      <Text>2017.12.24 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPrivateList')}>       
              <Card style={styles.mb}>
                <CardItem>
                  <Left style={styles.cardTop}>
                    <Thumbnail source={logo} />
                    <Body>
                    <Text>우리 영상</Text>
                      <Text note>Mikhail ♥ Grace</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 205,
                      flex: 1
                    }}
                    source={djImage}
                  />
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Body>
                    <Button transparent style={styles.cardBottom}>
                      <Icon active name="camera" />
                      <Text>2017.12.24 ~</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
          </ScrollView>
        </Content>


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => {this.props.navigation.navigate('Main');}}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {this.props.navigation.navigate('GlLobby');}}>
              <Icon active={this.state.tab2} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => {this.props.navigation.navigate('MvLobby');}}>
              <Icon active={this.state.tab3} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {this.props.navigation.navigate('Contact');}}>
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PrivateLobby;