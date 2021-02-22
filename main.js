
Webcam.set({
    width:350,
    height:300,
    image_format : 'jpg',
    jpg_quality:100
});

camera = document.getElementById("camera");


Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}


classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/AVi24HN0e/model.json',modelLoaded); 
function modelLoaded()
{
    console.log("model is loaded");
}

// Copy this 

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(result);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
 }
}
// till here