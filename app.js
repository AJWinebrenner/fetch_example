let launches = [];

const button = document.querySelector("#load-btn");

const loadData = async () => {
    const raw = await fetch("https://api.spacexdata.com/v5/launches")
    const launches = await raw.json();
        
    const list = document.querySelector("#launch-list");
    launches.forEach((launch) => {
        const listItem = document.createElement("li");
        listItem.classList.add("card1");
        listItem.classList.add("flexy");

        const title = document.createElement("h2");
        title.innerText = `Flight No: ${launch.flight_number} - ${launch.name}`;
    
        const details = document.createElement("p");
        details.innerText = `\n
        Success: ${launch.success}\n
        Details: ${launch.details}\n
        Date of Launch: ${launch.date_local}`;

        const article = document.createElement("a");
        article.classList.add("card__link");
        article.innerText = "\nSee article";
        article.href = launch.links.article;

        const image = document.createElement("img");
        image.src = launch.links.patch.small;
        image.alt = `image for ${launch.name} launch`;
        image.classList.add("img--png");

        const imageBox = document.createElement("div");
        imageBox.classList.add("img--box");
        imageBox.classList.add("flexy");
        imageBox.appendChild(image);

        const textBox = document.createElement("div");
        textBox.classList.add("card2")
        textBox.appendChild(title);
        textBox.appendChild(details);
        textBox.appendChild(article);
        
        listItem.appendChild(textBox);
        listItem.appendChild(imageBox);
        
        list.appendChild(listItem);
    })
}

// loadData();

button.addEventListener("click", loadData);