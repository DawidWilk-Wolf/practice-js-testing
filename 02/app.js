document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element, error = null) {
    try{
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';
    }
    catch(e){
        console.log('bbb')
        throw(error)
    }
    finally{
        console.log('aaa')
    }
    // if(error) {
    //     throw error;
    // }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}
