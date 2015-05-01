function validateIntegerInput(input) {
    //Given the value of an input, expecting an integer, return an integer representation
    var strippedString = input.replace(/\D/g)
    return strippedString.parseInt()
}

function validateDateInput(input, context) {
    //Given the value of an input, expecting some format of date, return a formatted date string
    if (Date.parse(input).isNan()) {
        //Raise field error
    }
    var dateconversion = new Date(Date.parse(input))
    return dateconversion
}

function validateLocalName(input) {
    //Given the value of an input, expecting the name of a local, check it against a list of existing local names
}