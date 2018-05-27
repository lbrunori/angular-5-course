import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsServiceService } from '../accounts-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoginService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private service: LoginService,
    private accountService: AccountsServiceService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.service.logStatusChange(
      'A server status changed, new status: ' + status
    );
    this.accountService.statusUpdated.emit(status);
  }
}
