import React from 'react';
// import './header.scss'
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
                    <Link to='/'>home</Link>
                    <Link to='/user'>user</Link>
                </div>
            </>
        )
    }
}