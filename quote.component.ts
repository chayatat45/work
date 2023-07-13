import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group , state} from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
]

const left1 = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right1 = [
  
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
    trigger('animImageSlider1', [
      transition(':increment', right1),
      transition(':decrement', left1),
    ]),
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, height: 100 + 'vh' })),
      transition(':enter', [
        style({ opacity: 0, height: 0 + 'vh' }),
        animate(100),
      ]),
      transition(
        ':leave',
        animate(150, style({ opacity: 0, height: 0 + 'vh' }))
      ),
      state('out', style({ opacity: 1, height: 10 + 'vh' })),
      transition(':enter', [
        style({ opacity: 0, height: 0 + 'vh' }),
        animate(100),
      ]),
      transition(':leave',
        animate(200, style({ opacity: 0, height: 0 + 'vh' }))
      ),
    ]),
  ]
})
export class QuoteComponent implements OnInit {

  constructor(){
  
  }

  ngOnInit(): void {
    
  }

  gotoDocs(){
    window.open("https://docs.google.com/document/d/1v2lmehMG6Jie8WrbnfGCf4Wa-odwN26VxATnwm4_qT4/edit?usp=sharing",'_blank')
  }
  selectedTabIndex = 0;
  tab = [0,1,2,3];

  // back() {
  //   if (this.selectedTabIndex > 0) {
  //     this.selectedTabIndex--;
  //   } else {
  //     this.selectedTabIndex = this.tab.length - 1;
  //   }
  // }

  // next() {
  //   if (this.selectedTabIndex < this.tab.length - 1) {
  //     this.selectedTabIndex++;
  //   } else {
  //     this.selectedTabIndex = 0;
  //   }
  // }

  counter: number = 0;
  images = [
        '../../../../assets/payment/test-file.png',
        '../../../../assets/payment/tiktok-logo.png',
        '../../../../assets/payment/video-camera.png'
      ];
  group = [
    {
      image : '../../../../assets/payment/test-file.png',
      message : 'layout 1 '
    },{
      image : '../../../../assets/payment/tiktok-logo.png',
      message : 'layout 2 '
    },{
      image : '../../../../assets/payment/video-camera.png',
      message : 'layout 3 '
    }
  ]

  // onNext() {
  //   if (this.counter != this.images.length - 1) {
  //     this.counter++;
  //   }
  // }

  // onPrevious() {
  //   if (this.counter > 0) {
  //     this.counter--;
  //   }
  // }

  onNext1() {
    // this.group.push({
    //   image : 'https://placeimg.com/300/300/nature/4',
    //   message : 'layout 3 '
    // })
    let a:any
    setTimeout( () => {
      a = this.group.shift()
    }, 500);
    
    setTimeout( () => {
      this.group.push(a)
    }, 500);

    console.log(this.group)
  }

  onPrevious1() {

    let a:any
    setTimeout( () => {
      a = this.group.pop()
    }, 500);
    
    setTimeout( () => {
      this.group.unshift(a)
    }, 500);
  }

}


// export class ImageSliderComponent implements OnInit {
//   ngOnInit(): void {
    
//   }
//   counter: number = 0;
//   images = [
//     'https://placeimg.com/300/300/nature/6',
//     'https://placeimg.com/300/300/nature/7',
//     'https://placeimg.com/300/300/nature/8',
//     'https://placeimg.com/300/300/nature/9',
//     'https://placeimg.com/300/300/nature/2',
//     'https://placeimg.com/300/300/nature/3',
//     'https://placeimg.com/300/300/nature/1',
//   ];

//   group = [
//     {
//       image : 'https://placeimg.com/300/300/nature/1',
//       message : 'layout 1 '
//     },{
//       image : 'https://placeimg.com/300/300/nature/2',
//       message : 'layout 2 '
//     },{
//       image : 'https://placeimg.com/300/300/nature/3',
//       message : 'layout 3 '
//     }
//   ]



//   onNext() {
//     if (this.counter != this.images.length - 1) {
//       this.counter++;
//     }
//   }

//   onPrevious() {
//     if (this.counter > 0) {
//       this.counter--;
//     }
//   }

//   onNext1() {
//     // this.group.push({
//     //   image : 'https://placeimg.com/300/300/nature/4',
//     //   message : 'layout 3 '
//     // })
//     let a:any
//     setTimeout( () => {
//       a = this.group.shift()
//     }, 1000);
    
    
//     setTimeout( () => {
//       this.group.push(a)
//     }, 1000);

//     console.log(this.group)
//   }

//   onPrevious1() {

//     let a:any
//     setTimeout( () => {
//       a = this.group.pop()
//     }, 1000);
    
    
//     setTimeout( () => {
//       this.group.unshift(a)
//     }, 1000);
//   }

// }



