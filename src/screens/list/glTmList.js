import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, Card, CardItem } from "native-base";
import { ScrollView, View, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
//import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
//const logo = require("../../../assets/images/test1.png");
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
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('GlLobby')}>
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('GlTmList')}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13 }}>
                    <ImageBackground
                      source={yearThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이태민</Text>
                        <Text style={styles.textThumb}>돌</Text>
                        <Text style={styles.textThumb}>(좀 더 크면 만나요~)</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('TmGallery',{glTitle:'100일', glCaption:'이태민 100일 파스텔 스튜디오 목동점\n(4차에 걸쳐 촬영)', glUrl:'https://google-photos-album-demo.glitch.me/BmxoTb4CUc4DJzBN7'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('TmGallery',{glTitle:'50일', glCaption:'이태민 50일 파스텔 스튜디오 목동점', glUrl:'https://google-photos-album-demo.glitch.me/3NZm66RmUArKhwrv6'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
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
            </TouchableHighlight> 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('TmGallery',{glTitle:'본아트', glCaption:'이태민 본아트 파스텔 스튜디오 목동점', glUrl:'https://google-photos-album-demo.glitch.me/9VEAacUd6HmvYQdj6'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
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
            </TouchableHighlight>
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

export default GlTmList;