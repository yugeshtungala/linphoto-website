import { trigger, transition, query, style, group, animate, keyframes } from '@angular/animations';


export const keyFrameAnimation =
    trigger("routeAnimation", [
        transition("* <=> *", [
            query(":enter, :leave",
                style({ position: 'absolute' }),
                { optional: true }),

            group([

                query(":enter", [
                    animate("1s ease-in", keyframes([
                        style({ offset: 0, transform: "scale(0.1) translateX(-100%)", "transform-origin": "center left" }),
                        style({ offset: 0.2, transform: "scale(0.2) translateX(80%)" }),
                        style({ offset: 0.4, transform: "scale(0.4) translateX(60%)" }),
                        style({ offset: 0.6, transform: "scale(0.6) translateX(40%)" }),
                        style({ offset: 0.8, transform: "scale(0.8) translateX(20%)" }),
                        style({ offset: 1, transform: "scale(1) translateX(0%)" })
                    ])),
                ], { optional: true }),

                query(":leave", [
                    animate("1s ease-in", keyframes([
                        style({ offset: 0, transform: "scale(1) translateX(00%)","transform-origin": "center right" }),
                        style({ offset: 0.2, transform: "scale(0.8) translateX(20%)" }),
                        style({ offset: 0.4, transform: "scale(0.6) translateX(40%)" }),
                        style({ offset: 0.6, transform: "scale(0.4) translateX(60%)" }),
                        style({ offset: 0.8, transform: "scale(0.2) translateX(80%)" }),
                        style({ offset: 1, transform: "scale(1) translateX(100%)" })
                    ])),
                ], { optional: true })

            ])
        ])
    ]);

export const zoomUpAnimation =
    trigger("routeAnimation", [
        transition("7 <=> 8", [
            query(":enter, :leave",
                style({ position: 'relative' }),
                { optional: true }),

            group([

                query(":enter", [
                    style({ transform: "scale(0) translateY(100%)" }),
                    animate("0.6s", style({ transform: "scale(1) translateY(0%)" }))
                ], { optional: true }),

                query(":leave", [
                    style({ transform: "scale(1) translateY(0%)" }),
                    animate("0.6s", style({ transform: "scale(0) translateY(-100%)" }))
                ], { optional: true })

            ])
        ])
    ]);