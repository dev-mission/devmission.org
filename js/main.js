$(document).ready(function(){
	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}
	submitParticipateForm();
	submitVolunteerForm();
});

function submitVolunteerForm() {

	$('#volunteer-form-submit').click(function(e) {
    e.preventDefault();
		console.log("IN volunteer")
    var contactName = $('#contact-name').val();
		var contactTitle = $('#contact-title').val();
    var contactEmail = $('#contact-email').val();
		var contactAbout = $('#contact-about').val();
    var contactPurpose = $('#contact-purpose').val();
		var contactAdditional = $('#contact-additional').val();
    // data validation code here
    var url = "//docs.google.com/forms/d/e/1FAIpQLSdA4kqdrQE_HU-JlannPooeAR2nfwQp7AqFwUHKadimmcBBHg/formResponse";
    var data = {
        'entry.2005620554': contactName,
				'entry.2120814685': contactTitle,
        'entry.99450920': contactEmail,
				'entry.777197893': contactAbout,
        'entry.1576241862': contactPurpose,
				'entry.371473633"': contactAdditional

    };
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
						contentType : 'application/json',
            statusCode: {
                    0: function() {
														// TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                            // window.location.href = "../volunteer";
														window.location.href = "../success";
                    },
                    200: function() {
                            window.location.href = "../success";
                    }
            }
    });
});
}

function submitParticipateForm() {

	$('#participate-form-submit').click(function(e) {
    e.preventDefault();
    var contactFirstName = $('#contact-first-name').val();
		var contactMiddleName = $('#contact-middle-name')
		var contactLastName = $('#contact-last-name').val();
    // var contactAddress = $('#contact-address').val();
		// var contactCity = $('#contact-city').val();
    // var contactZipCode = $('#contact-zip-code').val();
		// var contactDateOfBirth = $('#contact-date-of-birth').val();
		// var contactHomeNumber= $('#contact-home-number').val();
		// var contactMobileNumber = $('#contact-mobile-number').val();
		// var contactEmail = $('#contact-email').val();
		// var contactAge = $('#contact-age').val();
		// var contactGender = $('#contact-gender').val();
		// var contactIdentification = $('#contact-identification').val();
		// var programCommitment = $('#commmitment').val();
		// var joinReasoning = $('#join-reasoning').val();
		// var gradGoals = $('#grad-goals').val();
		// var programSession = $('#session').val();

    // data validation code here
		console.log("BEfore")
    var url = "https://docs.google.com/forms/d/e/1FAIpQLScHw0p9CJAyOZa2-Eosv4StopRoOAKdUPtM1jm-YrNyeS8_xA/formResponse";
		console.log("After")
    var dat = {
			'entry.1491274308': contactFirstName,
			'entry.476609564': contactMiddleName,
			'entry.1298586743': contactLastName
			// 'entry.1358523807': contactAddress,
			// 'entry.952400269': contactCity,
			// 'entry.511556928': contactZipCode,
			// 'entry.988194661': contactDateOfBirth,
			// 'entry.2088293968': contactHomeNumber,
			// 'entry.1789819430': contactMobileNumber,
			// 'entry.285442385': contactEmail,
			// 'entry.84273717': contactAge,
			// 'entry.966779481': contactGender,
			// 'entry.252558192': contactIdentification,
			// 'entry.311765769': programCommitment,
			// 'entry.2081252789': joinReasoning,
			// 'entry.1717696693': gradGoals,
			// 'entry.1221357470': programSession
    };
		console.log("Almost")
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: dat,
						contentType : 'application/json',
            statusCode: {
                    0: function() {
														// TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                            // window.location.href = "../volunteer";
														console.log("BROKEN")
														window.location.href = "../success";
                    },
                    200: function() {
                            window.location.href = "../success";
                    }
            }
    });
});
}
