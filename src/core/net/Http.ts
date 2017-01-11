namespace S {
    export class Http extends egret.DisplayObjectContainer {

        private _url: string;
        private _methodType: string = egret.HttpMethod.POST;
        private _request: egret.HttpRequest;
        private _responseType: string = egret.HttpResponseType.TEXT;
        private _header: any = {"Content-Type": "application/x-www-form-urlencoded"};
        public set methodType(type: string) {
            this._methodType = type;
        }

        public get methodType() {
            return this._methodType;
        }

        public set responseType(type: string) {
            this._responseType = type;
        }

        public get responseType() {
            return this._responseType;
        }

        public setHeader(key: string, value: string) {
            this._header[key] = value;
        }

        constructor(url: string, methodType: string = egret.HttpMethod.POST) {
            super();
            this._methodType = methodType;
            this._url = url;
        }

        public init() {
            this._request = new egret.HttpRequest();
            this._request.responseType = this._responseType;
            this._request.open(this._url, this._methodType);

            const keys = Object.keys(this._header);
            for(let i = 0; i < keys.length ; i++) {
                this._request.setRequestHeader( keys[i], this._header[keys[i]]);
            }

            this._request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            this._request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
            this._request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        }

        public sendMsg(msg: string = null) {
            this._request.send(msg);
        }

        private onPostComplete(event: egret.Event): void {
            const request = <egret.HttpRequest>event.currentTarget;
            let httpEvent: HttpEvent = new HttpEvent(HttpEvent.COMPLETE);
            httpEvent.eventType = HttpEvent.COMPLETE;
            httpEvent.data = request.response;
            this.dispatchEvent(httpEvent);
        }

        private onPostIOError(event: egret.IOErrorEvent): void {
            let httpEvent: HttpEvent = new HttpEvent(HttpEvent.COMPLETE);
            httpEvent.data = { error: 'error', result: event };
            httpEvent.eventType = HttpEvent.ERROR;
            this.dispatchEvent(httpEvent);
        }


        private onPostProgress(event: egret.ProgressEvent): void {
            console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
        }
    }
}