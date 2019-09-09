import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[mark]'
})
export class MarkDirective implements OnInit {
  @Input() mark: string;
  constructor() { }

  @HostBinding('style.background-color') private bgColor: string;

  ngOnInit(){
    if (this.mark === "complete"){
      this.bgColor = "green";
    } else if (this.mark === "incomplete"){
      this.bgColor = "red";
    } else {
      this.bgColor = "white";
    }
  }

}
