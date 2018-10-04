import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/app.service';

@Component({
  selector: 'forgot-password',
  providers: [
  ],
  styleUrls: ['./forgot-password.component.scss'],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
  ) { }

  public ngOnInit() {
  }
}
