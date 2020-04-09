import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";

const { width, height } = Dimensions.get('screen');

class MvPrivateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      thumbImgs: null,
    };
  }
  
  async componentDidMount() {
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/WZoNGd7uGnofF8Z66" //C3qaNXJEny3HtecG6
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        thumbImgs: response.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
  }

  render() {
    const { thumbImgs, index } = this.state;
   
    return (
      thumbImgs ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('MvLobby')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>이민혁♥김수진</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ScrollView>
            <ListItem itemDivider>
              <Text style={styles.listDivider}>결혼 후</Text>
            </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left/>
                </ListItem>
            
            <ListItem itemDivider>
              <Text style={styles.listDivider}>결혼 전</Text>
            </ListItem>
              <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'본식-신부입장', mvDesc: '신부입장(수진,민혁,장인어른)\n새로운 가정을 이룬 역사적 순간\n2018.09.16', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=10jqW0I-D4IppckphkWfJ5AiWpr7qCbH7'})}>   
                      <ImageBackground source={thumbImgs[2].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body/>
                </ListItem>
                <ListItem last style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  <Left>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'웨딩 셀프 축가', mvDesc: '지천비화 - 결혼합니다\n파티 아뜰리에\n2018.07.15', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=15mfhhd0Kgap5h9tqwZQWDxyKGPxXGiA_'})}>   
                      <ImageBackground source={thumbImgs[1].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Left>
                  <Body>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvPlayer',{mvTitle:'식전 영상-1', mvDesc: '식전 소개 영상(invitation)', vertical: false, mvUrl:'https://drive.google.com/uc?export=download&id=15hSisONzTFRkqnb7TlMH2x9WrBMDbkhG'})}>   
                      <ImageBackground source={thumbImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                        <View><Text style={styles.textThumb}> </Text></View>
                      </ImageBackground>
                    </TouchableWithoutFeedback>
                  </Body>
                </ListItem>
                
          </ScrollView>
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
      :
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>이민혁♥김수진</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{ flex: 1, width: width, height: height - 170, backgroundColor: 'black' }} >
            <Animated.Image
              source={require('../../../assets/images/loading.gif')}
              style={{ height: height*0.55, width: width, zIndex: 1 }}
            />
          </View>
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

export default MvPrivateList;