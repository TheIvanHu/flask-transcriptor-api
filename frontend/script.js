const div = document.querySelector('.content');
const sectionHeaders = ["next up", "next thing","next tip", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "tip number"];
const button = document.querySelector(".submit-button");
const inputURL = document.querySelector("#url");
const embedYT = document.querySelector(".yt-embed");
let text="";

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

//usage:
// readTextFile("DATA.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data); 
// });


// var task1 = function (){
//   return new Promise (function(resolve, reject){
//     readTextFile("subtitles.json", function(text){
//     var data = JSON.parse(text);
//     // data = JSON.parse(dataEdited);
//     console.log('task1 called');
//     parseJSON(data);
//     resolve('task1 came back');
//     }); 
//   });
// };



// var task2 = function (){
//   return new Promise (function(resolve, reject){
//     readTextFile("error.json", function(text){
//     var data = JSON.parse(text);
//     console.log('task2 called');
//     console.log(data);
//     resolve('task2 came back');
//     });
//   });
// }

// Promise.race([task1(), task2()])
//        .then(function(fromResolve){
//           console.log(fromResolve); 
//        });


function extractVideoID(ytURL){
  return ytURL.substring(ytURL.indexOf('=') + 1, ytURL.indexOf('=') + 12);
}

function timeSplit(time){
  const mins = Math.trunc(time / 60);
  const seconds = time % 60;
  const finalTime = `${mins < 10 ? '0' : ''}${mins}:${seconds < 10 ? "0" : ""}${seconds}`
  return finalTime;
}

function addTextListeners(){
  const highlightText = document.querySelectorAll(".highlight");
  console.log(highlightText);
  highlightText.forEach(text => text.addEventListener("click", (text) =>{
    embedYT.setAttribute("src", `https://www.youtube.com/embed/${extractVideoID(inputURL.value)}?start=${text.srcElement.dataset.timestamp}`)
    console.log(text.srcElement.dataset.timestamp);
    const timestamp = timeSplit(text.srcElement.dataset.timestamp);
    console.log(timestamp);
  }));
}

function addSpans(contents, subtitles){
  let isSponsor = false;
  const div = document.querySelector(".content");
  document.querySelectorAll(".content > *").forEach(textDiv => textDiv.classList.remove("skeleton"));
  contents.forEach((content, index) => {
    let textSnippet = content.text;
    const spanElement = document.createElement("a");
    if(textSnippet.search("sponsor") != -1 || textSnippet.search("Sponsor") != -1 || textSnippet.search("Sponsored") != -1 || textSnippet.search("sponsored") != -1){
      isSponsor = true;
      console.log("sponsor");
      spanElement.classList.add("sponsor");
    }
    
    if(isSponsor) spanElement.classList.add("sponsor");
    sectionHeaders.forEach(header => {
      if(textSnippet.search(header) != -1) {
        spanElement.classList.add("pointer");

        for(let i = 1; i <=2; i++){
          const linebreak = document.createElement("br");
          div.appendChild(linebreak);
        }
      }
    })
    if(spanElement.classList.contains("pointer") && isSponsor){
      isSponsor = false;
      console.log("false");
      spanElement.classList.remove("sponsor");
    }
    if(index == 0) spanElement.style.textTransform = "capitalize";
    if(index == contents.length - 1) spanElement.innerHTML = `${textSnippet}.`; // adds a fullstop at the last sentence
    else spanElement.innerHTML = `${textSnippet} `;
    spanElement.classList.add("highlight");
    spanElement.setAttribute("href", "#yt-video")
    spanElement.setAttribute("data-timestamp", Math.floor(content.start));
    div.appendChild(spanElement)
  });
  embedYT.setAttribute("src", `https://www.youtube.com/embed/${extractVideoID(inputURL.value)}`);
  embedYT.setAttribute("width", "560");
  embedYT.setAttribute("height", "315");
  addTextListeners();
}

function parseJSON(contents){
    console.log(contents, "this is contents");
    const obj = Object.entries(contents);
    console.log(obj, "this is obj");
    let subtitles = "";
    obj.forEach(text => {
        const [index, value] = text;
        // console.log(index, value);
        subtitles += value.text;
    })
    obj.forEach(sentence => {
      const [index, value] = sentence;
      text += " " + value.text 
    })
    console.log(subtitles)
    // div.innerHTML = subtitles;
    addSpans(contents, subtitles);
  
}

function addAnimation(){
  const skeletonDivs = document.querySelectorAll(".content > *");
  skeletonDivs.forEach(skeletonDiv => skeletonDiv.classList.add("skeleton"));
}

function fetchAPI(ytURL){
  addAnimation();
  console.log(ytURL)
  const videoID = extractVideoID(ytURL);
  console.log(videoID);
  console.log(`https://yt-transcriptor.herokuapp.com/${videoID}`)
  fetch(`https://yt-transcriptor.herokuapp.com/${videoID}`)
    .then(res => res.json())
    .then(data => parseJSON(data))
    .catch(error => console.log(error))
}

button.addEventListener("click", () => fetchAPI(inputURL.value))

