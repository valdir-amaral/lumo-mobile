import { Component, OnInit } from '@angular/core';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [TabsComponent],
})
export class MainComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
