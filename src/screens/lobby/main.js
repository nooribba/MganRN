import React, { Component } from "react";
import axios from "axios";
import { Dimensions, View, Image } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, H3, Body, Left, Right, Icon } from "native-base";
import styles from "./styles";

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
            caption: '행복한 우리가족의 일상을 기록하고 추억하기 위한 개인사용 목적 앱 입니다. 즐겁게 감상해 주시기 바랍니다 :)',
            source: require('../../../assets/images/home_1.jpg'),
            dimensions: { width: 2400, height: 1800}, /* 540 720 */
        }
      ]
    };
    this.onChangeImage = this.onChangeImage.bind(this);
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
          <View style={{ bottom: 0, height: 55, backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', position: 'absolute', justifyContent: 'flex-start' }}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>{ (images[index] && images[index].caption) || '' } </Text>
          </View>
      );
  }

  get galleryCount () {
      const { index, images } = this.state;
      return (
          <View style={{ top: 0, height: 32, backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { images.length }</Text>
          </View>
      );
  }


  render() {
    const { imgs } = this.state;
    return (
      imgs ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer();}}>
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
          <View style={{ flex: 1, width: width, backgroundColor: 'black' }} >
            <GallerySwiper
                  style={{ flex: 1, backgroundColor: 'black', height: height / 1.3486 }}//1.3686 1.3986
                  images={this.state.images}
                  onEndReached={() => {}}
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
          <H3 style={{alignSelf: "center", marginTop: 9, marginBottom: 7}}>LEE.KIM.RYU FAMILY</H3>
          <View style={{ flex: 1, width: width, height: height - 220, backgroundColor: 'black' }} >
            <Image
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
            <Button active={this.state.tab4} onPress={() => {
                                                              this.props.navigation.navigate('Contact');
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