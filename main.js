prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350, 
    height:300, 
    image_format:"jpeg",
    jpeg_quality: 90
})

camera = document.getElementById("camera")

Webcam.attach("#camera")

function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "CapturedImg" src = "'+ data_uri +'">'

    })

}
console.log("ml5version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/64qqojiNy/model.json", modelLoaded)
function modelLoaded(){
    console.log("Model is Loaded!")
}