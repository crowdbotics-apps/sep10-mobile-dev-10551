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
  Datepicker,
  ApplicationProvider
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect, Provider} from "react-redux"
import {store} from "./store"
import { mapping, light as lightTheme } from '@eva-design/eva';

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View>
      <View>
        <Text>Sample text content</Text>
        <Button
          title="Press me!"
          color="#3366FF"
          onPress={() => alert("Pressed!")}
        />
      </View>
    </View>
  )
}

const Blank = withStyles(_Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
const App = connect(mapStateToProps, actionCreators)(Blank)
const AppWithStore = () => (
  <Provider store={store}>
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <App />
    </ApplicationProvider>
  </Provider>
)

export default AppWithStore