var currentHeroImage = 0;
var totalHeroImages = 72;
var currentBatteryImage = 0;
var totalBatteryImages = 5;

var loadingIntervalId;
var batteryIntervalId;

function changeImage() {
    currentHeroImage = (currentHeroImage + 1) % totalHeroImages;
    document.getElementById("currentImage").src = 'hero/' + currentHeroImage + '.png';

    if (currentHeroImage === totalHeroImages - 1) {
        clearInterval(loadingIntervalId);
    }
}

function changeBatteryImage() {
    currentBatteryImage = (currentBatteryImage + 1) % totalBatteryImages;
    document.getElementById("batteryImage").src = 'batter/' + currentBatteryImage + '.png';

    if (currentBatteryImage === totalBatteryImages - 1) {
        clearInterval(batteryIntervalId);
    }
}
loadingIntervalId = setInterval(changeImage, 50);
batteryIntervalId = setInterval(changeBatteryImage, 675);
