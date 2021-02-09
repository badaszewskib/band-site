import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  @Input('txt') txt!:string;
  @Output() callScroll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cscroll(){
    this.callScroll.emit(this.txt);
  }
  
}
