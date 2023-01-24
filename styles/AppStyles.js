import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#9AC6DF',
    opacity: 0.7,
    padding: 16,
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
  errorText: {
    color: '#ff0000',
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
    color: '#ffffff',
  },
  lightTextInput: {
    borderBottomColor: '#ffffff',
  },
  darkTextInput: {
    borderBottomColor: '#000000',
  },
  inlineTextButton: {
    color: '#fff',
  },
  pressedInlineTextButton: {
    color: '#0E65A3',
    opacity: 3,
  },
});
