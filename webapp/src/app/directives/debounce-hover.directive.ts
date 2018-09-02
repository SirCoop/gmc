import { debounceTime } from 'rxjs/operators';
import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appDebounceHover]'
})
export class DebounceHoverDirective implements OnInit, OnDestroy {
  // @Input() debounceTime = 500;
  // @Output() debounceHover = new EventEmitter();
  // private hover = new Subject();
  // private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.subscription = this.hover.debounceTime(this.debounceTime).subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  // @HostListener('mouseenter', ['$event'])
  // clickEvent(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.hover.next(event);
  // }

  


}
