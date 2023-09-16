document.addEventListener("DOMContentLoaded", function () {
  const serviceTypes = [
    "Tarpaulin",
    "Neon LED Lights",
    "Panaflex",
    "Laser",
    "Acrylic",
    "Vinyl",
    "Risograph",
    "Sintra Board",
    "Sticker",
    "T-shirt",
    "Laminate",
    "Lanyard",
  ];

  function populateServiceTypeSelect() {
    const serviceTypeSelect = document.getElementById("serviceType");

    serviceTypes.forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      serviceTypeSelect.appendChild(option);
    });
  }

  function updateServiceType() {
    const serviceTypeSelect = document.getElementById("serviceType");

    const serviceSections = {
      Tarpaulin: "tarpaulinSection",
      "Neon LED Lights": "neonLedLightsSection",
      Panaflex: "panaflexSection",
      Laser: "laserSection",
      Acrylic: "acrylicSection",
      Vinyl: "vinylSection",
      Risograph: "risoGraphSection",
      "Sintra Board": "sintraBoardSection",
      Sticker: "stickerSection",
      "T-shirt": "tshirtSection",
      Laminate: "LaminateSection",
      Lanyard: "lanyardSection",
    };

    const selectedServiceType = serviceTypeSelect.value;

    for (const sectionId of Object.values(serviceSections)) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.style.display = "none";
      }
    }

    const selectedSectionId = serviceSections[selectedServiceType];
    if (selectedSectionId) {
      document.getElementById(selectedSectionId).style.display = "block";
    }
  }

  document
    .getElementById("serviceType")
    .addEventListener("change", updateServiceType);

  populateServiceTypeSelect();

  updateServiceType();
});

// tarpaulin
document.addEventListener("DOMContentLoaded", function () {
  function loadTarpaulinSection() {
    fetch("./sections/tarpaulin.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("tarpaulinSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading tarpaulin section:", error);
      });
  }
  loadTarpaulinSection();
});

// neon led lights
document.addEventListener("DOMContentLoaded", function () {
  function loadNeonLightsSection() {
    fetch("./sections/neonLedLights.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("neonLedLightsSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading neonLedLightsSection section:", error);
      });
  }
  loadNeonLightsSection();
});

// panaflex
document.addEventListener("DOMContentLoaded", function () {
  function loadPanaflexSection() {
    fetch("./sections/panaflex.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("panaflexSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading panaflexSection section:", error);
      });
  }
  loadPanaflexSection();
});

// laser
document.addEventListener("DOMContentLoaded", function () {
  function loadLaserSection() {
    fetch("./sections/laser.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("laserSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading laserSection section:", error);
      });
  }
  loadLaserSection();
});

// acrylic
document.addEventListener("DOMContentLoaded", function () {
  function loadAcrylicSection() {
    fetch("./sections/acrylic.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("acrylicSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading acrylicSection section:", error);
      });
  }
  loadAcrylicSection();
});

// vinyl
document.addEventListener("DOMContentLoaded", function () {
  function loadVinylSection() {
    fetch("./sections/vinyl.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("vinylSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading vinylSection section:", error);
      });
  }
  loadVinylSection();
});

// risograph
document.addEventListener("DOMContentLoaded", function () {
  function loadRisoGraphSection() {
    fetch("./sections/risograph.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("risoGraphSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading risoGraphSection section:", error);
      });
  }
  loadRisoGraphSection();
});

// sintraboard
document.addEventListener("DOMContentLoaded", function () {
  function loadSintraBoardSection() {
    fetch("./sections/sintraBoard.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("sintraBoardSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading sintraBoardSection section:", error);
      });
  }
  loadSintraBoardSection();
});

// sticker
document.addEventListener("DOMContentLoaded", function () {
  function loadStickerSection() {
    fetch("./sections/sticker.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("stickerSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading stickerSection section:", error);
      });
  }
  loadStickerSection();
});

// tshirt
document.addEventListener("DOMContentLoaded", function () {
  function loadTshirtSection() {
    fetch("./sections/tshirt.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("tshirtSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading tshirtSection section:", error);
      });
  }
  loadTshirtSection();
});

// laminate
document.addEventListener("DOMContentLoaded", function () {
  function loadLaminateSection() {
    fetch("./sections/laminate.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("LaminateSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading LaminateSection section:", error);
      });
  }
  loadLaminateSection();
});

// laminate
document.addEventListener("DOMContentLoaded", function () {
  function loadLanyardSection() {
    fetch("./sections/lanyard.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("lanyardSection").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading lanyardSection section:", error);
      });
  }
  loadLanyardSection();
});
