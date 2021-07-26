const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var bg;

function preload() {
    
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    if (bgImg){
    background(bgImg);
    
    
    // add condition to check if any background image is there to add
    console.log(80 )
    Engine.update(engine);

    // write code to display time in correct format here
      if(hour>=12){
          text("time:"+hour%12+"pm",50,100);
               }else if(hour==0){
                text("Time : 12 AM",100,100);
              }else{
               text("Time : "+ hour%12 + " AM", 50,100);
              }
       
    }
}

async function getBackgroundImg()  {
 // write code to fetch time from API
 var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
 //change the data in JSON format
 var responseJson = await response.json();
 var dateTime=responseJson.datetime;
 // write code slice the datetime
 var hour = dateTime.slice(11,13);
 //console.log(200)
 // add conditions to change the background images from sunrise to sunset
 if(hour>=0&&hour<=18){
     bg = "sunrise1.png";
    
  } else{ 

        bg = "sunset7.png";
    }
   
     bgImg=loadImage(bg);
     
}