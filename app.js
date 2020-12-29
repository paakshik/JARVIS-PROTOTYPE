
var answer = 0;
const content = document.querySelector('.content');
const btn = document.querySelector('.talker')
const date = new Date()
const API_KEY = "f49676e4e771d9a88cb26ad40994c652"
const speechRecognition = webkitSpeechRecognition /*Chrome*/
speechRecognition.interimResults = true;
const recog = new speechRecognition();
const API_KE = 'c6a1a98f55164991bfd9f03fcb6856f9'
var audio4 = new Audio("./song4.mp3");
var audio5 = new Audio("./song5.mp3");
var flag = "go";
var audio7 = new Audio("./song6.mp3");
var audio8 = new Audio("./song7.mp3");
var API = '772f760119b5f8252fec9f78831cafcc';

var audio10 = new Audio("./songed.mp3");


const greeting = [
  'I am good , Hope that you are also good',
  'I am excellent',
  'I am very good, thank you for asking'

]
const names = [
  "Hello, my name is Jarvis, a prototype of Alexa.",
  "Bonjour, Paakshik my name is Jarvis.",
  "My name is Jarvis, Thank you Paakshik."
]
const time = [
  "The time is " + times(),
  "Sir the time on the clock is " + times(),
  "Sir it is " + times()

]
const his = [
  "Hi Paakshik",
  "Hello Paakshik"
]

recog.onstart = function () {

  console.log("Start Speaking Paakshik");

}
recog.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  console.log(transcript);
  editor(transcript);

}

btn.addEventListener('click', () => {

  recog.start();

})


