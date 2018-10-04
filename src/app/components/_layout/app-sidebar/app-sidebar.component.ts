import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponseModel } from 'app/shared/models';
import { AppAuthService, StorageService, I18nService } from 'app/shared/services';
import { JwtTokenHelper } from 'app/shared/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSideBarComponent implements OnInit, OnChanges {
  @Input() isToggleNav: boolean;
  @Output() onToggleAppNav: EventEmitter<boolean> = new EventEmitter();
  private locationPath: string;
  private userInfo: UserResponseModel = new UserResponseModel();
  private isAuthen: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AppAuthService,
    private storageService: StorageService,
    private i18nService: I18nService,
  ) {
  }

  ngOnInit() {
    this.isAuthen = this.authService.isAuthenticated();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.isAuthen = this.authService.isAuthenticated();
    if (this.isAuthen) {
      this.userInfo = JwtTokenHelper.GetUserInfo();
    }
  }

  onToggleNav = (isToggleNav: boolean) => {
    this.onToggleAppNav.emit(isToggleNav);
  }

}
