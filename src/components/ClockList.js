import React from "react";
import ClockElem from "./ClockElem"
class ClocksList extends React.Component {
    render() {
        return (
            <ul className="form-table output-block">
            {this.props.list.map((el) => <ClockElem key={el.clockValue}
            el={el} list={this.props.list} timeThis={this.props.timeThis}/>)}
            </ul>
            )
        }
    }
    
    export {ClocksList as default}