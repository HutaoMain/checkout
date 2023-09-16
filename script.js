document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here

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
    const tarpaulinDescription = document.getElementById(
      "tarpaulinDescription"
    );
    const laminateDescription = document.getElementById("laminateDescription");

    const selectedServiceType = serviceTypeSelect.value;

    tarpaulinDescription.style.display = "none";
    laminateDescription.style.display = "none";

    if (selectedServiceType === "Tarpaulin") {
      tarpaulinDescription.style.display = "flex";
    } else if (selectedServiceType === "Laminate") {
      laminateDescription.style.display = "flex";
    }
  }

  document
    .getElementById("serviceType")
    .addEventListener("change", updateServiceType);

  populateServiceTypeSelect();

  updateServiceType();
});
