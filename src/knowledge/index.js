export default class Knowledge {
    constructor( ) {
        this.facts = [];
        this.x = 0;
        this.y = 0;
    }

    factCount () {
        return this.facts.length;
    }

    adjust (x, y) {
        this.x += x;
        this.y += y;
    }
    
    addFact(aFact) {
        newFact = aFact.adjust(this.x, this.y);
        this.facts.push(newFact);
    }

    factAt (x, y) {
        const foundFact = this.facts.find( fact => fact.x - this.x === x && fact.y - this.y === y);
        return foundFact? foundFact.content : "";
    }
}
