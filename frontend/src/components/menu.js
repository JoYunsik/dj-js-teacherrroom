import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  SettingOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const {Sider, Content} = Layout;
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('특별실 예약', '1', <FormOutlined />),
    getItem('Settings', 'sub1', <SettingOutlined />, [
      getItem('전담시간표 작성', '2'),
      getItem('특별실 추가/제거','3'),
      getItem('데이터 관리/삭제', '4'),
    ]),
  ];

const Menubar = ({setDefaultsetting})=>{
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const onClick = (e) => {
        if(e.key==='1'){
          setDefaultsetting(false)
          navigate('/')
        } else if(e.key==='2'){
          setDefaultsetting(true)
          navigate('/')
        }else if(e.key==='3'){
          navigate('settings/rooms/')
        } else if(e.key==='4'){
          navigate('settings/datatable/')
        }
      };

    return(
    <Layout
        style={{
            minHeight: '100vh',
        }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Content style={{backgroundColor:'#f5f2e2'}}>
        <Outlet/>
      </Content>
    </Layout>
    
    )
};

export default Menubar;

