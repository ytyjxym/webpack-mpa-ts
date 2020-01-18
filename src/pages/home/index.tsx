import React from 'react'
import { Button } from 'antd'
import { of, fromEvent } from 'rxjs';
import { map,take } from 'rxjs/operators'
import type from './home.module.scss'
of(1,2,3).pipe(map(x => x + '!!!')).subscribe(x=>console.log(x))

interface IState {
    count:number[]
}

export default class Home extends React.Component<{},IState>{
    readonly state:IState = {
        count:[1,2,3]
    }
    btn = React.createRef<Button>()
    componentDidMount(){
        
        
    }

    add(time:number) {
        let a = of(this.state.count).toPromise().then(res=>console.log(res))
        let { count } = this.state
        this.setState({count:count.concat(1)})

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
                    ref={this.btn}
                    onClick={this.add.bind(this,1)}
                    type='danger'
                >1223</Button>
                {this.state.count}
            </>
        )
    }
}