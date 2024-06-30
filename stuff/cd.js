document.getElementsByClassName("backbtn");

function goback() {
  var x = document.getElementById("back");
  x.disabled = true;
  x.classList.add("off");

  window.location.href = "../open me.html";
}

// all similar to stereo code
let heading = [
  "Playing with the FRC wind ensemble",
  "The Ferocious Five-tet (pt.1)",
  "The Ferocious Five-tet (pt.2)",
  "The Ferocious Fivetet (pt.3)",
  "Grad Band",
  "Songs in 3/4 time",
  "Drumline",
  "Playing in a Circle and Swapping Music",
  "Fall Band Trip 2022",
  'Symphonic Songs for Band "airband"',
  "Rehearsals with Dr. Linklater",
  "Arabesque",
  "Deck the Halls",
  "Getting my ears blasted off",
];
let caption = [
  "This was one of my most prominent memories from Acadia wind ensemble. For rehearsal one day, we went to FRC’s old band room to play with the FRC wind ensemble. I was in grade 7 and I remember thinking that the FRC people were huge. When I saw the music they were playing I was in awe. It looked impossibly hard to play. And then when we began playing, the FRC student next to me whipped out his phone because he didn’t have the physical music and I was in more shock. I couldn’t see a single note on his phone, but he could and was even pointing out where we were when I got lost. I probably got lost every 3 bars. I thought those students were so cool and this experience made me more interested in band. This is one of my favourite memories because I look back on it now and see how much I have grown and learned since.",
  "During COVID in grade 9, instead of full band rehearsals in wind ensemble, we had chamber group rehearsals. I was put in a group with Anne, Hilary, Qiqi, and Rock. We called ourselves the Ferocious Five-tet and I made us a profile picture with five frogs. I couldn’t find the original image so the one you see is of horrible quality. I really liked working and playing with this group and we had a ton of fun goofing off online and hanging out. I liked how we could be a lot closer in a smaller group as opposed to being in one big Teams lesson and feeling more isolated. I'm not sure who each frog represents except for the saxophone frog.",
  "Here are some of my favourite memories from rehearsing with the five-tet. We often video chatted about nothing in particular and ranted about Bandlab together. One time we were in a call and I was on the treadmill, Anne was upside down in her room and I don't know what Rock and Qiqi and Hilary were doing. We also rehearsed outside a few times at the park. This was the only time we had to rehearse in-person and it was refreshing to actually see people instead of being inside all day. On our last rehearsal, we had a little picnic together and I remember Rock bringing his little tent that he kept calling a 'canoopee'. These are some of my favourite memories because they helped me get through COVID and kept the time interesting and exciting.",
  "Our biggest accomplishment in the Ferocious Five-tet was our Waltz of the Flowers piece. We spent a solid few months on it and it was extremely difficult to line up all our parts. We all spent way too many hours on Bandlab trying to make it sound as good as possible and it was a nightmare. In the end, we got it done and I am very proud of what we made.",
  "My favourite part of grad band was playing the 20th Century Fox fanfare. I loved how everyone in the audience would get surprised and how we made the event more exciting. It was also very fun to play. My favourite part was the snare drum intro.",
  "Songs in 3/4 time were a lot of fun. I liked how we could do whatever we wanted and play as loud as possible without many repercussions... It made birthdays way more exciting",
  "Drumline is another favourite memory of mine. I really enjoyed playing the tenor drums and learning new music. I also liked playing at events and it was so much fun playing different kinds of music with great people. I still remember how I broke that stick on the rim in the basement. It was very shocking.",
  "In wind we usually have a few rehearsals in a giant circle. It was interesting seeing everyone and hearing how the sound changed. I liked how it made us feel more like one big section instead of a bunch of smaller ones, and I felt more connected with the band. Another thing we did once was swap music with other sections. I remember playing a cornet part and listening to the brass play the flute part. It was funny how different everything sounded and how different our parts were.",
  "The band trip I went on in November in grade 11 is one of my favourite memories because I had so much fun and I experienced so many new things. Listening to the Saskatchewan university jazz band was mind blowing since I had never heard live jazz not from high schoolers and they played so well. I especially liked the professor who played bari sax—I can’t remember his name though. We also toured that high school in Regina(?) and that was super neat because I always wondered what schools were like outside of Winnipeg. The food was great, the music was great, the bus was great, the everything was great. I liked travelling with the band because we were well organized and polite. ",
  "Before our 2023 Wind Ensemble festival performance, we 'played' Symphonic Songs for Band. This is one of my favourite memories because it was really funny and this moment made me feel really connected with the band. I could hear what we were airbanding in my head and it was cool how together we were.",
  "My favourite conductor out of all the honour bands I did was Dr. Linklater. He was such an amusing person and I loved his little keyboard that he kept next to him while we rehearsed. It always made me laugh whenever he was trying to play us something on the keyboard but something would go wrong or he'd hit too many keys because of how small it was and the sound that came out was hilarious. I liked his passion and sense of humour and how exciting he made the rehearsals.",
  "My favourite memory from Senior Honour band last year was our clap in Arabesque (see 2:34 in the video). I liked how Dr. Maguire did the clap too and I loved seeing the audience's reaction.",
  "Deck the Halls last year is one of my favourite memories because it was so fun to play something silly with Anne and make my friends laugh. I laughed so much too when we were practicing because the Christmas tree song always sounded so goofy and out of tune.",
  "During wind ensemble a few months ago, Mr. Ferguson stepped in to sub and we worked on Elsa's. I don't remember how loud the section at the end of Elsa's was before but that day the trombones and other brass blasted that part and I could feel the floor shaking. It was amazing and I loved how powerful it sounded even if I lost some hearing.",
];

let index = 0;

function forward() {
  document.getElementById("player1").pause();
  document.getElementById("player2").pause();
  document.getElementById("player3").pause();
  index = index + 1;
  if (index > 13) {
    index = 0;
  }
  document.getElementById("head").innerText = heading[index];
  document.getElementById("paragraph").innerText = caption[index];
}

function back() {
  document.getElementById("player1").pause();
  document.getElementById("player2").pause();
  document.getElementById("player3").pause();
  index = index - 1;
  if (index < 0) {
    index = 13;
  }
  document.getElementById("head").innerText = heading[index];
  document.getElementById("paragraph").innerText = caption[index];
}
