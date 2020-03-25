export default {
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },

  scrollView: {
    backgroundColor: '#F3F3F3',
    //height: height
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  // viewContainer: {
  //   flex: 1,
  //   height: height / 1.3986,
  // },
  toolbar: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
  },
  videoViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    //width: this.width,
    //height: this.height,
    //backgroundColor: '#ffffff',
    justifyContent: 'center',
    zIndex: 99999,
    //marginTop: -1 * (this.state.videoContainerLayout_y ? parseFloat(this.state.videoContainerLayout_y) : 0), //margin: 0 - is not working properly. So, updated all the margin individually with 0.
    //marginLeft: -1 * (this.state.videoContainerLayout_x ? parseFloat(this.state.videoContainerLayout_x) : 0),
    
  }
};
