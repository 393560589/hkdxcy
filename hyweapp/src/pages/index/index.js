import Taro, {Component} from '@tarojs/taro'
import {View, ScrollView, Input, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import Feed from '../../components/feed/feed'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import {create} from 'dva-core';
import {connect} from '@tarojs/redux'
import action from '../../utils/action'
import { AtNoticebar } from 'taro-ui'

@connect(({feeds, loading}) => ({
  ...feeds,
  isLoad: loading.effects["feeds/load"],
  isLoadMore: loading.effects["feeds/loadMore"],
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  constructor() {
    super(...arguments);
  }

  componentDidMount = () => {
    this.props.dispatch(action("feeds/load"));
  };

  onPullDownRefresh = () => {
    this.props.dispatch(action("feeds/load"));
  };

  onReachBottom = () => {
    this.props.dispatch(action("feeds/loadMore"));
  };

  updateList = () => {
    this.props.dispatch(action("feeds/search",true));
  };



  render() {
    const {list = [], isLoad, isLoadMore} = this.props;
    return (
     <View style="background:#f5f5f5;">
       <Swiper
       className='test-h'
       indicatorColor='#f8bebc'
       indicatorActiveColor='#fb5654'
       circular
       indicatorDots
       autoplay>
         <SwiperItem>
           <View className='demo-text-1'>1</View>
         </SwiperItem>
         <SwiperItem>
            <View className='demo-text-2'>2</View>
         </SwiperItem>
         <SwiperItem>
           <View className='demo-text-3'>3</View>
         </SwiperItem>
       </Swiper>
       <View className="flex-wrp tipfl" style="flex-direction:row;">
        <View className="flex-item">
          <Image src={require('../../asset/images/home/ic_home_recommend_default@3x.png')}/>
          <Text>今日精选</Text>
        </View>
        <View className="flex-item">
          <Image src={require('../../asset/images/home/ic_home_odds_default@3x.png')}/>
          <Text>厂家特惠</Text>
        </View>
        <View className="flex-item">
          <Image src={require('../../asset/images/home/ic_home_classify_default@3x.png')}/>
          <Text>全部分类</Text>
        </View>
       </View>
       <View className="xlb">
        <AtNoticebar 
         icon='volume-plus'
         moreText='详情'
         marquee
         single>
          优品汇自营家电清洗服务上线 
        </AtNoticebar>
       </View>
       <View className="bosliving">
        <View className="title">
          <Text>厂家直播</Text>
          <Image src={require('../../asset/images/home/ic_home_more_default@3x.png')}/>
        </View>
        <View className="box">
          <View className="left-box">
            <Image src={require('../../asset/images/modpic/09.jpg')}/>
          </View>
          <View className="right-box">
            <View>
              <Image src={require('../../asset/images/modpic/10.jpg')}/>
            </View>
            <View>
              <Image src={require('../../asset/images/modpic/10.jpg')}/>
            </View>
          </View>
        </View>
       </View>
       <View className="timelimt">
          <View className="title" style="border-bottom:1px solid #e4e4e4;">
            <Text>限时秒杀</Text>
            <Image src={require('../../asset/images/home/ic_home_more_default@3x.png')}/>
          </View>
          <View className="box">
            <View className="godsli">
              <Image  src={require('../../asset/images/modpic/845.jpg')}/>
              <Text className="name">泡泡T恤</Text>
              <View className="price">
                $128
                <Text style="font-size:25rpx;color:#AAAAAA;text-decoration:line-through;">$228</Text>
              </View>
            </View>
            <View className="godsli">
              <Image src={require('../../asset/images/modpic/845.jpg')}/>
              <Text className="name">泡泡T恤</Text>
              <View className="price">
                $128
                <Text style="font-size:25rpx;color:#AAAAAA;text-decoration:line-through;">$228</Text>
              </View>
            </View>
            <View className="godsli">
              <Image src={require('../../asset/images/modpic/845.jpg')}/>
              <Text className="name">泡泡T恤</Text>
              <View className="price">
                $128
                <Text style="font-size:25rpx;color:#AAAAAA;text-decoration:line-through;">$228</Text>
              </View>
            </View>
            <View className="godsli">
              <Image src={require('../../asset/images/modpic/845.jpg')}/>
              <Text className="name">泡泡T恤</Text>
              <View className="price">
                $128
                <Text style="font-size:25rpx;color:#AAAAAA;text-decoration:line-through;">$228</Text>
              </View>
            </View>
          </View>
       </View>
     </View>
    )
  }
}

