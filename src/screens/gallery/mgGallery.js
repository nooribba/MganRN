import React, { Component } from "react";
import axios from "axios";
import { Dimensions, View, ImageBackground, Image } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon } from "native-base";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');

class MgGallery extends Component {
  state = {
    index: 0,
    images: null,
    //imgs: null
  };

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      index: 0,
    };
    this.onChangeImage = this.onChangeImage.bind(this);
  }
  
  async componentDidMount() {
    const glCaption = this.props.navigation.getParam('glCaption');
    const glUrl = this.props.navigation.getParam('glUrl');
    const response = await axios.get(`${glUrl}`);
    if (response && response.data && response.data.length > 0) {
      this.setState({
        images: response.data.map(url => ({
          source: {uri: `${url}`},
          caption: `${glCaption}`,
          dimensions: { width: 2400, height: 1800},
        }))
      });
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
    const { images } = this.state;
    const glTitle = this.props.navigation.getParam('glTitle');
    return (
      images ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{glTitle}</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <View style={{ flex: 1, width: width, backgroundColor: 'black' }} >
            <GallerySwiper
                  style={{ flex: 1, backgroundColor: 'black', height: height / 1.269 }}//1.3686 1.3986
                  images={images}
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
            <Button active={this.state.tab1} onPress={() => {this.props.navigation.navigate('Main')}}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {this.props.navigation.navigate('GlLobby')}}>
              <Icon active={this.state.tab2} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => {this.props.navigation.navigate('MvLobby')}}>
              <Icon active={this.state.tab3} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {this.props.navigation.navigate('Contact')}}>
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
            <Title>{glTitle}</Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <View style={{ flex: 1, width: width, height: height - 170, backgroundColor: 'black' }} >
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
            <Button active={this.state.tab4} onPress={() => {this.props.navigation.navigate('Contact')}}>
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MgGallery;