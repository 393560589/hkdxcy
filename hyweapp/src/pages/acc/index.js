import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Navigator } from '@tarojs/components'
//import { connect } from '@tarojs/redux'
import { AtList, AtListItem } from "taro-ui"
//import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


class Account extends Component {
  constructor(){
    super(...arguments)
    this.state={

    }
  }
  config = {
    navigationBarTitleText: '我的'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {

    return (
      <View>
        <View className='acc-header'>
          <View className='acc-bar'>
            <Image>信息</Image>
            <Image>设置</Image>
          </View>
          <View>
            <View>
              <Image>头像</Image>
            </View>
            <View className='acc-msg'>
              <Text>葛云向往</Text>
              <Text>黄金会员</Text>
            </View>
          </View>
          <View className='acc-biq'>
            <View>c
              <Text>蝌蚪币</Text>
              <Text>100</Text>
            </View>
            <View>
              <Text>优惠券</Text>
              <Text>10</Text>
            </View>
          </View>
        </View>
        <View className='acc-nav'>

          <View>
            <Text>100</Text>
            <Text>商品</Text>
          </View>
          <View>
            <Text>100</Text>
            <Text>厂家</Text>
          </View>
          <View>
            <Text>100</Text>
            <Text>直播间</Text>
          </View>
        </View>

        <View className='acc-order'>
          <View>
            <Text>我的订单</Text>
            <Navigator>全部订单</Navigator>
          </View>
          <View>

          </View>
        </View>
        <AtList hasBorder={false}>
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'

            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            extraText='详细信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>
      </View>

    )
  }
}


export default Account
