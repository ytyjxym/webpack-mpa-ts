import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import LeftBar from './leftBar'
import { Layout as Ly } from 'antd'
const { Content } = Ly
import './layout.scss'
type Iprops = Readonly<any>

export default class Layout extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    render = () => {
        return (
            <Ly>
                <Header/>
                <LeftBar /> 
                <Ly style={{marginLeft:200}}>
                    <Content style={{margin: '24px 16px 0'}}>
                        {
                            this.props.children
                        }
                    </Content>
                </Ly>
                <Footer/>
            </Ly>
        )
    }
}