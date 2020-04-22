import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');

class MvTmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      thumbImgs1: null,
      thumbImgs2: null,
      thumbImgs3: null,
      thumbImgs4: null,
    };
  }
  
  async componentDidMount() {
    const response4 = await axios.get(
      "https://google-photos-album-demo.glitch.me/QNPR7mt8PGNaXTGx5"
    );
    const response3 = await axios.get(
      "https://google-photos-album-demo.glitch.me/4173x4qX8UUPPbLGA"
    );
    const response2 = await axios.get(
      "https://google-photos-album-demo.glitch.me/fVHCVBPJ4kjYGSMk9"
    );
    const response1 = await axios.get(
      "https://google-photos-album-demo.glitch.me/EqtU8Az94696Px5f9"
    );
    if (response4 && response4.data && response4.data.length > 0) {
      this.setState({
        thumbImgs4: response4.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
    if (response3 && response3.data && response3.data.length > 0) {
      this.setState({
        thumbImgs3: response3.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
    if (response2 && response2.data && response2.data.length > 0) {
      this.setState({
        thumbImgs2: response2.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
    if (response1 && response1.data && response1.data.length > 0) {
      this.setState({
        thumbImgs1: response1.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
  }

  render() {
    const { thumbImgs1, thumbImgs2, thumbImgs3, thumbImgs4, index } = this.state;
    //const dHeight = width / (16 / 9.5);
    //const vHeight = width * (16 / 9.5);
    return (
      thumbImgs1 && thumbImgs2 && thumbImgs3 && thumbImgs4 ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('MvLobby')}>
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
            <ListItem itemDivider>
              <Text style={styles.listDivider}>~ 돌</Text>
            </ListItem>
                <ListItem last>
                  <Left>
                    <Thumbnail square large source={thumbImgs2[3].thumbUrl} style={styles.listThumb} />
                    <Text style={styles.text}>업데이트 준비중</Text>
                  </Left>
                </ListItem>
              
            <ListItem itemDivider>
              <Text style={styles.listDivider}>~ 100일</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'60일(분유)', mvDesc: '젖병 분유 혼자 먹기?!\n2019.10.30', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1H2NoTcE_zrH-mhnVR--VzgAq77_vbgol'})}>   
                      <ImageBackground source={thumbImgs4[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'50일 스튜디오', mvDesc: '이태민 베이비파스텔 목동점 50일 스튜디오\n실제 56일\n2019.10.26', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1096Ymke2ZO3IZZJBGPsyJJI57nzIEJZT'})}>   
                      <ImageBackground source={thumbImgs4[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
            
            <ListItem itemDivider>
              <Text style={styles.listDivider}>~ 50일</Text>
            </ListItem>
                <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'41일(기저귀 확인)', mvDesc: '신정동 우리집\n2019.10.11', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=1H1uRn_z1ed_jotLuAVIcTG7j48gjwziB'})}>   
                      <ImageBackground source={thumbImgs3[3].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'36일(울음소리)', mvDesc: '신정동 우리집\n2019.10.06', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=1Grv6bCDNcV3wuVWB2YjrhSP667dSbtLn'})}>   
                      <ImageBackground source={thumbImgs3[2].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'36일(로토토&무드등)', mvDesc: '신정동 우리집\n2019.10.06', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1Go74KFBaspXMOp1rFGKoGXFlou8IfmUD'})}>   
                      <ImageBackground source={thumbImgs3[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'34일(흑백모빌)', mvDesc: '신정동 우리집\n2019.10.04', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=1GmPhlxeY9r8yt33iBkHnVb3B7ltLohSV'})}>   
                      <ImageBackground source={thumbImgs3[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
              
            <ListItem itemDivider>
              <Text style={styles.listDivider}>~ 조리원</Text>
            </ListItem>
                <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'조리원(침대)', mvDesc: '르베르쏘 조리원\n모자동시간 원실 침대\n2019.09.12', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=11eg_D_LwY7WgISTlNYvUBDXskpSiY2kg'})}>   
                      <ImageBackground source={thumbImgs2[3].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'조리원(CCTV)', mvDesc: '르베르쏘 조리원\n2019.09.06', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1GXuxEnBNMFsjtXmN425J-WgLTirO-hui'})}>   
                      <ImageBackground source={thumbImgs2[2].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(신생아실)', mvDesc: '인정병원 신생아실 면회\n2019.09.03', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=11bOkzB9OTk5KEJJ_rfpJDeAh8L_j3kKf'})}>   
                      <ImageBackground source={thumbImgs2[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(신생아실)', mvDesc: '인정병원 신생아실 면회\n2019.09.02', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1GmOPR-L0rcIMO3yYCekmyl8srqzlu8au'})}>   
                      <ImageBackground source={thumbImgs2[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
                  
            <ListItem itemDivider>
              <Text style={styles.listDivider}>출생</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(분만실)', mvDesc: '인정병원 분만실 출산 직후\n2019.09.01 22:32(출생시간 21:14)', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=1GhRKitH0MYHrzBukiAGKs7e_U01UJ0q0'})}>   
                      <ImageBackground source={thumbImgs1[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'3D 초음파', mvDesc: '이태민 3D 초음파\n2019.06.10(189일)', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=10f9vzAZ0cWcVOhZYGJxMFHfLGInF48FT'})}>   
                      <ImageBackground source={thumbImgs1[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
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
            <Title>이태민</Title>
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

export default MvTmList;