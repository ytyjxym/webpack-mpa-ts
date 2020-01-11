import React from 'react'
import { Button } from 'antd'
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import './home.scss'
of(1,2,3).pipe(map(x => x + '!!!')).subscribe(x=>console.log(x))

interface IState {
    count:number[]
}

export default class Home extends React.Component<{},IState>{
    readonly state:IState = {
        count:[1,2,3]
    }
    
    add = () => {
        let { count } = this.state
    }
    render(){
        return (
            <>
                <Button
                    onClick={this.add}
                    type='danger'

                >1223</Button>
                {this.state.count}
            </>
        )
    }
}