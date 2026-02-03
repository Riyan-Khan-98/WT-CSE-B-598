function detectDevice() {
  var deviceTypeElement = document.getElementById("deviceType");
  var featureList = document.getElementById("featureList");

  if (window.innerWidth < 768) {
    deviceTypeElement.textContent = "You are using a mobile device.";
    featureList.innerHTML = `
      <div class="bg-white p-5 border rounded flex-1">Mobile Feature 1</div>
      <div class="bg-white p-5 border rounded flex-1">Mobile Feature 2</div>
    `;
  } else if (window.innerWidth < 1024) {
    deviceTypeElement.textContent = "You are using a tablet.";
    featureList.innerHTML = `
      <div class="bg-white p-5 border rounded flex-1">Tablet Feature 1</div>
      <div class="bg-white p-5 border rounded flex-1">Tablet Feature 2</div>
    `;
  } else {
    deviceTypeElement.textContent = "You are using a desktop.";
    featureList.innerHTML = `
      <div class="bg-white p-5 border rounded flex-1">Desktop Feature 1</div>
      <div class="bg-white p-5 border rounded flex-1">Desktop Feature 2</div>
      <div class="bg-white p-5 border rounded flex-1">Desktop Feature 3</div>
      <div class="bg-white p-5 border rounded flex-1">Desktop Feature 4</div>
    `;
  }
}

window.onload = detectDevice;
window.onresize = detectDevice;