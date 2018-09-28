let cities = [
    'Kaunas',
    'Vilnius'
];

$("#btn_check").on("click", function () {
    checkCity();
});

$("#form").on("submit", function (e) {
    e.preventDefault();
    $("#city").select();
});

function checkCity() {
    if ($("#city").val()) {
        if (cities.indexOf($("#city").val()) > -1) {
            $("#results").html($("#city").val() + " - toks miestas yra!");
            $("#results").removeClass();
            $("#results").addClass("text-success");
        } else {
            $("#results").html($("#city").val() + " - toks miestas nerastas!");
            $("#results").removeClass();
            $("#results").addClass("orange");
        }
    } else {
        $("#results").html("Neįvedėte miesto!");
        $("#results").removeClass();
        $("#results").addClass("text-danger");
    }
}