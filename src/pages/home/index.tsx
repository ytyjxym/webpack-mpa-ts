import React from 'react'
import { Button } from 'antd'
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import type from './home.module.scss'
of(1,2,3).pipe(map(x => x + '!!!')).subscribe(x=>console.log(x))

interface IState {
    count:number[]
}

export default class Home extends React.Component<{},IState>{
    readonly state:IState = {
        count:[1,2,3]
    }

    add(time:number) {
        let a = of(this.state).toPromise().then(res=>console.log(res))
        console.log(a);
        
        let { count } = this.state
        this.setState({count:count.concat(time++)})
    }
    render(){
        return (
            <>
            <div className={type.heade}>
                {
                    this.state.count
                }
            </div>
                <Button
                    onClick={this.add.bind(this,1)}
                    type='danger'
                >1223</Button>
                {this.state.count}
            </>
        )
    }
}