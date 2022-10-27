
class Pokemon {
    number;
    name;
    type;
    types = [];
    stats = [];
    photo;
}

class Stat {
    name;
    value;

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}