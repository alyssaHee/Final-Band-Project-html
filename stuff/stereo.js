// Go back to home screen
function goback() {
  var x = document.getElementById("back");

  window.location.href = "../open me.html";
}

// Toggle autoplay
var autoplay = true;
var count = 1;
function toggleautoplay() {
  var auto = document.getElementById("autoplay");
  count++;
  if (count % 2 == 0) {
    autoplay = false;
    auto.src = "../images/autooff1.png";
  } else {
    autoplay = true;
    auto.src = "../images/autoon1.png";
  }
}

//GO THROUGH IMAGES AND MUSIC AND TXT HERE
//array of images
let map = [
  "../images/seasong.png",
  "../images/cheese.png",
  "../images/russian.png",
  "../images/willow.png",
  "../images/eternal.jpeg",
  "../images/eastcoastimg.jpeg",
  "../images/ssongs.png",
  "../images/danzon.png",
  "../images/sanctuary.png",
  "../images/arabesque.png",
  "../images/eagles.png",
  "../images/elsas.png",
  "../images/hobbits.jpeg",
  "../images/sdance.png",
  "../images/lux.gif",
  "../images/slava.png",
];

// img captions
let caption = [
  "",
  "Did you know that I like to eat cheese?",
  "",
  "",
  "",
  "Senior Honour Band 2022",
  'From the "Imagine a..." book series by Rob Gonsalves',
  "",
  "",
  "Dabke dance",
  "",
  "Goosebumps",
  "",
  "",
  "",
  "",
];

let audio = [
  document.getElementById("seasongs"),
  document.getElementById("concertvariations"),
  document.getElementById("russianfestival"),
  document.getElementById("willow"),
  document.getElementById("eternalfather"),
  document.getElementById("eastcoastgirl"),
  document.getElementById("symphonicsongs"),
  document.getElementById("danzon"),
  document.getElementById("sanctuary"),
  document.getElementById("arabesque"),
  document.getElementById("eagles"),
  document.getElementById("elsas"),
  document.getElementById("hobbits"),
  document.getElementById("symphonicdance3"),
  document.getElementById("lux"),
  document.getElementById("slava"),
];

// headings for each paragraph
let heading = [
  "Sea Songs", //1
  "Concert Variations", //1
  "A Russian Festival", //2
  "The Willow Tree", //3
  "Eternal Father, Strong to Save", //4
  "East Coast Girl", //5
  "Symphonic Songs for Band", //6
  "Danzón No. 2", //7
  "Sanctuary", //8
  "Arabesque", //9
  "On Eagles Wings", //10
  "Elsa’s Procession to the Cathedral", //11
  'Hobbits mvt. V from Symphony No.1 "The Lord of the Rings"', //12
  'Symphonic Dance no. 3 "Fiesta"', //13
  "Lux Perpetua", //14
  "Slava!", //15
];

let subheading = [
  "Vaughan Williams",
  "Claude T. Smith",
  "Jay Dawson",
  "Pádraigín Ní Uallacháin",
  "Claude T. Smith",
  "Fraser Linklater",
  "Robert Russell Bennett",
  "Arturo Márquez",
  "Frank Ticheli",
  "Samuel R. Hazo",
  "Robert W. Smith",
  "Richard Wagner",
  "Johan de Meij",
  "Clifton Williams",
  "Frank Ticheli",
  "Leonard Bernstein",
];

// show jump to favourite spot button
let jumptofave = [
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  false,
  true,
];

