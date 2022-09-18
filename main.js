function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modrlReady);
}

function modelReady(){
    classifier.classify(gotResults);
}