import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/video_side.png");
const tmImage = require("../../../assets/images/mgan_thumb.jpg");
const mgImage = require("../../../assets/images/mg_thumb.jpg");
const djImage = require("../../../assets/images/dj_thumb.jpg");
const usImage = require("../../../assets/images/us_thumb.jpg");

class MvTmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>이태민</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ScrollView>
            <List style={{marginTop: -3, marginBottom: -3}}>
              <ListItem itemDivider>
                <Text>~ 돌</Text>
              </ListItem>
              <ListItem>
                <Text>10 최근 위로</Text>
              </ListItem>
              <ListItem last>
                <Text>99</Text>
              </ListItem>
              
              <ListItem itemDivider>
                <Text>~ 100일</Text>
              </ListItem>
              <ListItem>
                <Text>88</Text>
              </ListItem>
              <ListItem>
                <Text>7777</Text>
              </ListItem>
              <ListItem last>
                <Text>6666</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>조리원</Text>
              </ListItem>
              <ListItem>
                <Text>555</Text>
              </ListItem>
              <ListItem>
                <Text>444444</Text>
              </ListItem>
              <ListItem last>
                <Text>3333333</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text>출생</Text>
              </ListItem>
              <ListItem>
                <Text>22</Text>
              </ListItem>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTm3d')}>   
                <ListItem last>
                  <Text>3D 초음파</Text>
                </ListItem>
              </TouchableWithoutFeedback>
            </List>
          </ScrollView>
        </Content>

        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => {
                                                              //this.toggleTab1();
                                                              this.props.navigation.navigate('Main');
                                                            }}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {
                                                              //this.toggleTab2();
                                                              this.props.navigation.navigate('GlLobby');
                                                            }}>
              <Icon active={this.state.tab2} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => {
                                                              //this.toggleTab3();
                                                              this.props.navigation.navigate('MvLobby');
                                                            }}>
              <Icon active={this.state.tab3} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              //this.toggleTab4();
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

export default MvTmList;
