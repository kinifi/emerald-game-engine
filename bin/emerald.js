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
    //run the update method on all objects in the current scene
    Run() {
        // maybe move this to an init method
        window.onload = () => {
        };
    }
    //run the draw method on all objects in the currect scene
    Render() {
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
        /**
         * The current scene that the Entity is in
         */
        // public scene:Scene;
        /**
         * List of all Groups the Entity is in
         */
        this.groups = [];
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
     * Called immediately whenever the entity is recycled in a Scene
     */
    recycled() {
    }
    /**
     * Called when an entity is permanently destroyed
     */
    destroyed() {
    }
}
/**
 * The Scene contains a list of Entities.
 * Rendering and Update loop of these Entites is done here.
 * Multiple scenes can exist at any given time
 */
class Scene {
    constructor() {
        /**
         * A list of all the Entities in the Scene
         */
        this.entities = [];
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
