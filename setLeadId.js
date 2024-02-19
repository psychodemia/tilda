function getInputData(name) {
	let myObject = document.querySelectorAll(name);
	let valuesArray = Object.values(myObject).map(function(obj) {
		return obj.value;
	});
	return valuesArray.find(function(value) {
		return value !== "";
	});
}


function setCookie() {
	let phone = getInputData('input[data-tilda-rule="phone"]')
	let time = Date.now()
	let hash = CryptoJS.MD5(phone + time);
	document.cookie = "lead_id=" + hash + "; path=/; domain=." + location.hostname.replace(/^www\./i, "")
}

document.addEventListener(event.event.startsWith('submit_form'), function(event) {

		setCookie();
	
	console.log("Cookie lead_id установлена" );
});
