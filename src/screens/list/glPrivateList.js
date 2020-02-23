import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, Card, CardItem } from "native-base";
import { ScrollView, View, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
//import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
//const logo = require("../../../assets/images/test1.png");
const jejuThumb = require('../../../assets/images/mg_jeju_thumb.jpg');
const studioThumb = require('../../../assets/images/mg_studio_thumb.jpg');
const weddingThumb = require('../../../assets/images/mg_wedding_thumb.jpg');
const maltaThumb = require('../../../assets/images/mg_malta_thumb.jpg');
const pregnantThumb = require('../../../assets/images/mg_pregnant_thumb.jpg');


class GlPrivateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    };
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('PrivateLobby')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Private Gallery</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ScrollView>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('PrivateGallery',{glTitle:'제주 스냅-Private', glCaption:'이민혁 김수진 결혼 전 제주도 스냅(제주안)', glUrl:'https://google-photos-album-demo.glitch.me/kwVwkb7KEy3TnKKE7'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13 }}>
                    <ImageBackground
                      source={jejuThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이민혁 김수진</Text>
                        <Text style={styles.textThumb}>제주 스냅</Text>
                        
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PrivateGallery',{glTitle:'Wedding(식전)-Private', glCaption:'이민혁 김수진 Wedding 식전 스튜디오 촬영', glUrl:'https://google-photos-album-demo.glitch.me/2Ugo5g3m6auDZLRp8'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={studioThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이민혁 김수진</Text>
                        <Text style={styles.textThumb}>Wedding - 식전 스튜디오</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PrivateGallery',{glTitle:'Wedding(본식)-Private', glCaption:'이민혁 김수진 Wedding 본식 앨범 촬영\n강남 서울 쉐라톤 팔래스 호텔(투아이즈)', glUrl:'https://google-photos-album-demo.glitch.me/jfmZqGe7tP1tBfGcA'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={weddingThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이민혁 김수진</Text>
                        <Text style={styles.textThumb}>Wedding - 본식앨범</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight> 
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PrivateGallery',{glTitle:'허니문(몰타)-Private', glCaption:'이민혁 김수진 허니문 스냅 촬영(몰타)', glUrl:'https://google-photos-album-demo.glitch.me/NNcUwDXZwUj6Qo147'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={maltaThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이민혁 김수진</Text>
                        <Text style={styles.textThumb}>허니문 - 몰타스냅</Text>
                      </View>
                    </ImageBackground>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PrivateGallery',{glTitle:'만삭(이태민)-Private', glCaption:'만삭 촬영(이태민) 파스텔 스튜디오 목동점', glUrl:'https://google-photos-album-demo.glitch.me/JguKeK1jFk5Fvar5A'})}>
              <Card>
                <CardItem style={{ justifyContent: 'center', backgroundColor: '#cdc4ff' }}>
                  <Body style={{ marginTop: -13, marginBottom: -13}}>
                    <ImageBackground
                      source={pregnantThumb}
                      style={[styles.imageBlock, { width: width - 27, height: 220 }]}
                      imageStyle={{ width: width - 27, height: 220 }}
                      >
                      <View style={styles.categoryTitle}>
                        <Text style={styles.textThumb}>이민혁 김수진</Text>
                        <Text style={styles.textThumb}>만삭 - 파스텔</Text>
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

export default GlPrivateList;