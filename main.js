var canvas = new fabric.Canvas('myCanvas');

canvas_width = 30;
canvas_height = 30;

player_x=10;
player_y=10;

var player_object= "";
var block_image_object= "";

function player_update()
{
Image.fromURL("player.png", function(Img) {
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});
}

block_image_object.scaleToWidth(block_image_width);

block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,
    left:player_x
});
