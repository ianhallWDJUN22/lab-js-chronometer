class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
  }, 1000);
  }
  
  getMinutes() {
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime >= 60) { 
      return Math.floor(this.currentTime / 60);
  }
}

  getSeconds() {
     return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value > 9) { 
return value.toString()
  //  } else if ( value == 0) {
  //    return '00'
   } else return '0' + value
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


