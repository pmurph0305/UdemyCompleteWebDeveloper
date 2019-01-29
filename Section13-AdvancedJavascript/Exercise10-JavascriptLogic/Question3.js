// Question 3: Write a function that converts HEX to RGB.
//  Then Make that function auto-dect the formats so that if you enter HEX 
//  color format it returns RGB and if you enter RGB color format it returns HEX.

const hex =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

 function ToggleHexRGB(value) {
    if (value.includes("#")) {
        console.log("hex")
        return HexToRGB(value);
    } else {
        return RGBToHex(value);
    }
 }

 function HexToRGB(value) {
    value = value.slice(1,value.length);
    rgbVal = "RGB(";
    for (let i=0; i<value.length; i += 2){
        val1 = hex.indexOf(value[i]);
        val2 = hex.indexOf(value[i+1]);
        rgbVal += (val1*16) + val2 + ",";
    }
    rgbVal = rgbVal.slice(0,rgbVal.length-1);
    rgbVal += ")"
    return rgbVal;
 }

 function RGBToHex(value) {
    value = value.split(',');
    let rgb = value.map(val => parseInt(val));
    console.log(rgb);
    hexVal = '#'
    rgb.forEach(function(number) {
        hexVal += hex[Math.floor(number/16)]
        hexVal += hex[number-(16*Math.floor(number/16))];
    });
    return hexVal;
 }

 let rgbHex = ToggleHexRGB("123,12,32");
 console.log(rgbHex);
 let hexRGB = ToggleHexRGB(rgbHex);
 console.log(hexRGB);