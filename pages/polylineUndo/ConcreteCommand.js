// pages/polyLineUndo/addLineCommand.js
import { Command } from "./Command";

export class ConcreteCommand extends Command {
    constructor(line, layer) {
        super();
        this.line = line;
        this.layer = layer;
    }

    execute() {
        this.layer.add(this.line);
        this.layer.draw();
    }

    undo() {
        this.line.remove(); 
        this.layer.draw();
    }
}