// paragraph descriptions this is gonna be long af
let text = [
  "I played Sea Songs in grade 7 in the Acadia wind ensemble. This was the first piece I played after joining wind and I remember it being really difficult for me with all the runs. I admired the other clarinets who were playing so well and I thought it was amazing how they could move their fingers so quickly. This piece is one of my favourites because of the way it sounds like waves playing with each other on the water. I was also very proud of how much I improved while learning this piece. <br>My favourite part is where the clarinets get the melody because it is so smooth, and it tickles my brain in the right spot. I don’t really know how to explain it, but that part is just mwah… <br><b>Fun Fact:</b> Sea Songs is the only piece that I can distinctly remember playing at Acadia, other than Oye Como Va.",
  "We played Concert Variations in grade 10 and one of the reasons I like it so much is the ‘<i>Did you know that I like to eat cheese</i>’ line. This piece holds a lot of memories from grade 10 for me and it makes me feel nostalgic. I like the flute solo and how mature the piece sounds overall. There’s also a somber-like quality that draws me to Concert Variations.",
  "We also played A Russian Festival in grade 10. I had never seen a chain being used as percussion so that was exciting. I loved how powerful and strong the beginning and middle sections sounded, and the tetris-y section at the end was really fun. A Russian Festival was probably the funnest (yes, it’s a word) piece I played in grade 10. There is a lot of variation in this piece, and that’s what I think makes it so fun.",
  "When I first heard this piece at Intermediate Honour Band, I think I instantly fell in love… <br>The opening and the oboe solo melodies are addicting to me, and it gives me goosebumps and the occasional urge to cry. The Willow Tree makes me think of a vast field with a single tree in it, like the tree that used to be where Bison Run is now. And at that tree, someone used to wait for ‘you’ but time passed and the tree and person are no longer there.",
  "Eternal Father, Strong to Save is one of my favourite pieces because of how strong it sounds (I can't think of a better word to describe it ;-;). I like so many of my favourite pieces because of how they sound—I don’t really know how to describe the feeling/reason that draws me towards them. <br>My favourite spot is the melody that starts after the beginning maestoso part because of how motivational and uplifting it sounds. I like how there is dissonance in parts of it and how it echoes throughout the rest of that section.",
  "I played East Coast Girl at Senior Honour Band in 2022 with Dr. Linklater. I like how fun this piece sounds with the percussion (the cranky ratchet and hihat and xylophone and vibraslap) and spicy dissonance and the My Girl section. I also like how each instrument gets featured and how all the colours peek out.",
  "This piece reminds me of the extremely bizarre dreams that I used to have. One of them involved skydiving while standing on a paddleboard and then landing on a completey flat chunk of mountain and then ending up playing whack-a-mole with bright orange frogs in mud… <br>It also reminds me of the picture book series ‘<i>Imagine a…</i>’<br>I like how unique and playful this piece is. I think this is the only piece (or at least most memorable) I've played that has 3/8 time. My favourite parts of this piece include the little clarinet lines in the first movement, the whole second movement, and the whistle in the third movement.",
  "I love how groovy Danzón is and the solos from clarinet, oboe, trumpet, piano and piccolo are amazing. Danzón has so much emotion in it and that’s what makes it special. I enjoyed performing this piece last year and how we had so much fun with it.",
  "Sanctuary makes me think about change. It’s so beautiful and sad and the peak of the piece can bring me to tears. I really like the part where the ‘low’ people come in after the ‘high’ people; it gives that part so much intensity. This piece makes me think of a bird leaving its nest, like how people become adults and go out into the world. Uncertain about the future, but the comfort/memory of their homes is still there, like the motif from the beginning. ",
  "Arabesque is such a dramatic and exciting piece to play. I like all the percussion, especially the darbukas. The flute solo is another highlight of this piece. The beat is hypnotizing and I like how there are waves of calm and then explosive elements that follow.",
  "This piece is in my favourites almost solely because of the timpani part. I looked forward to rehearsing this piece at honour band because I could listen to the percussion—that’s how much I liked it. I like how powerful On Eagle’s Wings sounds; it could be the montage of someone winning a race in a movie.",
  "Elsa’s is in my favourites mainly because of one thing: the ending section. The first time the trombones and low brass unleashed the ‘beast’ I think I went partly deaf, and I loved it. It’s so intense at that part and the previous calm makes it so much stronger. The contrast makes it so acute. I liked listening for the harp in this piece too. I have never been so close to a real harp.",
  "Similar to The Willow Tree, I just really really really like the melody in Hobbits. It’s catchy and it sounds like going on an adventure with your favourite person or dog. This melody slows down though, and it turns from upbeat to reminiscent and proud. It makes me think of the adventure slowing down as the people/dog got older. Basically, this piece makes me think about growing up and finding meaning in life.",
  "I like how this piece is both dance-like and dramatic/angry. My favourite part of this piece makes me think of being filled with the furious motivation that comes from anger. This could definitely be a hype up song before you go and defeat your enemies.",
  "Lux Perpetua is such a beautiful piece, I got goosebumps whenever we played it or listened to it. I liked the ring from the violin bow on the vibes and the clarinet solos and the singing at the end. This piece makes me think about loss and the singing at the end is like acceptance.",
  "Slava is another fun piece that I like. The highlight of this piece is the slide whistle and it brings up the image of politicians flying through the air after going down slides. I like the trumpet and trombone conversation that is scattered throughout.",
];

