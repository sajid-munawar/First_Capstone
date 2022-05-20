document.addEventListener("DOMContentLoaded", function () {
    const speakersData = [
      {
        image: "",
        title: "",
        redDesc: "",
        blackDesc: "",
      },
      {
        image: "",
        title: "",
        redDesc: "",
        blackDesc: "",
      },
      {
        image: "",
        title: "",
        redDesc: "",
        blackDesc: "",
      },
    ];
    
    const speakers = document.querySelector(".speakers");
    const speakerContainer = document.createElement("div");
    speakerContainer.classList.add("speaker-container");
    const speakerImage = document.createElement("img");
    speakerImage.classList.add("speaker-image");
    speakerImage.src = "";
    speakerImage.alt = "";
    speakerContainer.append(speakerImage);
    const speakerDetails = document.createElement("div");
    speakerDetails.classList.add("speaker-details");
    const speakerTitle = document.createElement("h1");
    speakerTitle.classList.add("speaker-title");
    speakerTitle.innerText = "";
    speakerDetails.append(speakerTitle);
    const redDesc = document.createElement("h3");
    redDesc.classList.add("red-desc");
    redDesc.innerText = "";
    speakerDetails.append(redDesc);
    const blackDesc = document.createElement("p");
    blackDesc.classList.add("black-desc");
    blackDesc.innerText = "";
    speakerDetails.append(blackDesc);
    speakerContainer.append(speakerDetails);
    speakers.append(speakerContainer);


});
