import { Component, Input, OnInit } from '@angular/core';
import { ServiceTypeX } from '../accessories.interfaces';
import { AccessoriesService } from '../accessories.service';

@Component({
  selector: 'app-accessory-tile',
  templateUrl: './accessory-tile.component.html',
  styleUrls: ['./accessory-tile.component.scss'],
})
export class AccessoryTileComponent implements OnInit {
  @Input() public service: ServiceTypeX;
  public deviceInfo: any;

  constructor(
    public $accessories: AccessoriesService,
  ) {}

  ngOnInit() {
    this.deviceInfo = this.$accessories.pairings.get(this.service.instance.username);
  }

}
