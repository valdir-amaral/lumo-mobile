import { Component, OnInit } from '@angular/core';
import {IonContent} from '@ionic/angular/standalone'
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
  imports: [IonContent]
})
export class MissionsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
