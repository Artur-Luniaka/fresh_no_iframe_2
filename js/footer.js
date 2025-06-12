document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("main-footer");
  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="footer-container container">
            <div class="footer-section">
                <h3 class="footer-title">Legal Station</h3>
                <ul class="footer-links">
                    <li><a href="./jeep-cookies.html" class="footer-link">Cookie Policy</a></li>
                    <li><a href="./jeep-privacy.html" class="footer-link">Privacy Policy</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3 class="footer-title">Link with Us</h3>
                <div class="footer-contact">
                    <div class="footer-contact-item">
                        <span>Email:</span>
                        <a href="mailto:info@domain.com" class="footer-link">info@domain.com</a>
                    </div>
                    <div class="footer-contact-item">
                        <span>Phone:</span>
                        <a href="tel:+61234567890" class="footer-link">+61 110 336 095</a>
                    </div>
                    <div class="footer-contact-item">
                        <span>Location:</span>
                        <span>Federation Square, Swanston St & Flinders St, Melbourne VIC 3000, Australia</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; ${currentYear} Domain.com | All rights reserved.</p>
        </div>
    `;
});
