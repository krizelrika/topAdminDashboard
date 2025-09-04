// Add interactivity to navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
    });
});

// Add interactivity to project action icons
document.querySelectorAll('.action-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const iconType = this.querySelector('.material-icons').textContent;
        
        if (iconType === 'star_border') {
            this.querySelector('.material-icons').textContent = 'star';
            this.style.color = '#ffc107';
        } else if (iconType === 'star') {
            this.querySelector('.material-icons').textContent = 'star_border';
            this.style.color = '';
        }
    });
});

// Add search functionality
document.querySelector('.search-container input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        const description = card.querySelector('.project-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = searchTerm === '' ? 'block' : 'none';
        }
    });
});