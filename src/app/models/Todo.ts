export class Todo {
    id?: number;
    title: string;
    isDone: boolean;


    constructor(){
        this.id = 1;
        this.title = '';
        this.isDone = false;
    }

}