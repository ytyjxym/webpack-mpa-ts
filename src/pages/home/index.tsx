import React from 'react'
import { Observable } from 'rxjs'
console.log(Observable)

export default class Home extends React.Component{
    readonly state = {
        count:1
    }
    // add = Rx.Observable.create(this.state.count).subcribe((x:number) => this.setState({count:x+1}))
    render(){
        return (
            <div>
                {/* <button onClick={this.add}></button> */}
                {this.state.count}
            </div>
        )
    }
}