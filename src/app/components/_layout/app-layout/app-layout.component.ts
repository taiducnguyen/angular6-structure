import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientState } from 'app/shared/services/client/client-state';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  isToggleNav: boolean;
  isToggleSearch: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientState: ClientState,
  ) {
  }
  ngOnInit(): void {

  }

  onToggleNav = (isToggle: boolean) => {
    this.isToggleNav = isToggle ? false : !this.isToggleNav;
  }

  onToggleSearch = (isToggleSearch: boolean) => {
    this.isToggleSearch = isToggleSearch == false ? isToggleSearch : !this.isToggleSearch;
  }
}
