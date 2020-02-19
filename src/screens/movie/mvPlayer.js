import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import styles from "./styles";

const { width, height } = Dimensions.get('screen');

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
    if (this.state.screenType == 'stretch'){
      //this.setState({ screenType: 'cover', isFullScreen: false, width: Dimensions.get('screen').width, height: this.props.navigation.getParam('vertical') ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5), rotate: this.props.navigation.getParam('vertical') ? '0deg' : '-90deg' });
      //this.setState({ screenType: 'cover', isFullScreen: false, width: Dimensions.get('screen').width, height: this.props.navigation.getParam('vertical') ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5), rotate: '0deg' });
      this.setState({ screenType: 'cover', isFullScreen: false, width: Dimensions.get('screen').width, height: this.state.vertical ? Dimensions.get('screen').width * (16 / 9.5) : Dimensions.get('screen').width / (16 / 9.5) });
      //this.videoPlayer.dismissFullscreenPlayer();
    }else{
      //this.setState({ screenType: 'content', isFullScreen: true });
      this.setState({ screenType: 'stretch', isFullScreen: true, width: this.state.vertical ? Dimensions.get('screen').width : Dimensions.get('screen').height, height: this.state.vertical ?  Dimensions.get('screen').height : Dimensions.get('screen').width*0.98 });
      //this.videoPlayer.presentFullscreenPlayer();
    } 
  };
  renderToolbar = () => (
    <View style={styles.toolbar}>
      <Text>즐거운 감상 되세요♡</Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    const { isFullScreen } = this.state;
    return (
      isFullScreen ? 
      <Container style={styles.container}>
        <StatusBar barStyle="dark-content" hidden = {true} />
        <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView>
              {/* <View style={{ flex: 1, height: height / 1.3986}}> */}
              {/* <View style={{ flex: 1, height: height / 1.45}}> */}
              {/* <View style={{ flex: 1, width: this.state.width, height: this.state.height / 1.05, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, width: this.state.vertical ? width : height, height: this.state.height / 1.05, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, height: this.state.height / 1.05, width: this.state.vertical ? this.state.width : this.state.height, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* <View style={{ flex: 1, width: width, height: this.state.height, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}> */}
              {/* video는 width=height, height=width일때 가로모드 전체화면 영상 비율 맞음 */}

              <View style={{ flex: 1, backgroundColor: 'yellow', width: height, height: height/2, transform: [{rotate: this.state.vertical ? '0deg' : '90deg'}] }}>
                <Video
                  volume={3.0}
                  resizeMode={this.state.screenType}
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  paused={this.state.paused}
                  //style={styles.mediaPlayer, [{transform: [{ rotate: this.state.rotate }]}]}
                  //style={styles.mediaPlayer, [{transform: [{ rotate: "0deg" }]}]}
                  style={styles.mediaPlayer}
                  //style={styles.mediaPlayer, [{transform: [{rotate: '90deg'}]}]}
                  onProgress={this.onProgress}
                  onLoadStart={this.onLoadStart}
                  onFullScreen={this.state.isFullScreen}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                  source={{ uri: this.state.mvUrl }}
                  //width={height}
                  //height={this.state.height}
                  //height={width}
                  //width={this.state.width}
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
          </SafeAreaView>
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

        <StatusBar barStyle="dark-content" />
        {/* <Content padder style={{ backgroundColor: "#cdc4ff" }}> */}
        <Content padder style={{ backgroundColor: "#000" }}>
          <SafeAreaView>
            {/* <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}> */}
              {/* <View style={{ flex: 1, height: height / 1.3986}}> */}
              <View style={{ flex: 1, height: height / 1.45, transform: [{rotate: '0deg'}] }}>
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