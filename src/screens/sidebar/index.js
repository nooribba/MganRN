import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge
} from "native-base";
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
    bg: "#B89EF5"
  },
  {
    name: "사진첩",
    route: "GlLobby",
    icon: "images",
    bg: "#477EEA"
  },
  {
    name: "동영상",
    route: "MvLobby",
    icon: "logo-youtube",
    bg: "#BE6F50"
  },
  {
    name: "Contact",
    route: "MvLobby",
    icon: "logo-github",
    bg: "#EB6B23"
  },
 
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    const { focused } = this.props;
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#cdc4ff", top: -1 }}//#fff
        >
          <View style={{ backgroundColor: "#9C26B0", marginBottom: 8 }}>
          {/* <View style={{ flex: 1, alignItems: "center" }}> */}
            
            <ListItem thumbnail noBorder style={{ marginBottom: 1, borderBottomWidth: 0, borderColor: "#cdc4ff" }}>
              <Left style={{ flex: 0 }}>
                <Thumbnail large source={drawerCover} style={styles.drawerThumbnail} />
              </Left>
              <Right style={{ flex: 1 }}>
                <Text style={styles.headerText}>우리가족 추억공유 앱</Text>
              </Right>
            </ListItem>
            
            <View style={{marginTop: -1, top: -1}}>
              <Badge
                style={{
                  borderRadius: 3,
                  height: 25,
                  width: 200,
                  backgroundColor: "#EFB406",//#FF9800 #ff1f4f
                  alignSelf: "center",
                  marginLeft: 16,
                  marginBottom: 10
                }}
              >
                <Text style={styles.badgeText}>L.K.R Family<Text style={{color: "#ff492e"}}>   3000 ♡</Text></Text>
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
                onPress={() => this.props.navigation.navigate(data.route)}
                style={{ backgroundColor: focused ? "#9C26B0" : "#cdc4ff", marginRight: 16 }}
              >
                <Left style={{ marginTop: -7, marginBottom: -8 }}>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: focused ? "#fff" : "#777", fontSize: 27, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
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
                  </Right>}
              </ListItem>}
          />
          <Image source={drawerFoot} style={styles.drawerFoot} />
          <Image source={drawerFoot2} style={styles.drawerFoot2} />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
