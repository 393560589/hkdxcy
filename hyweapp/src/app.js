import '@tarojs/async-await'
import action from './utils/action'
import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import dva from './dva'
import models from './model'
import { Provider } from '@tarojs/redux'


import './app.scss'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/acc/index',
      'pages/index/index',
      'pages/discovery/discovery',
      'pages/more/more',
      'pages/answer/answer',
      'pages/question/question'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: '源货',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#aaa",
      selectedColor: "#222",
      backgroundColor: "#fff",
      borderStyle: "#eee",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      }, {
        pagePath: "pages/discovery/discovery",
        text: "厂家",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      },
        {
          pagePath: "pages/more/more",
          text: "进货车",
          iconPath: "./asset/images/burger.png",
          selectedIconPath: "./asset/images/burger_focus.png"
        },
        {
          pagePath: "pages/acc/index",
          text: "账户",
          iconPath: "./asset/images/discovery.png",
          selectedIconPath: "./asset/images/burger_focus.png"
        }]
    }
  }

  componentDidMount() {
    dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {
    return (
      <Provider store={store}>
      <Index />
      </Provider>
  )
  }
}

Taro.render(dvaApp.start(<App />), document.getElementById('app'))
