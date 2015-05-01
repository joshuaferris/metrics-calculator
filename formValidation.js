function validateIntegerInput(input) {
    //Given the value of an input, expecting an integer, return an integer representation
    var strippedString = input.replace(/\D/g, "")
    return strippedString.parseInt()
}

function validateDateInput(input, context) {
    //Given the value of an input, expecting some format of date, return a formatted date string
    //Context is used to pass the object to raise a field error against, if the date is invalid
    if (Date.parse(input).isNan()) {
        //Raise field error
    }
    var dateconversion = new Date(Date.parse(input))
    return dateconversion
}

function validateLocalName(input, context) {
    //Given the value of an input, expecting the name of a local, check it against a list of existing local names
    //Context is used to pass the object to raise a field error against, if the local name is invalid
    var isLocal = checkLocalNameValue(input)
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