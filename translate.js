function changeContent(page) {
    var links = document.querySelectorAll(".menu ul li a");
    links.forEach((link) => link.classList.remove("active"));
    document.getElementById(page + "-link").classList.add("active");
  }

  window.onload = function () {
    document.getElementById("home-link").classList.add("active");

    // Add delay to each letter drop
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  };
  function googleTranslateInit() {
    if (!window.google?.translate?.TranslateElement) {
      setTimeout(googleTranslateInit, 100);
    } else {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,nl,fr,de,it,ta,te',
        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        defaultLanguage: 'en',
        autoDisplay: false
      }, 'google_translate_element');
      cleanUpGadgetText();
    }
  }

  function loadGoogleTranslateScript() {
    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.id = "google_translate_script";
      script.onerror = () => console.error('Error loading Google Translate script');
      document.body.appendChild(script);
    }
  }

  function cleanUpGadgetText() {
    const gadgetElement = document.querySelector('.goog-te-gadget');
    if (gadgetElement) {
      const textNodes = gadgetElement.childNodes;
      textNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = ''; // Clear the text content
        }
      });
    }
  }

  // Load the script and initialize Google Translate
  loadGoogleTranslateScript();
