import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAuthService } from '../../../shared/services/auth/auth.service';
import { StorageService, I18nService } from '../../../shared/services/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnChanges {
  @Input() isToggleNav: boolean;
  @Output() onToggleAppNav: EventEmitter<boolean> = new EventEmitter();
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

  }

  onToggleNav = (isToggleNav: boolean) => {
    this.onToggleAppNav.emit(isToggleNav);
  }


  onLogout = () => {
    this.router.navigate(['login']);
  };
}