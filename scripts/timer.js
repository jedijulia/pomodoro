var states = [
    {
        state: 'work',
        className: 'work',
        duration: 25 * 60
    },
    {
        state: 'rest',
        className: 'rest',
        duration: 5 * 60
    }
];

var currentState = states[0];
var currentTime = states[0].duration;
setInterval(updateTime, 1000);
displayTime(currentTime);

function updateTime() {
    displayTime(currentTime);
    if (currentTime !== 0) {
        currentTime -= 1;
    } else {
        states.push(states.shift());
        currentState = states[0];
        currentTime = currentState.duration;
    }
}

function displayTime(time) {
    document.querySelector('time').textContent = formatTime(time);
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return padZero(minutes) + ':' + padZero(seconds);
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}
