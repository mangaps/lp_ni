document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Analytics Event Tracking
  const trackEvent = (action, category = 'engagement', label = null) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      });
    }
  };

  // Track CTA clicks
  document.querySelectorAll('[data-event]').forEach(button => {
    button.addEventListener('click', () => {
      const eventName = button.dataset.event;
      trackEvent(eventName, 'cta_click', button.textContent.trim());
    });
  });

  // Language Toggle
  const langBtns = document.querySelectorAll('.lang-btn');
  const body = document.body;
  const pageTitle = document.getElementById('page-title');
  const pageDescription = document.getElementById('page-description');

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      
      // Remove active class from all buttons
      langBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Toggle body class and update meta tags
      if (lang === 'en') {
        body.classList.add('en');
        pageTitle.textContent = 'Narrative Social';
        pageDescription.setAttribute('content', 'Narrative intelligence to read the moment and choose the best action.');
        document.documentElement.lang = 'en';
        trackEvent('language_switch', 'interaction', 'english');
      } else {
        body.classList.remove('en');
        pageTitle.textContent = 'Narrativa Social';
        pageDescription.setAttribute('content', 'Inteligência narrativa para ler o momento e escolher a melhor ação.');
        document.documentElement.lang = 'pt-BR';
        trackEvent('language_switch', 'interaction', 'portuguese');
      }
    });
  });
});