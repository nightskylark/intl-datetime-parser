[![Run Status](https://api.shippable.com/projects/5894e31d2ec8a80f004d5dd1/badge?branch=master)](https://app.shippable.com/projects/5894e31d2ec8a80f004d5dd1)

# intl-datetime-parser

Parse the date strings, formatted by the Intl.DateTimeFormat (ECMAScript Internationalization API)

## Installation
```
npm i intl-datetime-parser
```
## Usage

```js
var intlParser = require('intl-datetime-parser');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dateString = 'Donnerstag, 20. Dezember 2012';
console.log(new IntlDateTimeParser('de-DE', options).parse(dateString).toISOString());
// → "2012-12-20T00:00:00.000Z"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

This project is licensed under MIT. See the
[LICENSE file](https://github.com/nightskylark/intl-datetime-parser/blob/master/LICENSE).