import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }
  
  onSelect(selection: string) {
    this.featureSelected.emit(selection);
  }
}
