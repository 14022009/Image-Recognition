Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(document.getElementById("webcam_dis_d"));

function take_snapshot() {
    Webcam.snap(function (snap) {
        document.getElementById("webcam_snap_d").innerHTML = "<img id='webcamera' src = " + snap + ">";
    });
}

console.log("ml5 version", ml5.version);
var classfiys = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/638OYfucL/model.json', model_load);

function model_load() {
    console.log("my modal is loded");
}

function reco() {
    var images = document.getElementById("webcamera");
    classfiys.classify(images, reco_img);
}

function reco_img(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("objdis").innerHTML = result[0].label;
        document.getElementById("accdis").innerHTML = result[0].confidence.toFixed(3);
    }
}