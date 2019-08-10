import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  collapsed = true;

  @Output()
  featureSelected = new EventEmitter<string>();

  onSelectRecipies() {
    this.featureSelected.emit('recipe');
  }

  onSelectShoppingList() {
    this.featureSelected.emit('shopping-list');
  }
}
