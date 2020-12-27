/* =======================================
    CHANGE SHOCASE PICTURE.
 ========================================= */

let currentPic = 1;

function displayNext() {
    // replace the current picture
    let picId = `img/${currentPic}.jpg`;
    // alert(picId)
    document.getElementById('showcase-img').src=picId;
    if(currentPic >= 234) currentPic = 0;
    currentPic += 1;
}

setInterval(displayNext, 3000);