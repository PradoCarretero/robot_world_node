import Knowledge from "../knowledge";

export default class Robot extends Knowledge{
    constructor (world) {
        super();
        this.world = world;
    }
   scan () {
    const scanResult = this.world.scan();
    return scanResult;
   }
}