function editor(message) {
  const voice = new SpeechSynthesisUtterance();


  if (message.includes("name")) {
    const tech = names[Math.round(Math.random(1, 2))]
    voice.text = tech;
  }
  else if (message.includes('how are')) {
    const tech = greeting[Math.round(Math.random(0, 2))]
    voice.text = tech;
  }
  if (message.includes("time")) {
    const tech = time[Math.round(Math.random(0, 2))]
    voice.text = tech;
  }
  if (message.includes('reload')) {
    window.location.reload()
  }
  if (message.includes('hi')) {
    const tech = his[Math.round(Math.random(0, 1))]
    voice.text = tech;
  }
  if (message.includes("stop showing camera")) { video.stop() }
  if (message.includes('good afternoon')) {
    voice.text = "Good afternoon Paakshik"
  }
  if (message.includes("open Viacom meet")) {
    voice.text = "Ok sir opening  Metting link , please enjoy"
    window.open('https://meet.vicom.in/')
  }
  if (message.includes("tell me about Kimberly Clark")) {
    voice.text = "Kimberly-Clark Corporation is an American multinational personal care company that produces mostly paper-based consumer products. The company manufactures sanitary paper products and surgical & medical instruments and Huggies,Kotex and Wipes are some of the main brands of Kimberly clerk.It also has presence in many countries.They have offices in India in Mumbai and factory is in Pune."
  }
  if (message.includes('products of Kimberly Clark')) {
    voice.text = "The products manifactured by Kimberly- Clark are diapers,sanitary-pad and wipes for kids."

  }


  if (message.includes("please open WhatsApp")) {
    voice.text = "Ok sir opening Whatsapp, please study"
    window.open('https://web.whatsapp.com/')
  }
  if (message.includes("alarm")) {
    alarms = window.prompt("Please tell the alarm time", "Enter the time in yyyy-mm-dd hh:mm:ss");

    alarmDate = new Date(alarms)
    console.log(`Setting Alarm for ${alarmDate}`)

    now = new Date();
    timer = alarmDate - now


    if (timer >= 0) {
      setTimeout(() => {
        console.log("Alarm is Over,thank you");
        voice.text = 'Sir alarm is over, Thank you';
      }, timer)
    }
  }
  if (message.includes("battery")) {
    navigator.getBattery().then(function (battery) {

      var level = Math.floor(battery.level * 100);
      console.log("The battery levels is " + level + "%.");

    });
  }
  if (message.includes('open Google')) {
    window.open('https://google.com/')
    voice.text = "Ok sir";
  }
  if (message.includes('open YouTube')) {
    window.open('https://outube.com/')
    voice.text = "Ok sir";
  }
  if (message.includes('add')) {
    num1 = Number(window.prompt('1 number to add', 'number'));
    num2 = Number(window.prompt('2 number to add', 'number'));
    answer = Number(num1 + num2);
    voice.text = answer + "is the sum of " + num1 + " and " + num2 + ".";
  }
  if (message.includes('subtract the numbers')) {
    num1 = Number(window.prompt('1 number to subtract', 'number'));
    num2 = Number(window.prompt('2 number to subtract', 'number'));
    answer = Number(num1 - num2);
    voice.text = answer + "is the difference of " + num1 + " and " + num2 + ".";
  } if (message.includes("KC finance team")) {
    voice.text = ""
  }
  if (message.includes("music")) {
    rock = Math.floor(Math.random() * 2) + 1;

    type = window.prompt("Which type of music would you like to hear", "old music or new music")
    if (type === "old music") {

      if (rock === 1) {
        audio5.play();

      }
      if (rock === 2) {
        audio10.play();

      }

    }
    if (type === "new music") {
      if (rock === 1) {
        audio7.play();

      }
      if (rock === 2) {
        audio8.play();

      }
      if (rock === 3) {
        audio4.play();

      }

    }


    voice.text = "Ok sir playing some music";
  }
  if (message.includes("stop")) {


    audio4.pause();
    audio5.pause();

    audio7.pause();
    audio8.pause();

    audio10.pause();
  }
  if (message.includes('multiply')) {
    voice.text = "Sir tell the first number";
    num1 = Number(window.prompt('1 number to multiply', 'number'));
    voice.text = "Sir tell the second number";
    num2 = Number(window.prompt('2 number to multiply', 'number'));
    answer = Number(num1 * num2);
    voice.text = answer + "is the product of " + num1 + " and " + num2 + ".";
  }

  if (message.includes('divide')) {
    num1 = Number(window.prompt('1 number to divide', 'number'));
    num2 = Number(window.prompt('1 number to divide', 'number'));
    answer = Number(num1 / num2);
    voice.text = answer + "is the quotient of " + num1 + " and " + num2 + ".";
  }
  if (message.includes('square')) {
    number = Number(window.prompt('number to square', 'number'))
    answer = Number(number * number);
    voice.text = answer + "is the square of " + number + "."
  }
  if (message.includes('cube')) {
    number = Number(window.prompt('number to cube', 'number'))
    answer = Number(number * number);
    voice.text = answer + "is the cube of " + number + "."
  }

  if (message.includes("search on Google")) {

    message = message.replace("search", "")
    message = message.replace("Google", "")
    message = message.replace("Jarvis", "")
    message = message.replace("please", "")
    message = message.replace("on", "")
    voice.text = "searched " + message
    window.open("https://www.google.com/search?query=" + message);

  }

  if (message.includes("search on YouTube")) {

    message = message.replace("search", "")
    message = message.replace("Youtube", "")
    message = message.replace("Jarvis", "")
    message = message.replace("please", "")
    message = message.replace("on", "");
    voice.text = "searched " + message
    window.open("https://www.youtube.com/search?q=" + message);
  }
  if (message.includes("delete all note")) {

    localStorage.clear();
    voice.text = "All the notes are deleted"
  }
  if (message.includes("tell me all my notes")) {

    voice.text = (`${localStorage["notes"]} are notes added by you.`)
  }

  if (message.includes("YouTube history")) {
    voice.text = "Ok sir opening Youtube history"
    window.open("https://www.youtube.com/feed/history");
  }
  if (message.includes("please close yourself")) {
    voice.text = "Ok sir closing myself"
    window.close();
  }

  if (message.includes("please open white hat junior")) {
    voice.text = "Ok  sir opening whitehatjunior, please code my friends"
    window.open('https://code.whitehatjr.com/s/dashboard')
  }
  if (message.includes("please open hotstar")) {
    voice.text = "Ok sir , opening Disney hotstar";
    window.open('https://www.hotstar.com/in');

  }
  if (message.includes("please tell me location")) {
    getLocationDetails();

  }
  if (message.includes("please tell me my effective type")) {
    bers = navigator.connection.effectiveType
    voice.text = "Sir your effective type is " + bers + "."
  }
  if (message.includes("please tell me my data transfer")) {
    bers1 = navigator.connection.downlink;
    voice.text = "Sir your effective type is " + bers1 + "."
  }
  if (message.includes("show weather report")) {
    voice.text = "Ok sir am showing the weather repost on console";
    getWeatherDetails();
  }
  if (message.includes("joke")) {
    t = generateJokes();
    voice.text = "Ok sir the joke is displayed on the console"
  }
  if (message.includes('write a note')) {
    notes_generator();
    voice.text = "Done sir."
  }
  if (message.includes("inter")) {
    message = message.replace("illllllnter", "")
    message = message.replace("Viacom", "")
    message = message.replace("link", "")
    message = message.replace("on", "");
    message = message.replace("meet", "");
    window.open("https://meet.vicom.in/" + message)
  }
  if (message.includes('capture my image')) {

    var context = canvas1.getContext('2d');

    init();
    cm = document.getElementById("snap")
    cm.addEventListener('click', function () {
      context.drawImage(video, 0, 0, 640, 480);
      const dataURL = canvas1.toDataURL('image/jpeg');
      docum = confirm("Do you want to download the file");
      if (docum === true) {

        const a = document.createElement("a")
        a.href = canvas1.toDataURL();
        a.download = "canvas-image-png";
        a.click();
      }
    })

  }
  if (message.includes("send email")){
    Subject = prompt("Please tell the subject of te mail");
    To = prompt("Please tell the person whom you want to send")
    Body = prompt("Please tell the body of the mail")
sendEmail(Subject,To,Body)

  }
  if (message.includes("description of movie")){

var movie = prompt("Please tell the movie you want to search the description for ")
var web = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie}`

fetch(web).then((res) => res.json()).then((ata) => {
  console.log(ata.results[0].overview)
})



  }
  if (message.includes("popularity of movie")){
 var movie1 = prompt("Please tell the movie you want to search the popularity for")
    var webs = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie1}`

    fetch(webs).then((res) => res.json()).then((ata) => {
      console.log(ata.results[0].popularity)
      
    })
  }    
  if (message.includes("prop of movie")){
    var movie1 = prompt("Please tell the movie you want to search the popularity for")
    var webs = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie1}`

    fetch(webs).then((res) => res.json()).then((ata) => {
      window.open(ata.results[0].poster_path)
      
    })
  }
  if (message.includes('tell me Corona')) {
    var count = window.prompt('Which country covid data do you want?');
    URLs = 'https://api.covid19india.org/data.json';
    fetch(URLs)
      .then((res) => res.json())
      .then((datas) => {
        pro = (datas.statewise)
        pro.forEach(element => {

          if (element.state === count) {
            const active = element.active
            const confirmed = element.confirmed
            const recovered = element.recovered
            const deaths = element.deaths;
            console.log("The state you searched for is "+count);
            console.log("the active cases are "+active);
            console.log("The confirmed cases are "+confirmed)
            console.log("The recovered cases are "+recovered);
            console.log("The deaths are "+ deaths);
          }
         
        });
  
      });
    
   
  }

  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1;

  window.speechSynthesis.speak(voice);
}



function getWeatherDetails() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async function (position) {

      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      let responce = await fetch(api_url);
      let data = await responce.json();
      manipulateWeatherData(data)
    })
  }
}


function getLocationDetails() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async function (position) {

      let latitude1 = position.coords.latitude;
      let longitude1 = position.coords.longitude;
      console.log(`Your location is ${latitude1} and ${longitude1}`)
    });
  }
}

function times() {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour} ${minutes}`
}
function manipulateWeatherData(data) {
  let city = data.name;

  let temprature = data.main.temp;
  let description = data.weather[0].main
  console.log(`current temperature is ${temprature},your location is ${city},your description is ${description}`)

}

