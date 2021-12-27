"use strict";
// window.onload = function() {
// let input : any = document.getElementById("input");
// let nameOutput : any = document.getElementById("nameoutput")
// let descrOutput : any = document.getElementById("descroutput")
// let btn1 : any = document.getElementById("id1");
// let btn2 : any = document.getElementById("id2");
// btn1.addEventListener("click", function () {
//     let result = dictionary.getName(input.value);
//     nameOutput.innerHTML = result;
// }, false)
// btn2.addEventListener("click", function () {
//     let result = dictionary.getDescr(input.value);
//     descrOutput.innerHTML = result;
// }, false)
// }
var KeyNameDescr = /** @class */ (function () {
    function KeyNameDescr(_key, _name, _descr) {
        this._key = _key;
        this._name = _name;
        this._descr = _descr;
    }
    Object.defineProperty(KeyNameDescr.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            if (!value) {
                throw new Error("Введите значение ключа");
            }
            else {
                this._key = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyNameDescr.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (!value) {
                throw new Error("Введите значение ключа");
            }
            else {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyNameDescr.prototype, "descr", {
        get: function () {
            return this._descr;
        },
        set: function (value) {
            if (!value) {
                throw new Error("Введите значение ключа");
            }
            else {
                this._descr = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return KeyNameDescr;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.data = [];
    }
    Dictionary.prototype.add = function (key, name, descr) {
        var word = new KeyNameDescr(key, name, descr);
        this.data.push(word);
    };
    Dictionary.prototype.getName = function (key) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].name;
            }
        }
        return null;
    };
    Dictionary.prototype.getDescr = function (key) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].descr;
            }
        }
        return null;
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
dictionary.add("Fox", "Лиса", "хищное млекопитающее, относится к отряду хищные, семейству псовые.");
dictionary.add("Dog", "собака", "домашнее животное, одно из наиболее популярных (наряду с кошкой) животных-компаньонов.");
dictionary.add("Cat", "кот", "домашнее животное, одно из наиболее популярных (наряду с собакой) «животных-компаньонов»");
console.log(dictionary.getName("Dog"));
console.log(dictionary.getDescr("Dog"));
