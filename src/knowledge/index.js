export default class Knowledge {
    constructor( ) {
        this.facts = [];
        this.x = 0;
        this.y = 0;
    }

    factCount () {
        return this.facts.length;
    }

    addFact (newElement) {
        this.facts.push(newElement);
    }

    adjust (x, y) {
        this.x += x;
        this.y += y;
    }

    factAt (x, y) {
        const foundFact = this.facts.find( fact => fact.x - this.x === x && fact.y - this.y === y);
        return foundFact? foundFact.content : "";
    }
}
