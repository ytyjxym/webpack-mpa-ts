import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
const { Sider } = Layout;
type Iprops = Readonly<any>

class LeftBar extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    toHome = () => {
      this.props.history.push('/') 
    }
    toUser= () => {
      this.props.history.push('/user') 
    }
    render = () => {
        return (
          <Sider style={{width:200,overflow:'auto',position:'absolute',top:0,left:0,bottom:0}}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
              <Menu.Item key="home" onClick={this.toHome}>
                <Icon type="home" />
                <span className="nav-text">home</span>
              </Menu.Item>
              <Menu.Item key="user" onClick={this.toUser}>
                <Icon type="user" />
                <span className="nav-text">user</span>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }
}
export default withRouter(LeftBar as any)