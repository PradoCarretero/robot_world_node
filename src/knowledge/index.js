
export default class Knowledge {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.facts = [];
    }

    factCount () {
        return this.facts.length;
    }

    adjust (x, y) {
        this.x += x;
        this.y += y;
    }
    
    addFact(aFact) {
        this.facts.push(aFact.adjust(this.x, this.y));
    }

    factAt (x, y) {
        const foundFact = this.facts.find( fact => fact.x - this.x === x && fact.y - this.y === y);
        return foundFact? foundFact.content : "";
    }
}
