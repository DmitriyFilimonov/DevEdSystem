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
exports.figure = exports.DashedDrawer = exports.SolidDrawer = exports.DottedDrawer = exports.Square = exports.Triangle = exports.Circle = exports.Figure = void 0;
var Figure = /** @class */ (function () {
    function Figure(drawer) {
        this.drawer = drawer;
    }
    Figure.prototype.draw = function () {
        console.log(this.figureType);
        this.drawer.draw();
    };
    return Figure;
}());
exports.Figure = Figure;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(drawer) {
        var _this = _super.call(this, drawer) || this;
        _this.figureType = "Circle";
        return _this;
    }
    return Circle;
}(Figure));
exports.Circle = Circle;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(drawer) {
        var _this = _super.call(this, drawer) || this;
        _this.figureType = "Triangle";
        return _this;
    }
    return Triangle;
}(Figure));
exports.Triangle = Triangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(drawer) {
        var _this = _super.call(this, drawer) || this;
        _this.figureType = "Square";
        return _this;
    }
    return Square;
}(Figure));
exports.Square = Square;
var DottedDrawer = /** @class */ (function () {
    function DottedDrawer() {
    }
    DottedDrawer.prototype.draw = function () {
        console.log(" draw Dotted");
    };
    ;
    return DottedDrawer;
}());
exports.DottedDrawer = DottedDrawer;
var SolidDrawer = /** @class */ (function () {
    function SolidDrawer() {
    }
    SolidDrawer.prototype.draw = function () {
        console.log(" draw Solid");
    };
    ;
    return SolidDrawer;
}());
exports.SolidDrawer = SolidDrawer;
var DashedDrawer = /** @class */ (function () {
    function DashedDrawer() {
    }
    DashedDrawer.prototype.draw = function () {
        console.log(" draw Dashed");
    };
    ;
    return DashedDrawer;
}());
exports.DashedDrawer = DashedDrawer;
exports.figure = new Square(new SolidDrawer);
exports.figure.draw();
exports.figure.drawer = new DashedDrawer();
exports.figure.draw();
