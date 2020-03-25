import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import styles from "./styles";
import VideoPlayer from 'react-native-video-controls';

const { width, height } = Dimensions.get('screen');
//const { ww, wh } = Dimensions.get('window');
const inMedia = require("../../../assets/images/lights.mp4");

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
    //this.getDimension();
  }
  
  //sw360/sh760/ww360/wh712
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
      <Container style={styles.container, [{backgroundColor: "red" }]}>
        <StatusBar barStyle="dark-content" hidden={isFullScreen?true:false} />
        {/* <Content padder style={{ backgroundColor: "#cdc4ff" }}> */}
        <Content padder style={{ backgroundColor: "#cdc4ff", width: height-4, transform: [{rotate: isFullScreen?'90deg':'0deg'}], }}>
          {/* <View style={{ alignItems:'center', flexDirection: 'row', width: 695, backgroundColor: "green"}}> */}
          <ScrollView style={{ flex: 1, height: width-8, backgroundColor: "green", marginTop: height/2}}>
              <View style={{ flex: 1, backgroundColor: "blue", height: width-12 }}>
              {/* <View> */}
                <VideoPlayer
                    //source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    source={ inMedia }
                    navigator={ this.props.navigator }
                    onBack={this.onBack}
                    //disableBack={true}
                    onEnterFullscreen={this.onFullScreen}
                    onExitFullscreen={this.onFullScreen}
                    fullscreen={isFullScreen}
                    resizeMode={this.screenType}
                    videoStyle={{ flex: 1, height: width-13}}
                    //videoStyle={{height: isFullScreen?width+250:height/1.3}}
                />
              </View>
          </ScrollView>
        </Content>
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
            <Title>{this.state.mvTitle}</Title>
          </Body>
          <Right/>
        </Header>

        <StatusBar barStyle="dark-content" hidden={isFullScreen?true:false} />
        {/* <Content padder style={{ backgroundColor: "#cdc4ff" }}> */}
        <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView style={{alignItems:'center', flexDirection: 'column', transform: [{rotate: isFullScreen?'90deg':'0deg'}]}}>
            {/* <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}> */}
              {/* <View style={{ flex: 1, alignItems:'stretch', flexDirection: 'column', height: isFullScreen?null:height/1.47, width: isFullScreen? height/1.47:null, transform: [{rotate: isFullScreen?'90deg':'0deg'}] }}> */}
              {/* <View style={{ flex: 1, height: this.state.height / 1.2}}> */}
              <View style={{ width: isFullScreen?height-282:width, height: isFullScreen?width:height/1.3 }}>
              
                
              <VideoPlayer
                  //source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                  source={ inMedia }
                  navigator={ this.props.navigator }
                  onBack={this.onBack}
                  //disableBack={true}
                  onEnterFullscreen={this.onFullScreen}
                  onExitFullscreen={this.onFullScreen}
                  fullscreen={isFullScreen}
                  resizeMode={this.screenType}
                  videoStyle={{width: isFullScreen?height-285:width, height: isFullScreen?width+200:height/1.3}}
              />

                {/* <Video
                  volume={3.0}
                  resizeMode={this.state.screenType}
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  paused={this.state.paused}
                  //style={styles.mediaPlayer, [{transform: [{ rotate: this.state.rotate }]}]}
                  style={styles.mediaPlayer}
                  //style={styles.mediaPlayer, [{transform: [{rotate: '0deg'}]}]}
                  onProgress={this.onProgress}
                  onLoadStart={this.onLoadStart}
                  onFullScreen={this.state.isFullScreen}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                  //source={{ uri: this.state.mvUrl }}
                  source={ inMedia }
                  fullscreen={this.state.isFullScreen}

                  width={this.state.width}
                  height={this.state.height}
                  //rotation = {this.state.rotate}
                />
                <MediaControls
                  mainColor="rgba(12, 83, 175, 0.9)"
                  //mainColor="orange"
                  playButtonBackgroundColor="rgba(12, 83, 175, 0.9)"
                  minimumTrackTintColor="rgba(12, 83, 175, 0.9)"
                  playButtonBorderColor="rgba(255,255,255,0.8)"
                  containerBackgroundColor="rgba(45, 59, 62, 0.4)"
                  onSeek={this.onSeek}
                  onReplay={this.onReplay}
                  onPaused={this.onPaused}
                  onSeeking={this.onSeeking}
                  duration={this.state.duration}
                  toolbar={this.renderToolbar()}
                  isFullScreen={this.state.isFullScreen}
                  isLoading={this.state.isLoading}
                  onFullScreen={this.onFullScreen}
                  progress={this.state.currentTime}
                  playerState={this.state.playerState}
                /> */}

              </View>
              {/* <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{backgroundColor: '#000'}}
              >
                  <Text style={{color: '#FFF'}}>{this.state.mvDesc}</Text>
            </ScrollView> */}
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