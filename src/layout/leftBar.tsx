import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
type Iprops = Readonly<any>

export default class LeftBar extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    render = () => {
        return (
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                bottom: '50px',
                top:'40px'
              }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span className="nav-text">home</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text">user</span>
                </Menu.Item>
              </Menu>
            </Sider>
        )
    }
}