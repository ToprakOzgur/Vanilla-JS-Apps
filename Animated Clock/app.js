class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start.bind(this));
    this.pauseButton.addEventListener("click", this.pause);
  }

  //used bind to solve 'this' isues
  start() {
    //setinterval starts after delay so we manually invoked first
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  }

  //used arrow function to solve 'this' isues
  pause = () => {
    clearInterval(this.interval);
  };

  //used arrow function to solve 'this' isues
  tick = () => {
    this.timeRemaining = this.timeRemaining - 1;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
