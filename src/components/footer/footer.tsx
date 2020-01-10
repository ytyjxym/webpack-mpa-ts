import React from 'react';

type Iprops = Readonly<any>

export default class Footer extends React.Component<Iprops> {
    constructor(props:Iprops){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.children);
    }
    render = () => {
        return (
            <>
                <div className='footer'>footer</div>
            </>
        )
    }
}