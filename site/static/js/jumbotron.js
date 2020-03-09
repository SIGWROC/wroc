var element = document.getElementById('text');
var page = document.getElementById('page');

// Check I have access to the device orientation event
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', doTheTextThing);
}

const results = Splitting();

function doTheTextThing(evt) {
	const value = Math.floor((evt.gamma + 90) / (180 / results[0].chars.length));
	const currentItem = results[0].chars[value];
	
	for (let i = 0; i < results[0].chars.length; i++) {
		results[0].chars[i].style.setProperty('--weight', 200);
		results[0].chars[i].style.setProperty('--transform', 1);
	}
	
	results[0].chars[value].style.setProperty('--weight', 700);
	results[0].chars[value].style.setProperty('--transform', 1.3);
}