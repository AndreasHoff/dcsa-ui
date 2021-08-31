import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dropdownListEventType = <any>[];
  selectedItemsEventType = <any>[];
  dropdownSettingsEventType: IDropdownSettings;

  dropdownListTransportType = <any>[];
  selectedItemsTransportType = <any>[];
  dropdownSettingsTransportType: IDropdownSettings;

  dropdownListOperations = <any>[];
  selectedItemsOperations = <any>[];
  dropdownSettingsOperations: IDropdownSettings;

  ngOnInit() {
    // Event type multiselect
    this.dropdownListEventType = [
      { item_id: 1, item_text: 'Transport' },
      { item_id: 2, item_text: 'Operations' },
    ];
    this.selectedItemsEventType = [
      { item_id: 1, item_text: 'Transport' },
      { item_id: 2, item_text: 'Operations' },
    ];
    this.dropdownSettingsEventType = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      /* itemsShowLimit: 3, */
      /* allowSearchFilter: true, */
    };

    //Transport Event type multiselect
    this.dropdownListTransportType = [
      { item_id: 1, item_text: 'Arrived' },
      { item_id: 2, item_text: 'Departed' },
    ];
    this.selectedItemsTransportType = [
      { item_id: 1, item_text: 'Arrived' },
      { item_id: 2, item_text: 'Departed' },
    ];
    this.dropdownSettingsTransportType = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      /* itemsShowLimit: 3, */
      /* allowSearchFilter: true, */
    };

    // Operations event multiselect
    this.dropdownListOperations = [
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
    ];
    this.selectedItemsOperations = [
      { item_id: 1, item_text: 'Started' },
      { item_id: 2, item_text: 'Completed' },
      { item_id: 3, item_text: 'Arrived' },
      { item_id: 4, item_text: 'Departed' },
    ];
    this.dropdownSettingsOperations = {
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
