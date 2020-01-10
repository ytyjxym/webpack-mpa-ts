import React from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
type Iprops = Readonly<any>

export default class Layout extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    render = () => {
        return (
            <>
            <Header />
                {
                    this.props.children
                }
            <Footer />
            </>
        )
    }
}