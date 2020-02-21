import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
//const { ww, wh } = Dimensions.get('window');

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
      this.setState({ screenType: 'contain', isFullScreen: true, width: this.state.vertical ? width : width * ((width*(width/height))/96), height: this.state.vertical ?  width * ((width*(width/height))/96) : width });
      //this.videoPlayer.presentFullscreenPlayer();
    } 
  };
  renderToolbar = () => (
    <View style={styles.toolbar}>
      {/* <Text>즐거운 감상 되세요♡</Text> */}
      <Text>{width*(width/height)}/{(width*(width/height))*1.04}</Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    const { isFullScreen } = this.state;
    return (
      isFullScreen ? 
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" hidden = {true} />
        {/* <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView style={{ transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}], width: width, height: height }}> */}
              {/* <View style={{ flex: 1, height: height / 1.3986}}> */}
              {/* <View style={{ flex: 1, height: height / 1.45}}> */}
              {/* <View style={{ flex: 1, width: this.state.width, height: this.state.height / 1.05, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, width: this.state.vertical ? width : height, height: this.state.height / 1.05, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, height: this.state.height / 1.05, width: this.state.vertical ? this.state.width : this.state.height, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, width: width, height: this.state.height, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* video는 width=height, height=width일때 가로모드 전체화면 영상 비율 맞음 */}

              {/* <View style={{ flex: 1, backgroundColor: 'yellow', width: height, height: height/2, }}> */}
              {/* <View style={{ flex: 1, width: height / 1.04, height: width / 1.04, backgroundColor: 'green', transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, width: this.state.vertical ? null : height / 1.04, height: this.state.vertical ? height / 1.04 : width / 1.04, backgroundColor: 'green' }}> */}
              {/* //////// , flexDirection: 'row'*/}
              {/* <View style={{ flex: 1, marginLeft: this.state.vertical ? 0 : (width*(width/height))/(-1.15), width: this.state.vertical ? null : height, height: this.state.vertical ? height : width, backgroundColor: 'green', transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              <View style={{ flex: 1, marginLeft: this.state.vertical ? 0 : (width*(width/height))/(-1.08), width: this.state.vertical ? null : height, height: this.state.vertical ? height : width, backgroundColor: 'green', transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}>
                <Video
                  volume={3.0}
                  resizeMode={this.state.screenType}
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  paused={this.state.paused}
                  //style={styles.mediaPlayer, [{transform: [{ rotate: this.state.rotate }]}]}
                  //style={styles.mediaPlayer, [{transform: [{ rotate: "0deg" }]}]}
                  //style={styles.mediaPlayer}
                  //style={{ position: 'absolute', top: this.state.vertical ? 0 : width*(width/height), left: 0, bottom: 0, right: 0, backgroundColor: 'yellow', transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}
                  //style={{ position: 'absolute', top: this.state.vertical ? 0 : width*(width/height), left: 0, bottom: 0, right: 0, backgroundColor: 'yellow' }}
                  //style={{ position: 'absolute', top: this.state.vertical ? 0 : width*(width/height)+100, left: 0, bottom: 0, right: 0, backgroundColor: 'yellow' }}
                  //////////
                  style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'yellow' }}
                  //style={styles.mediaPlayer, [{transform: [{rotate: '90deg'}]}]}
                  onProgress={this.onProgress}
                  onLoadStart={this.onLoadStart}
                  onFullScreen={this.state.isFullScreen}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                  source={{ uri: this.state.mvUrl }}
                  //width={width}
                  //height={this.state.height}
                  //height={width}
                  // width={this.state.vertical ? null : height / 1.04}
                  // height={this.state.vertical ? height / 1.04 : null}
                  width={this.state.vertical ? null : this.state.width}
                  height={this.state.vertical ? this.state.height : null}

                  // width={this.state.width}
                  // height={this.state.height}
                  //rotation = {this.state.rotate}
                />
                {/* <View style={{ position: 'absolute', top: this.state.vertical ? 0 : (width*(width/height))*1.04 , left: 0, bottom: 0, right: 0, width: this.state.vertical ? null : height / 1.04, height: this.state.vertical ? height / 1.04 : width / 1.04 }}> */}
                {/* <View style={{ position: 'absolute', top: this.state.vertical ? 0 : (width*(width/height))*1.15 , left: 10, bottom: 0, right: 0, width: this.state.vertical ? null : this.state.width, height: this.state.height }}> */}
                <View style={{ position: 'absolute', top: this.state.vertical ? 0 : (width*(width/height))*1.10 , left: 0, bottom: 0, right: 0, width: this.state.vertical ? null : height/1.04, height: this.state.vertical ? height/1.02 : width/1.025 }}>
                <MediaControls
                  mainColor="rgba(12, 83, 175, 0.9)"
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
                  //style={{ marginLeft: 450, marginTop: -700 }}
                  //style={{ marginLeft: 450, marginTop: -700, position: 'absolute', top: 0, left: 0, bottom: 100, right: 0, backgroundColor: 'red' }}
                  
                  //style={{alignSelf: 'stretch', alignItems: 'stretch'}}
                  //style={{alignSelf: 'center', alignItems: 'center'}}
                  //width={this.state.vertical ? null : height / 1.04}
                  //style={{height: width, width: width, marginTop: this.state.vertical ? 0 : 300, marginRight: this.state.vertical ? 0 : -300}}
                  //height={this.state.vertical ? height / 1.04 : width / 1.04}
                />
                </View>
              </View>
          {/* </SafeAreaView>
        </Content> */}
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

        <StatusBar barStyle="dark-content" />
        {/* <Content padder style={{ backgroundColor: "#cdc4ff" }}> */}
        <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView>
            {/* <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}> */}
              {/* <View style={{ flex: 1, height: height / 1.3986}}> */}
              <View style={{ flex: 1, height: height / 1.47, transform: [{rotate: '0deg'}] }}>
              {/* <View style={{ flex: 1, height: this.state.height / 1.2}}> */}
                <Video
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
                  source={{ uri: this.state.mvUrl }}
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
                />
              </View>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                //style={styles.scrollView}
                style={{backgroundColor: '#000'}}
              >
                {/* <View style={{backgroundColor: '#000'}}> */}
                  <Text style={{color: '#FFF'}}>{this.state.mvDesc}</Text>
                {/* </View> */}
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