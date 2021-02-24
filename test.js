"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BritishCat = exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat() {
        this.legsCount = 4;
    }
    Cat.prototype.eat = function () {
        //do smthng
        return 42;
    };
    ;
    return Cat;
}());
exports.Cat = Cat;
var BritishCat = /** @class */ (function (_super) {
    __extends(BritishCat, _super);
    function BritishCat() {
        var _this = _super.call(this) || this;
        _this.breed = "BritishCat";
        return _this;
    }
    return BritishCat;
}(Cat));
exports.BritishCat = BritishCat;
var cat = {
    name: 'Cat',
    age: 4,
    legsCount: 4,
    eat: function () {
        console.log('Om-nom-nom');
    }
};
