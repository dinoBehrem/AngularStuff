import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  favFood = [{
    userId : 1,
    food : "Fish"
  },
  {
    userId : 2,
    food : "Pizza"
  }];

  transform(userId: number, property: 'userId' | 'food'): any {
      console.log("Called...");

      let food = this.favFood.find((food) => food.userId == userId);

      if(food)
      {
        return food[property];
      }
  }
}
