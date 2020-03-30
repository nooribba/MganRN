import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, StyleSheet, PixelRatio } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import styles from "./styles";
import VideoPlayer from 'react-native-video-controls';

//import PXVideo from 'accessible-html5-video-player';
//https://github.com/paypal/accessible-html5-video-player

//sw360/sh760/ww360/wh712
const { width, height } = Dimensions.get('window');
//const { width, height } = Dimensions.get('screen');
//const { ww, wh } = Dimensions.get('window');
const inMedia = require("../../../assets/images/lights.mp4");
const statusBarSize = 25;

class MvPlayer extends Component {
  videoPlayer;
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'cover',//cover, content
      width: Dimensions.get('screen').width,  //window
      //height: Dimensions.get('screen').width / (16 / 9.5),
      height: this.props.navigation.getParam('vertical') ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5),
      mvTitle: this.props.navigation.getParam('mvTitle'),
      mvDesc: this.props.navigation.getParam('mvDesc'),
      mvUrl: this.props.navigation.getParam('mvUrl'),
      vertical: this.props.navigation.getParam('vertical'),
      //rotate: '0deg',
    };
    this.getDimension();
  }

  getDimension() {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      this.width = Math.round(Dimensions.get('window').height);
      this.height = Math.round(Dimensions.get('window').width);
    }
    else {
      this.width = Math.round(Dimensions.get('window').width);
      this.height = Math.round(Dimensions.get('window').height);
    }
  }

  
  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };
  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };
  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };
  onProgress = data => {
    const { isLoading, playerState } = this.state;
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  onLoadStart = data => this.setState({ isLoading: true });
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED }); //PLAYING, PAUSED, ENDED,(0,1,2)
  onError = () => alert('!Error>', error);
  exitFullScreen = () => {};
  enterFullScreen = () => {};
  onFullScreen = () => {
    if (this.state.screenType == 'contain'){
      //this.setState({ screenType: 'cover', isFullScreen: false, width: Dimensions.get('screen').width, height: this.props.navigation.getParam('vertical') ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5), rotate: this.props.navigation.getParam('vertical') ? '0deg' : '-90deg' });
      //this.setState({ screenType: 'cover', isFullScreen: false, width: Dimensions.get('screen').width, height: this.props.navigation.getParam('vertical') ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5), rotate: '0deg' });
      this.setState({ screenType: 'cover', isFullScreen: false, width: width, height: this.state.vertical ? width * ((width*(width/height))/96) : width / ((width*(width/height))/96) });
      //this.videoPlayer.dismissFullscreenPlayer();
    }else{
      //this.setState({ screenType: 'content', isFullScreen: true });
      //this.setState({ screenType: 'contain', isFullScreen: true, width: this.state.vertical ? width : width * ((width*(width/height))/96), height: this.state.vertical ?  width * ((width*(width/height))/96) : width });
      this.setState({ screenType: 'contain', isFullScreen: true, width: this.state.vertical ? width : width * ((width*(width/height))/96), height: this.state.vertical ?  width * ((width*(width/height))/96) : width });
      //this.videoPlayer.presentFullscreenPlayer();
    } 
  };
  renderToolbar = () => (
    <View style={styles.toolbar}>
      <Text>즐거운 감상 되세요♡</Text>
      {/* <Text>{width*(width/height)}/{(width*(width/height))*1.04}</Text> */}
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { isFullScreen } = this.state;
    return (
      isFullScreen?
      <View
        style={{flex: 1, backgroundColor: "#000"}}>
        <StatusBar hidden={true} />
        <View style={{flex: 1, 
                      transform: [{ rotateZ: this.state.vertical?'0deg':'90deg'}, 
                        //{ translateY: ((PixelRatio.getPixelSizeForLayoutSize(height)-PixelRatio.getPixelSizeForLayoutSize(width))/PixelRatio.get()) - statusBarSize },
                        { translateY: this.state.vertical?0:((PixelRatio.getPixelSizeForLayoutSize(height)-PixelRatio.getPixelSizeForLayoutSize(width))/PixelRatio.get())+18 },
                      ],
                      width: this.state.vertical?width:height+statusBarSize, height: this.state.vertical?height+statusBarSize:width+statusBarSize,
                      //width: 712+25, height: 360,
                      
                      //marginTop: this.state.vertical?1:height-width, 
                      //marginTop: height-width,
                      //underlayColor:"transparent", 
                      zIndex:9999 }}>
          <VideoPlayer
            //source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            //source={ inMedia }
            source={{ uri: this.state.mvUrl }}
            navigator={ this.props.navigator }
            onBack={this.onBack}
            //disableBack={true}
            onEnterFullscreen={this.onFullScreen}
            onExitFullscreen={this.onFullScreen}
            fullscreen={isFullScreen}
            resizeMode={this.screenType}
            seekColor={"#cdc4ff"}
            repeat={true}
            // style={{ alignSelf: "stretch", height: this.state.vertical?height:width+20, marginBottom: this.state.vertical?0:27 }}
            // videoStyle={{ alignSelf: "stretch", height: this.state.vertical?height:width+20 }}
            style={{ alignSelf: "stretch", height: this.state.vertical?height+statusBarSize:width+statusBarSize, marginBottom: this.state.vertical?0:height-width+statusBarSize }}
            videoStyle={{ alignSelf: "stretch", height: this.state.vertical?height+statusBarSize
            :width+statusBarSize }}
            // style={{ alignSelf: "stretch", height: 360 }}
            // videoStyle={{ alignSelf: "stretch", height: 360 }}
          />
        </View>
      </View>
      :
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.mvTitle}</Title>
          </Body>
          <Right/>
        </Header>

        <StatusBar barStyle="dark-content" hidden={false} />
        <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView>            
              <View style={{ width: width, height: this.state.vertical?height/1.35:height/1.4, marginLeft: -8 }}>
                <VideoPlayer
                    //source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    //source={ inMedia }
                    source={{ uri: this.state.mvUrl }}
                    navigator={ this.props.navigator }
                    onBack={this.onBack}
                    //disableBack={true}
                    onEnterFullscreen={this.onFullScreen}
                    onExitFullscreen={this.onFullScreen}
                    fullscreen={isFullScreen}
                    resizeMode={this.screenType}
                    seekColor={"#cdc4ff"}
                    repeat={true}
                    style={{ alignSelf: "stretch", height: this.state.vertical?height/1.35:height/1.4, marginTop: this.state.vertical?-5:-1 }}
                    videoStyle={{width: width, height: this.state.vertical?height/1.35:height/1.4}}
                />
              </View>
              <ScrollView style={{backgroundColor: '#000'}}>
                <Text style={{color: '#FFF'}}>{this.state.mvDesc}</Text>
              </ScrollView>
          </SafeAreaView>
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

export default MvPlayer;