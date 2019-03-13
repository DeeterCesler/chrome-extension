
// var brand = "Nike"
// var brandGrade = "B+"

// var para = document.createElement("div");
// para.id = "doggy"
// var t = document.createTextNode(brand + " is a total " + brandGrade);
// para.appendChild(t);

// document.getElementById("manifest").appendChild(para);


// var elements = document.getElementsByTagName("*");

// for (let i = 0; i < elements.length; i++) {
//     let element = elements[i];

//     for(var j=0; j < element.childNodes.length; j++){
//         var node = element.childNodes[j];

//         if(node.nodeType === 3){
//             var text = node.nodeValue;
//             var grade = "doggy"
//             let replacedText = text.replace("the", <span color="blue">doggy</span>);
            
//             if(replacedText !== text) {
//                 // node.appendChild(para);
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }

// var grade = "B+"

// document.body.innerHTML = document.body.innerHTML.replace(new RegExp("\\b" + "Nike" + "\\b", "g"),
//                                                           `<span style='background-color: rgba(55,55,55, .3); border-radius: 3px; padding: 2px;'>$&</span>`); 


var matchText = function(node, regex, callback, excludeElements) { 

    excludeElements || (excludeElements = ['script', 'style', 'iframe', 'canvas']);
    
    var child = node.firstChild;
   
    do {

        switch (child.nodeType) {

        case 1:
            if (excludeElements.indexOf(child.tagName.toLowerCase()) > -1) {
                continue;
            }

            matchText(child, regex, callback, excludeElements);
            break;

        case 3:
           child.data.replace(regex, function(all) {
                var args = [].slice.call(arguments),
                    offset = args[args.length - 2],
                    newTextNode = child.splitText(offset);

                newTextNode.data = newTextNode.data.substr(all.length);

                callback.apply(window, [child].concat(args));

                child = newTextNode;
     
            });
            break;

        }

    } while (child = child.nextSibling);

    return node;

}

var searchTerm = "Nike"

matchText(document.getElementsByTagName("h1")[0], new RegExp("\\b" + searchTerm + "\\b", "g"), function(node, match, offset) {
    var span = document.createElement("span");
    span.style = "background-color: rgba(55,55,55, .3); border-radius: 3px; padding: 2px;"
    span.className = "search-term";
    console.log(span)
    span.textContent = match;
    node.parentNode.insertBefore(span, node.nextSibling); 
});