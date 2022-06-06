let x = setInterval(function () {
    let currentDate = new Date();
    //let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let hours = currentDate.getHours();
    var newformat = hours >= 12 ? 'PM' : 'AM';
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    document.querySelector('h2').innerHTML = hours + ":" + minutes + ":" + seconds + " " + newformat;
}, 1000)

// document.querySelector('body').addEventListener('click', function (e) {
//     console.log(e)
// })

window.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode;
    console.log(e, keyCode, e.which)
    if (keyCode == 192) {
        // document.body.innerHTML = "";
        document.body.innerHTML = "<label for='homepage'></label><input type='search' id='search' onsearch='myFunction()' autofocus>";
        // this.window.addEventListener('keydown', function (event) {
        //     var keyCode = event.keyCode
        //     if (keyCode == 13) {
        //         this.window.location.href = 'https://www.google.com/';
        //     }
        // })
    }
});

function myFunction() {
    var b = document.getElementById('search').value;
    let urlFirstPart = "https://www.google.com/search?q=";

    let urlQueryString = encodeURIComponent(b);

    const fullURL = urlFirstPart + urlQueryString;
    window.location.href = fullURL;
}

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.querySelector('.name').style.color = newColor;
        doNext && doNext();
    }, delay)
}

// STILL A LOT OF NESTING!!!
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blueviolet', 1000, () => {

                })
            })
        })
    })
});
