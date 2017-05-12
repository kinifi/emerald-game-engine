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
declare class Entity {
    /**
     *  Name of the Entity
     */
    name: string;
    /**
     * Position of the Entity in the Scene
     */
    position: Vector;
    /**
     * X position of the Entity in the Scene
     */
    x: number;
    /**
     * Y position of the Entity in the Scene
     */
    y: number;
    /**
     * If the Entity is visible. If false, Entity.render is not called
     */
    visible: boolean;
    /**
     * If the Entity is active. If false, Entity.update is not called
     */
    active: boolean;
    /**
     * If the Entity has been created yet (has it ever been added to a scene)
     */
    isCreated: boolean;
    /**
     * If the Entity has been started yet (has it been updated in the current scene)
     */
    isStarted: boolean;
    /**
     * The current scene that the Entity is in
     */
    /**
     * List of all Groups the Entity is in
     */
    groups: string[];
    constructor();
    /**
     * Called the first time the entity is added to a scene (after constructor, before added)
     */
    created(): void;
    /**
     * Called immediately whenever the entity is added to a Scene (after created, before started)
     */
    added(): void;
    /**
     * Called before the first update of the Entity (after added)
     */
    started(): void;
    /**
     * Called immediately whenever the entity is removed from a Scene
     */
    removed(): void;
    /**
     * Called immediately whenever the entity is recycled in a Scene
     */
    recycled(): void;
    /**
     * Called when an entity is permanently destroyed
     */
    destroyed(): void;
}
/**
 * The Scene contains a list of Entities.
 * Rendering and Update loop of these Entites is done here.
 * Multiple scenes can exist at any given time
 */
declare class Scene {
    /**
     * the name of the scene
     */
    sceneName: string;
    /**
     * A list of all the Entities in the Scene
     */
    entities: Entity[];
    /**
     * The number of entities in the scene
     */
    Count(): number;
    /**
     * Add an Entity to the given scene
     * @param entity the entity to add to the scene
     */
    Add(entity: Entity): Entity;
    /**
     * Remove an Entity from the scene
     * @param entity the entity to remove from the scene
     */
    Remove(entity: Entity): Entity;
}
declare class Vector {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): Vector;
    copy(v: Vector): Vector;
    add(v: Vector): Vector;
    sub(v: Vector): Vector;
    mult(v: Vector): Vector;
    div(v: Vector): Vector;
    scale(s: number): Vector;
    rotate(sin: number, cos: number): Vector;
    clone(): Vector;
    readonly length: number;
    readonly normal: Vector;
    normalize(): Vector;
    static directions: Vector[];
    static temp0: Vector;
    static temp1: Vector;
    static temp2: Vector;
    private static _zero;
    static readonly zero: Vector;
}
