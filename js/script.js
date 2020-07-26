let leftCanvas = new p5((lCanvas) => {
    let lup = false;

    lCanvas.setup = function(){

        let canvWidth = 900
        let canvHeight = 850

        canvas = lCanvas.createCanvas(canvWidth, canvHeight);

        // background(200)

        // area1 = new searchArea(320, 320, 300, 10)
        // area1.generateFoVs()
        
        canvas.position(0, 0)
        initMap(canvas);

        nPts = new newPoints()
        nPts.showTimeSelection();
        nPts.showInputBox();
        nPts.showAnimateButton();
        // nPts.showExportButton();

        myMap.onChange(()=>{
            nPts.plotPoints()
        });


        lCanvas.frameRate(120);
        lCanvas.fill(200, 100, 100);
        // noLoop();
    }

    lCanvas.draw = function(){
        // // clear()
        // area1.FoVs.forEach(x=>{x.forEach(y=>{y.draw()})});
        // area1.draw();
        // area1.drawBoundary();
    }

    function initMap(canvas){
        myMap = new Mappa('Leaflet').tileMap({
            lat : jsonData.lat[0],
            lng : jsonData.lon[0],
            zoom : 9,
            style : "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        });

        myMap.overlay(canvas);
    }

    function mousePressed(){
        // lup = !lup
        // if(lup)
        // loop()
        // else noLoop()
        // area1.updateProbabilities(mouseX, mouseY, 1, 0.05)

    }
})

let rightCanvas = new p5((rCanvas) => {
    rCanvas.setup = function(){
        let  canvWidth = 900, canvHeight = 850;
        canvas = rCanvas.createCanvas(canvWidth, canvHeight)
        canvas.position(950, 10)
        rCanvas.background(200)
    }

    rCanvas.draw = function(){

    }
})
