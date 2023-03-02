function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}

function setup() {
    canvas=createCanvas(300,300)
    
    canvas.mouseReleased(classifierCanvas)

}

function classifierCanvas(){
    classifier.classify(canvas, gotResults)
}

function gotResults(error,results) {   
    if(error) {
    console.error(error)
    }
    else{
        console.log(results)
        result=results[0].label
        result=result.replace("_"," ")
        document.getElementById("label").innerHTML="desenho detectado: "+result

        precisao=results[0].confidence
        precisao= Math.round(precisao*100)
        document.getElementById("precisao").innerHTML="precisa: "+precisao


    }
}

function clear() {
    background("#000")
    document.getElementById("label").innerHTML=""
    document.getElementById("precisao").innerHTML=""
    console.log("gffv")
}
var bt=document.getElementById("clear-canvas")
console.log(bt)

    function draw() {
        strokeWeight(5)
        stroke("#fff")
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY)
        }
    }

   