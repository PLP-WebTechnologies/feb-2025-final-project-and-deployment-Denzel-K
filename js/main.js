// Main JavaScript file for Mindful Musings blog

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Toggle hamburger menu animation
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            if (mobileMenuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active') && 
            !event.target.closest('nav') && 
            !event.target.closest('.mobile-menu-toggle')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            
            // Reset hamburger menu
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                // In a real application, you would send this to a server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send this to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send this to a server
            alert('Thank you for your comment! It will appear after moderation.');
            this.reset();
        });
    }

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });
    }

    // Reply button functionality
    const replyButtons = document.querySelectorAll('.reply-btn');
    if (replyButtons.length > 0) {
        replyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const commentForm = document.getElementById('comment-form');
                if (commentForm) {
                    // Scroll to comment form
                    commentForm.scrollIntoView({ behavior: 'smooth' });
                    
                    // Focus on the message textarea
                    setTimeout(() => {
                        const messageTextarea = document.getElementById('comment-message');
                        if (messageTextarea) {
                            messageTextarea.focus();
                        }
                    }, 500);
                }
            });
        });
    }

    // Search form functionality
    const searchForms = document.querySelectorAll('.search-form');
    if (searchForms.length > 0) {
        searchForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const searchInput = this.querySelector('input[type="text"]');
                if (searchInput.value) {
                    // In a real application, you would redirect to search results page
                    alert(`You searched for: ${searchInput.value}`);
                    searchInput.value = '';
                }
            });
        });
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        // Get the link's href attribute
        const linkPath = link.getAttribute('href');
        
        // Check if the current page matches the link's href
        if (currentPage.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentPage === '/' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
});
