function validateIntegerInput(input, context) {
    //Given the value of an input, expecting an integer, and context, the form input element hosting this value
    //format this integer value and set the value of the input field to the formatted version.
    var sourceID = context.target.id;
    var strippedString = input.replace(/\D/g, "");
    var zeroValid = context.target.dataset.zeroValid;
    //Check for a complete input, as this field is mandatory
    if (strippedString === "") {
        var alertString = "<div class=\"alert alert-warning\" role=\"alert\" data-source-id=" + sourceID + ">An integer input is required.</div>";
        $(context.target).after(alertString);
    }
    else {
        //Clear any existing error messages on this field
        $("div[data-source-id='" + sourceID + "']").remove();
        var integerValue = parseInt(strippedString);
        //If zero is flagged as an invalid input value, raise a warning
        if (zeroValid === "false" && integerValue == 0) {
            var alertString = "<div class=\"alert alert-warning\" role=\"alert\" data-source-id=" + sourceID + ">Zero is not an accepted input value for this field.</div>";
            $(context.target).after(alertString);
        }
        if (!isNaN(integerValue)) {
            context.target.value = integerValue;
        }
    }
}

function validateOptionalIntegerInput(input, context) {
    //Given the value of an input, expecting an integer, and context, the form input element hosting this value
    //format this integer value and set the value of the input field to the formatted version.
    var sourceID = context.target.id;
    var strippedString = input.replace(/\D/g, "");
    //If the input was strictly non-digits, raise an information warning
    if (strippedString === "" && input.length > 0) {
        var alertString = "<div class=\"alert alert-info\" role=\"alert\" data-source-id=" + sourceID + ">We could not read this input.</div>";
        $(context.target).after(alertString);
    }
    else {
        //Clear any existing error messages on this field
        $("div[data-source-id='" + sourceID + "']").remove();
        var integerValue = parseInt(strippedString);
        if (!isNaN(integerValue)) {
            context.target.value = integerValue;
        }
    }
}

function validateDateInput(input, context) {
    //Given the value of an input, expecting some format of date, return a formatted date string
    //Context is used to pass the object to raise a field error against, if the date is invalid
    var sourceID = context.target.id;
    //Check if the date parses correctly
    if (isNaN(Date.parse(input))) {
        var alertString = "<div class=\"alert alert-warning\" role=\"alert\" data-source-id=" + sourceID + ">We could not read this date</div>";
        $(context.target).after(alertString);
    }
    else {
        //Clear any existing error messages on this field
        $("div[data-source-id='" + sourceID + "']").remove();
        var dateConversion = new Date(Date.parse(input));
        var dateString = (dateConversion.getMonth() + 1) + "/" + (dateConversion.getDate()) + "/" + dateConversion.getFullYear()
        context.target.value = dateString
    }
}

function validateLocalName(input, context) {
    //Given the value of an input, expecting the name of a local, check it against a list of existing local names
    //Context is used to pass the object to raise a field error against, if the local name is invalid
    var isLocal = checkLocalNameValue(input);
    //If the local was invalid, find a list of possible matches to present.

    //Raise a field error against the local field, with a list of possible matches
}

function checkLocalNameValue(localNameValue) {
    //Return false if the input localName value is not in the localName list
    var output = false;
    var localNameSet = generateReferenceSet();
    //Check if this is a set object or an array object, and run the appropriate search function.
    if (Object.prototype.toString.call(localNameSet) === '[object Array]') {
        if (localNameSet.indexOf(localNameValue) !== -1) {
            output = true;
        }
    }
    else {
        if (localNameSet.has(localNameValue)) {
            output = true;
        }
    }
    return output
}

function generateReferenceSet() {
    //Need to add lookup to get local list.
    var tempArray = [];
    //Set objects are a new addition to java that will speed the lookup operations. However, not all browsers support them
    try {
        localNameSet = new Set();
        for (var i = 0; i < tempArray.length; i++) {
            localNameSet.add(tempArray[i]);
        }
    }
    catch (unknownError) {
        localNameSet = tempArray;
    }
    return localNameSet;
}

function suggestLocalName(input) {
    //Given a potential local name, check against the list of local names and return an array of possible matches based on the numerical content of the input local name
}