import React from 'react';

type Iprops = Readonly<any>

export default class Header extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    render = () => {
        return (
            <>
                <div className='header'>header</div>
            </>
        )
    }
}