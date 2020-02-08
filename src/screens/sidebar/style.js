const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerThumbnail: {
    marginTop: 20,
    marginBottom: 12,
    //marginLeft : 16
  },
  drawerFoot: {
    alignSelf: "stretch",
    height: deviceHeight / 4.1,
    width: null,
    position: "relative",
    marginTop: 18,
    //marginLeft: 1,
    //marginRight: 1,
  },
  drawerFoot2: {
    alignSelf: "stretch",
    height: deviceHeight / 4,
    width: null,
    position: "relative",
    //marginTop: 35,
    //marginLeft: 1,
    //marginRight: 1,
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 17,
    marginLeft: 19
  },
  headerText: {
    //fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 1,
    marginRight: 5,
    //marginBottom: 10,
    color: "white"
  },
  badgeText: {
    //fontSize: Platform.OS === "ios" ? 13 : 11,
    //fontWeight: "400",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    //marginLeft: 16,
    //marginTop: Platform.OS === "android" ? -3 : undefined,
    //marginTop: -1,
    color: "white"
  }
};
