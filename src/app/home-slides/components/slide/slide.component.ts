import { AuthService } from './../../../auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() imgPath: string;
  @Input() selected;
  constructor(private au:AuthService) { }

  loggedIn()
  {
    return this.au.isLoggedIn();
  }

  ngOnInit() {
  }

}
