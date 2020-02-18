import React from "react";
import { Root } from "native-base";
import {Dimensions} from 'react-native';
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createStackNavigator, createAppContainer } from "react-navigation";


import Home from "./screens/home/";
import SideBar from "./screens/sidebar";

import Main from "./screens/lobby/main";
import MvLobby from "./screens/lobby/mvLobby";
import GlLobby from "./screens/lobby/glLobby";
import PrivateLobby from "./screens/lobby/privateLobby";
import Contact from "./screens/lobby/contact";

import GlTmList from "./screens/list/glTmList";
import GlMgList from "./screens/list/glMgList";
import GlPrivateList from "./screens/list/glPrivateList";
import MvTmList from "./screens/list/mvTmList";
import MvPrivateList from "./screens/list/mvPrivateList";


import TmGallery from "./screens/gallery/tmGallery";
import MgGallery from "./screens/gallery/mgGallery";
import PrivateGallery from "./screens/gallery/privateGallery";

import MvPlayer from "./screens/movie/mvPlayer";
//import MvPrivatePlayer from "./screens/movie/mvPrivatePlayer";
//import TestMvPlayer from "./screens/movie/testMvPlayer";


const width = Dimensions.get("screen").width;
const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    SideBar: { screen: SideBar },
    Main: { screen: Main },
    MvLobby: { screen: MvLobby },
    GlLobby: { screen: GlLobby },
    PrivateLobby: { screen: PrivateLobby },
    GlTmList: { screen: GlTmList },
    GlMgList: { screen: GlMgList },
    GlPrivateList: { screen: GlPrivateList },
    MvTmList: { screen: MvTmList },
    MvPrivateList: { screen: MvPrivateList },
    Contact: { screen: Contact }, 
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#9C26B0",//#e91e63
      tintColor: "#9C26B0",
      headerTintColor: "#9C26B0",
      activeBackgroundColor: '#9C26B0',
    },
    tabBarOptions: { 
      activeTintColor:'#9C26B0', 
      tintColor: "#9C26B0",
      headerTintColor: "#9C26B0",
    },
    headerTintColor: "#9C26B0",
    drawerWidth: width*0.8,
    overlayColor : "rgba(0,0,0,0.7)",
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    
    SideBar: {screen: SideBar },
    Main: { screen: Main },
    GlLobby: { screen: GlLobby },
    PrivateLobby: { screen: PrivateLobby },
    MvLobby: { screen: MvLobby },
    GlTmList: {screen: GlTmList },
    GlMgList: { screen: GlMgList },
    GlPrivateList: { screen: GlPrivateList },
    MvTmList: {screen: MvTmList },
    MvPrivateList: { screen: MvPrivateList },
    TmGallery: {screen: TmGallery },
    MgGallery: {screen: MgGallery },
    PrivateGallery: {screen: PrivateGallery },
    MvPlayer: {screen: MvPlayer },
    //MvPrivatePlayer: {screen: MvPrivatePlayer },
    Contact: {screen: Contact },
    //TestMvPlayer: {screen: TestMvPlayer },

    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;