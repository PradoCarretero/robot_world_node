import Knowledge from "../knowledge";
import GridCell from "../grid_cell";

export default class World {  
    scan () {
        const knowledge = new Knowledge();
        knowledge.addFact(new GridCell(5, 6, "fact"));
        return knowledge;
    }
}