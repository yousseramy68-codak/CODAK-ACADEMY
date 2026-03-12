document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 0. Translations Data
  // -------------------------------------------------------------------------
  const translations = {
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_services: "Services",
      nav_courses: "Courses",
      nav_contact: "Contact",

      hero_label: "Available for Work",
      hero_greeting: "Welcome to",
      hero_name: "CODAK ACADEMY",
      hero_title: "for Programming and Continuous Development.",
      hero_intro:
        "I build modern, high-performance websites with a strong focus on UI/UX, clean code, and real-world business needs.",
      hero_btn_projects: "View Projects",
      hero_btn_contact: "Contact Me",
      about_heading: "About Me",

      about_p1:
        "I am an advanced Front-End Developer specialized in building professional, responsive websites using modern web technologies.",
      about_p2:
        "My approach combines clean, maintainable code with intuitive UI/UX design to create fast, scalable, and user-friendly digital experiences.",
      about_p3:
        "I work on real client projects, translating business requirements into reliable and visually polished web solutions.",
      skills_heading: "Skills & Technologies",
      skills_cat_1: "Languages & Core Technologies",
      skills_cat_2: "Web Solutions",
      skills_cat_3: "Design & Code Quality",
      skill_uiux: "UI / UX Design",
      skill_clean_code: "Clean & Maintainable Code",
      skill_responsive: "Responsive Web Design",
      skill_portfolios: "Personal Portfolios",
      skill_corporate: "Corporate Websites",
      projects_heading: "Featured Projects",
      project_tag_ecommerce: "E-Commerce",
      project_tag_responsive: "Responsive",
      project_tag_corporate: "Corporate",
      project_tag_tourism: "Tourism",
      project_chance_desc:
        "A premium, single-page corporate website designed for Chance, a global tourism and conference organizing company. Features a clean, modern UI with dark/light modes, smooth animations, and direct WhatsApp integration.",
      project_bag_desc:
        "A professional e-commerce website for selling bags and backpacks, built for real clients. The project focuses on responsive design, clean architecture, and a smooth user experience to increase usability and conversions.",
      view_details: "View Details",
      experience_heading: "Experience",
      exp_date: "Present",
      exp_title: "Front-End Developer — Freelance",
      exp_desc_1:
        "Developed responsive websites for real clients across different devices",
      exp_desc_2: "Converted UI/UX designs into clean, scalable front-end code",
      exp_desc_3:
        "Improved performance, accessibility, and overall user experience",
      services_heading: "Services",
      service_1_title: "Front-End Website Development",
      service_1_desc:
        "Building specialized, high-performance websites tailored to client needs.",
      service_2_title: "UI / UX Implementation",
      service_2_desc:
        "Turning strict design requirements into pixel-perfect code.",
      service_3_title: "Responsive Design & Optimization",
      service_3_desc:
        "Ensuring your site works perfectly on every device, with top-tier performance.",
      career_heading: "Career Objective",
      career_desc:
        "To continue growing as a front-end specialist by building high-quality, visually refined websites that deliver excellent user experiences and real business value.",
      contact_heading: "Get In Touch",
      contact_sub: "Ready to start your next project?",
      contact_email_label: "Send an Email",
      contact_whatsapp_label: "Chat on WhatsApp",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_btn: "Send Message",
      contact_alt: "Or chat directly:",
      footer_rights: "&copy; 2025 Youssef Ramy. All rights reserved.",

      // Courses & Lessons
      course_back: "&code; Back to Playlists",
      course_html_title: "HTML Foundations",
      course_html_desc:
        "Core HTML concepts to structure pages, improve accessibility, and prepare for CSS styling.",
      course_css_title: "CSS Layout & Styling",
      course_css_desc:
        "Build responsive layouts, typography systems, and component styling with modern CSS.",
      course_js_title: "JavaScript Essentials",
      course_js_desc:
        "Understand core JavaScript concepts and build interactive behavior without frameworks.",

      lesson_assignment: "Assignment",
      lesson_placeholder: "Video Placeholder",
      lesson_locked: "Locked",
      btn_mark_complete: "Mark as Completed",
      btn_completed: "Completed",
      alert_next_unlocked: "Great job! Next lesson unlocked.",

      // HTML Lessons
      html_l1_title: "Lesson 1: Semantic Structure",
      html_l1_assignment:
        "Create a multi-section landing page using semantic tags and proper heading hierarchy.",
      html_l2_title: "Lesson 2: Forms & Inputs",
      html_l2_assignment:
        "Design a registration form with labels, fieldsets, and accessible validation hints.",
      html_l3_title: "Lesson 3: Media & Accessibility",
      html_l3_assignment:
        "Embed images and media with alt text and captions. Add ARIA labels where needed.",

      // CSS Lessons
      css_l1_title: "Lesson 1: Box Model & Spacing",
      css_l1_assignment:
        "Recreate a pricing section with consistent spacing and balanced typography.",
      css_l2_title: "Lesson 2: Flexbox & Grid",
      css_l2_assignment:
        "Build a responsive card layout using both flexbox and grid variations.",
      css_l3_title: "Lesson 3: Animations & UI Polish",
      css_l3_assignment:
        "Add hover states, transitions, and subtle animations to enhance a hero section.",

      // JS Lessons
      js_l1_title: "Lesson 1: Variables & Logic",
      js_l1_assignment:
        "Write a small script that validates user input and displays dynamic feedback.",
      js_l2_title: "Lesson 2: DOM Manipulation",
      js_l2_assignment:
        "Create a theme switcher that updates text and layout classes on click.",
      js_l3_title: "Lesson 3: Events & Components",
      js_l3_assignment:
        "Build a reusable accordion component with smooth open/close animations.",

      // Course Player UI
      tab_overview: "Overview",
      tab_assignment: "Assignment",
      tab_resources: "Resources",
      playlist_header: "Playlist",
      course_progress: "Progress",
      btn_start_learning: "Start Learning",
      no_assignment: "No assignment for this lesson.",

      // NEW: Courses Page & Global Badges
      course_hero_badge: "Learning Path",
      course_hero_title: "Master the Web",
      course_hero_desc:
        "Premium, curated playlists to take you from zero to advanced. Designed for visual thinkers and builders.",
      badge_flagship: "Flagship Course",
      badge_foundation: "Foundation",
      badge_styling: "Styling",
      btn_open_course: "Open Course",
      btn_mark_watched: "Mark as Watched", // Renamed from "Mark as Completed" for video-only flow
      btn_next_lesson: "Next Lesson",
    },
    ar: {
      nav_about: "من أنا",
      nav_skills: "المهارات",
      nav_projects: "المشاريع",
      nav_experience: "الخبرات",
      nav_services: "الخدمات",
      nav_contact: "تواصل معي",
      nav_courses: "الكورسات",

      hero_label: "متاح للعمل",
      hero_greeting: "مرحباً بك في",
      hero_name: "أكاديمية كوداك",
      hero_title: "للبرمجة و التطوير المستمر",
      hero_intro:
        "أقوم ببناء مواقع حديثة وعالية الأداء مع تركيز قوي على تجربة المستخدم، الكود النظيف، ومتطلبات العمل الحقيقية.",
      hero_btn_projects: "عرض المشاريع",
      hero_btn_contact: "تواصل معي",
      about_heading: "من أنا",

      about_p1:
        "أنا مطور واجهات أمامية متقدم متخصص في بناء مواقع احترافية ومتجاوبة باستخدام أحدث تقنيات الويب.",
      about_p2:
        "يجمع أسلوبي بين الكود النظيف والقابل للصيانة مع تصميم تجربة مستخدم بديهية لإنشاء تجارب رقمية سريعة وقابلة للتطوير وسهلة الاستخدام.",
      about_p3:
        "أعمل على مشاريع حقيقية للعملاء، وأقوم بترجمة متطلبات العمل إلى حلول ويب موثوقة ومصقولة بصرياً.",
      skills_heading: "المهارات والتقنيات",
      skills_cat_1: "اللغات والتقنيات الأساسية",
      skills_cat_2: "حلول الويب",
      skills_cat_3: "التصميم وجودة الكود",
      skill_uiux: "تصميم واجهة وتجربة المستخدم",
      skill_clean_code: "كود نظيف وقابل للصيانة",
      skill_responsive: "تصميم ويب متجاوب",
      skill_portfolios: "مواقع شخصية (بورتفوليو)",
      skill_corporate: "مواقع شركات",
      projects_heading: "من المشاريع المميزة",
      project_tag_ecommerce: "تجارية إلكترونية",
      project_tag_responsive: "متجاوب",
      project_tag_corporate: "شركات",
      project_tag_tourism: "سياحة",
      project_chance_desc:
        "موقع ويب مؤسسي متميز من صفحة واحدة لشركة Chance العالمية للسياحة وتنظيم المؤتمرات. يتميز واجهة حديثة مع وضع ليلي/نهاري، رسوم متحركة سلسة، وتكامل مباشر مع واتساب.",
      project_bag_desc:
        "موقع تجارة إلكترونية احترافي لبيع الحقائب وحقائب الظهر، تم بناؤه لعملاء حقيقيين. يركز المشروع على التصميم المتجاوب، والبنية النظيفة، وتجربة مستخدم سلسة لزيادة سهولة الاستخدام والمبيعات.",
      view_details: "عرض التفاصيل",
      experience_heading: "الخبرة العملية",
      exp_date: "الحاضر",
      exp_title: "مطور واجهات أمامية — عمل حر",
      exp_desc_1: "تطوير مواقع متجاوبة لعملاء حقيقيين عبر أجهزة مختلفة",
      exp_desc_2: "تحويل تصميمات UI/UX إلى كود واجهة أمامية نظيف وقابل للتطوير",
      exp_desc_3: "تحسين الأداء، وإمكانية الوصول، وتجربة المستخدم الشاملة",
      services_heading: "الخدمات",
      service_1_title: "تطوير واجهات المواقع",
      service_1_desc:
        "بناء مواقع متخصصة وعالية الأداء مصممة خصيصاً لاحتياجات العميل.",
      service_2_title: "تنفيذ UI / UX",
      service_2_desc: "تحويل متطلبات التصميم الصارمة إلى كود دقيق للغاية.",
      service_3_title: "تصميم متجاوب وتحسين الأداء",
      service_3_desc:
        "ضمان عمل موقعك بشكل مثالي على كل جهاز، مع أداء من الطراز الأول.",

      career_heading: "الهدف الوظيفي",
      career_desc:
        "الاستمرار في النمو كمتخصص في الواجهات الأمامية من خلال بناء مواقع عالية الجودة ومصقولة بصرياً تقدم تجارب مستخدم ممتازة وقيمة عمل حقيقية.",
      contact_heading: "تواصل معي",
      contact_sub: "هل أنت مستعد لبدء مشروعك القادم؟",
      contact_email_label: "راسلني عبر البريد الإلكتروني",
      contact_whatsapp_label: "تحدث معي عبر واتساب",
      form_name: "الاسم",
      form_email: "البريد الإلكتروني",
      form_message: "الرسالة",
      form_btn: "إرسال الرسالة",
      contact_alt: "أو تواصل مباشرة:",
      footer_rights: "&copy; 2025 يوسف رامي. جميع الحقوق محفوظة.",
      // Courses & Lessons
      course_back: "&larr; العودة للقوائم",
      course_html_title: "أساسيات HTML",
      course_html_desc:
        "مفاهيم HTML الأساسية لهيكلة الصفحات، تحسين إمكانية الوصول، والتحضير لتنسيقات CSS.",
      course_css_title: "تخطيط وتنسيق CSS",
      course_css_desc:
        "بناء تخطيطات متجاوبة، أنظمة مسافات، وتنسيق مكونات باستخدام CSS الحديثة.",
      course_js_title: "أساسيات JavaScript",
      course_js_desc:
        "فهم مفاهيم JavaScript الجوهرية وبناء سلوك تفاعلي بدون أطر عمل.",

      lesson_assignment: "التكليف",
      lesson_placeholder: "مساحة الفيديو",
      lesson_locked: "مغلق",
      btn_mark_complete: "حله و افتح الدرس التالي",
      btn_completed: "تم الحل",
      alert_next_unlocked: "أحسنت! الدرس التالي مفتوح الآن.",

      // HTML Lessons
      html_l1_title: "الدرس 1: الهيكل الدلالي",
      html_l1_assignment:
        "قم بإنشاء صفحة هبوط متعددة الأقسام باستخدام العلامات الدلالية والتسلسل الهرمي للعناوين.",
      html_l2_title: "الدرس 2: النماذج والمدخلات",
      html_l2_assignment:
        "صمم نموذج تسجيل مع تسميات، مجموعات حقول، وتلميحات تحقق يمكن الوصول إليها.",
      html_l3_title: "الدرس 3: الوسائط وإمكانية الوصول",
      html_l3_assignment:
        "قم بتضمين الصور والوسائط مع نص بديل وتعليقات توضيحية. أضف تسميات ARIA عند الحاجة.",

      // CSS Lessons
      css_l1_title: "الدرس 1: نموذج الصندوق والمسافات",
      css_l1_assignment: "أعد إنشاء قسم تسعير بمسافات متناسقة وطباعة متوازنة.",
      css_l2_title: "الدرس 2: Flexbox و Grid",
      css_l2_assignment:
        "بناء تخطيط بطاقات متجاوب باستخدام متغيرات flexbox و grid.",
      css_l3_title: "الدرس 3: الرسوم المتحركة وصقل الواجهة",
      css_l3_assignment:
        "أضف حالات التمرير، الانتقالات، والرسوم المتحركة الدقيقة لتحسين قسم البطل.",

      // JS Lessons
      js_l1_title: "الدرس 1: المتغيرات والمنطق",
      js_l1_assignment:
        "اكتب نصاً صغيراً يتحقق من صحة مدخلات المستخدم ويعرض تعليقات ديناميكية.",
      js_l2_title: "الدرس 2: التلاعب بـ DOM",
      js_l2_assignment:
        "قم بإنشاء مبدل سمات يقوم بتحديث فئات النص والتخطيط عند النقر.",
      js_l3_title: "الدرس 3: الأحداث والمكونات",
      js_l3_assignment:
        "بناء مكون أكورديون قابل لإعادة الاستخدام مع رسوم متحركة سلسة للفتح والإغلاق.",

      // Course Player UI
      tab_overview: "نظرة عامة",
      tab_assignment: "التكليف",
      tab_resources: "المصادر",
      playlist_header: "قائمة التشغيل",
      course_progress: "التقدم",
      btn_start_learning: "ابدأ التعلم",
      no_assignment: "لا يوجد تكليف لهذا الدرس.",

      // NEW: Courses Page & Global Badges
      course_hero_badge: "مسار التعلم",
      course_hero_title: "احترف الويب",
      course_hero_desc:
        "قوائم تشغيل مميزة ومختارة لتنقلك من الصفر إلى الاحتراف. صُممت للمفكرين البصريين والمطورين.",
      badge_flagship: "الكورس الأساسي",
      badge_foundation: "الأساسيات",
      badge_styling: "التنسيق",
      btn_open_course: "افتح الكورس",
      btn_mark_watched: "علم كمشاهدة",
      btn_next_lesson: "الدرس التالي",
    },
  };

  // -------------------------------------------------------------------------
  // 1. Language Toggle Logic
  // -------------------------------------------------------------------------
  const langToggleBtn = document.getElementById("lang-toggle");
  const htmlElement = document.documentElement;

  // Check saved language
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  langToggleBtn.addEventListener("click", () => {
    const currentLang = htmlElement.getAttribute("lang");
    const newLang = currentLang === "en" ? "ar" : "en";
    setLanguage(newLang);
  });

  function setLanguage(lang) {
    htmlElement.setAttribute("lang", lang);
    htmlElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("lang", lang);

    // Update button text
    langToggleBtn.textContent = lang === "ar" ? "EN" : "AR";

    // Apply translations
    const content = translations[lang];
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      if (content[key]) {
        // Keep the HTML structure if needed (for footer copyright symbol),
        // but mostly textContent is safer. For footer we used &copy; so innerHTML is better there.
        if (key === "footer_rights" || key === "hero_title") {
          element.innerHTML = content[key];
        } else {
          element.textContent = content[key];
        }
      }
    });

    // Change Font Family for Arabic
    if (lang === "ar") {
      document.body.style.fontFamily = "'Cairo', sans-serif";
      document.querySelectorAll("h1, h2, h3, h4").forEach((h) => {
        h.style.fontFamily = "'Cairo', sans-serif";
      });
    } else {
      document.body.style.fontFamily = "var(--font-body)";
      document.querySelectorAll("h1, h2, h3, h4").forEach((h) => {
        h.style.fontFamily = "var(--font-heading)";
      });
    }
  }

  // -------------------------------------------------------------------------
  // 2. Theme Toggle (Existing)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeToggleBtn.innerHTML = "🔆";
      themeToggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeToggleBtn.innerHTML = "🌛";
      themeToggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // -------------------------------------------------------------------------
  // 3. Mobile Menu (Existing)
  // -------------------------------------------------------------------------
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !navLinks.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      navLinks.classList.contains("active")
    ) {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // -------------------------------------------------------------------------
  // 4. Scroll Header Effect (Existing)
  // -------------------------------------------------------------------------
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // -------------------------------------------------------------------------
  // 4.1 Scroll Progress / Back-to-Top Button
  // -------------------------------------------------------------------------
  const scrollBtn = document.getElementById("scroll-progress-btn");

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      progress.toString(),
    );
  }

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // -------------------------------------------------------------------------
  // 5. Intersection Observer (Existing)
  // -------------------------------------------------------------------------
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-in-up");
  fadeElements.forEach((el) => observer.observe(el));

  // -------------------------------------------------------------------------
  // 6. Contact Form Simulation
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Loading State
      btn.textContent =
        document.documentElement.lang === "ar"
          ? "جاري الإرسال..."
          : "Sending...";
      btn.disabled = true;

      try {
        // Formspree Submission (Uses the action attribute from HTML)
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          alert(
            document.documentElement.lang === "ar"
              ? "شكراً لك! تم إرسال رسالتك بنجاح."
              : "Thank you! Your message has been sent successfully.",
          );
          contactForm.reset();
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, "errors")) {
            throw new Error(
              data["errors"].map((error) => error["message"]).join(", "),
            );
          } else {
            throw new Error("Oops! There was a problem submitting your form");
          }
        }
      } catch (error) {
        console.error("Error:", error);

        // Fallback for simulation if ID isn't replaced yet
        if (
          error.message.includes("404") ||
          error.message.includes("Failed to fetch")
        ) {
          alert(
            document.documentElement.lang === "ar"
              ? "لم يتم ربط النموذج بعد (وضع العرض). سيتم تفعيله قريباً."
              : "Form not linked yet (Demo Mode). Configuration required.",
          );
        } else {
          alert(
            document.documentElement.lang === "ar"
              ? "عذراً، حدث خطأ أثناء الإرسال."
              : "Sorry, failed to send message.",
          );
        }
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  // -------------------------------------------------------------------------
  // 7. Background Particle Animation
  // -------------------------------------------------------------------------
  initParticles();

  function initParticles() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    // Configuration for "Charismatic" Feel
    // Fewer particles but more "presence" (glow, 3d movement)
    const particleCount = window.innerWidth < 768 ? 35 : 65;
    const connectionDistance = 140;
    const mouseParams = { x: null, y: null, radius: 250 };

    // Resize handling
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    }

    window.addEventListener("resize", () => {
      resize();
      initParticleArray();
    });
    resize();

    // Mouse tracking
    window.addEventListener("mousemove", (e) => {
      mouseParams.x = e.clientX;
      mouseParams.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouseParams.x = null;
      mouseParams.y = null;
    });

    // Advanced Particle Class with Depth (Z-axis simulation)
    class Particle {
      constructor(isReinit = false) {
        this.reset(isReinit);
      }

      reset(isReinit = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Z-index: 0 (close/big) to 5 (far/small)
        this.z = Math.random() * 5 + 1;

        // Velocity depends on depth (far objects move slower)
        const speedMultiplier = (6 - this.z) * 0.15;
        this.vx = (Math.random() - 0.5) * speedMultiplier;
        this.vy = (Math.random() - 0.5) * speedMultiplier;

        // Base size
        this.baseSize = Math.random() * 2 + 1.5;
        this.size = this.baseSize; // Will scale with Z

        // Pulse Effect
        this.angle = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        // 1. Base Movement
        this.x += this.vx;
        this.y += this.vy;

        // 2. Mouse Interaction (Repulsion + Parallax)
        if (mouseParams.x != null) {
          let dx = mouseParams.x - this.x;
          let dy = mouseParams.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseParams.radius) {
            // Stronger effect for closer particles (lower z)
            const force = (mouseParams.radius - distance) / mouseParams.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;

            // "Charisma" move: particles gently float away/around mouse like a forcefield
            const strength = (6 - this.z) * 0.5; // Stronger push on close items

            this.vx -= directionX * force * strength * 0.05;
            this.vy -= directionY * force * strength * 0.05;
          }
        }

        // 3. Screen Wrap (Seamless)
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;

        // 4. Pulse Animation (Breathing size)
        this.angle += this.pulseSpeed;
        // Size oscillation based on Z depth
        const depthScale = 6 / this.z; // 1 to 6 scaling factor
        this.currentSize = Math.max(
          0,
          (this.baseSize + Math.sin(this.angle) * 0.5) * depthScale * 0.4,
        );
        this.currentAlpha = Math.min(
          1,
          Math.max(0.1, (1 / (this.z / 2)) * 0.8),
        ); // Fade out far items
      }

      draw() {
        const attributeTheme =
          document.documentElement.getAttribute("data-theme");
        const isDark = attributeTheme === "dark" || !attributeTheme;
        // Charisma Colors: Cyan/White in dark, Deep Blue in light
        const colorBase = isDark ? "200, 230, 255" : "37, 99, 235";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorBase}, ${this.currentAlpha})`;

        // Add "Glow" to closest particles
        if (this.z < 2.5) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${colorBase}, 0.5)`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    function initParticleArray() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const attributeTheme =
        document.documentElement.getAttribute("data-theme");
      const isDark = attributeTheme === "dark" || !attributeTheme;
      const lineRGB = isDark ? "180, 210, 255" : "37, 99, 235";

      // 1. Update and Draw Particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // 2. Draw Connections (Only between particles of similar depth)
      // This creates "planes" of connections rather than a messy web
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Optimization: Only connect if Z-depth is similar (Layered effect)
          if (Math.abs(p1.z - p2.z) > 1.5) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connection distance scales with Z (farther items connect at shorter screen distances)
          // But here we just use strict distance for cleaner look
          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) *
              Math.min(p1.currentAlpha, p2.currentAlpha);

            if (opacity > 0.05) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${lineRGB}, ${opacity * 0.4})`; // Subtle lines
              ctx.lineWidth = 1; // Keep it thin/elegant
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Mouse Connections (only to close/prominent particles)
        if (mouseParams.x != null && particles[i].z < 3.5) {
          const dx = particles[i].x - mouseParams.x;
          const dy = particles[i].y - mouseParams.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * particles[i].currentAlpha;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRGB}, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseParams.x, mouseParams.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    initParticleArray();
    animate();
  }

  // -------------------------------------------------------------------------
  // 8. Spotlight Effect
  // -------------------------------------------------------------------------
  const spotlightCards = document.querySelectorAll(".spotlight-card");
  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
});
