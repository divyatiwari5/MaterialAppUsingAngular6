import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css']
})
export class ResponsiveNavbarComponent implements OnInit, OnDestroy {

  /*Object for small screen media like Mobile*/
  mobileQuery: MediaQueryList;

  navitemlist = Array(5).fill(0).map((_, i) => `Nav Item ${ i + 1 }`);

  fillercontent = Array(5).fill(0).map(() => `This is navigation filler content`);

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
