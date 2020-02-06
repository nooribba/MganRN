import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/test1.png");
const bornThumb = require('../../../assets/images/mgan_born_thumb.jpg');
const fiftyThumb = require('../../../assets/images/mgan_fifty_thumb.jpg');
const hundredThumb = require('../../../assets/images/mgan_1hundred_thumb.jpg');
const yearThumb = require('../../../assets/images/mg_thumb.jpg');


class GlTmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      //dolImgs: null, //일상(돌까지 등)
    };
  }
  
  

  render() {
    //const { dolImgs, index } = this.state;
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GlLobby')}>
              {/* <Card style={styles.mb10}> */}
              <Card>
                <CardItem style={{ justifyContent: 'center' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13 }}>
                    <ImageBackground
                      source={yearThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      //style={[styles.imageBlock, { width: width - (16 * 2), height: 252 }]}
                      //imageStyle={{ width: width - (16 * 2), height: 240 }}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이태민</Text>
                        <Text style={styles.textThumb}>돌</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GlLobby')}>
              <Card>
                <CardItem style={{ justifyContent: 'center' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={hundredThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이태민</Text>
                        <Text style={styles.textThumb}>100일</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GlLobby')}>
              <Card>
                <CardItem style={{ justifyContent: 'center' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={fiftyThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이태민</Text>
                        <Text style={styles.textThumb}>50일</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GlLobby')}>
              <Card>
                <CardItem style={{ justifyContent: 'center' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={bornThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이태민</Text>
                        <Text style={styles.textThumb}>본아트</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
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
            <Button active={this.state.tab4} onPress={() => {  }}>
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default GlTmList;