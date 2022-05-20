document.addEventListener("DOMContentLoaded", function () {
    const speakersData = [
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
    
    const speakers = document.querySelector(".speakers");

    for (let i = 0; i < speakersData.length; i++) {
            const speakerContainer = document.createElement("div");
            speakerContainer.classList.add("speaker-container");
            const speakerImage = document.createElement("img");
            speakerImage.classList.add("speaker-image");
            speakerImage.src = speakersData[i].image;
            speakerImage.alt = speakersData[0].title;
            speakerContainer.append(speakerImage);
            const speakerDetails = document.createElement("div");
            speakerDetails.classList.add("speaker-details");
            const speakerTitle = document.createElement("h1");
            speakerTitle.classList.add("speaker-title");
            speakerTitle.innerText = speakersData[i].title;
            speakerDetails.append(speakerTitle);
            const redDesc = document.createElement("h3");
            redDesc.classList.add("red-desc");
            redDesc.innerText = speakersData[i].redDesc;
            speakerDetails.append(redDesc);
            const blackDesc = document.createElement("p");
            blackDesc.classList.add("black-desc");
            blackDesc.innerText = speakersData[i].blackDesc;
            speakerDetails.append(blackDesc);
            speakerContainer.append(speakerDetails);
            speakers.append(speakerContainer);        
    }


});
