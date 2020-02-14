import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem } from "native-base";
import { ScrollView, View, Dimensions, Image, TouchableWithoutFeedback, Linking, ImageBackground } from 'react-native';
//import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/test1.png");
const we = require('../../../assets/images/JJH_9999.jpg');
var cnt = 0;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    };
  }
    
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Contact</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <ScrollView>
            <TouchableWithoutFeedback onPress={() => {cnt=0;this.props.navigation.navigate('GlLobby');}}>
              <Card style={{ marginTop: 29 }}>
                <CardItem style={{ justifyContent: 'center' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={logo}
                      style={[styles.imageBlock, { width: width - 27, height: 160 }]}
                      imageStyle={{ width: width - 27, height: 160 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>~</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>

            
            <Card style={{alignItems: 'baseline', marginLeft: 6, marginRight: 6, marginTop: 3, marginBottom: -5, borderRadius: 1, }}>
              <TouchableWithoutFeedback onPress={() => {cnt++;}}>
                <CardItem style={{ justifyContent: 'center', }}>
                  <Body style={{ marginTop: -18, marginBottom: -13, marginLeft: -2 }}>
                    <Image source={we} style={[styles.imageBlock, {width: width - 65, height: height / 2.49}]}/>
                  </Body>
                </CardItem>
              </TouchableWithoutFeedback> 

              {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
                <Body>
                <Button
                  onPress={() => Linking.openURL('mailto:84mikhail@gmail.com') }
                  round
                  onlyIcon
                  shadowless
                  color={'#3434fa'}
                  style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: 7, marginBottom: 11 }]}
                >
                  <Icon
                    active
                    name="logo-google"
                    style={{ color: "#FFF", fontSize: 36, width: 33, alignSelf: "center", marginLeft: 20, marginBottom: 1 }}
                  />
                </Button>
                <Button
                  onPress={() => 
                    {
                      if(cnt==10){
                        navigation.navigate('GlLobby') //MgPrivate
                      }else{
                        Linking.openURL('https://github.com/nooribba/mgan')
                      }
                    }
                  }
                  round
                  onlyIcon
                  shadowless
                  color={'#000'}
                  style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: 7, marginBottom: 11 }]}
                >
                  <Icon
                    active
                    name="logo-github"
                    style={{ color: "#FFF", fontSize: 36, width: 33, alignSelf: "center", marginLeft: 20, marginBottom: 1 }}
                  />
                </Button>
                </Body>
              {/* </View> */}
            </Card>
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

export default Contact;