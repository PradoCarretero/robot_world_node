function setUpKnowledge() {}

export default class Knowledge {
    constructor() {
        this.facts = [];
    }

    addFact (newElement) {
        this.facts.push(newElement);
    }
}
