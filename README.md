# emerald-game-engine
my attempt at making a game engine in typescript for game jams

Engine - creates a canvas window and calls Update, Render on the scene object
Scenes - contain entities which call the Render and Update methods on those entities. 
Entites - contain the base framework for an object in a scene. position, etc. 

I cannot decide if I want different entity types such as iParticle, iShape, iSprite that entites can extend in order to get more features or if I should add components to entities that give those features.