async function generateJokes() {
  const jokes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const jokesRes = await jokes.json();
  console.log(jokesRes.joke)
}
function notes_generator() {
  var note = window.prompt("The text you want to add to the note")
  var notes = localStorage.getItem("notes")

  if (notes === null) {
    notesA = [];
  }
  else {
    notesA = JSON.parse(notes)
  }
  notesA.push(note)
  localStorage.setItem("notes", JSON.stringify(notesA))
}
async function news_generator() {
  const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c6a1a98f55164991bfd9f03fcb6856f9', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const newsRes = await news.json();
  console.log(newsRes)
}
const video = document.getElementById('video');

const canvas1 = document.getElementById('canvas');
const errorMsg = document.getElementById('spanErrorMsg');
const constrain = {
  audio: false,
  video: true,
  width: 1280, height: 720
}

async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constrain);
    handleSuccess(stream)

  }
  catch {
    errorMsg.innerHTML = `navigator.getUserMedia.error:${e.toString}`

  }

}
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}
function sendEmail(name,email,text){
  Email.send({
  Host : "smtp.gmail.com",
    Username : "rbadjatya@gmail.com",
    Password : "xeibigtvizjlmuib",
    To : email,
    From : "rbadjatya@gmail.com",
    Subject : name,
    Body : text
}).then(
  message => alert('mail sent successfully')
);
}


