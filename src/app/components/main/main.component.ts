import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dropdownList = <any>[];
  selectedItems = <any>[];
  dropdownSettings: IDropdownSettings;

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      /* itemsShowLimit: 3, */
      /* allowSearchFilter: true, */
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
