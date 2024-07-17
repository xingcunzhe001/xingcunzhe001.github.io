var time = 0;
var lapTime = 0;
var lapCounter = 0;
var splitCounter = 0;
var running = false;

// Toggles the running state of our program
function startPause() {
    if (!running) {
        running = true;
        increment();
        document.getElementById('lap').style.display = "inline";
        document.getElementById('split').style.display = "inline";
        document.getElementById('startPause').innerHTML = "Pause";
        document.getElementById('reset').style.display = "none";
    } else if (running) {
        running = false;
        clearTimeout(timer);
        document.getElementById('lap').style.display = "none";
        document.getElementById('split').style.display = "none";
        document.getElementById('startPause').innerHTML = "Resume";
        if (time > 0) {
            document.getElementById('reset').style.display = "inline";
        }
    }
}

// Back to the default state
function reset() {
    time = 0;
    lapCounter = 0;
    splitCounter = 0;
    running = false;
    clearTimeout(timer);
    document.getElementById('startPause').innerHTML = "Start";
    document.getElementById('output').innerHTML = "00:00:0";
    document.getElementById('splits').innerHTML = "";
    document.getElementById('laps').innerHTML = "";
    document.getElementById('reset').style.display = "none";
}

// Creates an unordered list with the split time
function split() {
    splitCounter++;
    let p = document.createElement('UL');                       
    let text = document.createTextNode('Split #' + splitCounter + ': ' +timeToString(time));     
    p.appendChild(text);                                        
    document.getElementById('splits').appendChild(p);    
}

// Creates a unordered list with the lap time and resets the lap time
function lap() {
    lapCounter++;
    let p = document.createElement('UL');                       
    
    var taskName = prompt("Enter task", "");    
    
    let text = document.createTextNode(lapCounter + ': ' + taskName + " " + timeToString(lapTime));     
    p.appendChild(text);                                        
    document.getElementById('laps').appendChild(p);
    lapTime = 0;          
}

function increment() {
    if (running) {
        timer = setTimeout(function() {
            time++;                                  
            lapTime++;

            // MADE IN HEAVEN           
            // time += 100;
            // lapTime += 100;
            
            document.getElementById('output').innerHTML = timeToString(time);
            increment();
        }, 100);
    }
    
}

function timeToString(time) {
    var hours = Math.floor(time / 10 / 60 /60 % 60);
    var mins = Math.floor(time / 10 / 60 % 60);
    var secs = Math.floor(time / 10 % 60);
    var tenths = time % 10;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    return hours + ":" + mins + ":" + secs + ":" + tenths;
}