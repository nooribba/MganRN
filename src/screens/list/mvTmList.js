import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";
//import { NavigationContainer } from '@react-navigation/native';
//import MvTmPlayer from "../movie/mvTmPlayer";

// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const logo = require("../../../assets/images/test1.png");


class MvTmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      dolImgs: null,
    };
  }
  
  async componentDidMount() {
    const response = await axios.get(
      "https://google-photos-album-demo.glitch.me/C3qaNXJEny3HtecG6"
    );
    if (response && response.data && response.data.length > 0) {
      this.setState({
        dolImgs: response.data.map(url => ({
          thumbUrl: {uri: `${url}`},
        }))
      });
    }
  }

  render() {
    const { dolImgs, index } = this.state;
    return (
      dolImgs ?
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>이태민</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <ScrollView>
            {/* <List style={{marginTop: -3, marginBottom: -3}}> */}

              {/* <ListItem itemDivider style={styles.listDivider}>
                <Text>돌</Text>
              </ListItem>
              <List 
                dataArray={dolImgs}
                renderRow={dolImg =>
                
                index == dolImgs.length -1 ?
                <ListItem last>
                  <Left>
                    <Thumbnail square source={dolImg.thumbUrl} style={styles.listThumb} />
                    <Text style={styles.text}>최근 위로</Text>
                  </Left>
                </ListItem>
                :
                <ListItem>
                <Left>
                  <Thumbnail square source={dolImg.thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>최근 위로</Text>
                </Left>
              </ListItem>}
              /> */}

              <ListItem itemDivider>
                <Text style={styles.listDivider}>돌</Text>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Left>
                  <Thumbnail square source={dolImgs[0].thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>100일 아래 썸네일 방식으로 할 예정</Text>
                </Left>
              </ListItem>
              <ListItem last>
                <Left>
                  <Thumbnail square large source={dolImgs[3].thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>이것도 비교 참고용</Text>
                </Left>
              </ListItem>
              
              <ListItem itemDivider>
                <Text style={styles.listDivider}>100일</Text>
              </ListItem>
                  <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                  {/* <ListItem style={{alignContent:'space-between'}}> */}
                    <Left>
                      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTmPlayer',{mvTitle:'세로 테스트', mvUrl:'https://drive.google.com/uc?export=download&id=1-WlKIutQD65PbTSf0VqjrC6AUOjo7bJW'})}>   
                        <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                          <View><Text style={styles.textThumb}>세로 테스트</Text></View>
                        </ImageBackground>
                      </TouchableWithoutFeedback>
                    </Left>
                    <Body />
                  </ListItem>
                  <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
                    <Left>
                      <ImageBackground source={dolImgs[1].thumbUrl} style={styles.imageContainerLeft}>
                        <View><Text> </Text></View>
                      </ImageBackground>
                    </Left>
                    <Body>
                      <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageContainerRight}>
                        <View><Text style={styles.textThumb}>가운데</Text></View>
                      </ImageBackground>
                    </Body>
                  </ListItem>
                  <ListItem last style={{alignContent:'stretch'}}>
                    <Left>
                      <ImageBackground source={dolImgs[2].thumbUrl} style={styles.imageBottomLeft}>
                        <View><Text style={styles.textThumb}>썸네일 설명</Text></View>
                      </ImageBackground>
                    </Left>
                    <Body>
                      <ImageBackground source={dolImgs[3].thumbUrl} style={styles.imageBottomRight}>
                        <View><Text style={styles.textThumb}>설명222</Text></View>
                      </ImageBackground>
                    </Body>
                  </ListItem>

              <ListItem itemDivider>
                <Text style={styles.listDivider}>50일</Text>
              </ListItem>
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTmPlayer',{mvTitle:'50일 파스텔', mvUrl:'https://drive.google.com/uc?export=download&id=1096Ymke2ZO3IZZJBGPsyJJI57nzIEJZT'})}>   
                    <ListItem last>
                      <Text style={styles.text}>50일 촬영(파스텔)</Text>
                    </ListItem>
                  </TouchableWithoutFeedback>
              
              <ListItem itemDivider>
                <Text style={styles.listDivider}>조리원</Text>
              </ListItem>
                  <ListItem last>
                    <Text style={styles.text}>100일의 첫번째, 50일, 고리만 터치가능</Text>
                  </ListItem>
                  
              <ListItem itemDivider>
                <Text style={styles.listDivider}>출생</Text>
              </ListItem>
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTmPlayer',{mvTitle:'테스트', mvUrl:'https://drive.google.com/uc?export=download&id=1_uush4RWqeLW2UQT-LxB9FeuZMOnaRTU'})}>   
                    <ListItem style={{ borderBottomColor: '#738786' }}>
                      <Text style={styles.text}>고리합창단 테스트</Text>
                    </ListItem>
                  </TouchableWithoutFeedback>
                  {/* <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTmPlayer',{mvTitle:'세로 테스트', mvUrl:'https://drive.google.com/uc?export=download&id=1-WlKIutQD65PbTSf0VqjrC6AUOjo7bJW'})}>    */}
                    <ListItem last>
                      <Text style={styles.text}>3D 초음파(세로테스트)</Text>
                    </ListItem>
                  {/* </TouchableWithoutFeedback> */}
            {/* </List> */}
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
            <Button active={this.state.tab4} onPress={() => {  }}>
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
            <Title>이태민</Title>
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
            <Button active={this.state.tab4} onPress={() => {  }}>
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MvTmList;