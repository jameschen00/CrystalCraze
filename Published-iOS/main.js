// Autogenerated main.js file

require("jsb_constants.js");

require("GameBoard.js");
require("GameScene.js");
require("MainScene.js");


function main()
{
    //cc.Texture2D.setDefaultAlphaPixelFormat(6);
	var director = cc.Director.getInstance();
    var scene = cc.BuilderReader.loadAsScene("MainScene");
    var runningScene = director.getRunningScene();
    if (runningScene === null) director.runWithScene(scene);
    else director.replaceScene(scene);
}
main();