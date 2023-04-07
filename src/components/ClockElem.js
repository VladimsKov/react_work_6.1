import React from "react";
class ClockElem extends React.Component {
    constructor(props) {
        super(props);
        this.delClockElem = this.delClockElem.bind(this);        
        this.date = new Date();
        this.state= {
            secDeg: this.degValue('sec', this.date),
            minDeg: this.degValue('min', this.date),
            hourDeg: this.degValue('hour', this.date)
        }
        this.timerId = null;                    
    }
    componentDidMount() {
        this.timerId = setInterval(()=> {
            this.date = new Date();
            this.setState({
                secDeg: this.degValue('sec', this.date),
                minDeg: this.degValue('min', this.date),
                hourDeg: this.degValue('hour', this.date)
            });                                   
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    degValue(arrow, date) {
        const sec = date.getSeconds();
        const min = date.getMinutes();
        let hour = date.getUTCHours() + +this.props.el.zoneValue;
        if (hour > 12) {hour = hour - 12};        
        if (arrow === 'sec') {
            return 6 * sec;
        };
        if (arrow === 'min') {
            return 6 * min;
        };        
        return 30 * hour + 30/60 * min;
    }
    
    listFilter(currentTarget) {
        const elem = currentTarget.firstElementChild.nextElementSibling.textContent;
        return (
            this.props.list.filter(el => el.clockValue !== elem)
            )
        }        
        delClockElem({target, currentTarget}) {            
            if (target.classList.contains('del-btn')) {
                this.props.timeThis.setState({clocksList: this.listFilter(currentTarget)
                });                        
            }                
        }
        
        render() {
            return (
                <li className="clockelem" onClick={this.delClockElem}>
                <button className="del-btn form-btn"></button>
                <span>{this.props.el.clockValue}</span>
                <span>зона: {this.props.el.zoneValue} ч</span>
                <div className="clock" >
                <div className="sec arrow"  style={{transform: `rotate(${this.state.secDeg}deg)`}}></div>
                <div className="min arrow" style={{transform: `rotate(${this.state.minDeg}deg)`}}></div>
                <div className="hour arrow" style={{transform: `rotate(${this.state.hourDeg}deg)`}}></div>                      
                </div>             
                </li>
                )
            }
        }
        export {ClockElem as default}    
        