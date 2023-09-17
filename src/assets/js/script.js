function showContent() {
    const selectedCategory = document.getElementById('category').value;

    // Gizle tüm içerikleri
    document.getElementById('aparatifContent').style.display = 'none';
    document.getElementById('dessertContent').style.display = 'none';

    if (selectedCategory === 'all') {
        // Hepsi seçildiğinde tüm içerikleri göster
        document.getElementById('aparatifContent').style.display = 'block';
        document.getElementById('dessertContent').style.display = 'block';
    } else if (selectedCategory === 'collation') {
        // Aperatif seçildiğinde sadece aperatif içeriği göster
        document.getElementById('aparatifContent').style.display = 'block';
    } else if (selectedCategory === 'dessert') {
        // Yemek seçildiğinde sadece yemek içeriği göster
        document.getElementById('dessertContent').style.display = 'block';
    }
}
