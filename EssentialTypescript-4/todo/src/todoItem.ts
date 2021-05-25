// Defining the Data Model

export class TodoItem {
    id: any;
    task: any;
    complete: any;
      constructor(id: number,
                  task: string,
                  complete: boolean = false) {
                      // no statements required
            }

    printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete
        ? "\t(complete)": ""}`);
    }
}