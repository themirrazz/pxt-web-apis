// Add your code here
class MediaMetadata {
    constructor(metadata?: {
        title?: string,
        artist?: string,
        album?: string,
        artwork?: {
            src: string,
            sizes?: string,
            type?: string
        }[]
    }) {
        if(metadata) {
            if (metadata.title) {
                this.title = metadata.title;
            }
            if (metadata.artist) {
                this.artist = metadata.artist;
            }
            if (metadata.album) {
                this.album = metadata.album;
            }
            if (metadata.artwork) {
                this.artwork = metadata.artwork;
            }
        }
    }
    public title:string|null = null;
    public artist:string|null = null;
    public album:string|null = null;
    public artwork: {
        src: string,
        sizes?: string,
        type?: string
    }[]|null = null;
}

class MediaSession {
    constructor() { }
    public playbackState:'none'|'paused'|'playing' = 'none';
    public metadata: MediaMetadata|null;
}