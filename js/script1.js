const speakersData = [
    {
        image:'images/speaker1.jpg',
        title:'Jon Acuff',
        redDesc:'Leadership Expert; Inc. Top 100 Leadership Speaker; New York Times Best-Selling Author',
        blackDesc:'Jon Acuff is the New York Times best-selling author of seven books, including his newest release, Soundtracks: The Surprising Solution to Overthinking.'
    },
    {
        image:'images/speaker2.jpg',
        title:'Stephanie Chung',
        redDesc:'Chief Growth Officer, Wheels Up; Former President, JetSuite; Advisory Council, National Business Aviation Association',
        blackDesc:'With over 30 years of experience catalyzing transformative growth in the aviation sector, Stephanie Chung has widely been recognized as a trailblazer. '
    },
  {
    image: "images/speaker3.jpg",
    title: "Andy Stanley",
    redDesc:
      "Founder & Pastor, North Point Ministries; Host, Your Move with Andy Stanley ; Best-Selling Author",
    blackDesc:
      "Communicator, author, and pastor Andy Stanley founded Atlanta-based North Point Ministries (NPM) in 1995. Today, NPM consists of eight churches in the Atlanta area",
  },
  {
    image: "images/speaker4.jpg",
    title: "Sahar Hashemi",
    redDesc:
      "Founder, Coffee Republic; Founder, Skinny Candy; Non-Executive Director, Scale Up Institute; Best-Selling Author",
    blackDesc:
      "Described as “a change agent” and “a powerful catalyst to drive entrepreneurship within big corporations”, Sahar Hashemi offers a simple, powerful toolkit to unlock start-up culture at big companies.",
  },
  {
    image: "images/speaker5.jpg",
    title: "Johnny C. Taylor, Jr.",
    redDesc:
      "President & CEO, SHRM, the Society for Human Resource Management; Former President & CEO, Thurgood Marshall College Fund; Best-Selling Author",
    blackDesc:
      "Driving social and economic change in the workplace, Taylor leads SHRM toward fostering mutually beneficial work environments that serve both business and employees",
  },
];


const speakerArr = speakersData.map(speaker => {
    return `<div class="speaker-container">
      <img src="${speaker.image}" alt="${speaker.title}" class="speaker-image">
      <div class="speaker-details">
        <h1 class="speaker-title">${speaker.title}</h1>
        <h3 class="red-desc">${speaker.redDesc}</h3>
        <p class="black-desc">${speaker.blackDesc}</p>
      </div>
    </div>`;    
})

const speakersList = document.querySelector(".speakers-list");
const speakersListDesktop = document.querySelector(".speakers-list-desktop");
speakersListDesktop.innerHTML = speakerArr.join('');


speakersList.innerHTML = speakerArr.slice(0, 2).join('');

const seeMorebutton = document.createElement('div');
seeMorebutton.classList.add('more')
seeMorebutton.innerHTML=`MORE <img src="./images/dropdown.png" alt="">`
speakersList.append(seeMorebutton)

const seeLessbutton = document.createElement("div");
seeLessbutton.classList.add("less");
seeLessbutton.innerHTML = `LESS <img src="./images/dropdown.png" alt="">`;
speakersList.append(seeLessbutton);
seeLessbutton.style.display = 'none';


const more=document.querySelector('.more');
more.addEventListener('click', () => {
    speakersList.innerHTML = speakerArr.join('');
speakersList.append(seeLessbutton);

seeLessbutton.style.display = 'flex';
    seeMorebutton.style.display = "none";
    
    

    
});

const less = document.querySelector(".less");
less.addEventListener("click", () => {
  speakersList.innerHTML = speakerArr.slice(0, 2).join('');
    speakersList.append(seeMorebutton);
    seeLessbutton.style.display = "none";
    seeMorebutton.style.display = 'flex';

    
});
