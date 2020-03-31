"use strict";

//debugger;//signals the browser to stop execution here

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
    return x ** n;
}