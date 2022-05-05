Webcam.set({
    width : 250,
    height: 350,
    
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#cam");


function screenshot() {
    Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML="<img id='pic' src="+data_uri+">";  
    });
}


console.log("version", ml5.version);

identify= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/r_Oa8fAHk/model.json", identification);

function identification() {
    console.log("modeloaded");
}
function check() {
    img= document.getElementById("screenshot");

    identify.classify(pic, woof );


}
function woof(error, result) {
    if (error) {
        console.error(error);
    } else {
        accurate= Math.floor(result[0].confidence*100);
        console.log(result);
        document.getElementById("pet").innerHTML=result[0].label;
        document.getElementById("confident").innerHTML=accurate+"%";
    }
}