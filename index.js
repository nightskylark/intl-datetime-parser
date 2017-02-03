var IntlDateTimeParser = function(locale, options) {
    return {
        parse: function(dateString) {
            return new Date(Date.UTC(~~dateString, 0, 1));
        }
    }
};

module.exports = IntlDateTimeParser;