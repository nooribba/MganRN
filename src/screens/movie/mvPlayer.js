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
//const { width, height } = Dimensions.get('window');

//const { width, height } = Dimensions.get('screen');
//const { ww, wh } = Dimensions.get('window');
const inMedia = require("../../../assets/images/lights.mp4");
const statusBarSize = 25;

class MvPlayer extends Component {
  videoPlayer;
  width;
  height;
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
      mvTitle: this.props.navigation.getParam('mvTitle'),
      mvDesc: this.props.navigation.getParam('mvDesc'),
      mvUrl: this.props.navigation.getParam('mvUrl'),
      vertical: this.props.navigation.getParam('vertical'),
    };
    this.getDimension();
  }

  getDimension() {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      this.width = Math.round(Dimensions.get('window').width);
      this.height = Math.round(Dimensions.get('window').height);
    } else {
      this.width = Math.round(Dimensions.get('window').height);
      this.height = Math.round(Dimensions.get('window').width);
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
      this.setState({ screenType: 'cover', isFullScreen: false });
    }else{
      this.setState({ screenType: 'contain', isFullScreen: true });
    } 
  };
  renderToolbar = () => (
    <View style={styles.toolbar}>
      <Text>즐거운 감상 되세요♡</Text>
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
                        { translateY: this.state.vertical?0:((PixelRatio.getPixelSizeForLayoutSize(this.height)-PixelRatio.getPixelSizeForLayoutSize(this.width))/PixelRatio.get())+10 },
                        //{ translateY: this.state.vertical?0:((PixelRatio.getPixelSizeForLayoutSize(this.width)-PixelRatio.getPixelSizeForLayoutSize(this.height))/PixelRatio.get())+10 },
                      ],
                      //width: this.state.vertical?this.width:this.height+statusBarSize, height: this.state.vertical?this.height+statusBarSize:this.width+statusBarSize,
                      width: this.state.vertical?this.width:this.height+5, height: this.state.vertical?this.height+statusBarSize:this.width+5,
                    }}>
          <VideoPlayer
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
            style={{ alignSelf: "stretch", flex: 1, width: this.state.vertical?this.width:this.height+5,
                    //height: this.state.vertical?this.height+statusBarSize:this.width+statusBarSize, 
                    height: this.state.vertical?this.height+5:this.width+5, 
                    marginBottom: this.state.vertical?0:this.height-this.width+statusBarSize-3,
                    zIndex:9500 }}
            videoStyle={{ alignSelf: "stretch",
                         //height: this.state.vertical?this.height+statusBarSize:this.width+statusBarSize 
                         height: this.state.vertical?this.height+5:this.width+5, 
                         //zIndex:9000
                        }}
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
              <View style={{ width: this.width, height: this.state.vertical?this.height/1.35:this.height/1.4, marginLeft: -8 }}>
                <VideoPlayer
                    source={{ uri: this.state.mvUrl }}
                    navigator={ this.props.navigator }
                    onBack={this.onBack}
                    onEnterFullscreen={this.onFullScreen}
                    onExitFullscreen={this.onFullScreen}
                    fullscreen={isFullScreen}
                    resizeMode={this.screenType}
                    seekColor={"#cdc4ff"}
                    repeat={true}
                    style={{ alignSelf: "stretch", height: this.state.vertical?this.height/1.35:this.height/1.4, marginTop: this.state.vertical?-5:-1 }}
                    videoStyle={{width: this.width, height: this.state.vertical?this.height/1.35:this.height/1.4}}
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