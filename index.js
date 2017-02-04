var IntlDateTimeParser = function(locale, options, Intl) {
    var self = this;

    self.getAlterNumeralsMap = function() {
        var result = {};
        var formatter = new Intl.DateTimeFormat(locale, { year: 'numeric', timeZone: 'UTC' }).format;
        
        for(var digit = 0; digit < 10; digit++) {
            var alterNumeral = formatter(new Date(Date.UTC(2000 + digit, 0, 2))).substr(3, 1);
            result[alterNumeral] = digit;
        }

        self.getAlterNumeralsMap = function() {
            return result;
        }

        return result;
    };
    self.convertToEuropeanNumerals = function(dateString) {
        return dateString.split('').map(function(alterNumeral) {
            return self.getAlterNumeralsMap()[alterNumeral];
        }).join('');
    }

    return {
        parse: function(dateString) {
            if(!/^[0-9]+$/.test(dateString)) {
                dateString = self.convertToEuropeanNumerals(dateString);
            }
            return new Date(Date.UTC(~~dateString, 0, 1));
        }
    }
};

module.exports = IntlDateTimeParser;