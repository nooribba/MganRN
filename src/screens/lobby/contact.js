import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem } from "native-base";
import { ScrollView, View, Dimensions, Image, TouchableWithoutFeedback, Linking, ImageBackground } from 'react-native';
//import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
const ct = require("../../../assets/images/contact_top.png");
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
            <TouchableWithoutFeedback onPress={() => {cnt=0;}}>
              <Card style={{ marginTop: 2, backgroundColor: '#000' }}>
                {/* <CardItem style={{ justifyContent: 'center', backgroundColor: '#000', marginLeft: 4, marginRight: 1, marginBottom: 5, marginTop: 1 }}> */}
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#000', marginBottom: 1, marginTop: 1 }}>
                  {/* <Body> */}
                    {/* <Image source={ct} style={[styles.imageBlockCt, {width: width - 49, height: height / 3.85, backgroundColor: '#000'}]}/> */}
                    <Image source={ct} style={[styles.imageBlockCt, {width: width - 47, height: height / 3.85, backgroundColor: '#000'}]}/>
                  {/* </Body> */}
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>

            
            {/* <Card style={{alignItems: 'baseline', marginLeft: 6, marginRight: 6, marginTop: 5, marginBottom: -5, borderRadius: 1, backgroundColor: "#fff" }}> */}
            <Card style={{alignItems: 'baseline', marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: -5, borderRadius: 1, backgroundColor: "#fff" }}>
              <TouchableWithoutFeedback onPress={() => {cnt++;}}>
                <CardItem style={{ justifyContent: 'center', backgroundColor: "#fff" }}>
                  {/* <Body style={{ marginTop: -18, marginBottom: -15, marginLeft: -2 }}> */}
                  <Body style={{ marginTop: -19, marginBottom: -16, marginLeft: -2 }}>
                    {/* <Image source={we} style={[styles.imageBlock, {width: width - 65, height: height / 2.49}]}/> */}
                    {/* <Image source={we} style={[styles.imageBlock, {width: width - 64, height: height / 2.5}]}/> */}
                    {/* <Image source={we} style={[styles.imageBlock, {width: width - 63, height: height / 2.55}]}/> */}
                    <Image source={we} style={[styles.imageBlock, {width: width - 62, height: height / 2.58}]}/>
                  </Body>
                </CardItem>
              </TouchableWithoutFeedback> 


              <CardItem noBorder style={{alignContent:'stretch', backgroundColor: "#fff"}}>
              {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
                <Left style={{marginLeft: 45}}>
                  <Button
                    onPress={() => Linking.openURL('mailto:84mikhail@gmail.com') }
                    round
                    //flex middle
                    onlyIcon
                    shadowless
                    color={'#3434fa'}
                    // style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: -5, marginBottom: 0 }]}
                    style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: -6, marginBottom: -1 }]}
                  >
                    <Icon
                      active
                      name="logo-google"
                      style={{ color: "#FFF", fontSize: 34, width: 31, alignSelf: "center", marginLeft: 20, marginBottom: 0 }}
                    />
                  </Button>
                </Left>
                <Body />
                <Right style={{marginRight: 45}}>
                  <Button
                    onPress={() => 
                      {
                        if(cnt==10){
                          this.props.navigation.navigate('PrivateLobby')
                        }else{
                          Linking.openURL('https://github.com/nooribba/MganRN')
                        }
                      }
                    }
                    round
                    //flex middle
                    onlyIcon
                    shadowless
                    color={'black'}
                    // style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: -5, marginBottom: 0 }]}
                    style={[styles.social, styles.shadow, { alignSelf: "center", marginLeft: 16, marginRight: 16, marginTop: -6, marginBottom: -1, color: 'black', backgroundColor: 'black' }]}
                  >
                    <Icon
                      active
                      name="logo-github"
                      style={{ color: "#FFF", fontSize: 34, width: 31, alignSelf: "center", marginLeft: 17, marginBottom: 1 }}
                    />
                  </Button>
                </Right>
              {/* </View> */}
              </CardItem>
              
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