import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    jake: { name: 'Jake Hassel', picture: 'assets/images/jake.jpg' },
    lori: { name: 'Lori Hassel', picture: 'assets/images/eva.png' },
    mark: { name: 'Mark Hassel', picture: 'assets/images/jack.png' },
    nancy: { name: 'Nancy Hassel', picture: 'assets/images/lee.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
