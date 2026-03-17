document.addEventListener("DOMContentLoaded", () => {

  // 🔒 KUNCI HANYA UNTUK /home atau /home/
  if (!/^\/home\/?$/.test(location.pathname)) return;

  const images = [
    "https://plcl.me/images/UwhAr.png",
    "https://plcl.me/images/eq2uY.png"
  ];

  const bgImage = "https://plcl.me/images/wap3j.jpg";

  let currentIndex = 0;
  let autoSlide = null;

  const host = document.createElement("div");
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = `
    #overlay{
      position:fixed;
      inset:0;
      z-index:999998;
      backdrop-filter:blur(6px);
      -webkit-backdrop-filter:blur(6px);
      background:rgba(0,0,0,.35);
    }

    #popup{
      position:fixed;
      inset:0;
      z-index:999999;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      box-sizing:border-box;
    }

    /* popup dibuat lebih sempit biar sisi kiri kanan tidak kelebaran */
    #popup-box{
      position:relative;
      width:min(92vw, 760px);
      display:flex;
      flex-direction:column;
      align-items:center;
      animation:floatUpDown 4.5s ease-in-out infinite;
    }

    #close{
      position:absolute;
      top:10px;
      right:10px;
      width:36px;
      height:36px;
      border-radius:50%;
      background:#e53935;
      color:#fff;
      font-weight:700;
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      z-index:6;
      font-family:Arial,sans-serif;
      box-shadow:0 0 12px rgba(229,57,53,.7);
    }

    /* slider dibuat proporsional untuk banner landscape */
    #slider{
      width:100%;
      aspect-ratio:16 / 9;
      max-height:520px;
      border-radius:20px;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      box-shadow:
        0 16px 36px rgba(0,0,0,.28),
        0 0 0 1px rgba(255,255,255,.05) inset;
    }

    #slider::before{
      content:"";
      position:absolute;
      inset:0;
      background-image:url("${bgImage}");
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
      opacity:.5;
      z-index:1;
    }

    #slider::after{
      content:"";
      position:absolute;
      inset:0;
      z-index:2;
      background:linear-gradient(
        180deg,
        rgba(255,255,255,.05),
        transparent 25%,
        transparent 75%,
        rgba(0,0,0,.08)
      );
      pointer-events:none;
    }

    #slider img{
      position:relative;
      z-index:3;
      width:100%;
      height:100%;
      object-fit:contain;
      transition:opacity .25s ease, transform .25s ease;
      display:block;
    }

    /* tombol geser disesuaikan dengan sisi background */
    .nav{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      width:46px;
      height:46px;
      border-radius:50%;
      border:none;
      background:rgba(20,20,20,.55);
      color:#fff;
      font-size:24px;
      cursor:pointer;
      z-index:4;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:
        0 6px 14px rgba(0,0,0,.2),
        inset 0 1px 0 rgba(255,255,255,.08);
      transition:.2s ease;
    }

    .nav:hover{
      transform:translateY(-50%) scale(1.06);
      background:rgba(25,25,25,.7);
    }

    #prev{ left:14px; }
    #next{ right:14px; }

    #dots{
      display:flex;
      gap:8px;
      justify-content:center;
      margin-top:12px;
    }

    .dot{
      width:10px;
      height:10px;
      border-radius:50%;
      background:#aaa;
      cursor:pointer;
      transition:.2s;
    }

    .dot.active{
      background:#fff;
      transform:scale(1.25);
    }

    .btn-ok{
      margin-top:18px;
      background:linear-gradient(180deg,#c400ff,#6a00ff);
      color:#fff;
      padding:13px 44px;
      border-radius:16px;
      font-weight:900;
      border:none;
      cursor:pointer;
      font-family:Poppins,Arial,sans-serif;
      box-shadow:
        0 0 14px rgba(200,0,255,.9),
        0 0 28px rgba(120,0,255,.6),
        0 8px 20px rgba(0,0,0,.4);
      transition:.25s;
    }

    .btn-ok:hover{
      transform:scale(1.05);
    }

    @keyframes floatUpDown{
      0%{transform:translateY(0)}
      25%{transform:translateY(-8px)}
      50%{transform:translateY(0)}
      75%{transform:translateY(8px)}
      100%{transform:translateY(0)}
    }

    /* TABLET & MOBILE */
    @media (max-width: 768px){
      #popup{
        padding:14px;
      }

      #popup-box{
        width:min(96vw, 760px);
      }

      #slider{
        aspect-ratio:16 / 9;
        max-height:none;
        border-radius:16px;
      }

      .nav{
        width:40px;
        height:40px;
        font-size:20px;
      }

      #prev{left:8px;}
      #next{right:8px;}

      #close{
        width:32px;
        height:32px;
        font-size:14px;
      }

      .btn-ok{
        padding:12px 32px;
        font-size:14px;
        border-radius:14px;
      }
    }

    @media (max-width: 420px){
      #popup-box{
        width:96vw;
      }

      #slider{
        aspect-ratio:16 / 10;
      }

      .btn-ok{
        width:100%;
        max-width:220px;
      }
    }
  `;
  shadow.appendChild(style);

  shadow.innerHTML += `
    <div id="overlay"></div>
    <div id="popup">
      <div id="popup-box">
        <div id="close">✕</div>

        <div id="slider">
          <button class="nav" id="prev">‹</button>
          <img id="img" alt="popup">
          <button class="nav" id="next">›</button>
        </div>

        <div id="dots"></div>
        <button class="btn-ok" id="okBtn">OKE</button>
      </div>
    </div>
  `;

  const img = shadow.querySelector("#img");
  const dots = shadow.querySelector("#dots");

  function renderDots(){
    dots.innerHTML = "";
    images.forEach((_, i) => {
      const d = document.createElement("div");
      d.className = "dot" + (i === currentIndex ? " active" : "");
      d.onclick = () => {
        currentIndex = i;
        update();
        restart();
      };
      dots.appendChild(d);
    });
  }

  function update(){
    img.style.opacity = ".3";
    img.style.transform = "scale(.985)";
    setTimeout(() => {
      img.src = images[currentIndex];
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
      renderDots();
    }, 120);
  }

  function next(){
    currentIndex = (currentIndex + 1) % images.length;
    update();
  }

  function prev(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    update();
  }

  function start(){
    autoSlide = setInterval(next, 3500);
  }

  function restart(){
    clearInterval(autoSlide);
    start();
  }

  function closePopup(){
    clearInterval(autoSlide);
    host.remove();
  }

  shadow.querySelector("#next").onclick = () => {
    next();
    restart();
  };

  shadow.querySelector("#prev").onclick = () => {
    prev();
    restart();
  };

  shadow.querySelector("#close").onclick = closePopup;
  shadow.querySelector("#okBtn").onclick = closePopup;

  update();
  if(images.length > 1) start();

});
