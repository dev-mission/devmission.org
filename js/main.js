$(document).ready(function(){
	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}
	submitVolunteerForm();
	submitParticipateForm();
});

function submitVolunteerForm() {

	$('#volunteer-form-submit').click(function(e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
		var contactTitle = $('#contact-title').val();
    var contactEmail = $('#contact-email').val();
		var contactAbout = $('#contact-about').val();
    var contactPurpose = $('#contact-purpose').val();
		var contactAdditional = $('#contact-additional').val();
    // data validation code here
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSdA4kqdrQE_HU-JlannPooeAR2nfwQp7AqFwUHKadimmcBBHg/formResponse";
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
            statusCode: {
                    0: function() {
														// TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                            // window.location.href = "../volunteer";
														window.location.href = "../success";
                    },
                    200: function() {
                            window.location.href = "../success";a
                    }
            }
    });
});
}

function submitParticipateForm() {

	$('#participate-form-submit').click(function(e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
		var contactTitle = $('#contact-title').val();
    var contactEmail = $('#contact-email').val();
		var contactAbout = $('#contact-about').val();
    var contactPurpose = $('#contact-purpose').val();
		var contactAdditional = $('#contact-additional').val();
    // data validation code here
    var url = "";
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
            statusCode: {
                    0: function() {
														// TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                            // window.location.href = "../volunteer";
														window.location.href = "../success";
                    },
                    200: function() {
                            window.location.href = "../success";a
                    }
            }
    });
});
}
