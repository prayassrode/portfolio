import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'facebook',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-1_round-facebook.svg'));
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-1_round-github.svg'));
    iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-1_round-linkedin.svg'));
    iconRegistry.addSvgIcon(
        'twitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social-1_round-twitter.svg'));
        iconRegistry.addSvgIcon(
          'email',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-email-24px.svg'));
  }
}
