document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    function is_youtube(url) {
        const p = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/;
        return url.match(p) ? RegExp.$1 : false;
    }

    function is_image(url) {
        return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    }

    function attachYouTube(el) {
        el.dataset.id = is_youtube(el.href);
        el.addEventListener("click", e => {
            e.preventDefault();
            openLightbox(`<iframe src="https://www.youtube.com/embed/${el.dataset.id}?autoplay=1&rel=0&showinfo=0" allowfullscreen></iframe>`, el);
        });
    }

    function attachImage(el) {
        el.addEventListener("click", e => {
            e.preventDefault();
            openLightbox(`
                <div class="img">
                    <img src="${el.href}" alt="${el.title}">
                </div>
                <span>${el.title || ""}</span>
            `, el);
        });
    }

    function openLightbox(content, currentEl) {
        lightbox.innerHTML = `
            <a id="close">&times;</a>
            <a id="prev">&lsaquo;</a>
            <a id="next">&rsaquo;</a>
            ${content}
        `;
        lightbox.style.display = "flex";
        setupGallery(currentEl);

        document.getElementById("close").onclick = () => {
            lightbox.style.display = "none";
            lightbox.innerHTML = "";
        };
    }

    function setupGallery(currentEl) {
        const galleryEls = currentEl.closest("ul, p") ? currentEl.closest("ul, p").querySelectorAll("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.webp']") : [currentEl];
        let currentIndex = Array.from(galleryEls).indexOf(currentEl);

        const nextBtn = document.getElementById("next");
        const prevBtn = document.getElementById("prev");

        if (galleryEls.length <= 1) {
            nextBtn.style.display = prevBtn.style.display = "none";
        } else {
            nextBtn.style.display = prevBtn.style.display = "block";
            nextBtn.onclick = () => galleryEls[(currentIndex = (currentIndex + 1) % galleryEls.length)].click();
            prevBtn.onclick = () => galleryEls[(currentIndex = (currentIndex - 1 + galleryEls.length) % galleryEls.length)].click();
        }
    }

    document.querySelectorAll("a").forEach(el => {
        if (!el.href || el.classList.contains("no-lightbox")) return;
        if (is_youtube(el.href)) attachYouTube(el);
        else if (is_image(el.href)) attachImage(el);
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightbox.innerHTML = "";
        }
    });
});
