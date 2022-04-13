import {Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, AnimationPlayer, keyframes, style} from '@angular/animations';
import {PreventMultiClickService} from './prevent-multi-click.service';

const DELAY = 3000;
const DEFAULT_ANIMATION_PERIOD = '1s';
const NOTICE_EVERY = 15;

@Directive({
  selector: '[appPreventMultiClick]',
  exportAs: 'appPreventMultiClick'
})
export class PreventMultiClickDirective implements OnInit, OnDestroy {
  private player: AnimationPlayer;
  private timer: any;
  private countAnimate = 0;
  private toAnimateS: boolean;

  constructor(private busyService: PreventMultiClickService,
              private el: ElementRef,
              private renderer: Renderer2,
              private builder: AnimationBuilder) {
  }

  get toAnimate(): boolean {
    return this.toAnimateS;
  }

  set toAnimate(value) {
    this.toAnimateS = value;
    if (value) {
      this.playDefaultAnimation();
    }
  }

  @HostListener('click', ['$event'])
  onClick(e: any): any {
    this.toAnimate = true;
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    this.timer = setTimeout(() => {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      this.toAnimate = false;
    }, DELAY);
    /*if (this.busyService.busy) { // do nothing
      this.busyService.log('busy');
      return;
    } else { // serve
      this.busyService.log('click');
      this.busyService.set();
      this.toAnimate = false;
      this.timer = setTimeout(_ => {
        if (this.busyService.busy) { // still busy serving
          this.toAnimate = true;
        }
      }, DELAY);
    }*/
  }



  ngOnInit(): void {
    console.log('Busy');
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.player) {
      this.player.destroy();
    }
  }

  done = () => {
    this.busyService.reset();
    this.countAnimate = 0;
    this.toAnimate = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.busyService.log('done');
  }

  animationDone = () => {
    if (this.toAnimate) { // continue
      /*if (this.countAnimate++ % NOTICE_EVERY === (NOTICE_EVERY - 1)) {
        this.tookLong.emit({ event: this.countAnimate, done: this.done });
      }*/
      this.playDefaultAnimation();
    }
    // this.busyService.log('animationDone()', !!this.toAnimate, !!this.player);
  }

  playDefaultAnimation(): void {
    if (this.player) {
      try {
        this.player.reset();
      } catch (e) {
        console.log(e);
      }
    } else {
      const factory = this.builder.build([
        animate(DEFAULT_ANIMATION_PERIOD, keyframes([
          style({opacity: 0.9, offset: 0}),
          style({opacity: 0.1, offset: 0.5}),
          style({opacity: 0.9, offset: 1})
        ]))
      ]);
      this.player = factory.create(this.el.nativeElement);
      this.busyService.log('playDefaultAnimation');
    }
    try {
      this.player.onDone(this.animationDone);
      this.player.play();
    } catch (e) {
      console.log(e);
    }
  }
}
