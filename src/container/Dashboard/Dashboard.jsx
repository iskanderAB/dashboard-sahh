import React , {useState} from "react";
import { Layout, Menu ,Avatar} from 'antd';
import './_Dashboard.scss' ;
import RightDrawer from "../../components/Drawer/RightDrawer";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UsergroupAddOutlined,
    UploadOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
const Dashboard = (props)=> {
    let [collapsed,setCollapsed]=useState(true);
    let toggle = () => {
        setCollapsed(!collapsed)
    };
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}  theme="light" >
                <div className="logo" >
                    <figure>
                        <img src={props.logo} width="40" height="40" alt="logo"/>
                    </figure>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <AppstoreOutlined />
                        <span>les questions</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <UsergroupAddOutlined />
                        <span>patients</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background padding header" >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                     <RightDrawer/>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 10,
                        minHeight: '100vh',
                        backgroundColor : "rgba(255,109,144,0.04)"
                    }}>

                </Content>
            </Layout>
        </Layout>
    );
}
export default Dashboard ;

