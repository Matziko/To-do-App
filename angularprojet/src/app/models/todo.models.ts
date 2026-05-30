export interface Todo {
    id?:number;
    task: string;
    priority: 'low' | 'medium' | 'high';
    createAt?: Date;
    description?: string;
    deadline?: Date;
    status: 'to-do' | 'doing' | 'done';
    showDescription?: boolean;
}
