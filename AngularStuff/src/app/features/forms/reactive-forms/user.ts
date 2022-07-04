export class User {
    public name! : string;
    public surnname! : string;
    public isActive! : boolean;
    public job! : Job; 
    public tasks!: Task[];
}

export class Job {
    public title! : string;
    public description! : string;
}


export class Task {
    public name! : string;
    public status! : boolean;
}
