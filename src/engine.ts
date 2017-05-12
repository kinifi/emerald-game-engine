/// <reference path="scene.ts"/>
/// <reference path="./utils/vector.ts"/>

//global shortbut to the emerald class
// Global shortform reference to the Ambient app
var Em:Emerald;

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
	
	// current game scale (when not full-screen)
	private _scale:number = 1;

	public isSetup:boolean = false;


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

		Em = this;

		// define self
		this.name = name;
		this.width = width;
		this.height = height;
		this.fps = fps;
		this.deltaTime = fps / 1000;
		console.log('Emerald - Starting Setup');
		
	}

	/**
	 * Is called when window onload is done
	 */
	public Setup()
	{
				// maybe move this to an init method
		window.onload = () => 
		{
			// bg
			document.title = this.name;

			this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
			this.context = this.canvas.getContext("2d");

			console.log("Emerald - Setup Complete");

			//disable right clicking
			this.DisableRightClick();

			this.isSetup = true;

			Em.Run();

		}


	}

	//run the update method on all objects in the current scene
	public Run()
	{
		//is the game actually setup before we call run?
		if(!Em.isSetup)
		{
			return;
		}

		requestAnimationFrame(Em.Run);
		console.log('run');
	}

	/**
	 * DisableRightClick
	 */
	public DisableRightClick() {
		// disable right click on scaled visible canvas
			this.canvas.oncontextmenu = (e) =>
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
	public onResize() {
		//TODO figure out what do here
	}
	
}
