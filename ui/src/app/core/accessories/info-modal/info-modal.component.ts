import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTypeX } from '@/app/core/accessories/accessories.interfaces';
import { AccessoriesService } from '@/app/core/accessories/accessories.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
})
export class InfoModalComponent implements OnInit {
  @Input() public service: ServiceTypeX;
  public accessoryInformation: Array<any>;
  public deviceInfo: any;

  constructor(
    public activeModal: NgbActiveModal,
    public $accessories: AccessoriesService,
  ) {}

  ngOnInit() {
    this.accessoryInformation = Object.entries(this.service.accessoryInformation).map(([key, value]) => ({ key, value }));
    this.deviceInfo = this.$accessories.pairings.get(this.service.instance.username);
  }

}
