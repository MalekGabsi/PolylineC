import { Command } from "./Command.js";

export class ChangeColorCommand extends Command {
    constructor(line, newColor) {
        super();
        this.line = line;
        this.oldColor = line.stroke();
        this.newColor = newColor;
    }

    execute() {
        this.line.stroke(this.newColor);
        this.line.getLayer().draw();
    }

    undo() {
        this.line.stroke(this.oldColor);
        this.line.getLayer().draw();
    }
}
