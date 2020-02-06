import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, List, ListItem, Card, CardItem, Thumbnail } from "native-base";
import { ScrollView, View, Dimensions, Image, Animated, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import axios from "axios";
import styles from "./styles";
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
                  <Text style={styles.text}>최근 위로 0</Text>
                </Left>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Left>
                  <Thumbnail square source={dolImgs[1].thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>최근 위로 1</Text>
                </Left>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Left>
                  <Thumbnail square source={dolImgs[2].thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>최근 위로 2</Text>
                </Left>
              </ListItem>
              <ListItem last>
                <Left>
                  <Thumbnail square large source={dolImgs[3].thumbUrl} style={styles.listThumb} />
                  <Text style={styles.text}>최근 위로 3</Text>
                </Left>
              </ListItem>
              
              <ListItem itemDivider>
                <Text style={styles.listDivider}>100일</Text>
              </ListItem>
              <ListItem style={{alignContent:'stretch', borderBottomColor: '#738786'}}>
              {/* <ListItem style={{alignContent:'space-between'}}> */}
                <Left>
                  <ImageBackground source={dolImgs[0].thumbUrl} style={styles.imageTopLeft}> 
                    <View><Text style={styles.textThumb}>ㅂㅂ</Text></View>
                  </ImageBackground>
                </Left>
                <Body />
                {/* <Body>
                  <ImageBackground source={dolImgs[1].thumbUrl} style={styles.imageTopRight}>
                    <View><Text>ㅇ</Text></View>
                  </ImageBackground>
                </Body> */}
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
                  <ImageBackground source={dolImgs[1].thumbUrl} style={styles.imageBottomLeft}>
                    <View><Text style={styles.textThumb}>ㄱ</Text></View>
                  </ImageBackground>
                </Left>
                <Body>
                  <ImageBackground source={dolImgs[3].thumbUrl} style={styles.imageBottomRight}>
                    <View><Text style={styles.textThumb}>ㅊㅊ</Text></View>
                  </ImageBackground>
                </Body>
              </ListItem>
              
              <ListItem itemDivider>
                <Text style={styles.listDivider}>조리원</Text>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Text style={styles.text}>555</Text>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Text style={styles.text}>444444</Text>
              </ListItem>
              <ListItem last>
                <Text style={styles.text}>3333333</Text>
              </ListItem>

              <ListItem itemDivider>
                <Text style={styles.listDivider}>출생</Text>
              </ListItem>
              <ListItem style={{ borderBottomColor: '#738786' }}>
                <Text style={styles.text}>22</Text>
              </ListItem>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MvTm3d')}>   
                <ListItem last>
                  <Text style={styles.text}>3D 초음파</Text>
                </ListItem>
              </TouchableWithoutFeedback>
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