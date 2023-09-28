const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//Element.setAttribute('src', 'https://picsum.photos/200')

let newImage = document.createElement("img")
newImage.setAttribute('src', 'https://picsum.photos/200')
newImage.setAttribute('alt', 'Description of Image')
document.body.appendChild(newImage)

let newsection = document.createElement("new_text")

newsection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JS language</p>";
document.body.appendChild(newsection);