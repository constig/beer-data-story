document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({});

    particlesJS("particles-js", {
      particles: {
        number: { value: 300, density: { enable: !0, value_area: 500 } },
        color: { value: "#fef0bd" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: !0,
          anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 },
        },
        size: {
          value: 5,
          random: !0,
          anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 5,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !1, mode: "bubble" },
          onclick: { enable: !1, mode: "repulse" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });

    grade_category = document.getElementById('grade-type').value;
    document.getElementById(grade_category + '-plot').style.opacity = 1;

    document.getElementById('grade-type').addEventListener('change', function() {
      grade_category_list = ['overall', 'palate', 'taste', 'appearance', 'aroma']
      grade_category_list.forEach(element => {
        document.getElementById(element + '-plot').style.opacity = 0;
      });

      grade_category = document.getElementById('grade-type').value;
      document.getElementById(grade_category + '-plot').style.opacity = 1;
    })

    beer_category = document.getElementById('beer-type').value;
    document.getElementById(beer_category + '-plot').style.opacity = 1;

    document.getElementById('beer-type').addEventListener('change', function() {
      beer_category_list = ['paleale', 'otherslagers', 'belgianfrenchale', 'stoutporter', 'otherales', 'others', 'bock', 'lambic']
      beer_category_list.forEach(element => {
        document.getElementById(element + '-plot').style.opacity = 0;
      });

    let dict = {
      'paleale': 0*44,
      'otherslagers': 1*44,
      'belgianfrenchale': 2*44,
      'stoutporter': 3*44,
      'otherales': 4*44,
      'others': 5*44,
      'bock': 6*44,
      'lambic': 7*44
    };

    grade_category = document.getElementById('beer-type').value;
    document.getElementById(grade_category + '-plot').style.opacity = 1;
    document.getElementById('highlighter').style.transform = 'translateY(' + dict[grade_category] + 'px)';
  })

  },
  !1
);
