declare class Emerald {
    static instance: Emerald;
    private name;
    private width;
    private height;
    private fps;
    private deltaTime;
    private canvas;
    private ctx;
    constructor(name: string, width: number, height: number, fps: number);
    Run(): void;
    Render(): void;
}
