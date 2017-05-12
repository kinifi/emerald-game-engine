
// the engine
class Emerald
{
	// static reference
	public static instance:Emerald;
	
	//name of the game
	private name:string;
	//width of the game window
	private width:number;
	//height of the game window
	private height:number;
	//the fps of the game
	private fps:number;
	//deltatime
	private deltaTime:number;

	private canvas:HTMLCanvasElement;
	private ctx:CanvasRenderingContext2D;
	
	constructor(name:string, width:number, height:number, fps:number)
	{
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
	public Run()
	{
		// maybe move this to an init method
		window.onload = () => 
		{
			
		}
	}

	//run the draw method on all objects in the currect scene
	public Render()
	{
		
	}
	
}
