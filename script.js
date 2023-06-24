let blueScore = 0;
let redScore = 0;
let warnings = {
    blue: 0,
    red: 0
};

const pointKeeper = document.getElementById('pointKeeper');
pointKeeper.addEventListener('touchstart', handleTouchStart, false);
pointKeeper.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = event.touches[0].clientX;
    let yUp = event.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            // Swiped left
            addPoint('red');
        } else {
            // Swiped right
            addPoint('blue');
        }
    }

    // Reset touch coordinates
    xDown = null;
    yDown = null;
}

function addPoint(color) {
    if (color === 'blue') {
        blueScore++;
        document.getElementById('blueScore').getElementsByTagName('p')[0].textContent = blueScore;
    } else if (color === 'red') {
        redScore++;
        document.getElementById('redScore').getElementsByTagName('p')[0].textContent = redScore;
    }
}

function addWarning(color) {
    warnings[color]++;
    if (warnings[color] === 3) {
        deductPoint(color);
        warnings[color] = 0;
    }
}

function deductPoint(color) {
    if (color === 'blue') {
        if (blueScore > 0) {
            blueScore--;
            document.getElementById('blueScore').getElementsByTagName('p')[0].textContent = blueScore;
        }
    } else if (color === 'red') {
        if (redScore > 0) {
            redScore--;
            document.getElementById('redScore').getElementsByTagName('p')[0].textContent = redScore;
        }
    }
}

function resetScores() {
    blueScore = 0;
    redScore = 0;
    warnings.blue = 0;
    warnings.red = 0;
    document.getElementById('blueScore').getElementsByTagName('p')[0].textContent = blueScore;
    document.getElementById('redScore').getElementsByTagName('p')[0].textContent = redScore;
}
