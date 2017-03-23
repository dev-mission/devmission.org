$(document).ready(function(){
	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}
	submitForm();
});

function submitForm() {

	$('#contact-form-submit').click(function(e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactNumber = $('#contact-number').val();
    var contactPurpose = $('#contact-purpose').val();
    // data validation code here
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSc4n_ZafSq1_QVjzJSxThtQjOUpD-YjlLcRW2eFhO_jSNaPUw/formResponse";
    var data = {
        'entry.564562331': contactName,
        'entry.253022276': contactEmail,
        'entry.587420216': contactPurpose,
    };
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                    0: function() {
                            console.log("unknown");
                            window.location.href = "index";
                    },
                    200: function() {
                            console.log("success");
                            window.location.href = "success";
                    }
            }
    });
});
}
