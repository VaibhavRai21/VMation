document.addEventListener("DOMContentLoaded", function () {
    const imageGrid = document.getElementById("imageGrid");

    // Create Row 1
    imageGrid.appendChild(createRowTitle("Row 1"));
    const row1 = createRow();
    row1.appendChild(createImage("https://picsum.photos/200/200?random=1"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=2"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=3"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=4"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=5"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=6"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=7"));
    row1.appendChild(createImage("https://picsum.photos/200/200?random=8"));
    imageGrid.appendChild(row1);

    // Create Row 2
    imageGrid.appendChild(createRowTitle("Row 2"));
    const row2 = createRow();
    row2.appendChild(createImage("https://picsum.photos/200/200?random=9"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=10"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=11"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=12"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=13"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=14"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=15"));
    row2.appendChild(createImage("https://picsum.photos/200/200?random=16"));
    imageGrid.appendChild(row2);

    // Create Row 3
    imageGrid.appendChild(createRowTitle("Row 3"));
    const row3 = createRow();
    row3.appendChild(createImage("https://picsum.photos/200/200?random=17"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=18"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=19"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=20"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=21"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=22"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=23"));
    row3.appendChild(createImage("https://picsum.photos/200/200?random=24"));
    imageGrid.appendChild(row3);

    // Create Row 4
    imageGrid.appendChild(createRowTitle("Row 4"));
    const row4 = createRow();
    row4.appendChild(createImage("https://picsum.photos/200/200?random=25"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=26"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=27"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=28"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=29"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=30"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=31"));
    row4.appendChild(createImage("https://picsum.photos/200/200?random=32"));
    imageGrid.appendChild(row4);
});

// Helper function to create an image element
function createImage(src) {
    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = "Placeholder Image";
    return imgElement;
}

// Helper function to create a row container
function createRow() {
    const row = document.createElement("div");
    row.classList.add("image-row");
    return row;
}

// Helper function to create a row title
function createRowTitle(titleText) {
    const title = document.createElement("h2");
    title.classList.add("row-title");
    title.innerText = titleText;
    return title;
}
