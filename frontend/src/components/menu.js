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

const yellow = '#FEFFF0';
const blue = '#ECEEFD';
const red = '#FDEDEC';
const Menubar = ({setDefaultsetting})=>{
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const [color, setColor] = useState(yellow)
    const onClick = (e) => {
        if(e.key==='1'){
          setColor(yellow);
          setDefaultsetting(false);
          navigate('/');
        } else if(e.key==='2'){
          setColor(blue);
          setDefaultsetting(true);
          navigate('/');
        }else if(e.key==='3'){
          setColor(red);
          navigate('settings/rooms/');
        } else if(e.key==='4'){
          setColor(red);
          navigate('settings/datatable/');
        }
      };

    return(
    <Layout
        style={{
            minHeight: '100vh',
            zIndex:'-1'
        }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Content style={{backgroundColor:color}}>
        <Outlet/>
      </Content>
    </Layout>
    
    )
};

export default Menubar;

