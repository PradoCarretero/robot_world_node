import Knowledge from "../knowledge";

export default class Robot extends Knowledge{
    constructor(x, y, content, world) {
        super(x, y, content);
        this.world = world;
    }

    scan() {
        console.log("this.world", this.world);
        this.knowledge = this.world.scan();
    }

    move(x, y) {
        this.knowledge.adjust(x, y);
      }
    
      factAt(x, y) {
        return this.knowledge.factAt(x, y);
      }
}

