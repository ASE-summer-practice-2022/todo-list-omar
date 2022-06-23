import { observable, action, reaction, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from 'uuid';
import { Item } from "../models/Item";

class ItemStore {
  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.items,
      _ => console.log(this.items.length)
    );
  }

  @observable
   items: Item[] = [
    { id: uuidv4(), name: "Node js" },
    { id: uuidv4(), name: "Express js, Koa js" },
    { id: uuidv4(), name: "Nest js"},
  ];

  @action
   addItems = (item: Item) => {
    this.items= [...this.items,{id: uuidv4(), name:item.name }];
  };

  @action
   removeItem = (id: string) => {
    this.items = this.items.filter(item => item.id !== id)
  }

}

export default ItemStore;