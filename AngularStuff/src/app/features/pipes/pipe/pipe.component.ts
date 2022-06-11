import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: ['div { margin-bottom : 8px;}']
})
export class PipeComponent implements OnInit {
   users = [{
      userId : 1,
      name : "Dino",
      birthdate : Date.now()
    },
    {
      userId : 2,
      name : "Sacir",
      birthdate : Date.now()
    }];
   
    favFood = [{
      userId : 1,
      food : "Fish"
    },
    {
      userId : 2,
      food : "Pizza"
    }];

  constructor() { }

  ngOnInit(): void {
  }

  getFavFood(userId : number){
    // console.log("Called...");
    return this.favFood.find((food) => food.userId == userId);
  }
}
