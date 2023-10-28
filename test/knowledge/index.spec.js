const { expect } = require("chai");
import Knowledge from "../../src/knowledge"; 
import GridCell from "../../src/grid_cell"; 

describe("Knowledge", function () {
  const facts = [];
  it("should create knowledge", () => {
    const knowledge = new Knowledge( facts );
    knowledge.addFact(new GridCell(1,1,"A"));
    knowledge.addFact(new GridCell(1,3,"B"));
    knowledge.addFact(new GridCell(5,1,"C"));
    knowledge.addFact(new GridCell(4,4,"D"));

    expect(knowledge.factCount()).to.equal(4);

    knowledge.adjust(2,2);

    expect(knowledge.factAt(-1, -1)).equal("A");
    expect(knowledge.factAt(-1, 1)).equal("B");
    expect(knowledge.factAt(3, -1)).equal("C");
    expect(knowledge.factAt(2, 2)).equal("D");
  });
});
