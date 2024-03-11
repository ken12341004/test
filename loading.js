var currentImageIndex = 0;
var totalImages = 72;
var currentBatteryImage = 0;
var totalBatteryImages = 5;

var loadingIntervalId;
var batteryIntervalId;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    var imageName = currentImageIndex.toString().padStart(4, '0');
    document.getElementById("loadingImage").src = '吉祥物/_' + imageName + '.png';

    if (currentImageIndex === totalImages - 1) {
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
