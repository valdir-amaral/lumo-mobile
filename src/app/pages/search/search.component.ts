import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [IonContent]
})
export class SearchComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
