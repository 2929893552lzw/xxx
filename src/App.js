import { Tabs, TabBar, Swiper, Footer, Space, Tag, List, FloatingPanel,NoticeBar } from 'antd-mobile';
import './App.css';
import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
  SearchOutline,
} from 'antd-mobile-icons'
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  
} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/me' element={<Me />}></Route>
        <Route path='/2' element={<Mexx />}></Route>
        <Route path='/3' element={<Mexxx />}></Route>
        <Route path='/lbt' element={<Lbt1 />}></Route>
        <Route path='/lbt2' element={<Lbt2 />}></Route>
      </Routes>
      <TabBar className='tabbar' activeKey={pathname} onChange={(key) => { (navigate(key)) }}>
        <TabBar.Item title='首页' key='/' icon={AppOutline}></TabBar.Item>
        <TabBar.Item title='发现' key='/2' icon={UnorderedListOutline} badge='99'></TabBar.Item>
        <TabBar.Item title='藏品' key='/3' icon={MessageFill} badge='5'></TabBar.Item>
        <TabBar.Item title='我的' key='/me' icon={UserOutline}></TabBar.Item>
      </TabBar>
    </div>
  );
}
function Home() {
  const navigate = useNavigate()

  return (
    <div className='home'>'
      <div className='tpbj'>
        <Swiper class='Swiper-container' loop autoplay autoplayInterval={2000} >
          <Swiper.Item className='uu' onClick={() => { navigate('/lbt') }}>
            <div className='collect-item'>
              <img className='x' src={require('./tupian/7.jpg')}></img>
            </div>
          </Swiper.Item>
          <Swiper.Item className='uu' onClick={() => { navigate('/lbt2') }}>
            <div className='collect-item'>
              <img className='x' src={require('./tupian/8.jpg')}></img>
            </div>
          </Swiper.Item>
        </Swiper>
      </div>
      <Tabs className='tabs'>
        <Tabs.Tab calss='tabs'title='数字藏品' key='Digital collections' >
          <div>
            <div className='tpbj'>
              <img className='pic' src={require('./tupian/9.jpg')}></img>
              <div>二十四诗品印象</div>
              <div>
                <Tag color='gold'>限量</Tag>
                <Tag color='primary'>10000份</Tag>
              </div>
              <div className='tx1'>
                <div>
                  <img className='tx' src={require('./tupian/16.jpg')}></img>
                </div>
                <div className='tx2' >15.00</div>
              </div>
            </div>
            <div className='tpbj'>
              <img className='pic' src={require('./tupian/10.jpg')}></img>
              <div>二十四诗品印象</div>
              <Tag color='default'>限量</Tag>
              <Tag color='primary'>10000份</Tag>
              <div>中国美术学院国潮艺术研究院</div>
              <div className='tx1'>
                <div>
                  <img className='tx' src={require('./tupian/16.jpg')}></img>
                </div>
                <div className='tx2' >15.00</div>
              </div>
            </div>
            <div className='tpbj'>
              <img className='pic' src={require('./tupian/11.jpg')}></img>
              <div>二十四诗品印象</div>
              <Tag color='default'>限量</Tag>
              <Tag color='primary'>10000份</Tag>
              <div>中国美术学院国潮艺术研究院</div>
              <div className='tx1'>
                <div>
                  <img className='tx' src={require('./tupian/16.jpg')}></img>
                </div>
                <div className='tx2' >15.00</div>
              </div>
            </div>
            <div className='tpbj'>
              <img className='pic' src={require('./tupian/12.jpg')}></img>
              <div>二十四诗品印象</div>
              <Tag color='default'>限量</Tag>
              <Tag color='primary'>10000份</Tag>
              <div>中国美术学院国潮艺术研究院</div>
              <div className='tx1'>
                <div>
                  <img className='tx' src={require('./tupian/16.jpg')}></img>
                </div>
                <div className='tx2' >15.00</div>
              </div>
            </div>
            <div className='tpbj'>
              <img className='pic' src={require('./tupian/14.jpg')}></img>
              <div className=''>二十四诗品印象</div>
              <Tag color='default'>限量</Tag>
              <Tag color='primary'>10000份</Tag>
              <div>中国美术学院国潮艺术研究院</div>
              <div className='tx1'>
                <div>
                  <img className='tx' src={require('./tupian/16.jpg')}></img>
                </div>
                <div className='tx2' >15.00</div>
              </div>
            </div>
          </div>
          <Footer className='tabs' label='没有更多了'></Footer>
        </Tabs.Tab>
        <Tabs.Tab title='发售日期' key='Sale Date'>
          <Footer className='tabs' label='更多内容敬请期待'></Footer>
        </Tabs.Tab>
        <Tabs.Tab title='内容精选' key='Content Selection'>当前内容需要分成同层级结构的组，进行内容切换展示，常用在表单或者列表的顶部。
          <Footer className='tabs' label='更多内容敬请期待'></Footer>
        </Tabs.Tab>
      </Tabs>
      <div className='title' onClick={() => { alert('欢迎来到鲸探') }}>鲸探</div>
    </div>
  )
}
function Me() {
  return (
    <div>
      <NoticeBar content='默认' color='default' />
      <div className ='me1'>
       <List >
        <List.Item icon={SearchOutline }>区块链信息查询</List.Item>
        <List.Item>我的客服</List.Item>
        <List.Item>关于鲸探</List.Item>
        <List.Item>分享鲸探</List.Item>
        <List.Item prefix={<SearchOutline />}>设置</List.Item>
       </List>
      </div>
      <Footer className='tabs' label='提供技术支持'></Footer>

    </div> 
  )

}
function Mexx() {
  return (
    <>
      <Tabs>
        <Tabs.Tab className='tabs' title='推荐' key='tj'></Tabs.Tab>
        <Tabs.Tab className='tabs' title='关注' key='gz'></Tabs.Tab>
      </Tabs>
    </>
  )
}
function Mexxx() {
  
  
  return (
    <div className='dd'>
     <div>
       <img className='wdcp' src={require('./tupian/11.jpg')} />
     </div>
    <div >
      <img className='ps' src={require('./tupian/13.jpg')} />
      <img className='pc' src={require('./tupian/12.jpg')} />
      <img className='pc' src={require('./tupian/14.jpg')} />
     </div>
     <div className='title' onClick={() => { alert('欢迎来到鲸探') }}>鲸探</div>
    </div>
  )
}
function Lbt1() {
  return (
    <>
      <div>你好</div>

    </>
  )
}
function Lbt2() {
  return (
    <>
      <div>88888888</div>
    </>
  )
}



export default App;
