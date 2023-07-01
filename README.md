<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterMap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which invokes a unary function accepting a single numeric argument for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools-map@esm/index.mjs';
```

#### iterMap( iterator, fcn\[, options] )

Returns an [iterator][mdn-iterator-protocol] which invokes a unary `function` accepting a single numeric argument for each iterated value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';
import sin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs';

var it = iterMap( array2iterator( [ 1, 2, 3, 4 ] ), sin );
// returns <Object>

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided one argument:

-   `value`: iterated value

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

function fcn( v ) {
    return v + 10;
}

var it = iterMap( array2iterator( [ 1, 2, 3, 4 ] ), fcn );
// returns <Object>

var r = it.next().value;
// returns 11

r = it.next().value;
// returns 12

r = it.next().value;
// returns 13

// ...
```

The function supports the following `options`:

-   **invalid**: return value when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. Default: `NaN`.

By default, the function returns an [iterator][mdn-iterator-protocol] which returns `NaN` when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. To specify a different return value, set the `invalid` option.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';
import sin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs';

var opts = {
    'invalid': null
};
var it = iterMap( array2iterator( [ '1', '2', '3' ] ), sin, opts );
// returns <Object>

var v = it.next().value;
// returns null

v = it.next().value;
// returns null

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@esm/index.mjs';
import sin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs';
import iterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools-map@esm/index.mjs';

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterMap( rand, sin );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-tools-map.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-tools-map

[test-image]: https://github.com/stdlib-js/math-iter-tools-map/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-tools-map/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-tools-map/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-tools-map?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-tools-map.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-tools-map/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-tools-map/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-tools-map/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-tools-map/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-tools-map/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-tools-map/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
