// 'use strict';

// // Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: './app/phone-list/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListComponent(Phone) {
//         this.phones = Phone.query();
//         this.orderProp = 'age';
//       }
//     ]
//   });

import { Component } from '@angular/core';

import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.component.html'
})

export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  // static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age'
  }
}

// angular.
//   module('phoneList')
//   .directive(
//     downgradeComponent({component: PhoneListComponent}) as angular.IdirectiveFactory
//   );
  // component('phoneList', {
  //   templateUrl: './app/phone-list/phone-list.template.html',
  //   controller: PhoneListComponent,
  //   controllerAs: 'vm'
  // });