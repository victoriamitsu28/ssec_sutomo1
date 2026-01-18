const imageList = [
"assets/TWOS 2025/image1_orig.jpg",
"assets/TWOS 2025/image2_orig.jpg",
"assets/TWOS 2025/image3_orig.jpg",
"assets/TWOS 2025/image4_orig.jpg",
"assets/TWOS 2025/image5_orig.jpg",
"assets/TWOS 2025/image6_orig.jpg",
"assets/TWOS 2025/img-0005.jpg",
"assets/TWOS 2025/img-0007.jpg",
"assets/TWOS 2025/img-0009.jpg",
"assets/TWOS 2025/img-0012.jpg",
"assets/TWOS 2025/img-0013.jpg",
"assets/TWOS 2025/img-0016.jpg",
"assets/TWOS 2025/img-0019.jpg",
"assets/TWOS 2025/img-0022.jpg",
"assets/TWOS 2025/img-0024.jpg",
"assets/TWOS 2025/img-0027.jpg",
"assets/TWOS 2025/img-0029.jpg",
"assets/TWOS 2025/img-0030.jpg",
"assets/TWOS 2025/img-0033.jpg",
"assets/TWOS 2025/img-0036-1.jpg",
"assets/TWOS 2025/img-0040.jpg",
"assets/TWOS 2025/img-0043.jpg",
"assets/TWOS 2025/img-0044.jpg",
"assets/TWOS 2025/img-0048.jpg",
"assets/TWOS 2025/img-0057.jpg",
"assets/TWOS 2025/img-0061.jpg",
"assets/TWOS 2025/img-0068.jpg",
"assets/TWOS 2025/img-0076.jpg",
"assets/TWOS 2025/img-0079.jpg",
"assets/TWOS 2025/img-0080.jpg",
"assets/TWOS 2025/img-0082.jpg",
"assets/TWOS 2025/img-0084.jpg",
"assets/TWOS 2025/img-0086.jpg",
"assets/TWOS 2025/img-0089.jpg",
"assets/TWOS 2025/img-0090.jpg",
"assets/TWOS 2025/img-0092.jpg",
"assets/TWOS 2025/img-0097.jpg",
"assets/TWOS 2025/img-0098.jpg",
"assets/TWOS 2025/img-0102.jpg",
"assets/TWOS 2025/img-0103.jpg",
"assets/TWOS 2025/img-0104.jpg",
"assets/TWOS 2025/img-0107.jpg",
"assets/TWOS 2025/img-0114.jpg",
"assets/TWOS 2025/img-0118.jpg",
"assets/TWOS 2025/img-0121.jpg",
"assets/TWOS 2025/img-0125.jpg",
"assets/TWOS 2025/img-0127.jpg",
"assets/TWOS 2025/img-0136.jpg",
"assets/TWOS 2025/img-0138.jpg",
"assets/TWOS 2025/img-0140.jpg",
"assets/TWOS 2025/img-0141.jpg",
"assets/TWOS 2025/img-0143.jpg",
"assets/TWOS 2025/img-0144.jpg",
"assets/TWOS 2025/img-0148.jpg",
"assets/TWOS 2025/img-0152.jpg",
"assets/TWOS 2025/img-0155.jpg",
"assets/TWOS 2025/img-0161.jpg",
"assets/TWOS 2025/img-0163-1.jpg",
"assets/TWOS 2025/img-0167.jpg",
"assets/TWOS 2025/img-0171.jpg",
"assets/TWOS 2025/img-0172.jpg",
"assets/TWOS 2025/img-0173.jpg",
"assets/TWOS 2025/img-0177.jpg",
"assets/TWOS 2025/img-0178.jpg",
"assets/TWOS 2025/img-0180.jpg",
"assets/TWOS 2025/img-0182.jpg",
"assets/TWOS 2025/img-0188.jpg",
"assets/TWOS 2025/img-0190.jpg",
"assets/TWOS 2025/img-0191.jpg",
"assets/TWOS 2025/img-0193.jpg",
"assets/TWOS 2025/img-0194.jpg",
"assets/TWOS 2025/img-0194_orig.jpg",
"assets/TWOS 2025/img-0199.jpg",
"assets/TWOS 2025/img-0201.jpg",
"assets/TWOS 2025/img-0202.jpg",
"assets/TWOS 2025/img-0204.jpg",
"assets/TWOS 2025/img-0206.jpg",
"assets/TWOS 2025/img-0212.jpg",
"assets/TWOS 2025/img-0215.jpg",
"assets/TWOS 2025/img-0221.jpg",
"assets/TWOS 2025/img-0224.jpg",
"assets/TWOS 2025/img-0225.jpg",
"assets/TWOS 2025/img-0233.jpg",
"assets/TWOS 2025/img-0234.jpg",
"assets/TWOS 2025/img-0246.jpg",
"assets/TWOS 2025/img-0247.jpg",
"assets/TWOS 2025/img-0252.jpg",
"assets/TWOS 2025/img-0255-1.jpg",
"assets/TWOS 2025/img-0258-2.jpg",
"assets/TWOS 2025/img-0259-1.jpg",
"assets/TWOS 2025/img-0261-1.jpg",
"assets/TWOS 2025/img-0264.jpg",
"assets/TWOS 2025/img-0267.jpg",
"assets/TWOS 2025/img-0270.jpg",
"assets/TWOS 2025/img-0277.jpg",
"assets/TWOS 2025/img-0285.jpg",
"assets/TWOS 2025/img-0288.jpg",
"assets/TWOS 2025/img-0290.jpg",
"assets/TWOS 2025/img-0294.jpg",
"assets/TWOS 2025/img-0298.jpg",
"assets/TWOS 2025/img-0301.jpg",
"assets/TWOS 2025/img-0303.jpg",
"assets/TWOS 2025/img-0309.jpg",
"assets/TWOS 2025/img-0311.jpg",
"assets/TWOS 2025/img-0312.jpg",
"assets/TWOS 2025/img-0318.jpg",
"assets/TWOS 2025/img-0329.jpg",
"assets/TWOS 2025/img-0335.jpg",
"assets/TWOS 2025/img-0340.jpg",
"assets/TWOS 2025/img-0342.jpg",
"assets/TWOS 2025/img-0349.jpg",
"assets/TWOS 2025/img-0351.jpg",
"assets/TWOS 2025/img-0356.jpg",
"assets/TWOS 2025/img-0358.jpg",
"assets/TWOS 2025/img-0362.jpg",
"assets/TWOS 2025/img-0378.jpg",
"assets/TWOS 2025/img-0406.jpg",
"assets/TWOS 2025/img-0415.jpg",
"assets/TWOS 2025/img-0419.jpg",
"assets/TWOS 2025/img-0424.jpg",
"assets/TWOS 2025/img-0431.jpg",
"assets/TWOS 2025/img-0434.jpg",
"assets/TWOS 2025/img-0439.jpg",
"assets/TWOS 2025/img-0444.jpg",
"assets/TWOS 2025/img-0451.jpg",
"assets/TWOS 2025/img-0455.jpg",
"assets/TWOS 2025/img-0456.jpg",
"assets/TWOS 2025/img-0458.jpg",
"assets/TWOS 2025/img-0482.jpg",
"assets/TWOS 2025/img-0485.jpg",
"assets/TWOS 2025/img-0498.jpg",
"assets/TWOS 2025/img-0505.jpg"

];

const columns = document.querySelectorAll(".flow-column");

columns.forEach((column, index) => {
  const track = document.createElement("div");
  track.className = "flow-column-track";

  // duplicate images for seamless loop
  [...imageList, ...imageList].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
  });

  column.appendChild(track);

  let offset = 0;
  const speed =
    column.dataset.speed === "slow" ? 2 :
    column.dataset.speed === "medium" ? 3 : 4;

  function animate() {
    offset += speed;
    if (offset >= track.scrollHeight / 2) offset = 0;
    track.style.transform = `translateY(-${offset}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
