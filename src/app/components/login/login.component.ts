import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'login',
  providers: [
  ],
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
  ) { }

  public ngOnInit() {
  }
}
