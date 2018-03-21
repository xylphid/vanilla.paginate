# Vanilla paginate

Vanilla paginate is a simple list paginator in Vanilla-JS.

## Installation

Include `vanilla.paginate.min.js` script :
```html
<script src="vanilla.paginate.min.js" type="text/javascript" charset="utf-8" />
```

## Usage

Binding a paginator to a list is really easy.
```js
vanilla.paginate(".list-item", {
        nbElem: 25,
        className: "nav",
        countClassName: "total"
    });
```

## Options

These are the supported options and their default values:
```js
vanilla.paginate.defaults = {
    nbElem: 10,                 // Number of items per page
    className: "paginate",      // Navigation holder class name
    countClassName: "total"     // Page count class name
};
```

# License

# License (MIT)

Vanilla Paginate is distributed under the [MIT License](Learn more at http://opensource.org/licenses/mit-license.php):

    Copyright (c) 2018 Anthony PERIQUET

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.