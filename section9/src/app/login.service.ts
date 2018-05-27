import { Injectable } from '@angular/core';

export class LoginService {
  constructor() {}

  logStatusChange(status: string) {
    console.log('A server changed, new status:' + status);
  }
}
