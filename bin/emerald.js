// the engine
class Emerald {
    constructor(name, width, height, fps) {
        // set static references
        Emerald.instance = this;
        // define self
        this.name = name;
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.deltaTime = fps / 1000;
    }
    Run() {
        window.onload = () => {
        };
    }
    Render() {
    }
}
