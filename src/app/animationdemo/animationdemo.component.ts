import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Square } from './square';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [


    trigger('up', [
      state('initial', style({
        width: '100px',
        height: '100px',
        transform: 'translateX(0px)',
      })),

      state('final', style({
        width: '100px',
        height: '100px',
        transform: 'translateX(700px)',
      })),
      transition('initial=>final', animate('2000ms')),
      // transition('final=>initial', animate('1000ms'))
    ])


    ,
    trigger('changeDivSize', [
      state('initial1', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final1', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial1=>final1', animate('1500ms')),
      transition('final1=>initial1', animate('1000ms'))
    ]),



    trigger('balloonEffect', [
      state('initial1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final1', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('initial1=>final1', animate('1500ms')),
      transition('final1=>initial1', animate('1000ms'))
    ]),



    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),



    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])


  ]
})
export class AnimationdemoComponent {

  currentState = 'initial';
  listItem = [];
  list_order = 1;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  squares: Square[] = [];


  imageSource = '';
  imgSrc1 = 'assets/logo.png';
  imgSrc2 = 'assets/angular.png';
  counter = 0;
  enableAnimation = false;
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.imageSource = this.imgSrc1;
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 200);
  }

  tick() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squares.forEach((square: Square) => {
      square.moveRight();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    const square = new Square(this.ctx);
    this.squares = this.squares.concat(square);
    // this.enableAnimation = true;
    this.counter = 0;
  }

  toggleImg() {
    if (this.currentState === 'initial') {
      this.imageSource = this.imgSrc1;
      // this.currentState = 'final';
    } else {
      this.imageSource = this.imgSrc2;
      // this.currentState = 'initial';
    }
  }

  onDone($event) {
    this.toggleImg();
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.changeState();
    }
  }

  /**
   *
   */
  addItem() {
    const listitem = 'ListItem ' + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  changeStateDummy() {
    this.currentState = this.currentState === 'initial1' ? 'final1' : 'initial1';
  }
}
