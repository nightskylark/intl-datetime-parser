const IntlPolyfill = require('intl');
const IntlDateTimeParser = require('./index');

function assert(value, expected, message) {
    console.log(message);
    if (value !== expected) {
        console.error(' > ERROR: expected value ' + expected + ' but the actual value is ' + value);
        process.exit(1);
    } else {
        console.log(' > PASSED');
    }
}

let locale = 'en';
let intlFormat = { year: 'numeric', timeZone: 'UTC' };
let testDate = new Date(Date.UTC(2015, 0, 1));
let dateString = new IntlPolyfill.DateTimeFormat(locale, intlFormat).format(testDate)
let comment = [locale, JSON.stringify(intlFormat)].join(' ');

assert(new IntlDateTimeParser(locale, intlFormat).parse(dateString).toISOString(), testDate.toISOString(), comment);