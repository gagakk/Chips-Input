import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // initiate an empty string to hold the input value
  newItem ='';
  // initiate an empty array to hold the items
  items:string[] = [];

// write a function to add items to the list
addItem() {
  this.items.push(this.newItem);
  this.newItem = '';
}

// write a function to remove items to the list
removeItem(item: string) {
  this.items = this.items.filter((i: any) => {
    return i !== item;
  })
}

  title = 'chips-input';
}
