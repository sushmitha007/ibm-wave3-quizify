import { Category } from './category';
import { Question } from './question';
import { Admin } from './admin';
import { Topic } from './topic';

export class Game {

     id: string;
     name: string;
     category: Category;
     playcount: number;
     qnum: number;
     questions: Question[] = new Question[this.qnum];
     admin: Admin;
     topic: Topic;
     level: string;
}
