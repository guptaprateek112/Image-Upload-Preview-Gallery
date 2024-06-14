document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const gallery = document.getElementById('gallery');

    imageInput.addEventListener('change', function() {
        const files = this.files;
        Array.from(files).forEach(file => {
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.innerHTML = `
                        <img src="${e.target.result}" alt="Image Preview">
                        <button class="remove-btn">&times;</button>
                    `;
                    gallery.appendChild(galleryItem);

                    galleryItem.querySelector('.remove-btn').addEventListener('click', function() {
                        galleryItem.classList.add('remove');
                        setTimeout(() => {
                            gallery.removeChild(galleryItem);
                        }, 500); 
                    });
                }
                reader.readAsDataURL(file);
            }
        });
    });

    createParticles(50); 

    function createParticles(number) {
        const background = document.querySelector('.background');
        for (let i = 0; i < number; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = `${Math.random() * 10 + 5}px`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.setProperty('--direction', `${Math.random() < 0.5 ? '-' : ''}${Math.random()}`);
            background.appendChild(particle);
        }
    }
});
