
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

	//canvas info
	private canvas:HTMLCanvasElement;
	private context:CanvasRenderingContext2D;
	private container:any;
	public canvasScaled:any;
	public contextScaled:any;
	
	// current game scale (when not full-screen)
	private _scale:number = 1;

	// screen size
	public get windowWidth():number { return document.documentElement.clientWidth; }
	public get windowHeight():number { return document.documentElement.clientHeight; }

	//is the game fullscreen?
	public fullscreen:boolean = false;

	//the current running scene
	public _scene:Scene;


	/**
	 * Create a game window 
	 * @param name the name of the game window
	 * @param width the width of the game window
	 * @param height the height of the game window
	 * @param fps the desired frame rate of the game window
	 */
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
			// bg
			document.title = this.name;
			document.body.style.backgroundColor = "#222";

			// create the container ... can ignore this later, maybe
			this.container = document.createElement("div");
			this.container.style.width = (this.width * this.scale) + "px";
			this.container.style.height = (this.height * this.scale) + "px";
			this.container.style.margin = "auto";
			this.container.style.marginTop = ((this.windowHeight - this.height * this.scale) / 2) + "px";
			this.container.style.boxShadow = "0px 0px 128px #444";
			this.container.style.border = "1px solid #222";
			document.body.appendChild(this.container);

			// create the visible canvas
			this.canvasScaled = document.createElement("canvas");
			this.canvasScaled.width = this.width * this.scale;
			this.canvasScaled.height = this.height * this.scale;
			this.container.appendChild(this.canvasScaled);

			// get context
			this.contextScaled = this.canvasScaled.getContext("2d");
			this.context = this.canvas.getContext("2d");

			//disable right clicking
			this.DisableRightClick();

			// on window resize
			window.onresize = () =>
			{
				this.container.style.marginTop = ((this.windowHeight - this.height * this.scale) / 2) + "px";
				
				if (this.fullscreen)
				{
					this.canvasScaled.width = this.windowWidth;
					this.canvasScaled.height = this.windowHeight;
				}

				if (this.onResize)
					this.onResize();
			}

			// we've started
			if (this.onStart != null)
				this.onStart();

		}
	}

	/**
	 * DisableRightClick
	 */
	public DisableRightClick() {
		// disable right click on scaled visible canvas
			this.canvasScaled.oncontextmenu = (e) =>
			{
				e.preventDefault();
			}
	}

	//run the draw method on all objects in the currect scene
	public Render()
	{
		
	}

	/**
	 * onStart
	 */
	public onStart() {
		console.log('Emerald Started');
	}

	/**
	 * Gets the current scene object
	 */
	public get scene():Scene
	{
		return this._scene;
	}

	/**
	 * Sets the current scene object
	 */
	public set scene(value:Scene)
	{
		this.scene = value;
	}

	/**
	 * Gets the current scene object
	 */
	public get scale():number
	{
		return this.scale;
	}

	/**
	 * scales the canvas to a larger size in the given window
	 */
	public set scale(value:number)
	{
		this._scale = value;
		this.container.style.marginTop = ((this.windowHeight - this.height * this.scale) / 2) + "px";
		this.container.style.width = (this.width * this._scale) + "px";
		this.container.style.height = (this.height * this._scale) + "px";
		if (!this.fullscreen)
		{
			this.canvasScaled.width = this.width * this._scale;
			this.canvasScaled.height = this.height * this._scale;
		}
	}

	/**
	 * Toggle fullscreen on the canvas
	 */
	public ToggleFullscreen()
	{
		if  (this.fullscreen)
		{
			this.canvasScaled.style.position = "relative";
			this.canvasScaled.width = this.width * this.scale;
			this.canvasScaled.height = this.height * this.scale;
		}
		else
		{
			this.canvasScaled.style.position = "absolute";
			this.canvasScaled.style.left = "0px";
			this.canvasScaled.style.top = "0px";
			this.canvasScaled.width = this.windowWidth;
			this.canvasScaled.height = this.windowHeight;
		}

		this.fullscreen = !this.fullscreen;
	}

	/**
	 * onResize
	 */
	public onResize() {
		//TODO figure out what do here
	}
	
}
