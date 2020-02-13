import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  //Ionicons,
  Container,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge
} from "native-base";
import { withNavigationFocus } from 'react-navigation';
//import { Vicon } from "react-native-vector-icons";
import styles from "./style";

//const drawerCover = require("../../../assets/drawer-cover.png");
//const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const drawerCover = require("../../../assets/images/profile.jpg");
const drawerFoot = require("../../../assets/images/side_foot.jpg");
const drawerFoot2 = require("../../../assets/images/us_thumb.jpg");

const datas = [
  {
    name: "메인",
    route: "Main",
    icon: "paw",
    //bg: "#B89EF5"
  },
  {
    name: "사진첩",
    route: "GlLobby",
    icon: "images",
    //bg: "#477EEA"
  },
  {
    name: "동영상",
    route: "MvLobby",
    icon: "logo-youtube",
    //bg: "#BE6F50"
  },
  {
    name: "Contact",
    route: "Contact",
    icon: "logo-github",
    //bg: "#EB6B23"
  },
 
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      dName: 'Main',
      dNameVal: this.props.navigation.getParam('dNameVal'),
    };
  }

//   componentWillReceiveProps = (props) => {
//     if(!props.navigation.state.isDrawerOpen){
//       console.info('####### props:'+props);
//       this.state = {
//         testTxt: props
//       };
//     }
// }

  render() {
    const { focused } = this.props;
    //const dNameParam = this.props.navigation.getParam('dName');
    //const dVal = this.props.navigation.getParam('dVal');
    //const pathAndParams = this.props.navigation.router.getPathAndParamsForState(this.props.navigation.state) || {}
    //const activePath = pathAndParams.path
    const backScreen = this.props.activeItemKey;

    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#cdc4ff", top: -1 }}//#fff
        >
          {/* #722480 #00BCD4 #4CAF50 #57d5ff #FF6F61 */}
          <View style={{ backgroundColor: "#722480", marginBottom: 10 }}>
          {/* <View style={{ flex: 1, alignItems: "center" }}> */}
            
            <ListItem thumbnail noBorder style={{ marginBottom: 1, borderBottomWidth: 0, borderColor: "#cdc4ff" }}>
              <Left style={{ flex: 0 }}>
                <Thumbnail large source={drawerCover} style={styles.drawerThumbnail} />
              </Left>
              <Right style={{ flex: 1 }}>
                <Text style={styles.headerText}>우리가족 추억기록</Text>
                {/* <Text style={styles.headerText}>{this.state.dNameVal}</Text> */}
                {/* <Text style={styles.headerText}>{this.props.activeItemKey}</Text> */}
                {/* <Text style={styles.headerText}>{activePath}</Text> */}
                {/* this.props.navigator.getScreen() */}
                {/* <Text style={styles.headerText}>{this.state.dNameVal}</Text><Text style={styles.headerText}>{dVal}</Text> */}
              </Right>
            </ListItem>
            
            <View style={{marginTop: -1, top: -1}}>
              <Badge
                style={{
                  borderRadius: 3,
                  height: 25,
                  width: 210,
                  backgroundColor: "#FF6F61",//#EFB406 #FF9800 #ff1f4f #ff3700 #db000b
                  alignSelf: "center",
                  marginLeft: 14,
                  marginBottom: 10
                }}
              >
                <Text style={styles.badgeText}>L.K.R Family<Text style={{color: "#a10008"}}>   3000 ♡</Text></Text>
              </Badge>
            </View>
            
            {/* <Image source={drawerCover} style={styles.drawerCover} /> */}
            {/* <Image square style={styles.drawerImage} source={drawerImage} /> */}
          </View>

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => {
                                this.setState({dName: data.route});
                                this.props.navigation.navigate(data.route)}
                              }
                style={{ marginRight: 16, backgroundColor: data.route == backScreen ? "#9C26B0" : "#cdc4ff", borderRadius: 3, }}
              >
                {/* <Left style={{ marginTop: -6, marginBottom: -7, backgroundColor: this.props.isFocused ? "#9C26B0" : "#cdc4ff", }}> */}
                {/* <Left style={{ marginTop: -6, marginBottom: -7,}}>   */}
                <Left style={{ marginTop: -6, marginBottom: -6, }}>
                  <Icon
                    active
                    name={data.icon}
                    //style={{ color: this.props.isFocused ? "#fff" : "#777", fontSize: 28, width: 30 }}
                    style={{ color: data.route == backScreen ? "#f8fc08" : "#d91714", fontSize: 28, width: 30, marginLeft: 6 }}
                  />
                  <Text style={ styles.text, [{color: data.route == backScreen ? "#fff" : "#000", fontWeight: data.route == backScreen ? "bold" : "normal" }] }>
                    {data.name}
                  </Text>
                </Left>
                <Right style={{ marginLeft: 3, marginRight: 2 }}>
                  <Icon active name="play" style={{ color: data.route == backScreen ? "#f8fc08" : "#e32e2b" }} />
                  {/* <Ionicons name="chevron-forward-outline" style={{ color: data.route == this.state.dName ? "#f8fc08" : "#e32e2b" }} /> */}
                  {/* <Text style={{ color: "#e32e2b" }}> > </Text> */}
                </Right>
                {/* {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>} */}
              </ListItem>}
          />
          <Image source={drawerFoot} style={styles.drawerFoot} />
          <Image source={drawerFoot2} style={styles.drawerFoot2} />
        </Content>
      </Container>
    );
  }
}

export default withNavigationFocus(SideBar);