// These are the two images with info next to buttons that show up when you first open the page
const info = document.getElementById("info");
const infoauto = document.getElementById("infoauto");

//index variable initially set to first image
let index = 0;
var pieceObj = document.getElementById("pieceimg");

if (pieceObj) pieceObj.src = map[index];

//forward button
function forward() {
  // hide the two images that provided info
  info.classList.add("nothere");
  infoauto.classList.add("nothere");

  index = index + 1;
  // reset and stop audio of previous slide
  audio[index - 1].currentTime = 0;
  audio[index - 1].pause();

  // make sure it can loop
  if (index > 15) {
    index = 0;
  }
  //console.log("forward index: ", index);
  // change the text and image on each slide
  document.getElementById("pieceimg").src = map[index];
  document.getElementById("captionimg").innerText = caption[index];
  document.getElementById("head").innerText = heading[index];
  document.getElementById("subhead").innerText = subheading[index];
  document.getElementById("paragraph").innerHTML = text[index];

  // play audio
  if (autoplay) {
    audio[index].play();
  }
  // show the jump to fave spot button
  if (!jumptofave[index]) {
    jump.classList.add("nothere");
  } else if (jumptofave[index]) {
    jump.classList.remove("nothere");
  }
}

function pause() {
  if (audio[index].duration > 0 && !audio[index].paused) {
    audio[index].pause();
  } else {
    audio[index].play();
  }
}

//backward button
function back() {
  info.classList.add("nothere");
  infoauto.classList.add("nothere");
  index = index - 1;
  //IDK IF I SHOULD KEEP THIS
  audio[index + 1].currentTime = 0;
  audio[index + 1].pause();
  if (index < 0) {
    index = 15;
  }
  //console.log("back index: ", index);
  document.getElementById("pieceimg").src = map[index];
  document.getElementById("captionimg").innerText = caption[index];
  document.getElementById("head").innerText = heading[index];
  document.getElementById("subhead").innerText = subheading[index];
  document.getElementById("paragraph").innerHTML = text[index];
  if (autoplay) {
    audio[index].play();
  }
  if (!jumptofave[index]) {
    jump.classList.add("nothere");
  } else if (jumptofave[index]) {
    jump.classList.remove("nothere");
  }
}

// The giant CD that shows up when the page first opens
const overlay = document.getElementById("overlay");
const cdplay = document.getElementById("cdplay");
const jump = document.getElementById("favepart");

function startcd() {
  overlay.classList.add("active");
  cdplay.classList.add("active");
  audio[index].play();
}

// jump to favourite spot button
function jumpTofave() {
  if (index == 0) {
    audio[index].currentTime = 89;
    audio[index].play();
  }
  if (index == 4) {
    audio[index].currentTime = 74;
    audio[index].play();
  }
  if (index == 8) {
    audio[index].currentTime = 312;
    audio[index].play();
  }
  if (index == 12) {
    audio[index].currentTime = 96;
    audio[index].play();
  }
  if (index == 13) {
    audio[index].currentTime = 233;
    audio[index].play();
  }
  if (index == 15) {
    audio[index].currentTime = 112;
    audio[index].play();
  }
}
