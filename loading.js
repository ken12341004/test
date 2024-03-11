var currentImage = 0;
var totalImages = 72;
var currentBatteryImage = 0;
var totalBatteryImages = 5;

var loadingIntervalId;
var batteryIntervalId;

function changeImage() {
    currentImage = (currentImage + 1) % totalImages;
    document.getElementById("currentImage").src = 'hero/' + currentImage + '.png';

    if (currentImage === totalImages - 1) {
        clearInterval(loadingIntervalId);
    }
}

function changeBatteryImage() {
    currentBatteryImage = (currentBatteryImage + 1) % totalBatteryImages;
    document.getElementById("batteryImage").src = '電池/' + currentBatteryImage + '.png';

    if (currentBatteryImage === totalBatteryImages - 1) {
        clearInterval(batteryIntervalId);
    }
}
loadingIntervalId = setInterval(changeImage, 50);
batteryIntervalId = setInterval(changeBatteryImage, 675);
