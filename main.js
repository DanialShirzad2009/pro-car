var canvas=document.getElementById("myCanvas");
var nasa_images=["mars.jpg","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"]
var ctx=canvas.getContext("2d");
random=Math.floor(Math.random()*3);


rover_width=120;
rover_height=70;
rover_x=10;
rover_y=10;
background_image="racing.jpg";
rover_image="car1.png";

rover2_width=120;
rover2_height=70;
rover2_x=10;
rover2_y=150;
rover2_image="car2.png";


function add(){
    background_img=new Image();
    background_img.onload=uploadbackground;
    background_img.src=background_image;
    
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;

    rover2_img=new Image();
    rover2_img.onload=uploadrover2;
    rover2_img.src=rover2_image;
}
    
    function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
    }
   function uploadrover(){
   ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
   }
  
   function uploadrover2(){
    ctx.drawImage(rover2_img,rover2_x,rover2_y,rover2_width,rover2_height);
    }
    
   window.addEventListener("keydown",my_keydown);
   function my_keydown(e){
var keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=="37")
{
rover_left();
console.log("left");
}
if(keypressed=="38")
{
rover_up();
console.log("up");
}
if(keypressed=="39")
{
rover_right();
console.log("right");
}
if(keypressed=="40")
{
rover_down();
console.log("down");
}

if(keypressed=="65")
{
rover2_left();
console.log("a");
}
if(keypressed=="87")
{
rover2_up();
console.log("w");
}
if(keypressed=="68")
{
rover2_right();
console.log("d");
}
if(keypressed=="83")
{
rover2_down();
console.log("s");
}



 

 

   }



  
   
   
   function rover_up(){
     if(rover_y>=0){
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover2();
    uploadrover();
    console.log(rover_x+","+rover_y);
    console.log(rover2_x+","+rover2_y);
     }

   }

   function rover_down(){
    if(rover_y<=600){
   rover_y=rover_y+10;
   uploadbackground();
   uploadrover2();
   uploadrover();
   console.log(rover_x+","+rover_y);
   console.log(rover2_x+","+rover2_y);
    }

  }

  function rover_right(){
    if(rover_x<=800){
   rover_x=rover_x+10;
   uploadbackground();
   uploadrover2();
   uploadrover();
   console.log(rover_x+","+rover_y);
   console.log(rover2_x+","+rover2_y);
    }

  }

  function rover_left(){
    if(rover_x>=0){
   rover_x=rover_x-10;
   uploadbackground();
   uploadrover2();
   uploadrover();
   console.log(rover_x+","+rover_y);
   console.log(rover2_x+","+rover2_y);
    }
  }





  function rover2_up(){
    if(rover2_y>=0){
   rover2_y=rover2_y-10;
   uploadbackground();
   uploadrover2();
   uploadrover();
   console.log(rover_x+","+rover_y);
   console.log(rover2_x+","+rover2_y);
    }

  }

  function rover2_down(){
   if(rover2_y<=600){
  rover2_y=rover2_y+10;
  uploadbackground();
  uploadrover2();
  uploadrover();
  console.log(rover_x+","+rover_y);
  console.log(rover2_x+","+rover2_y);
   }

 }

 function rover2_right(){
   if(rover2_x<=800){
  rover2_x=rover2_x+10;
  uploadbackground();
  uploadrover2();
  uploadrover();
  console.log(rover_x+","+rover_y);
  console.log(rover2_x+","+rover2_y);
   }

 }

 function rover2_left(){
   if(rover2_x>=0){
  rover2_x=rover2_x-10;
  uploadbackground();
  uploadrover2();
  uploadrover();
  console.log(rover_x+","+rover_y);
  console.log(rover2_x+","+rover2_y);
   }
 }
