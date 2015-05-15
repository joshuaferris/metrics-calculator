function initializeProgressBar() {
    //Set up progress bar
    var weightedinputs = $('form :input[data-weight]');

    var totalweight = 0;
    var totalmandatoryweight = 0;
    var totaloptionalweight = 0;

    for (var i = 0; i < weightedinputs.length; i++) {
        totalweight = totalweight + parseInt(weightedinputs[i].dataset.weight);
        if (weightedinputs[i].dataset.validationType == "optional_integer") {
            totaloptionalweight = totaloptionalweight + parseInt(weightedinputs[i].dataset.weight);
        }
        else {
            totalmandatoryweight = totalmandatoryweight + parseInt(weightedinputs[i].dataset.weight);
        }
    }

    var mandatorymaxpercentage = totalmandatoryweight / totalweight * 100
    var optionalmaxpercentage = totaloptionalweight / totalweight * 100

    $('#progress-mandatory').css('width', mandatorymaxpercentage + '%').attr('aria-valuenow', totalmandatoryweight).attr('aria-valuemax', totalweight).attr('data-max-percentage', mandatorymaxpercentage);
    $('#progress-optional').css('width', optionalmaxpercentage + '%').attr('aria-valuenow', totaloptionalweight).attr('aria-valuemax', totalweight).attr('data-max-percentage', optionalmaxpercentage);
    $('#progress-completed').css('width', 0 + '%').attr('aria-valuenow', 0).attr('aria-valuemax', totalweight);
}

function updateProgressBar() {

    var weightedinputs = $('form :input[data-weight]');

    var totalmandatoryincomplete = 0;
    var totaloptionalincomplete = 0;
    var totalcompleted = 0;

    for (var i = 0; i < weightedinputs.length; i++) {
        //Need to find correct value for comparison
        if (weightedinputs[i].value != "") {
            totalcompleted = totalcompleted + parseInt(weightedinputs[i].dataset.weight);
        }
        else if (weightedinputs[i].dataset.validationType == "optional_integer") {
            totaloptionalincomplete = totaloptionalincomplete + parseInt(weightedinputs[i].dataset.weight);
        }
        else {
            totalmandatoryincomplete = totalmandatoryincomplete + parseInt(weightedinputs[i].dataset.weight);
        }
    }

    var percentcomplete = totalcompleted / parseInt($('#progress-completed').attr('aria-valuemax'));
    var percentmandatoryincomplete = totalmandatoryincomplete / parseInt($('#progress-mandatory').attr('aria-valuemax')) * parseFloat($('#progress-mandatory').attr('data-max-percentage'));
    var percentoptionalincomplete = totaloptionalincomplete / parseInt($('#progress-optional').attr('aria-valuemax')) * parseFloat($('#progress-mandatory').attr('data-max-percentage'));

    $('#progress-mandatory').css('width', percentmandatoryincomplete + '%').attr('aria-valuenow', totalmandatoryincomplete);
    $('#progress-optional').css('width', percentoptionalincomplete + '%').attr('aria-valuenow', totaloptionalincomplete);
    $('#progress-completed').css('width', percentcomplete + '%').attr('aria-valuenow', totalcompleted);
}