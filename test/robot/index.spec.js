const { expect } = require("chai");
import Robot from "../../src/robot"; 

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
