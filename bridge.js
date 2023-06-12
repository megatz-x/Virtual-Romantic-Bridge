let bridge = document.getElementById('bridge');
var chaincount = 100;


function chains(){
    for (loop = 0; loop<chaincount; loop++){
        const chain = document.createElement("canvas");
        bridge.appendChild(chain);

        const ctx1 = chain.getContext("2d");
        ctx1.moveTo(0, 0);
        ctx1.lineTo(150, 75);
        ctx1.lineTo(300, 0);
        ctx1.stroke();

        const ctx3 = chain.getContext("2d");

        var img = document.getElementById("padlock");
        ctx3.drawImage(img, 0,0,1024,1024,20,40,250,120);

        const ctx2 = chain.getContext("2d");
        ctx2.moveTo(0, 150);
        ctx2.lineTo(80, 110);
        ctx2.moveTo(300, 150);
        ctx2.lineTo(210, 110);

        ctx2.moveTo(150, 75);
        ctx2.lineTo(120, 90);
        ctx2.moveTo(150, 75);
        ctx2.lineTo(175, 90);
        

        ctx2.stroke();
    }}

    window.addEventListener('load',chains());