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
                <Ly  style={{position:'fixed',left:0,right:0,top:40,bottom:50}}>
                    <LeftBar list={[1,2,3]} /> 
                    <Content style={{overflow:'auto',position:'absolute',top:0,left:200,bottom:0,right:0}}>
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