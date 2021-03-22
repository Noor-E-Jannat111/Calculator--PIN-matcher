// Function For Generate Pin
function pinGenerator() {
    const randomNum = Math.random() * 10000;
    const pinNum = (randomNum + '').split('.')[0];
    if (pinNum.length === 4) {
        return pinNum;        
    }
    else {
        return pinGenerator();
    }
}

// Display Generated Pin Event Handler
document.getElementById('pin-generate-btn').addEventListener('click', function () {
    document.getElementById('pin-generator').value = pinGenerator();
})

// Typing Pin Event Handler
document.getElementById('buttons-container').addEventListener('click', function (event) {
    const clickedDigit = event.target.innerText;
    if (isNaN(clickedDigit)) {
        if (clickedDigit === 'AC') {
            const typedPin = document.getElementById('typed-pin');
            typedPin.value = '';
        }
        else if (clickedDigit === 'DEL') {
            const typedPin = document.getElementById('typed-pin');
            typedPin.value = (typedPin.value).slice(0,-1);
        }
    }
    else {
        const typedPin = document.getElementById('typed-pin');
        typedPin.value = typedPin.value + clickedDigit;
    }
})

// Notify and Verify Pin Event Handler
document.getElementById('verify-pin').addEventListener('click', function () {
    const generatedPin = document.getElementById('pin-generator');
    const typedPin = document.getElementById('typed-pin');
    if (generatedPin.value === '') {
        notify('block', 'none', 'none', 'none',);
    }
    else if (typedPin.value === '') {
        notify('none', 'block', 'none', 'none',);
    }
    else if (generatedPin.value === typedPin.value) {
        notify('none', 'none', 'block', 'none')
    }
    else {
        notify('none', 'none', 'none', 'block')

        let count = 2;
        if (count < 1) {
            document.querySelector('.action-left').innerHTML = 'No more try';
            generatedPin.value = '';
            typedPin.value = '';
        }
        else {
            document.querySelector('.action-left').innerHTML = count-- + ' try left';
            typedPin.value = '';
            return count--;
        }
    }

})

// Function For Notify Status
function notify(generate, enter, correct, incorrect) {
    document.getElementById('notify-generate').style.display = generate;
    document.getElementById('notify-enter').style.display = enter;
    document.getElementById('notify-correct').style.display = correct;
    document.getElementById('notify-incorrect').style.display = incorrect;
}
