import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-user-modal-confirm',
//   templateUrl: './user-modal.component.html'
// })


// export class NgbdModalConfirm {
//   constructor(public modal: NgbActiveModal) { }
// }

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class NgbdModalFocus {



  constructor(private _modalService: NgbModal) { }
  @Input() name;
  @Input() options;
  @Input() defaultRoleId;
  open(content: string) {
    this._modalService.open(content);
  }

  close = () => {
    console.log("Saved");
    this._modalService.dismissAll();
  }


  onChangeSelect = (idRoleSelected) => {
    console.log(idRoleSelected);

  }

}
