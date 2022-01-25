function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    function walkEast(time, cb) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        setTimeout(() => {
            if(cb) {
                cb()
            };
        }, time)
    }

    function walkNorth(time, cb) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        setTimeout(() => {
            if(cb) {
                cb()
            };
        }, time)
    }

    function walkWest(time, cb) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        setTimeout(() => {
            if(cb) {
                cb()
            };
        }, time)
    }

    function walkSouth(time, cb) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        setTimeout(() => {
            if(cb) {
                cb()
            };
        }, time)
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}