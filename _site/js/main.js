$(document).ready(function () {
    submitVolunteerForm();
    submitParticipateForm();
});

function submitVolunteerForm() {

    $('#volunteer-form-submit').on("click",function (e) {
        e.preventDefault();
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
            'entry.371473633': contactAdditional
        };
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            'Content-Type':'application/x-www-form-urlencoded',
            statusCode: {
                0: function () {
                    // TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                    // window.location.href = "../volunteer";
                    window.location.href = "../success";
                },
                200: function () {
                    window.location.href = "../success";
                }
            }
        });
    });
}

function submitParticipateForm() {

    $('#participate-form-submit').click(function (e) {
        e.preventDefault();
        var contactFirstName = $('#contact-first-name').val();
        var contactMiddleName = $('#contact-middle-name').val();
        var contactLastName = $('#contact-last-name').val();
        var contactAddress = $('#contact-address').val();
        var contactCity = $('#contact-city').val();
        var contactZipCode = $('#contact-zip-code').val();
        var contactDateOfBirth = $('#contact-date-of-birth').val();
        var contactHomeNumber = $('#contact-home-number').val();
        var contactMobileNumber = $('#contact-mobile-number').val();
        var contactEmail = $('#contact-email').val();
        var contactAge = $('#contact-age').val();
        var contactGender = document.querySelector('input[name="entry.1186008022"]:checked').value;

        var contactIdentification = document.querySelector('input[name="entry.2042764450"]:checked').value;
        var programCommitment = document.querySelector('input[name="entry.423640491"]:checked').value;

        var joinReasoning = $('#join-reasoning').val();
        var gradGoals = $('#grad-goals').val();

        var programSession = document.querySelector('input[name="entry.921937508"]:checked').value;
        // data validation code here
        var url = "//docs.google.com/forms/d/e/1FAIpQLScHw0p9CJAyOZa2-Eosv4StopRoOAKdUPtM1jm-YrNyeS8_xA/formResponse";
        var data = {
            'entry.1491274308': contactFirstName,
            'entry.476609564': contactMiddleName,
            'entry.1298586743': contactLastName,
            'entry.453562901': contactAddress,
            'entry.135841689': contactCity,
            'entry.661462144': contactZipCode,
            'entry.583319774': contactDateOfBirth,
            'entry.1424071545': contactHomeNumber,
            'entry.1955697166': contactMobileNumber,
            'entry.1899326379': contactEmail,
            'entry.490772473': contactAge,
            'entry.1186008022': contactGender,
            'entry.2042764450': contactIdentification,
            'entry.423640491': programCommitment,
            'entry.1486462317': joinReasoning,
            'entry.880168723': gradGoals,
            'entry.921937508': programSession
        };
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            'Content-Type':'application/x-www-form-urlencoded',
            statusCode: {
                0: function () {
                    // TEMP: CORS ERROR is returning a 401 but data is still getting passed through. Always return a success
                    // window.location.href = "../volunteer";
                    window.location.href = "../../success";
                },
                200: function () {
                    window.location.href = "../../success";
                }
            }
        });
    });
}
