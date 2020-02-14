import React, { Component } from "react";
import { Image, View } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Body, Right, Thumbnail, Badge } from "native-base";
import { withNavigationFocus } from 'react-navigation';
import styles from "./style";

const drawerCover = require("../../../assets/images/profile.jpg");
const drawerFoot = require("../../../assets/images/side_foot.jpg");
const drawerFoot2 = require("../../../assets/images/us_thumb.jpg");
const datas = [
  {
    name: "메인",
    route: "Main",
    icon: "paw",
  },
  {
    name: "사진첩",
    route: "GlLobby",
    icon: "images",
  },
  {
    name: "동영상",
    route: "MvLobby",
    icon: "logo-youtube",
  },
  {
    name: "Contact",
    route: "Contact",
    icon: "logo-github",
  },
];
var tabScreen = null;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      dName: 'Main',
      //dNameVal: this.props.navigation.getParam('dNameVal'),
    };
  }

  render() {
    const { focused } = this.props;
    const backScreen = this.props.activeItemKey;
    
    if(backScreen == 'Main'){tabScreen = 'Main';}
    else if(backScreen == 'GlLobby'){tabScreen = 'GlLobby';}
    else if(backScreen == 'GlTmList'){tabScreen = 'GlLobby';}
    else if(backScreen == 'GlMgList'){tabScreen = 'GlLobby';}
    else if(backScreen == 'MvLobby'){tabScreen = 'MvLobby';}
    else if(backScreen == 'MvTmList'){tabScreen = 'MvLobby';}
    else if(backScreen == 'Contact'){tabScreen = 'Contact';}
    else{tabScreen = 'Main';}

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
                style={{ marginRight: 16, backgroundColor: data.route == tabScreen ? "#9C26B0" : "#cdc4ff", borderRadius: 3, }}
              >
                <Left style={{ marginTop: -6, marginBottom: -6, }}>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: data.route == tabScreen ? "#f8fc08" : "#d91714", fontSize: 28, width: 30, marginLeft: 6 }}
                  />
                  <Text style={ styles.text, [{color: data.route == tabScreen ? "#fff" : "#000", fontWeight: data.route == tabScreen ? "bold" : "normal" }] }>
                    {data.name}
                  </Text>
                </Left>
                <Right style={{ marginLeft: 3, marginRight: 2 }}>
                  <Icon active name="play" style={{ color: data.route == tabScreen ? "#f8fc08" : "#e32e2b" }} />
                </Right>
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