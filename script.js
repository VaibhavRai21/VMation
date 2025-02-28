document.addEventListener("DOMContentLoaded", function () {
    // Image data
    const sections = [
        {
            title: "Trending",
            containerId: "trending-images",
            images: [
                "images/OP.jpeg",
                "images/mha.jpeg",
                "images/Naruto.jpeg",
                "images/OIP.jpeg",
                "images/ft.jpeg",
                "images/DS.jpeg",
                "images/aot.jpeg"
            ]
        },
        {
            title: "Founders Choice",
            containerId: "founders-images",
            images: [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        }
    ];

    // Function to create sections dynamically
    function createSection(section) {
        // Create and insert section title
        let titleElement = document.createElement("h2");
        titleElement.className = "section-title";
        titleElement.textContent = section.title;
        document.body.appendChild(titleElement);

        // Create section container
        let sectionContainer = document.createElement("section");
        sectionContainer.className = "image-row";
        sectionContainer.id = section.containerId;
        document.body.appendChild(sectionContainer);

        // Populate images
        section.images.forEach(src => {
            let img = document.createElement("img");
            img.src = src;
            img.alt = `${section.title} Image`;
            sectionContainer.appendChild(img);
        });
    }

    // Generate sections dynamically
    sections.forEach(createSection);
});
