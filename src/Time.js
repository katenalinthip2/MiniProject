import React, { useState, useEffect } from 'react';

const Time = (Value) => {

const StartClock24 =()=> {
let TheTime = new Date;
document.clock.showTime.value = Time(TheTime.getHours()) + ":" +
Time(TheTime.getMinutes()) + ":" + Time(TheTime.getSeconds());
setTimeout("StartClock24()",1000)
}

return (Value > 9) ? "" + Value : "0" + Value;
}
export default Time;