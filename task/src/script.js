let keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ']

let keys2 = ['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU']


document.addEventListener("keydown", function(event) {
    if (keys.includes(event.code)) {
        let audio = new Audio(`white-keys/${event.key.toUpperCase()}.mp3`);
        audio.play().then();
    } else if (keys2.includes(event.code)) {
        let audio = new Audio(`black-keys/${event.key.toUpperCase()}.mp3`);
        audio.play().then();
    }
});