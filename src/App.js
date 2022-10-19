import { Tabs, TabBar, Swiper, Button } from 'antd-mobile';
import './App.css';
import
{
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import{
  useNavigate,
  Routes,
  Route,
}from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/me' element={<Me />}></Route>
        <Route path='2' element={<Mexx />}></Route>
        <Route path='3' element={<Mexxx />}></Route>
      </Routes>
      <TabBar className='tabbar' onChange={(key)=>{( navigate(key))}}>
        <TabBar.Item title='首页'  key='/' icon= {AppOutline}></TabBar.Item>
        <TabBar.Item title='发现'  key='2' icon= {UnorderedListOutline} badge='99'></TabBar.Item>
        <TabBar.Item title='藏品'  key='3' icon= {MessageFill} badge='5'></TabBar.Item>
        <TabBar.Item title='我的'  key='/me' icon= {UserOutline}></TabBar.Item>
      </TabBar>
    </div>
  );
}
function Home() {
  return (
    <>
      <div className="title" onClick={() => {alert('欢迎来到鲸探')}}>鲸探</div>
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
        <Tabs.Tab title='内容精选' key='Content Selection'>当前内容需要分成同层级结构的组，进行内容切换展示，常用在表单或者列表的顶部。   </Tabs.Tab>
      </Tabs>
    </>
  )
}
function Me() {
  return (
    <>
      <div>A</div>
    </>
  )
}
function Mexx() {
  return (
    <>
      <div>sjbgbyrbyr</div>
    </>
  )
}
function Mexxx() {
  return (
    <>
      <div>你好</div>
      <img className='pic'src={require('./tupian/2.jpg')}></img>
    </>
  )
}



export default App;
