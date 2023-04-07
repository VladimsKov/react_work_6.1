function validZone(value) {
    const regExp = /^([+-]([1-9]|(1[0-2]))|0)$/gm;    
    return +value.match(regExp);}
    export {validZone as default};