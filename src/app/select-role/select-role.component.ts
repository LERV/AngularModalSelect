import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-select-role',
    templateUrl: './select-role.component.html',
    styleUrls: ['./select-role.component.scss']
})
export class SelectRoleComponent implements OnInit {

    @Input() labelText;
    @Input() optionList;
    @Input() defaultRoleId;
    @Output() changeSelect = new EventEmitter<any>();

    private selectedValue;
    constructor() { }

    ngOnInit() {
        console.log("Id default", this.defaultRoleId);
        this.selectedValue = this.defaultRoleId;
    }

    onChangeSelect = () => {
        this.changeSelect.emit(this.selectedValue);
    }

}
