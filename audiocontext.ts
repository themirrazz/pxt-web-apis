// Add your code here
if(!navigator.userAgent.includes("Micro:bit 1.")) {
    // Enable the built in speaker on V2
    music.setBuiltInSpeakerEnabled(true);
    pins.setAudioPinEnabled(false); // Free up pin 0
} else {
    pins.setAudioPin(0);
    pins.setAudioPinEnabled(true);
}

class AudioDestinationNode { }

class OscillatorNode {
    constructor () {
        let self = this;
        this.frequency = {
            setValueAtTime: function (freq: number, time?: number) {
                self.hertz = freq;
                self.play = freq !== 0;
                if (self.play && self.connected && !this.paused) {
                    music.ringTone(self.hertz);
                } else {
                    music.stopAllSounds();
                }
            }
        };
    }
    public type: string = "";
    private paused = false;
    private play = false;
    private hertz = 0;
    private connected = false;
    public frequency: {
        setValueAtTime: (freq: number, time?: number) => void;
    };
    public connect(dest: AudioDestinationNode) {
        this.connected = true;
        if (this.play && !this.paused) {
            music.ringTone(this.hertz);
        } else {
            music.stopAllSounds();
        }
    }
    public disconnect() {
        this.connected = false;
        music.stopAllSounds();
    }
    public stop() {
        this.paused = true;
        music.stopAllSounds();
    }
    public start() {
        this.paused = false;
        if (this.play && this.connected) {
            music.ringTone(this.hertz);
        } else {
            music.stopAllSounds();
        }
    }
}

class AudioContext {
    constructor() { }
    public destination = new AudioDestinationNode();
    public currentTime:number = 0;
    public createOscillator() {
        return new OscillatorNode();
    }
}