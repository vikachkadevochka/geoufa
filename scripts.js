let images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'] 
let currentImageIndex = 0;

let news = [
    'Первая новость',
    'Вторая новость',
    'Третья новость'
];
let currentNewsIndex = 0;

function changeImage() {
    let imageElement = document.getElementById('slideshow-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

function changeNews() {
    let newsElement = document.getElementById('news-text');
    currentNewsIndex = (currentNewsIndex + 1) % news.length;
    newsElement.textContent = news[currentNewsIndex];
}

setInterval(changeImage, 5000); // Менять изображение каждые 5 секунд
setInterval(changeNews, 7000);  // Менять новость каждые 7 секунд
