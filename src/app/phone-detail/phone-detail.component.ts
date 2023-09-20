// 'use strict';

// Register `phoneDetail` component, along with its associated controller and template
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'phone-detail/phone-detail.template.html',
//     controller: ['$routeParams', 'Phone',
//       function PhoneDetailComponent($routeParams, Phone) {
//         var self = this;
//         self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//           self.setImage(phone.images[0]);
//         });

//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };
//       }
//     ]
//   });
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhoneData, Phone } from '../core/phone/phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  // static $inject = ['$routeParams', 'Phone'];
  constructor(activateRoute: ActivatedRoute , phone: Phone) {
    let phoneId = activateRoute.snapshot.paramMap.get('phoneId');
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}

  // angular.
  // module('phoneDetail')
  // .directive(
  //   downgradeComponent({component: PhoneDetailComponent}) as angular.IdirectiveFactory
  // );
  // component('phoneDetail', {
  //   templateUrl: './app/phone-detail/phone-detail.template.html',
  //   controller: PhoneDetailComponent,
  //   controllerAs: 'vm'
  // });   

 