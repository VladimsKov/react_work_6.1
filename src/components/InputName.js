export default function InputName({headerValue, dataValue, dataChange}) {
    return (
        <div className="block">
        <p>{headerValue}</p>
        <input className="inputfield" value={dataValue} onChange={dataChange} required/>                      
        </div>
        )
    }