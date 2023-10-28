const { expect } = require("chai");
//import { Knowledge } from "../src/knowledge"; 
import { Robot } from "../src/robot"; 
//const { Knowledge, Robot } = require("../src/index"); 

describe("Robot", function () {
  it("should create a Robot", () => {
    const robot = new Robot();
    expect (robot).to.be.an.instanceOf(Robot);
  });
  it("updates knowledge on move", () => {
    const robot = new Robot();
    setUpKnowledge();
    robot.move(1, 0);
    checkKnowledge();
  });
});

describe("Knowledge", function () {
  it("should create knowledge", () => {
    const knowledge = new Knowledge();
    knowledge.addFact(GridCell(1,1,"A"));
    knowledge.addFact(GridCell(1,3,"B"));
    knowledge.addFact(GridCell(5,1,"C"));
    knowledge.addFact(GridCell(4,4,"D"));

    expect(knowledge.factCount(4));

    knowledge.adjust(2,2);

    expect(knowledge.factAt(-1, -1).equal("A"));
    expect(knowledge.factAt(-1, 1).equal("B"));
    expect(knowledge.factAt(3, -1).equal("C"));
    expect(knowledge.factAt(2, 2).equal("D"));
  });
});
