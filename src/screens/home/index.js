import React, { Component } from "react";
import { ImageBackground, ScrollView, View, StatusBar, Dimensions, Text } from "react-native";
//import { Container, Button, H3, H2, H1, Text } from "native-base";
import { Container, Button} from "native-base";
import SplashScreen from 'react-native-splash-screen'
import styles from "./styles";

const launchscreenBg = require("../../../assets/images/onboarding.jpg");
const { width, height } = Dimensions.get('screen');

class Home extends Component {

  componentWillMount() {
    //SplashScreen.hide();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1200);
  }  
  
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View
            style={{
              //alignItems: "center",
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 1,
              backgroundColor: "transparent"
            }}
          >
            <View>
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
                <Text style={{fontSize: 16, color: "#aba9a9", paddingLeft: 24}}>  &  Family</Text>
              </View>
              <View style={{ marginTop: 17 }}>
                <Text style={{fontSize: 25, color: "white", paddingLeft: 24}}>오늘도 사랑해요~</Text>
              </View>
              <View style={{ marginTop: 33 }} />
              
            </View>
          </View>
          {/* <ScrollView style={{ marginTop: height / 2.455, marginBottom: 3 }}> */}
          <View style={{marginBottom: 16}}>
            <Button
              style={{ backgroundColor: "#9C26B0", alignSelf: "center", width: width - 16 * 3, height: 16 * 2.8, justifyContent: 'center', alignItems: 'center' }} //#6FAF98
              onPress={() => this.props.navigation.navigate('Main')}
            >
              <Text style={{fontSize: 17, fontWeight: "bold", color: "white"}}>저도요♥</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;