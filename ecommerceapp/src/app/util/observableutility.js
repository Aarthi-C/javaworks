"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var ObservableUtility = /** @class */ (function () {
    function ObservableUtility() {
        var randomNumGenerator1 = rxjs_1.Observable.create(function (observer) {
            observer.next(Math.random());
        });
        var observer1 = randomNumGenerator1.subscribe(function (response) {
            console.log(response);
        });
        var observer2 = randomNumGenerator1.subscribe(function (response) {
            console.log(response);
        });
    }
    return ObservableUtility;
}());
exports.ObservableUtility = ObservableUtility;
