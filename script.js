document.addEventListener('DOMContentLoaded', () => {
  // --- Set Current Year ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Sticky Header ---
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    // Header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // --- Scroll Animations (Intersection Observer) ---
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        
        // If it's a counter, start counting
        if (entry.target.classList.contains('stat-item')) {
          const counter = entry.target.querySelector('.counter');
          if (counter && !counter.classList.contains('counted')) {
            startCounter(counter);
            counter.classList.add('counted');
          }
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // --- Counters Animation ---
  function startCounter(counterElement) {
    const target = parseFloat(counterElement.getAttribute('data-target'));
    const isDecimal = counterElement.getAttribute('data-decimal') === 'true';
    const duration = 2000; // ms
    const frameRate = 30; // ms
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const count = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentVal = target * easeProgress;

      if (isDecimal) {
        counterElement.textContent = currentVal.toFixed(1);
      } else {
        counterElement.textContent = Math.round(currentVal);
      }

      if (currentFrame === totalFrames) {
        clearInterval(count);
        counterElement.textContent = isDecimal ? target.toFixed(1) : target;
        if (target > 1000) {
           counterElement.textContent += '+';
        }
      }
    }, frameRate);
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- Hero Video Fallback Logic ---
  const video = document.getElementById('heroVideo');
  if (video) {
    video.addEventListener('error', () => {
      // If video fails to load, hide it so the CSS fallback shows
      video.style.display = 'none';
      console.log('Hero video not found or failed to load. Showing premium CSS fallback.');
    });
  }
});

// --- Service Area Search ---
function checkServiceArea() {
  const input = document.getElementById('areaInput') ? document.getElementById('areaInput').value.trim().toLowerCase() : '';
  const resultDiv = document.getElementById('areaResult');
  
  if (resultDiv) {
    if (!input) {
      resultDiv.style.display = 'none';
      return;
    }

    const servedCities = ['denver', 'aurora', 'lakewood', 'westminster', 'thornton', 'centennial', 'englewood', 'littleton'];
    
    resultDiv.style.display = 'flex';
    resultDiv.className = 'search-result'; // reset

    // Simple check
    const isServed = servedCities.some(city => input.includes(city));

    if (isServed) {
      resultDiv.classList.add('success');
      resultDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10.06 10.06 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Yes, Denver Express Towing serves this area.
      `;
    } else {
      resultDiv.classList.add('error');
      resultDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        Call us to confirm availability.
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // --- Inner Pages Logic ---

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('contactSuccessMessage').style.display = 'block';
      contactForm.reset();
      setTimeout(() => {
        document.getElementById('contactSuccessMessage').style.display = 'none';
      }, 5000);
    });
  }

  // Reservation Form
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('reservationSuccessMessage').style.display = 'block';
      reservationForm.reset();
      setTimeout(() => {
        document.getElementById('reservationSuccessMessage').style.display = 'none';
      }, 5000);
    });
  }

  // Smart Quote Estimator
  const estService = document.getElementById('estService');
  const estDistance = document.getElementById('estDistance');
  const estimateResult = document.getElementById('estimateResult');

  if (estService && estDistance && estimateResult) {
    const calculateEstimate = () => {
      const s = estService.value;
      const d = estDistance.value;
      let min = 0, max = 0;

      if (s === 'towing') {
        if (d === '0-5') { min = 85; max = 125; }
        else if (d === '5-15') { min = 125; max = 175; }
        else if (d === '15-30') { min = 175; max = 250; }
        else { min = 250; max = 350; }
      } else if (s === 'flatbed') {
        if (d === '0-5') { min = 105; max = 145; }
        else if (d === '5-15') { min = 145; max = 195; }
        else if (d === '15-30') { min = 195; max = 280; }
        else { min = 280; max = 400; }
      } else {
        // roadside
        min = 65; max = 95;
      }

      if (d === '30+' && s !== 'roadside') {
        estimateResult.textContent = `$${min}+`;
      } else {
        estimateResult.textContent = `$${min} - $${max}`;
      }
    };

    estService.addEventListener('change', calculateEstimate);
    estDistance.addEventListener('change', calculateEstimate);
  }

  // Service Area Page Search
  const areaSearchBtn = document.getElementById('areaSearchBtn');
  if (areaSearchBtn) {
    areaSearchBtn.addEventListener('click', () => {
      const input = document.getElementById('areaSearchInput').value.trim().toLowerCase();
      const res = document.getElementById('areaSearchResult');
      if (!input) { res.textContent = ''; return; }

      const servedCities = ['denver', 'aurora', 'lakewood', 'westminster', 'thornton', 'centennial', 'englewood', 'littleton'];
      const isServed = servedCities.some(city => input.includes(city));

      if (isServed) {
        res.style.color = '#25D366';
        res.textContent = `Yes! We have tow trucks active in ${input}.`;
      } else {
        res.style.color = 'var(--clr-gold)';
        res.textContent = `Coverage in ${input} may vary. Please call dispatch to confirm.`;
      }
    });
  }
});
