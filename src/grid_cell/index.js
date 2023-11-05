export default class GridCell {
    constructor( x, y, content ) {
        this.x = x;
        this.y = y;
        this.content = content;
    }
    adjust (x, y) {
        return new GridCell(this.x + x, this.y + y,this.content);
    }
}