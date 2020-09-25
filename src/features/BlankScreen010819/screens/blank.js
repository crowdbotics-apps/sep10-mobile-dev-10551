import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Input_4: "" }

  render = () => (
    <View style={this.props.themedStyle.View_1}>
      <Button
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "center",
          fontFamily: "Roboto-Regular"
        }}
        style={this.props.themedStyle.Button_2}
        onPress={() => alert("Pressed!")}
      >
        Press me!
      </Button>
      <Text style={this.props.themedStyle.Text_3}>Sample text content</Text>
      <Input
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "left",
          fontFamily: "Roboto-Regular"
        }}
        style={this.props.themedStyle.Input_4}
        value={this.state.Input_4}
        onChangeText={nextValue => this.setState({ Input_4: nextValue })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    textAlign: "left",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Button_2: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    textAlign: "center",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#3366FF",
    fontFamily: "Roboto-Regular",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Text_3: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    textAlign: "left",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Input_4: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    textAlign: "left",
    verticalAlign: "baseline",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
}))
