
import {Button,Tabs,TabBar, Swiper, Image} from 'antd-mobile';

import './App.css';
import{
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
}from 'antd-mobile-icons'

function App() {
  return (
    <div>
      <div className="title">鲸探</div>
      <Button color='warning'>你好</Button>
      <Button color='success'>百科</Button>
      <Tabs>
        <Tabs.Tab title='数字藏品' key='Digital collections'></Tabs.Tab>
        <Tabs.Tab title='发售日期' key='Sale Date'></Tabs.Tab>
        <Tabs.Tab title='内容精选' key='Content Selection'></Tabs.Tab>
      </Tabs>
      <Swiper class='Swiper-container'>
        <Swiper.Item></Swiper.Item>
        <Swiper.Item></Swiper.Item>

      </Swiper>
      <TabBar>
        <TabBar.Item title='首页'  key='1' icon= {AppOutline}></TabBar.Item>
        <TabBar.Item title='发现'  key='2' icon= {UnorderedListOutline} badge='99'></TabBar.Item>
        <TabBar.Item title='藏品'  key='3' icon= {MessageFill} badge='5'></TabBar.Item>
        <TabBar.Item title='我的'  key='4' icon= {UserOutline}></TabBar.Item>
      </TabBar>
    </div>
  );
}


export default App;
