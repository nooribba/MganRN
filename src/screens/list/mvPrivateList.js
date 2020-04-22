import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');

class MvPrivateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      thumblImgs1: null,
    };
  }
  
  async componentDidMount() {
    const response1 = await axios.get(
      "https://google-photos-album-demo.glitch.me/XPULvAbgzdJ2dQXZ8"
    );
    const response2 = await axios.get(
      "https://google-photos-album-demo.glitch.me/aaajngABGW5rYz5T8"
    );

    if (response2 && response2.data && response2.data.length > 0) {
      this.setState({
        thumblImgs2: response2.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
    if (response1 && response1.data && response1.data.length > 0) {
      this.setState({
        thumblImgs1: response1.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
  }

  render() {
    const { thumblImgs1, thumblImgs2, index } = this.state;
   
    return (
      thumblImgs1 && thumblImgs2 ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('PrivateLobby')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Private Video</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ScrollView>
            <ListItem itemDivider>
              <Text style={styles.listDivider}>결혼 후</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'이태민 탄생순간', mvDesc: '이태민 인정병원 분만실\n2019.09.01 21:14', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=1683_Q5UuyPO7xSF6qez52IdPRcSbR4rg'})}>   
                      <ImageBackground source={thumblImgs2[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'제주 스킨스쿠버', mvDesc: '오픈워터 자격증 취득(올리브낭/퍼플)\n2018.11.09~11', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=10oQnuGeD2jh_BhzwlRVK9OVVYIodbcqW'})}>   
                      <ImageBackground source={thumblImgs2[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
            
            <ListItem itemDivider>
              <Text style={styles.listDivider}>결혼 전</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'고리합창단(수진)', mvDesc: '고리합창단 노량진 성당 성가\n2017.12.25', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1GfF_m7P503lvqVbsyes4AvIwQK8JH-CB'})}>   
                      <ImageBackground source={thumblImgs1[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body/>
                </ListItem>
                
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
      :
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Private Video</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{ flex: 1, width: width, height: height - 170, backgroundColor: 'black' }} >
            <Animated.Image
              source={require('../../../assets/images/loading.gif')}
              style={{ height: height*0.56, width: width, marginTop: 50, backgroundColor: 'black', zIndex: 1 }}
            />
          </View>
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

export default MvPrivateList;