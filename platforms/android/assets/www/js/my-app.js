// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    var push = PushNotification.init({ "android": {"senderID": "306256784230"},
	"ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

	push.on('registration', function(data) {
	console.log(data.registrationId);
	$$("#gcm_id").html(data.registrationId);
	});

	push.on('notification', function(data) {
	console.log(data.message);
	alert(data.title+" Message: " +data.message);
	// data.title,
	// data.count,
	// data.sound,
	// data.image,
	// data.additionalData
	});

	push.on('error', function(e) {
	console.log(e.message);
	});
});


