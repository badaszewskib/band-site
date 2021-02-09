import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private viewportScroller:ViewportScroller) { 
  }

  ngOnInit(): void {
    this.router.events.subscribe(s => {
      console.log(s);
      if(s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if(tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if(element) { element.scrollIntoView(); }
        }
      }
    });
  }

  scroll(target:string) {
    this.router.navigate([''], {fragment: target});
  }
}
