import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { AccountsServiceService } from '../accounts-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(
    private service: LoginService,
    private accountService: AccountsServiceService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('New status: ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.service.logStatusChange(accountStatus);
  }
}
