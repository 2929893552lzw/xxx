import { Tabs, TabBar, Swiper, Image, AutoCenter} from 'antd-mobile';
import './App.css';
import{
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
}from 'antd-mobile-icons'
import collapseMotion from 'antd/lib/_util/motion';
function App() {
  return (
    <div className='app'>
      <div className="title">鲸探</div>
      <Swiper class='Swiper-container' loop autoplay autoplayInterval= {2000} >
        <Swiper.Item className='uu'>
          <div className='collect-item'>欢迎来到鲸探
            <img className='x'src={require('./tupian/1.jpg')}></img> 
          </div><div className='collect-item'></div>
        </Swiper.Item>
        <Swiper.Item className='uu'>购买及转让须知
          <div className='collect-item'>
            <img className='x'src={require('./tupian/1.jpg')}></img> 
          </div><div className='collect-item'></div>
        </Swiper.Item>
      </Swiper>
      <Tabs>
        <Tabs.Tab title='数字藏品' key='Digital collections'>
          <div className='collect-item'>
            <img className='pic'src={require('./tupian/1.jpg')}></img> 
          </div><div className='collect-item'>
            <img className='pic'src={require('./tupian/2.jpg')}></img> 
          </div>
          <div className='collect-item'>
            <img className='pic'src={require('./tupian/3.jpg')}></img> 
          </div>
          <div className='collect-item'>
            <img className='pic'src={require('./tupian/4.jpg')}></img> 
          </div>
          <div className='collect-item'>
            <img className='pic'src={require('./tupian/5.jpg')}></img> 
          </div>
          <div className='collect-item'>
            <img className='pic'src={require('./tupian/6.jpg')}></img> 
          </div>
        </Tabs.Tab>
        <Tabs.Tab title='发售日期' key='Sale Date'></Tabs.Tab>
        <Tabs.Tab title='内容精选' key='Content Selection'></Tabs.Tab>
      </Tabs>
      <TabBar className='tabbar'>
        <TabBar.Item title='首页'  key='1' icon= {AppOutline}></TabBar.Item>
        <TabBar.Item title='发现'  key='2' icon= {UnorderedListOutline} badge='99'></TabBar.Item>
        <TabBar.Item title='藏品'  key='3' icon= {MessageFill} badge='5'></TabBar.Item>
        <TabBar.Item title='我的'  key='4' icon= {UserOutline}></TabBar.Item>
      </TabBar>
    </div>
  );
}


export default App;
