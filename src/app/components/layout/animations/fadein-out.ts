import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
export let fade = trigger('fade',[
  state('void', style({

    opacity: 0,
   
  })),
 
  transition(':enter',[

    animate('1s  cubic-bezier(0,.25,.9,.48)')
  ]),
  transition(':leave',[
    animate('1s')
  ])
])
export let del = trigger('del',[
  state('void',style({transform:'translateX(0px)'})),
  transition(':enter',[
    style({  width:10, transform:'translateX(800px)',opacity:0}),
    animate('3s 0.1s cubic-bezier(.17,.67,.9,.55)'
    
    )
  ]),
transition(':leave',[
  // state( style({ transform: 'translateX(0)' })),
  animate('1s cubic-bezier(.1,.16,.92,.26)', keyframes([
    style({
      offset:0.1,
      opacity:1,
      transform:'translateX(200px)'
    }),
    style({
      offset:1, 
      opacity:0,
      transform:'translateX(-100%)'
    })
  ]))
])
])