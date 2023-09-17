function showContent() {
    const selectedCategory = document.getElementById('category').value;

    document.getElementById('aparatifContent').style.display = 'none';
    document.getElementById('dessertContent').style.display = 'none';

    if (selectedCategory === 'all') {
        document.getElementById('aparatifContent').style.display = 'block';
        document.getElementById('dessertContent').style.display = 'block';
    } else if (selectedCategory === 'collation') {
        document.getElementById('aparatifContent').style.display = 'block';
    } else if (selectedCategory === 'dessert') {
        document.getElementById('dessertContent').style.display = 'block';
    }
}
showContent();