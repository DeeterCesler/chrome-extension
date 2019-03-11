
// var brand = "Nike"
// var brandGrade = "B+"

// var para = document.createElement("div");
// para.id = "doggy"
// var t = document.createTextNode(brand + " is a total " + brandGrade);
// para.appendChild(t);

// document.getElementById("manifest").appendChild(para);


var elements = document.getElementsByTagName("*");

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for(var j=0; j < element.childNodes.length; j++){
        var node = element.childNodes[j];

        if(node.nodeType === 3){
            var text = node.nodeValue;
            var grade = "doggy"
            let replacedText = text.replace("the", 'doggy');
            
            if(replacedText !== text) {
                // node.appendChild(para);
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}