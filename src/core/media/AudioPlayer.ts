namespace S {
    export class AudioPlayer {
        private _name: string;
        private _isEffect: boolean;
        private sound: egret.Sound;
        private channel: egret.SoundChannel;
        private _isPlaying: boolean = false;

        public set isEffect(isEffect: boolean) {
            this._isEffect = isEffect;
        }

        public constructor(sourceName, isEffect: boolean = true) {
            this._name = sourceName;
            this._isEffect = isEffect;
        }

        public init() {
            this.sound = RES.getRes(this._name);
            if (!this._isEffect && !!this.sound) {
                this.sound.type = egret.Sound.MUSIC;
            } else if (!!this._isEffect && this.sound) {
                this.sound.type = egret.Sound.EFFECT;
            }
        }

        public isPlaying() {
            return this._isPlaying;
        }

        public play(times: number = 0) {
            this.channel = this.sound.play(0, times);
            this.channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this);
            this._isPlaying = true;
        }

        private onSoundCompl() {
            if (this.channel) {
                this.channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundCompl, this);
            }
            this._isPlaying = false;
        }

        public stop() {
            this.channel.stop();
            this.channel.position = 0;
            this.channel = null;
        }

        // 更新声音
        public updateVolume(num: number) {
            let volumeNum = 0;
            if (num >= 0 && num <= 1) {
                volumeNum = num;
            } else if (num < 0) {
                volumeNum = 0;
            } else if (num > 1) {
                volumeNum = 1;
            }

            if (!!this.channel) {
                this.channel.volume = volumeNum;
            }
        }
    }
}