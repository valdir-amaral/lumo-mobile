import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-drink',
  templateUrl: './water-drink.component.html',
  styleUrls: ['./water-drink.component.scss'],
})
export class WaterDrinkComponent  implements OnInit {
  @Input() maxNumber: number = 0;

  constructor() { }

  ngOnInit() {}

}
