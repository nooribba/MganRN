import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
//const mvTitle = this.props.navigation.getParam('mvTitle');
//const mvUrl = this.props.navigation.getParam('mvUrl');


// function mvTmPlayer({mvTitle}) {
//   return(mvTitle)
// }

class MvTmPlayer extends Component {
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
      //playerState: 0,
      screenType: 'cover',//cover, content
      width: Dimensions.get('screen').width,  //window
      height: Dimensions.get('screen').width / (16 / 9.5),
      //mvTitle: mvTmPlayer,
      //mvTitle: '이태민씨 영상',
      mvTitle: this.props.navigation.getParam('mvTitle'),
      mvUrl: this.props.navigation.getParam('mvUrl'),
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
    //this.setState({ playerState: 0 });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    //if (!isLoading && playerState !== 2) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  onLoadStart = data => this.setState({ isLoading: true });
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED }); //PLAYING, PAUSED, ENDED,(0,1,2)
  //onEnd = () => this.setState({ playerState: 2 });
  onError = () => alert('!Error>', error);
  exitFullScreen = () => {};
  enterFullScreen = () => {};
  onFullScreen = () => {
    if (this.state.screenType == 'content'){
      this.setState({ screenType: 'cover', isFullScreen: false });
    }else{
      this.setState({ screenType: 'content', isFullScreen: true });
    } 
      
  };
  renderToolbar = () => (
    <View style={styles.toolbar}>
      <Text>즐거운 감상 되세요♡</Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.mvTitle}</Title>
            {/* <Title>이태민씨 영상</Title> */}
          </Body>
          <Right/>
        </Header>

        <StatusBar barStyle="dark-content" />
        <Content padder style={{ backgroundColor: "#cdc4ff" }}>
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {/* <View style={{ flex: 1, height: height / 1.3986}}> */}
              <View style={{ flex: 1, height: height / 1.3686}}>
                <Video
                  volume={3.0}
                  resizeMode={this.state.screenType}
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  paused={this.state.paused}
                  style={styles.mediaPlayer}
                  onProgress={this.onProgress}
                  onLoadStart={this.onLoadStart}
                  onFullScreen={this.state.isFullScreen}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                  //source={{ uri: "https://drive.google.com/uc?export=download&id=1096Ymke2ZO3IZZJBGPsyJJI57nzIEJZT" }}
                  //source={require('../../../assets/images/lights.mp4')}
                  source={{ uri: this.state.mvUrl }}
                  width={this.state.width}
                  height={this.state.height}
                />
                <MediaControls
                  mainColor="orange"
                  onSeek={this.onSeek}
                  onReplay={this.onReplay}
                  onPaused={this.onPaused}
                  onSeeking={this.onSeeking}
                  duration={this.state.duration}
                  toolbar={this.renderToolbar()}
                  isLoading={this.state.isLoading}
                  onFullScreen={this.onFullScreen}
                  progress={this.state.currentTime}
                  playerState={this.state.playerState}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
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
            <Button active={this.state.tab2} onPress={() => {
                                                              //this.toggleTab2();
                                                              this.props.navigation.navigate('GlLobby');
                                                            }}>
              <Icon active={this.state.tab2} name="images" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => {
                                                              //this.toggleTab3();
                                                              this.props.navigation.navigate('MvLobby');
                                                            }}>
              <Icon active={this.state.tab3} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              //this.toggleTab4();
                                                              //this.props.navigation.navigate('IconText');
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

export default MvTmPlayer;