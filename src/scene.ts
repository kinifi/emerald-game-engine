/**
 * The Scene contains a list of Entities. 
 * Rendering and Update loop of these Entites is done here. 
 * Multiple scenes can exist at any given time
 */

class Scene 
{
    /**
     * the name of the scene
     */
    public sceneName:string;

    /**
	 * A list of all the Entities in the Scene
	 */
	public entities:Entity[] = [];

    /**
     * Create a scene object with a given name
     * @param name Name of the given scene
     */
    constructor(name:string)
    {
        this.sceneName = name;
    }

    /**
     * Call the Update method on the entities in this scene
     */
    public Update()
	{
        //TODO: Add update methods on the entity script
    }

    /**
     * Call the render method on the entities in this scene
     */
    public Render()
    {
        //TODO: add Render methods on the entity script
    }

    /**
     * The number of entities in the scene
     */
    public Count():number
    {
        return this.entities.length;
    }

    /**
     * Add an Entity to the given scene
     * @param entity the entity to add to the scene
     */
    public Add(entity:Entity):Entity
	{
		this.entities.push(entity);
		return entity;
	}

    /**
     * Remove an Entity from the scene
     * @param entity the entity to remove from the scene
     */
	public Remove(entity:Entity):Entity
	{
		this.entities.push(entity);
		return entity;
	}

}