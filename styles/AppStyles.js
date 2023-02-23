import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  imageContainer: {
    flex: 1,
    backgroundColor: '#E1705D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#E1705D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  noPadding: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginVertical: 4,
  },
  fillSpace: {
    flex: 1,
  },
  rightAligned: {
    justifyContent: 'flex-end',
  },
  topMargin: {
    marginTop: 16,
  },
  bottomMargin: {
    marginBottom: 16,
  },
  rightMargin: {
    marginRight: 16,
  },
  leftMargin: {
    marginLeft: 16,
  },
  backgroundCover: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1705D',
    opacity: 0.7,
    padding: 16,
  },
  lightText28: {
    color: '#FAF5F3',
    fontSize: 28,
  },
  lightText16: {
    color: '#FAF5F3',
    fontSize: 16,
  },
  darkText28: {
    color: '#0F1A4D',
    fontSize: 28,
  },
  darkText18: {
    color: '#0F1A4D',
    fontSize: 18,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 18,
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
    color:"0F1A4D" ,
  },
  lightTextInput: {
    borderBottomColor: '#ffffff',
  },
  darkTextInput: {
    borderBottomColor: '#0F1A4D',
  },
  inlineTextButton: {
    color: 'FAF5F3',
  },
  pressedInlineTextButton: {
    color: '#006B76',
  },
  button: {
    backgroundColor:'#FAF5F3',
    borderColor: 'E1705D',
    borderWidth: 1,
    height: 60,
    width: 240,
    borderRadius: 10,
    marginHorizontal: 60,
    elevation: 4,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
    fontSize: 20,
    
  },

  // terms: {
  //   flex: 1,
  //   //paddingVertical: 20,
  //   //paddingHorizontal: 10,
  //   backgroundColor: "FAF5F3",
  //   position: "relative",
  //   padding: 20,
    
  // },

  // termsText: {
  //   color: "#0F1A4D"
  // },

  reset: {
color: "orange"
  }
});
