import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, ListItem } from "native-base";
import styles from "./styles";
// import First from "../tab/tabOne"
// import Second from "../tab/tabTwo"
//import { Block, Button, Text, theme } from 'galio-framework';

class MvLobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    console.info('tab1');
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    console.info('tab2');
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    console.info('tab3');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    console.info('tab4');
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    // let AppComponent = null;
    // if (this.state.tab1) {
    //   console.info('tab1 render');
    //   AppComponent = First;
    // } else if(this.state.tab2) {
    //   console.info('tab2 render');
    //   AppComponent = Second;
    // } else if(this.state.tab3) {
    //   console.info('tab3 render');
    //   AppComponent = First;
    // } else {
    //   console.info('tab4 render');
    //   AppComponent = Second;
    // }
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>동영상</Title>
          </Body>
          <Right />
        </Header>

        {/* <Content padder /> */}
        <Content padder>
          {/* {AppComponent} */}
          {this.state.tab1 && <Text>Tab1 Selected</Text>}
          {this.state.tab2 && <Text>Tab2 Selected</Text>}
          {this.state.tab3 && <Text>Tab3 Selected</Text>}
          {this.state.tab4 && <Text>Tab4 Selected</Text>}
        </Content>


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="paw" />
              <Text>메인</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="camera" />
              <Text>사진첩</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="logo-youtube" />
              <Text>동영상</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                                                              this.toggleTab4();
                                                              //this.props.navigation.navigate('IconText');
                                                            }}>
              {/* paw contact */}
              <Icon active={this.state.tab4} name="logo-github" /> 
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MvLobby;
