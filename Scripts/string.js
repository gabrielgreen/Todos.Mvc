String.isNullOrWhitespace = function (input) {
    if (input == null) return true;
    return input.replace(/\s/g, '').length < 1;
}
