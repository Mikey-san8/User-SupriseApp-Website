document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const heartCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < heartCount; i++) {
            createUpwardHeart();
            createFallingHeart();
        }
    }, 500); 

    setUpMediaPlayer();
});

function createUpwardHeart() {
    const container = document.querySelector(".heart-upward");
    const heart = document.createElement("div");
    heart.classList.add("heartUp");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    heart.style.fontSize = Math.random() * 2 + 1 + "rem";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createFallingHeart() {
    const container = document.querySelector(".heart-falling");
    const heart = document.createElement("div");
    heart.classList.add("heartDown");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 3 + "s"; 
    heart.style.fontSize = Math.random() * 0.7 + 0.3 + "rem"; 

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

function setUpMediaPlayer() {
    const players = document.querySelectorAll(".music-player");
    const randomIndex = Math.floor(Math.random() * players.length);

    players.forEach((player, index) => {
        if (index !== randomIndex) {
            player.style.display = "none"; 
        } else {
            player.style.display = "block"; 
            player.src += "&auto_play=true";
        }
    });
}

function selectPlace(place) {
    const modal = document.getElementById('customModal');
    const placeName = document.getElementById('placeName');
    const confirmationMessage = document.getElementById('confirmation');
    const agreeButton = document.getElementById('yesButton');
    const cancelButton = document.getElementById('noButton');
    const changePanel = document.getElementById('changePanel');

    placeName.textContent = place;
    modal.style.display = "flex";

    agreeButton.onclick = function() {
        confirmationMessage.textContent = "We are going to " + place;
        agreeButton.style.display = "none";
        cancelButton.style.display = "none"; 

        setTimeout(function() {
            modal.style.display = "none"; 
                fetch('finale.html')
                    .then(response => response.text())
                    .then(data => {
                        changePanel.innerHTML = data;  
                    })
                    .catch(error => {
                        console.error("Error loading finale.html:", error);
                    });
        }, 2000);
    };

    cancelButton.onclick = function() {
        confirmationMessage.textContent = "Okay, select another, or message me for options.";
        agreeButton.style.display = "none";
        cancelButton.style.display = "none";

        setTimeout(function() {
            modal.style.display = "none"; 
            window.location.reload(); 
        }, 1800); 
    };
}
