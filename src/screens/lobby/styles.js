const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: "#000",
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 10
  },
  cardTop: {
    marginTop: -11, 
    marginBottom: -11
  },
  cardBottom: {
    marginTop: -21, 
    marginBottom: -21
  },
  social: {
    width: 16 * 3.2,
    height: 16 * 3.2,
    borderRadius: 16 * 1.75,
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: 16,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textThumb: {
    color: "#FFF",
    alignSelf: "center",
    fontSize: 18,
    // marginBottom: 7
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
    //marginLeft: -7,
    marginTop: 20,
    //marginBottom: 4,
  },
};
