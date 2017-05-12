/**
 * The Scene contains a list of Entities.
 * Rendering and Update loop of these Entites is done here.
 * Multiple scenes can exist at any given time
 */
class Scene {
    /**
     * Create a scene object with a given name
     * @param name Name of the given scene
     */
    constructor(name) {
        /**
         * A list of all the Entities in the Scene
         */
        this.entities = [];
        this.sceneName = name;
    }
    /**
     * Call the Update method on the entities in this scene
     */
    Update() {
        //TODO: Add update methods on the entity script
    }
    /**
     * Call the render method on the entities in this scene
     */
    Render() {
        //TODO: add Render methods on the entity script
    }
    /**
     * The number of entities in the scene
     */
    Count() {
        return this.entities.length;
    }
    /**
     * Add an Entity to the given scene
     * @param entity the entity to add to the scene
     */
    Add(entity) {
        this.entities.push(entity);
        return entity;
    }
    /**
     * Remove an Entity from the scene
     * @param entity the entity to remove from the scene
     */
    Remove(entity) {
        this.entities.push(entity);
        return entity;
    }
}
class Vector {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        if (x != undefined)
            this.x = x;
        if (y != undefined)
            this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    mult(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }
    div(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    }
    scale(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }
    rotate(sin, cos) {
        let ox = this.x, oy = this.y;
        this.x = ox * cos - oy * sin;
        this.y = ox * sin + oy * cos;
        return this;
    }
    //Not sure if I need this
    // public transform(m:Matrix):Vector
    // {
    // 	let ax = this.x, ay = this.y;
    // 	this.x = m.mat[0] * ax + m.mat[3] * ay + m.mat[6];
    // 	this.y = m.mat[1] * ax + m.mat[4] * ay + m.mat[7];
    // 	return this;
    // }
    clone() {
        return new Vector(this.x, this.y);
    }
    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    get normal() {
        let dist = this.length;
        return new Vector(this.x / dist, this.y / dist);
    }
    normalize() {
        let dist = this.length;
        this.x /= dist;
        this.y /= dist;
        return this;
    }
    static get zero() { return Vector._zero.set(0, 0); }
}
Vector.directions = [
    new Vector(-1, 0),
    new Vector(0, -1),
    new Vector(1, 0),
    new Vector(0, 1)
];
// temporary vectors used wherever
Vector.temp0 = new Vector();
Vector.temp1 = new Vector();
Vector.temp2 = new Vector();
Vector._zero = new Vector();
/// <reference path="scene.ts"/>
/// <reference path="./utils/vector.ts"/>
//global shortbut to the emerald class
// Global shortform reference to the Ambient app
var Em;
// the engine
class Emerald {
    /**
     * Create a game window
     * @param name the name of the game window
     * @param width the width of the game window
     * @param height the height of the game window
     * @param fps the desired frame rate of the game window
     */
    constructor(name, width, height, fps) {
        // current game scale (when not full-screen)
        this._scale = 1;
        this.isSetup = false;
        //is the game fullscreen?
        this.fullscreen = false;
        // set static references
        Emerald.instance = this;
        Em = this;
        // define self
        this.name = name;
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.deltaTime = fps / 1000;
        console.log('Emerald - Starting Setup');
    }
    // screen size
    get windowWidth() { return document.documentElement.clientWidth; }
    get windowHeight() { return document.documentElement.clientHeight; }
    /**
     * Is called when window onload is done
     */
    Setup() {
        // maybe move this to an init method
        window.onload = () => {
            // bg
            document.title = this.name;
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext("2d");
            console.log("Emerald - Setup Complete");
            //disable right clicking
            this.DisableRightClick();
            this.isSetup = true;
            Em.Run();
        };
    }
    //run the update method on all objects in the current scene
    Run() {
        //is the game actually setup before we call run?
        if (!Em.isSetup) {
            return;
        }
        requestAnimationFrame(Em.Run);
        console.log('run');
    }
    /**
     * DisableRightClick
     */
    DisableRightClick() {
        // disable right click on scaled visible canvas
        this.canvas.oncontextmenu = (e) => {
            e.preventDefault();
        };
    }
    //run the draw method on all objects in the currect scene
    Render() {
    }
    /**
     * onStart
     */
    onStart() {
        console.log('Emerald Started');
    }
    /**
     * Gets the current scene object
     */
    get scene() {
        return this._scene;
    }
    /**
     * Sets the current scene object
     */
    set scene(value) {
        this.scene = value;
    }
    /**
     * Gets the current scene object
     */
    // public get scale():number
    // {
    // 	return this.scale;
    // }
    // /**
    //  * scales the canvas to a larger size in the given window
    //  */
    // public set scale(value:number)
    // {
    // 	this._scale = value;
    // 	this.container.style.marginTop = ((this.windowHeight - this.height * this.scale) / 2) + "px";
    // 	this.container.style.width = (this.width * this._scale) + "px";
    // 	this.container.style.height = (this.height * this._scale) + "px";
    // 	if (!this.fullscreen)
    // 	{
    // 		this.canvasScaled.width = this.width * this._scale;
    // 		this.canvasScaled.height = this.height * this._scale;
    // 	}
    // }
    // /**
    //  * Toggle fullscreen on the canvas
    //  */
    // public ToggleFullscreen()
    // {
    // 	if  (this.fullscreen)
    // 	{
    // 		this.canvasScaled.style.position = "relative";
    // 		this.canvasScaled.width = this.width * this.scale;
    // 		this.canvasScaled.height = this.height * this.scale;
    // 	}
    // 	else
    // 	{
    // 		this.canvasScaled.style.position = "absolute";
    // 		this.canvasScaled.style.left = "0px";
    // 		this.canvasScaled.style.top = "0px";
    // 		this.canvasScaled.width = this.windowWidth;
    // 		this.canvasScaled.height = this.windowHeight;
    // 	}
    // 	this.fullscreen = !this.fullscreen;
    // }
    /**
     * onResize
     */
    onResize() {
        //TODO figure out what do here
    }
}
class Entity {
    constructor() {
        /**
         * Position of the Entity in the Scene
         */
        this.position = new Vector(0, 0);
        /**
         * If the Entity is visible. If false, Entity.render is not called
         */
        this.visible = true;
        /**
         * If the Entity is active. If false, Entity.update is not called
         */
        this.active = true;
        /**
         * If the Entity has been created yet (has it ever been added to a scene)
         */
        this.isCreated = false;
        /**
         * If the Entity has been started yet (has it been updated in the current scene)
         */
        this.isStarted = false;
    }
    /**
     * X position of the Entity in the Scene
     */
    get x() { return this.position.x; }
    set x(val) { this.position.x = val; }
    /**
     * Y position of the Entity in the Scene
     */
    get y() { return this.position.y; }
    set y(val) { this.position.y = val; }
    /**
     * Called the first time the entity is added to a scene (after constructor, before added)
     */
    created() {
    }
    /**
     * Called immediately whenever the entity is added to a Scene (after created, before started)
     */
    added() {
    }
    /**
     * Called before the first update of the Entity (after added)
     */
    started() {
    }
    /**
     * Called immediately whenever the entity is removed from a Scene
     */
    removed() {
    }
    /**
     * Called when an entity is permanently destroyed
     */
    destroyed() {
    }
}
/// <reference path="engine.ts"/>
function gamesetup() {
    var e = new Emerald("test", 180, 180, 60);
    e.Setup();
    e.Run();
}
gamesetup();
