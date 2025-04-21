import { Component, computed, inject, OnInit, signal, ViewChild } from '@angular/core';
import { IonContent, IonModal, IonRange, IonChip, RangeCustomEvent  } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AddWaterService } from 'src/app/services/water-reminder/addWater/add-water.service';

@Component({
  selector: 'app-water-main',
  templateUrl: './water-main.component.html',
  styleUrls: ['./water-main.component.scss'],
  imports: [IonContent, IonModal, IonRange, IonChip]
})
export class WaterMainComponent  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  router = inject(Router);
  waterService = inject(AddWaterService)
  goal = signal(2800);
  drinkingWater = signal(0);
  cupCapacity = signal(300);
  percentage = computed(() => Math.floor(this.drinkingWater() / this.goal() * 100))
  quantityOfWater = signal(this.cupCapacity());

  constructor() { 
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.drinkWater()
    this.modal.dismiss(this.quantityOfWater(), 'confirm');
  }
  onIonChange(event: RangeCustomEvent) {
    this.quantityOfWater.set(+event.detail.value.toString())
  }
  drinkWater() {

    let newAmount = this.drinkingWater() + this.quantityOfWater()
    let waterInterval = setInterval(() => {
      this.drinkingWater.update(v => {
        
        if (this.drinkingWater() == newAmount) {
          clearInterval(waterInterval);
          return newAmount; 
        }
        
        return v+2;
      });
    }, 1);
   this.waterService.addWaterEntry('bmOlbZ1NwVh7YnGNzxPG', this.quantityOfWater())
   
  }

  editWater(object: any) {
    //this.quantityOfWater.set(object.value);

    if (+object.value > this.cupCapacity()) {
      object.value = this.cupCapacity().toString();
    }
  }

  ngOnInit() {}

}
