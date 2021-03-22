const urlCuriosity = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OHEbI7rTkhvwIuzGPAUuwvezPdwKXaxcbU0CDoSI";


async function getCuriosityUrl() {
    try {
        const response = await fetch(urlCuriosity);
        const jsonResult = await response.json();
        displayApiNasa(jsonResult.photos);
    } catch (error) {
        console.log(error + "Something is wrong");
    } finally {
        const load = document.querySelector(".loading");
        load.style.display = "none";
        console.log("evrything is done!");
    }
}

getCuriosityUrl();

function displayApiNasa(card) {
    const container = document.querySelector(".row--data__gallery--item");
    let html = "";
    for (let i = 0; i < card.length; i++) {
        console.log("html", html);
        if (i === 15) {
            break;
        }
        html += `<div class="row--data__cards">
                    <h2 class="card-name">${card[i].camera.name} </h2> 
                    <img  src="${card[i].img_src}" alt="" />      
                    <div class="row--data__cards--info hidden">
                    <h4 class="card-status">${card[i].rover.status}</h4> 
                    <p class="card-name">${card[i].camera.full_name} </p> 
                    <h3 class="card-h3"><span>Rover name:</span>${card[i].rover.name} </h3> 
                    <h3 class="card-h3"><span>Launch:</span>${card[i].rover.launch_date} </h3> 
                    <h3 class="card-h3"><span>Landing:</span>${card[i].rover.landing_date} </h3>                   
                    </div>
                    <button class="card-btn" onclick="displayPhrase()">View info</button>
                </div>`;
    }
    container.innerHTML = html;

/*-----------------card------------*/
    const buttons = document.querySelectorAll(".card-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            console.log(event.target.previousElementSibling);
            event.target.previousElementSibling.classList.toggle("hidden");
        });
    }
}


