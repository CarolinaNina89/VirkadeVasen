import kattenSpike from "/assets/kattenSpike.jpg";
import sköldpaddaCleo from "/assets/sköldpaddaCleo.jpg";
import svampBurt from "/assets/svampBurt.jpg";
import enhörningRio from "/assets/enhörningRio.jpg";
import enhörningStar from "/assets/enhörningStar.jpg";
import larvenHugo from "/assets/larvenHugo.jpg";
import nissenEli from "/assets/nissenEli.jpg";
import axolotlFrans from "/assets/axolotlFrans.jpg";
import babyDragon from "/assets/babyDragon.jpg";
import babyGoblin from "/assets/babyGoblin.jpg";
import sköldpaddanBubb from "/assets/sköldpaddanBubb.jpg";
import svampenDeadly from "/assets/svampenDeadly.jpg";

const vasenDetails = [
  {
    key: "eli",
    id: "eli",
    heading: "Nissen Eli",
    name: "Eli",
    imgURL: nissenEli,
    price: "179 sek",
    size: "20cm",
    yarn: "Flerfärgad",
    eyecolor: "Gröna",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag föddes en gnistrande vinternatt, skapad av magiska händer som virkade mig med kärlek. Nu söker jag ett hem där jag kan sprida julglädje, värme och kanske hitta på några bus! ",
  },
  {
    key: "frans",
    id: "frans",
    heading: "Axolotl Frans",
    name: "Frans",
    imgURL: axolotlFrans,
    price: "179 sek",
    size: "20cm",
    yarn: "Flerfärgad",
    eyecolor: "Gröna",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten axolotl som föddes ur mjuka maskor och drömmar om havet. Jag har rest från klara bäckar och steniga stränder. Nu hoppas jag få bli din vän och skapa minnen tillsammans.",
  },
  {
    key: "dragon",
    id: "dragon",
    heading: "Draken Saga",
    name: "Saga",
    imgURL: babyDragon,
    price: "200 sek",
    size: "30cm",
    yarn: "Flerfärgad",
    eyecolor: "Blåa",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten drake född ur magiska maskor. Med mjuka fjäll och äventyrslust vill jag sprida värme, glädje och skapa fantastiska sagor tillsammans med dig. Är du redo? ",
  },
  {
    key: "goblin",
    id: "goblin",
    heading: "Goblin Missy",
    name: "Missy",
    imgURL: babyGoblin,
    price: "150 sek",
    size: "15cm",
    yarn: "Flerfärgad",
    eyecolor: "Gröna",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten goblin från skogens hjärta. Med min äventyrsväska och nyfikenhet älskar jag att utforska världen och sprida busig glädje. Vart leder vårt första äventry?",
  },
  {
    key: "bubb",
    id: "bubb",
    heading: "Sköldpaddan Bubb",
    name: "Bubb",
    imgURL: sköldpaddanBubb,
    price: "179 sek",
    size: "20cm",
    yarn: "Flerfärgad",
    eyecolor: "Lila",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      " Jag är en liten sköldpadda med en jordgubbshatt på ryggen! Jag älskar allt som är somrigt – doften av blommor, solens värme och små äventyr i gräset.",
  },
  {
    key: "deadly",
    id: "deadly",
    heading: "Svampen Deadly",
    name: "Deadly",
    imgURL: svampenDeadly,
    price: "150 sek",
    size: "20cm",
    yarn: "Vit / Svart",
    eyecolor: "Svarta",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten svamp med mystiska krafter och en busig blick. Med min hatt och hemlighetsfulla charm älskar jag att smyga runt i skogen och hitta på små trollkonster.",
  },
  {
    key: "spike",
    id: "spike",
    heading: "Katten Spike",
    name: "Spike",
    imgURL: kattenSpike,
    price: "150 sek",
    size: "15cm",
    yarn: "Svart",
    eyecolor: "Gröna",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten svart katt med mjuk päls och nyfikna ögon. Jag älskar att tassa runt, upptäcka nya platser och ibland mysa i din famn. Är du redo för en liten, lojal vän? ",
  },
  {
    key: "cleo",
    id: "cleo",
    heading: "Sköldpaddan Cleo",
    name: "Cleo",
    imgURL: sköldpaddaCleo,
    price: "250 sek",
    size: "40cm",
    yarn: "Vit / Grön",
    eyecolor: "Gröna",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en stor och gosig sköldpadda med mjuk sköld. Med ett lugnt sinne och ett vänligt hjärta älskar jag att utforska världen sakta men säkert. Vill du dela äventyret med mig? ",
  },
  {
    key: "burt",
    id: "burt",
    heading: "Svampen Burt",
    name: "Burt",
    imgURL: svampBurt,
    price: "100 sek",
    size: "20cm",
    yarn: "Vit / Blå",
    eyecolor: "Blåa",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en magisk svamp med en tokig hatt och ett hjärta fyllt av äventyr. Jag älskar att utforska skogen, upptäcka hemligheter och dela magiska stunder med nya vänner. Vill du följa med?",
  },
  {
    key: "rio",
    id: "rio",
    heading: "Enhörningen Rio",
    name: "Rio",
    imgURL: enhörningRio,
    price: "200 sek",
    size: "30cm",
    yarn: "Vit / Flerfärgad",
    eyecolor: "Lila",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en mjuk enhörning med regnbågsman och gnistrande horn. Jag älskar att sprida magi, glädje och tron på det omöjliga. Vill du ta med mig på äventyr och drömmarnas resa? ",
  },
  {
    key: "hugo",
    id: "hugo",
    heading: "Larven Hugo",
    name: "Hugo",
    imgURL: larvenHugo,
    price: "100 sek",
    size: "15cm",
    yarn: "Flerfärgad",
    eyecolor: "Lila",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten larv som älskar att utforska trädgården och rulla runt bland löven. Med mina glada färger vill jag sprida leenden och upptäcka världen tillsammans med dig. ",
  },
  {
    key: "star",
    id: "star",
    heading: "Enhörningen Star",
    name: "Star",
    imgURL: enhörningStar,
    price: "150 sek",
    size: "20cm",
    yarn: "Vit / Flerfärgad",
    eyecolor: "Lila",
    stuffing: "Bomull",
    extra: "Barnsäkra ögon",
    story:
      "Jag är en liten enhörning skapad för att sprida magi och glädje. Med mitt glittrande horn och färgglada man älskar jag att skapa små underverk. Vill du bli min vän och upptäcka magin tillsammans? ",
  },
];

export default vasenDetails;
