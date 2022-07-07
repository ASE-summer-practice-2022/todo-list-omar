import { v4 as uuidv4 } from 'uuid';
export class Item {
    id?:string;
    name?:string
    constructor(name:string){
      this.id=uuidv4()
      this.name=name
    }
  }

// import { observable} from 'mobx';
// export class Item {
//     @observable name?;
//     @observable id?;
//     constructor(name:string){
//         this.name = name;
//         this.id = uuidv4();
//     }
// }
