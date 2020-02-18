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
      dolImgs: null,
    };
  }
  
  async componentDidMount() {
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/C3qaNXJEny3HtecG6"
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        dolImgs: response.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
  }

  render() {
    const { dolImgs, index } = this.state;
    //const dHeight = width / (16 / 9.5);
    //const vHeight = width * (16 / 9.5);
    return (
      dolImgs ?
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
              <Text style={styles.listDivider}>돌</Text>
            </ListItem>
                <ListItem last>
                  <Left>
                    <Thumbnail square large source={dolImgs[3].thumbUrl} style={styles.listThumb} />
                    <Text style={styles.text}>돌 이후 업데이트</Text>
                  </Left>
                </ListItem>
              
            <ListItem itemDivider>
              <Text style={styles.listDivider}>100일</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    {/* <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTmPlayer',{mvTitle:'세로 테스트', mvUrl:'https://drive.google.com/uc?export=download&id=1-WlKIutQD65PbTSf0VqjrC6AUOjo7bJW'})}>    */}
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'50일 스튜디오', mvDesc: '이태민 베이비파스텔 목동점 50일 스튜디오\n2019.10.26', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=1096Ymke2ZO3IZZJBGPsyJJI57nzIEJZT'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body />
                </ListItem>
            
            <ListItem itemDivider>
              <Text style={styles.listDivider}>50일</Text>
            </ListItem>
                <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'36일(로토토&무드등)', mvDesc: '신정동 우리집\n2019.10.06', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=127fNzdtD-T195X2M_yfR3_l_D9NFPxlb'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body/>
                </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'36일(로토토)', mvDesc: '신정동 우리집\n2019.10.06', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=124sny7WHVt6ikv5Cvn091Pdo1kpege3h'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'34일(흑백모빌)', mvDesc: '신정동 우리집\n2019.10.04', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=11x9ImN4dWUADFrAaO088fnUgjcWMEZqb'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
              
            <ListItem itemDivider>
              <Text style={styles.listDivider}>조리원</Text>
            </ListItem>
                <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'조리원(침대)', mvDesc: '르베르쏘 조리원\n2019.09.12', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=11eg_D_LwY7WgISTlNYvUBDXskpSiY2kg'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'조리원(CCTV)', mvDesc: '르베르쏘 조리원\n2019.09.06', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=11dc2ZNznBC9RkGShclHO4IWU3dnt2E46'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(신생아실)', mvDesc: '인정병원 신생아실 면회\n2019.09.03', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=11bOkzB9OTk5KEJJ_rfpJDeAh8L_j3kKf'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(신생아실)', mvDesc: '인정병원 신생아실 면회\n2019.09.02', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=11JDxiEFrBeiyPkvwYFUglkzSJ0fQ0anR'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
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
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'인정병원(분만실)', mvDesc: '인정병원 분만실 출산 직후\n2019.09.01 22:32(출생시간 21:14)', vertical: true, mvUrl:'https://drive.google.com/uc?export=download&id=11EzZVX-Qt1CrYKYxDcwrqcGoDiYemlm2'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'3D 초음파', mvDesc: '이태민 3D 초음파\n2019.06.10(189일)', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=10f9vzAZ0cWcVOhZYGJxMFHfLGInF48FT'})}>   
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
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
              style={{ height: height*0.55, width: width, zIndex: 1 }}
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