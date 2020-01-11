import React from 'react'
import { Observable } from 'rxjs'
import { Button } from 'antd'

Function.apply = Observable.create(1)
export default class Home extends React.Component{
    readonly state = {
        count:1
    }
    add = () => Observable.create(this.state.count).subscribe((x:number) => this.setState({count: x + 1}))
    render(){
        return (
            <div>
                <Button
                    onClick={this.add}
                    type='danger'

                >1223</Button>
                {this.state.count}
            </div>
        )
    }
}