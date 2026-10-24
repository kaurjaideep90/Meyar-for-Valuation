document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Mobile nav toggle */
  var toggle = document.getElementById("navToggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Sticky header shadow state */
  var header = document.querySelector(".site-header");
  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  /* Back to top button */
  var toTop = document.getElementById("toTop");
  if (toTop) {
    var updateToTop = function () {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    };
    updateToTop();
    window.addEventListener("scroll", updateToTop, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* Scroll-reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var groups = document.querySelectorAll("[data-reveal-group]");
      groups.forEach(function (group) {
        Array.prototype.forEach.call(group.children, function (child, i) {
          child.style.setProperty("--i", i);
        });
      });
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* Animated stat counters */
  var counters = document.querySelectorAll("[data-count-to]");
  if (counters.length && !reduceMotion && "IntersectionObserver" in window) {
    var animateCount = function (el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10);
      if (isNaN(target)) return;
      var duration = 1200;
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };
      window.requestAnimationFrame(step);
    };
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      var target = el.getAttribute("data-count-to");
      if (target) el.textContent = target;
    });
  }
});
