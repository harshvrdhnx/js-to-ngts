// 'use strict';

// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource) {
//       return $resource('assets/phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PhoneData {
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string[];
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean; 
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  hardware: {
      accelerometer: boolean;
      audioJack: string;
      cpu: string;
      fmRadio: boolean;
      physicalKeyboard: boolean;
      usb: string;
  };
  id: string;
  images: string[]; 
  name: string;
  sizeAndWeight: {
      dimensions:  string[];
      weight: string;
  };
  storage: {
      flash: string;
      ram: string;
  };
}

@Injectable()
  export class Phone {
  constructor(private http: HttpClient) { }
  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`assets/phones/phones.json`)
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`assets/phones/${id}.json`);
  }
}

// angular.module('core.phone')
//   .factory('phone', downgradeInjectable(Phone));