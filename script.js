document.addEventListener("DOMContentLoaded", function () {
    const imageGrid = document.getElementById("imageGrid");

    // Create and append each row with a heading
    imageGrid.appendChild(createRowWithTitle("Popular", [
        "content/aot.jpeg",
        "content/DM2.jpg",
        "content/ft.jpeg",
        "content/jjk.jpg",
        "content/OP.webp",
        "content/Naruto.jpeg",
        "content/spy x family.jpeg",
        "content/TyBw.jpg"
    ]));

    imageGrid.appendChild(createRowWithTitle("Trending", [
        "file:///C:/Users/raiva/Downloads/150x200.svg",
        "https://via.placeholder.com/200x150/bfff7f/000000?text=Image+10",
        "https://via.placeholder.com/200x150/ffdf7f/000000?text=Image+11",
        "https://via.placeholder.com/200x150/df7fff/000000?text=Image+12",
        "https://via.placeholder.com/200x150/7fdfbf/000000?text=Image+13",
        "https://via.placeholder.com/200x150/ff7fdf/000000?text=Image+14",
        "https://via.placeholder.com/200x150/dfbf7f/000000?text=Image+15",
        "https://via.placeholder.com/200x150/7f7fdf/000000?text=Image+16",
    ]));

    imageGrid.appendChild(createRowWithTitle("Row 3", [
        "https://via.placeholder.com/200x150/ffaf7f/000000?text=Image+17",
        "https://via.placeholder.com/200x150/af7fff/000000?text=Image+18",
        "https://via.placeholder.com/200x150/7fafff/000000?text=Image+19",
        "https://via.placeholder.com/200x150/afff7f/000000?text=Image+20",
        "https://via.placeholder.com/200x150/ffffaf/000000?text=Image+21",
        "https://via.placeholder.com/200x150/ffafaf/000000?text=Image+22",
        "https://via.placeholder.com/200x150/afdf7f/000000?text=Image+23",
        "https://via.placeholder.com/200x150/7fffaf/000000?text=Image+24",
    ]));

    imageGrid.appendChild(createRowWithTitle("Row 4", [
        "https://via.placeholder.com/200x150/bfbf7f/000000?text=Image+25",
        "https://via.placeholder.com/200x150/7fbfbf/000000?text=Image+26",
        "https://via.placeholder.com/200x150/bf7fbf/000000?text=Image+27",
        "https://via.placeholder.com/200x150/ffbfbf/000000?text=Image+28",
        "https://via.placeholder.com/200x150/bfbfff/000000?text=Image+29",
        "https://via.placeholder.com/200x150/7fffff/000000?text=Image+30",
        "https://via.placeholder.com/200x150/ff7fff/000000?text=Image+31",
        "https://via.placeholder.com/200x150/7fff7f/000000?text=Image+32",
    ]));
});

// Helper function to create a row with a title
function createRowWithTitle(titleText, imageUrls) {
    const container = document.createElement("div");
    container.classList.add("row-container");

    const title = document.createElement("h2");
    title.classList.add("row-title");
    title.innerText = titleText;
    container.appendChild(title);

    const row = document.createElement("div");
    row.classList.add("image-row");

    imageUrls.forEach(url => {
        row.appendChild(createImage(url));
    });

    container.appendChild(row);
    return container;
}

// Helper function to create an image element
function createImage(src) {
    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = "Placeholder Image";
    return imgElement;
}
