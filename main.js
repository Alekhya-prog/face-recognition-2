Webcam.set ({ 
width : 300,
height : 300,
image_format : 'png',
png_quality : 100
});

camera = document.getElementById ("camera") ;
Webcam.attach ('#camera');

function take_snapshot  (){
Webcam.snap (function (data_uri) {
document.getElementById ('result').innerHTML='<img id = "img1" src = "'+data_uri+'">';
}) ;
}

classifier = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/Jccz8Snmk/model.json', modelLoaded);

function modelLoaded (){
 console.log ("model is loaded");
}

function identify_image () {
clicked_pic = document.getElementById("img1");
classifier.classify(clicked_pic , gotResult );
}

function gotResult (error , results) {
if (error) {
console.log (error);
}

else {
console.log (results);
document.getElementById ("result_object_name").innerHTML=results[0].label;
document.getElementById ("result_object_accuracy").innerHTML=results[0].confidence.toFixed (3);

}
}
