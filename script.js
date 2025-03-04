document.addEventListener("DOMContentLoaded", function () {
    // Image data
    const sections = [
        {
            title: "Trending",
            containerId: "trending-images",
            images: [
                { src: "images/OP.jpeg", link: "https://www.youtube.com/watch?v=zwT83W6xdbg&ab_channel=AnimeAmvs" },
                { src: "images/mha.jpeg", link: "#" }, 
                { src: "images/Naruto.jpeg", link: "#" },
                { src: "images/OIP.jpeg", link: "#" },
                { src: "images/ft.jpeg", link: "#" },
                { src: "images/DS.jpeg", link: "#" },
                { src: "images/aot.jpeg", link: "#" },
                { src: "images/aot.jpeg", link: "#" },
                { src: "images/aot.jpeg", link: "#" },
                { src: "images/aot.jpeg", link: "#" }
            ]
        },
        {
            title: "Founders Choice",
            containerId: "founders-images",
            images: [
                { src: "https://i.pinimg.com/originals/b6/e6/ef/b6e6ef0ad9f7382a926575eda4a856fa.jpg", link: "#" },
                { src: "https://i.pinimg.com/originals/b6/e6/ef/b6e6ef0ad9f7382a926575eda4a856fa.jpg", link: "#" },
                { src: "https://i.pinimg.com/originals/b6/e6/ef/b6e6ef0ad9f7382a926575eda4a856fa.jpg", link: "#" },
                { src: "https://i.pinimg.com/originals/b6/e6/ef/b6e6ef0ad9f7382a926575eda4a856fa.jpg", link: "#" },
                { src: "https://i.pinimg.com/originals/b6/e6/ef/b6e6ef0ad9f7382a926575eda4a856fa.jpg", link: "#" }
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

        // Populate images with links
        section.images.forEach(image => {
            let a = document.createElement("a");
            a.href = image.link;
            a.target = "_blank"; // Opens in a new tab

            let img = document.createElement("img");
            img.src = image.src;
            img.alt = `${section.title} Image`;
            img.style.width = "150px"; // Adjust as needed

            a.appendChild(img);
            sectionContainer.appendChild(a);
        });
    }

    // Generate sections dynamically
    sections.forEach(createSection);
});
