const refreshButton = document.querySelector(".refresh-btn");
const containerBody = document.querySelector(".container");
const maxPaletteBoxes = 204;




const generatePallete = () =>{
// had a bug of adding more colors to the container before so lets fix that bug here
containerBody.innerHTML = ""; //clear the container and make the palletes clean and new

    for(let i=0;i < maxPaletteBoxes;  i++){
        //generate a random hex color code belwo
        let randomHexCode = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHexCode = `#${randomHexCode.padStart(6,"0")}`;

        //throw the code out into a new li element and insert to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHexCode}"></div>
        <span class="hex-value">${randomHexCode}</span>`;



        // add a copy event to the colors
        color.addEventListener("click",() => copyColorCode(color,randomHexCode));
        containerBody.appendChild(color);

    }
}

generatePallete();

const copyColorCode =  (element, hexValue) => {
    colorElem = element.querySelector(".hex-value");
    // coopying the haxvalue to clipboard,updatee text to copied and also change the ext to 
    // roriginal hex code after 3 seconds
    navigator.clipboard.writeText(hexValue).then(()=>{
        colorElem.innerHTML = "Copied";
        setTimeout(()=> colorElem.innerHTML = hexValue,3000)
    }).catch(() => alert("Failed to copy the color code")); //throw error if this doesnt work
    console.log("REACHED THEM",hexValue )
    }



// add a click listener to the button
refreshButton.addEventListener("click",generatePallete);
// generate a new pallete every 2 minutes
setTimeout(generatePallete,200000);