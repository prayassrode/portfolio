import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {
  // tslint:disable-next-line:max-line-length
  imageUrl = 'https://media.licdn.com/dms/image/C5103AQGXC3QGe7fVUQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=aKO15AUM079OyR4jdf1jFdS3BtUhuaRouhqfT6NE__U';
  facebookUrl = 'https://www.facebook.com/prayas.rode';
  gitHubUrl = 'https://github.com/prayassrode';
  linkedinUrl = 'https://www.linkedin.com/in/prayas-rode-a5520454/';
  twitterUrl = 'https://twitter.com/PRAYASSRODE';
  resumeURL = 'https://tinyurl.com/prayasrode';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private httpClient: HttpClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  shouldRun = [/./].some(h => h.test(window.location.host));

  openUrl(website: string) {
    let url = '';
    if (website === 'facebook') {
      url = this.facebookUrl;
    } else if (website === 'github') {
      url = this.gitHubUrl;
    } else if (website === 'twitter') {
      url = this.twitterUrl;
    } else if (website === 'linkedin') {
      url = this.linkedinUrl;
    } else if (website === 'resume') {
      url = this.resumeURL;
    } else {
      url = 'mailto:prayassrode@gmail.com';
    }
    window.open(url, '_blank');
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

