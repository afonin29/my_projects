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

class KeyNameDescr<Tkey, Tname, Tdescr> {
    _key: Tkey;
    _name: Tname;
    _descr: Tdescr;

    constructor (_key: Tkey, _name: Tname, _descr: Tdescr) {
        this._key = _key;
        this._name = _name;
        this._descr = _descr;
    }
    
    public get key() {
        return this._key;
    }
    public set key(value: Tkey) {
        if (!value) {
            throw new Error("Введите значение ключа")
        } else {
            this._key = value;
        }
    }

    public get name() {
        return this._name;
    }
    public set name(value: Tname) {
        if (!value) {
            throw new Error("Введите значение ключа")
        } else {
            this._name = value;
        }
    }

    public get descr() {
        return this._descr;
    }
    public set descr(value: Tdescr) {
        if (!value) {
            throw new Error("Введите значение ключа")
        } else {
            this._descr = value;
        }
    }

}

class Dictionary<Tkey, Tname, Tdescr> {
    
    private data : KeyNameDescr<Tkey, Tname, Tdescr>[] = [];

    public add(key: Tkey, name: Tname, descr: Tdescr) {
        let word = new KeyNameDescr<Tkey, Tname, Tdescr>(key, name, descr);
        this.data.push(word);
    }

    public getName(key: Tkey) : Tname | null {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].name;
            }
        }
        return null;
    }

    public getDescr(key: Tkey) : Tdescr | null {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].descr;
            }
        }
        return null;
    }
}

let dictionary = new Dictionary<string, string, string>();
dictionary.add("Fox", "Лиса", "хищное млекопитающее, относится к отряду хищные, семейству псовые.")
dictionary.add("Dog", "собака", "домашнее животное, одно из наиболее популярных (наряду с кошкой) животных-компаньонов.")
dictionary.add("Cat", "кот", "домашнее животное, одно из наиболее популярных (наряду с собакой) «животных-компаньонов»")

console.log(dictionary.getName("Dog"));
console.log(dictionary.getDescr("Dog"))
