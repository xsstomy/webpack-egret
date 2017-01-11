namespace S {
    export class HttpEvent extends egret.Event {
        public static ERROR: 'ERROR' = 'ERROR';
        public eventType: string;
        constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
            super(type, bubbles, cancelable);
        }
    }
}