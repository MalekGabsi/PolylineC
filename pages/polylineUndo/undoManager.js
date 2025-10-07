// pages/polyLineUndo/UndoManager.js
import Stack from "./stack.js";

export default class UndoManager {
    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
    }

    executeCommand(command) {
        command.execute();
        this.undoStack.push(command);
        this.redoStack = new Stack(); // vider redo après nouvelle action
    }

    undo() {
        if (this.canUndo()) {
            const cmd = this.undoStack.pop();
            cmd.undo();
            this.redoStack.push(cmd);
        }
    }

    redo() {
        if (this.canRedo()) {
            const cmd = this.redoStack.pop();
            cmd.execute();
            this.undoStack.push(cmd);
        }
    }

    canUndo() {
        return !this.undoStack.isEmpty();
    }

    canRedo() {
        return !this.redoStack.isEmpty();
    }
}
