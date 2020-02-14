"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Member = /** @class */ (function () {
    function Member() {
    }
    Object.defineProperty(Member.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Member;
}());
exports.Member = Member;
var member = new Member();
member.firstName = 'Jayanth';
member.lastName = 'Kumar';
console.log(member.firstName, "==>", member.lastName);
