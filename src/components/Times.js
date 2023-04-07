import React from "react";
import InputName from "./InputName";
import ClocksList from "./ClockList";
import validZone from "../functions"

class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clockName: "",
            timeZone: "",
            clocksList: [], 
        };
        this.clockNameChange = this.clockNameChange.bind(this);
        this.timeZoneChange = this.timeZoneChange.bind(this);
        this.addClock=this.addClock.bind(this);        
    }
    
    clockNameChange({target}) {
        this.setState({clockName: target.value})
    }
    
    timeZoneChange({target}) {
        this.setState({timeZone: target.value})
    }
    
    addClock(evt) {
        evt.preventDefault();
        if (!validZone(this.state.timeZone) && this.state.timeZone !== '0') {
            alert('Часовой пояс должен быть равен 0 или целые 1-12 и знаком + или - перед числом');return
        }
        const oldName = this.state.clocksList.find(item => item.clockValue === this.state.clockName);
        if (oldName) {
            alert("Имя уже занято"); return
        } 
        this.state.clocksList.push({
            clockValue: this.state.clockName,
            zoneValue: this.state.timeZone  
        });              
        this.setState({clocksList: this.state.clocksList});
        this.setState({clockName: ""});
        this.setState({timeZone: ""});        
    }    
    
    render(){        
        return (
            <div className='container'>
            <form className="form-table" onSubmit={this.addClock}>
            <InputName headerValue="Название" dataValue={this.state.clockName}  dataChange={this.clockNameChange} />
            <InputName headerValue="Временная зона" dataValue={this.state.timeZone} dataChange={this.timeZoneChange} />
            <input id="btn" className="inputfield" type="submit" value="Добавить"/>
            </form>
            <ClocksList list={this.state.clocksList} timeThis={this}/>
            </div>
            )
        }        
    }
    
    export {Times as default}