import React, { Component } from "react";
import { ImageBackground, View, StatusBar, StyleSheet, Dimensions, Text } from "react-native";
//import { Container, Button, H3, H2, H1, Text } from "native-base";
import { Container, Button, H3, H2, H1 } from "native-base";

import styles from "./styles";

//const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenBg = require("../../../assets/images/onboarding.jpg");
//const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
const { width, height } = Dimensions.get('screen');

class Home extends Component {
  render() {
    //const { navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          {/* <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View> */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            {/* <H3 style={styles.text}>Nooribba</H3>
            <View style={{ marginTop: 8 }} />
            <Text color="white" size={50}>Mikhail</Text>
            <View style={{ marginTop: 8 }} />
            <Text color="white" size={50}>Grace</Text>
            <View style={{ marginTop: 8 }} />
            <Text color="white" size={50}>Anthony</Text>
            <View style={{ marginTop: 8 }} />
            <Text size={16} color='rgba(255,255,255,0.6)'>Noori  &  Family</Text>
            <View style={{ marginTop: 8 }} /> */}
          </View>
          <View style={{ marginTop: height / 2.45, marginBottom: 5 }}>
            <View style={{ marginTop: 4 }}>
              <Text style={{fontSize: 39, color: "white", paddingLeft: 24}}>Mikhail</Text>
            </View>
            <View style={{ marginTop: 4 }}>
              <Text style={{fontSize: 39, color: "white", paddingLeft: 24}}>Grace</Text>
            </View>
            <View style={{ marginTop: 4 }}>
              <Text style={{fontSize: 39, color: "white", paddingLeft: 24}}>Anthony</Text>
            </View>
            <View style={{ marginTop: 1 }}>
              <Text style={{fontSize: 16, color: "#aba9a9", paddingLeft: 24}}>Noori  &  Family</Text>
            </View>
            {/* <Text size={16} color='rgba(255,255,255,0.6)'>Noori  &  Family</Text> */}
            <View style={{ marginTop: 17 }}>
              <Text style={{fontSize: 25, color: "white", paddingLeft: 24}}>오늘도 사랑해요~</Text>
            </View>
            <View style={{ marginTop: 33 }} />
            <Button
              style={{ backgroundColor: "#9C26B0", alignSelf: "center", width: width - 16 * 3, height: 16 * 2.8, justifyContent: 'center', alignItems: 'center' }} //#6FAF98
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Text style={{fontSize: 17, fontWeight: "bold", color: "white"}}>저도요♥</Text>
            </Button>
            {/* <Button
                shadowless
                style={styled.button}
                color={"#9C26B0"}
                textStyle ={{fontSize: 17,}}
                onPress={() => this.props.navigation.navigate('IconText')}>
                저도요2
            </Button> */}
            
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;

const styled = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  padded: {
    paddingHorizontal: 16 * 2,
    position: 'relative',
    bottom: 16,
  },
  button: {
    width: width - 16 * 4,
    height: 16 * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    alignSelf: 'center',
  },
});