import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTypeX } from '../../accessories.interfaces';
import { SpeakerManageComponent } from './speaker.manage.component';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent implements OnInit {
  @Input() public service: ServiceTypeX;

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit() {}

  onClick() {
    this.service.getCharacteristic('Mute').setValue(!this.service.values.Mute);
  }

  onLongClick() {
    if ('Volume' in this.service.values) {
      const ref = this.modalService.open(SpeakerManageComponent, {
        size: 'sm',
      });
      ref.componentInstance.service = this.service;
    }
  }
}
