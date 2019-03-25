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

var searchTerm = {
    brandName: "Nike",
    rating: "5",
    ratingExplanation: "Click here to find out why Nike sucks",
    referenceURL: "http://www.google.com",
}

matchText(document.getElementsByTagName("h1")[0], new RegExp("\\b" + searchTerm.brandName + "\\b", "g"), function(node, match, offset) {
    var span = document.createElement("span");
    span.className = "rated-brand";
    var dropdown = document.createElement("div");
    dropdown.className = "dropdown-content";
    var a = document.createElement("a");
    a.href = searchTerm.referenceURL;
    a.innerText = searchTerm.ratingExplanation;
    var replacedBrandName = document.createElement("div");
    replacedBrandName.innerText = searchTerm.brandName;
    dropdown.appendChild(a);
    console.log(dropdown)
    span.appendChild(replacedBrandName);
    span.appendChild(dropdown);
    console.log(span)
    node.parentNode.insertBefore(span, node.nextSibling); 
});