import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Animated, Dimensions, Image, TouchableWithoutFeedback, StatusBar, SafeAreaView, Alert, StyleSheet } from 'react-native';
// import Video from 'react-native-video';
// import MediaControls, { PLAYER_STATES } from "@freakycoder/react-native-media-controls";
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
//import Video from 'react-native-af-video-player'
import styles from "./styles";

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/video_side.png");
const placeholder = require("../../../assets/images/test1.png");
const theme = {
  title: '#FFF',
  more: '#446984',
  center: '#7B8F99',
  fullscreen: '#446984',
  volume: '#A5957B',
  scrubberThumb: '#234458',
  scrubberBar: '#DBD5C7',
  seconds: '#DBD5C7',
  duration: '#DBD5C7',
  progress: '#446984',
  loading: '#DBD5C7'
}

class TestMvPlayer extends Component {
  // videoPlayer;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tab1: false,
  //     tab2: false,
  //     tab3: true,
  //     tab4: false,
  //     currentTime: 0,
  //     duration: 0,
  //     isFullScreen: false,
  //     isLoading: true,
  //     paused: false,
  //     //playerState: PLAYER_STATES.PLAYING,
  //     screenType: 'cover',//cover, content
  //     width: Dimensions.get('screen').width,  //window
  //     height: Dimensions.get('screen').width / (16 / 9.5),
  //     mvTitle: this.props.navigation.getParam('mvTitle'),
  //     mvUrl: this.props.navigation.getParam('mvUrl'),
  //   };
  // }
  


  // static navigationOptions = ({ navigation }) => {
  //   const { state } = navigation
  //   // Setup the header and tabBarVisible status
  //   const header = state.params && (state.params.fullscreen ? undefined : null)
  //   const tabBarVisible = state.params ? state.params.fullscreen : true
  //   return {
  //     // For stack navigators, you can hide the header bar like so
  //     header,
  //     // For the tab navigators, you can hide the tab bar like so
  //     tabBarVisible,
  //   }
  // }
  // onFullScreen(status) {
  //   // Set the params to pass in fullscreen status to navigationOptions
  //   this.props.navigation.setParams({
  //     fullscreen: !status
  //   })
  // }
  // onMorePress() {
  //   Alert.alert(
  //     'Boom',
  //     'This is an action call!',
  //     [{ text: 'Aw yeah!' }]
  //   )
  // }



 

  // render() {
  //   return (
  //     <Container style={styles.container}>
  //       <Header>
  //         <Left>
  //           <Button transparent onPress={() => this.props.navigation.goBack()}>
  //             <Icon name="arrow-back" />
  //           </Button>
  //         </Left>
  //         <Body>
  //           <Title>{this.state.mvTitle}</Title>
  //         </Body>
  //         <Right/>
  //       </Header>

  //       <StatusBar barStyle="dark-content" />
  //       <Content padder style={{ backgroundColor: "#cdc4ff" }}>
  //         <SafeAreaView>
  //           <ScrollView
  //             contentInsetAdjustmentBehavior="automatic"
  //             style={styles.scrollView}>
  //             <View style={{ flex: 1 }}>
  //               <Video
  //                 autoPlay
  //                 url={{ uri: this.state.mvUrl }}
  //                 //ref={(ref) => { this.video = ref }}
  //                 title={this.state.mvTitle}
  //                 logo={logo}
  //                 placeholder={placeholder}
  //                 onMorePress={() => this.onMorePress()}
  //                 onFullScreen={status => this.onFullScreen(status)}
  //                 fullScreenOnly
  //                 //theme={theme}
  //               />
                
                
  //             </View>
  //           </ScrollView>
  //         </SafeAreaView>
  //       </Content>

  //       <Footer>
  //         <FooterTab>
  //           <Button active={this.state.tab1} onPress={() => {this.props.navigation.navigate('Main');}}>
  //             <Icon active={this.state.tab1} name="paw" />
  //             <Text>메인</Text>
  //           </Button>
  //           <Button active={this.state.tab2} onPress={() => {this.props.navigation.navigate('GlLobby');}}>
  //             <Icon active={this.state.tab2} name="images" />
  //             <Text>사진첩</Text>
  //           </Button>
  //           <Button active={this.state.tab3} onPress={() => {this.props.navigation.navigate('MvLobby');}}>
  //             <Icon active={this.state.tab3} name="logo-youtube" />
  //             <Text>동영상</Text>
  //           </Button>
  //           <Button active={this.state.tab4} onPress={() => {this.props.navigation.navigate('Contact');}}>
  //             <Icon active={this.state.tab4} name="logo-github" /> 
  //             <Text>Contact</Text>
  //           </Button>
  //         </FooterTab>
  //       </Footer>
  //     </Container>
  //   );
  // }
}

export default TestMvPlayer;