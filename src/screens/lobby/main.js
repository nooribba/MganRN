import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, Dimensions, ScrollView, View, StatusBar, ImageBackground, Animated } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, H3, Body, Left, Right, Icon, ListItem } from "native-base";
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');

class main extends Component {
  state = {
    index: 0,
    images: null,
    imgs: null
  };

  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      index: 0,
      images: [
        {
            caption: '행복한 우리가족의 일상을 기록하고 추억하기 위한 개인사용 목적 앱 입니다. 즐겁게 감상해 주시기 바랍니다 :) \n어떠한 의견도 항상 열려 있습니다. (프로필 > Contact)',
            source: require('../../../assets/images/home_1.jpg'),
            dimensions: { width: 2400, height: 1800}, /* 540 720 */
        }
      ]
    };
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  toggleTab1() {
    console.info('tab1');
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    console.info('tab2');
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    console.info('tab3');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    console.info('tab4');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/BmxoTb4CUc4DJzBN7"/*z12jt3XBTStgzNmY8*/
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        imgs: response.data.map(url => ({
          source: {uri: `${url}`},
          caption: '이태민(안토니오/Anthony) Hot & Best Cut',
          dimensions: { width: 2400, height: 1800},
        }))
      });

      this.setState({
        images: this.state.images.concat(this.state.imgs)
      })
    }
  }

  onChangeImage (index) {
    this.setState({ index });
  }

  renderError () {
      return (
          <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>This image can't be displayed...</Text>
              <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... Contact administrator :)</Text>
          </View>
      );
  }
  get caption () {
      const { images, index } = this.state;
      return (
          //<View style={{ bottom: 0, height: 75, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
          <View style={{ bottom: 0, height: 70, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', position: 'absolute', justifyContent: 'flex-start' }}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 14, fontStyle: 'italic' }}>{ (images[index] && images[index].caption) || '' } </Text>
          </View>
      );
  }

  get galleryCount () {
      const { index, images } = this.state;
      return (
          <View style={{ top: 0, height: 32, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { images.length }</Text>
          </View>
      );
  }


  render() {
    // let AppComponent = null;
    // if (this.state.tab1) {
    //   console.info('tab1 render');
    //   AppComponent = First;
    // } else if(this.state.tab2) {
    //   console.info('tab2 render');
    //   AppComponent = Second;
    // } else if(this.state.tab3) {
    //   console.info('tab3 render');
    //   AppComponent = First;
    // } else {
    //   console.info('tab4 render');
    //   AppComponent = Second;
    // }
    const { imgs } = this.state;
    return (
      imgs ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>메인</Title>
          </Body>
          <Right />
        </Header>
        
        {/* <Content padder /> */}
        <Content>
          {/* {AppComponent} */}
          {/* {this.state.tab1 && <Text>Tab1 Selected</Text>}
          {this.state.tab2 && <Text>Tab2 Selected</Text>}
          {this.state.tab3 && <Text>Tab3 Selected</Text>}
          {this.state.tab4 && <Text>Tab4 Selected</Text>} */}
          <H3 style={{alignSelf: "center", marginTop: 8, marginBottom: 7}}>LEE.KIM.RYU FAMILY</H3>
          <View style={{ flex: 1, width: width, backgroundColor: 'black' }} >
            <GallerySwiper
                  style={{ flex: 1, backgroundColor: 'black', height: height / 1.3686 }}//1.3686 1.3986
                  images={this.state.images}
                  onEndReached={() => {
                  // add more images when scroll reaches end
                  }}
                  initialPage={0}
                  errorComponent={this.renderError}
                  onPageSelected={this.onChangeImage}
                  sensitiveScroll={false}
              />
              { this.galleryCount }
              { this.caption }
          </View>
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
            <Button active={this.state.tab3} onPress={() => {
                                                              //this.toggleTab2();
                                                              this.props.navigation.navigate('GlLobby');
                                                            }}>
              <Icon active={this.state.tab3} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {
                                                              //this.toggleTab3();
                                                              this.props.navigation.navigate('MvLobby');
                                                            }}>
              <Icon active={this.state.tab2} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              //this.toggleTab4();
                                                              //this.props.navigation.navigate('IconText');
                                                            }}>
              {/* apps paw contact logo-github */}
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
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>메인</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <H3 style={{alignSelf: "center", marginTop: 8, marginBottom: 7}}>LEE.KIM.RYU FAMILY</H3>
          <View style={{ flex: 1, width: width, height: height - 220, backgroundColor: 'black' }} >
            <Animated.Image
              source={require('../../../assets/images/loading.gif')}
              style={{ height: height*0.55, width: width, zIndex: 1 }}
            />
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              this.toggleTab4();
                                                              //this.props.navigation.navigate('IconText');
                                                              //건강하고 행복하게
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

export default main;
