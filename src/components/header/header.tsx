import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom'
type Iprops = Readonly<any>

export default class Header extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    render = () => {
        return (
            <>
                <div className='header'>
                    我是头
                </div>
                <div className='bg-header'></div>
            </>
        )
    }
}