import Knowledge from "../knowledge";

export default class World {
    constructor () {
        this.grid = [];
        this.knowledge = new Knowledge();
    }
    
    scan () {
        const knowledge = this.knowledge.addFact(5, 6, "fact");
        return knowledge;
    }
}