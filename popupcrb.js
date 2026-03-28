(() => {
  "use strict";

  function createPopup() {
    const IMAGES = [
      "https://plcl.me/images/wkVT7.jpg" ,
      "https://plcl.me/images/iEjQn.jpg" ,
      "https://plcl.me/images/QQfYm.png"
    ];

    const BG_IMAGE = "https://plcl.me/images/wap3j.jpg";
    const AUTO_SLIDE_DELAY = 3500;

    if (!IMAGES.length) return;
    if (document.getElementById("popupcrb-host")) return;

    let currentIndex = 0;
    let autoSlide = null;
    let updateTimer = null;

    const host = document.createElement("div");
    host.id = "popupcrb-host";
    document.body.appendChild(host);

    const shadow = host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      #overlay{
        position:fixed;
        inset:0;
        z-index:999998;
        background:rgba(0,0,0,.35);
        backdrop-filter:blur(6px);
        -webkit-backdrop-filter:blur(6px);
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

      #popup-box{
        position:relative;
        width:min(92vw, 760px);
        display:flex;
        flex-direction:column;
        align-items:center;
        animation:floatUpDown 4.5s ease-in-out infinite;
        box-sizing:border-box;
      }

      #close{
        position:absolute;
        top:10px;
        right:10px;
        width:36px;
        height:36px;
        border:none;
        border-radius:50%;
        background:#e53935;
        color:#fff;
        font:700 18px/1 Arial, sans-serif;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        z-index:6;
        box-shadow:0 0 12px rgba(229,57,53,.7);
      }

      #slider{
        position:relative;
        width:100%;
        aspect-ratio:16 / 9;
        max-height:520px;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        border-radius:20px;
        box-shadow:
          0 16px 36px rgba(0,0,0,.28),
          0 0 0 1px rgba(255,255,255,.05) inset;
      }

      #slider::before{
        content:"";
        position:absolute;
        inset:0;
        z-index:1;
        background:url("${BG_IMAGE}") center center / cover no-repeat;
        opacity:.5;
      }

      #slider::after{
        content:"";
        position:absolute;
        inset:0;
        z-index:2;
        pointer-events:none;
        background:linear-gradient(
          180deg,
          rgba(255,255,255,.05),
          transparent 25%,
          transparent 75%,
          rgba(0,0,0,.08)
        );
      }

      #img{
        position:relative;
        z-index:3;
        width:100%;
        height:100%;
        display:block;
        object-fit:contain;
        transition:opacity .25s ease, transform .25s ease;
      }

      .nav{
        position:absolute;
        top:50%;
        z-index:4;
        width:46px;
        height:46px;
        border:none;
        border-radius:50%;
        transform:translateY(-50%);
        background:rgba(20,20,20,.55);
        color:#fff;
        font-size:24px;
        line-height:1;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-shadow:
          0 6px 14px rgba(0,0,0,.2),
          inset 0 1px 0 rgba(255,255,255,.08);
        transition:transform .2s ease, background .2s ease;
      }

      .nav:hover{
        transform:translateY(-50%) scale(1.06);
        background:rgba(25,25,25,.7);
      }

      #prev{ left:14px; }
      #next{ right:14px; }

      #popup-text{
        width:100%;
        margin-top:14px;
        padding:0 10px;
        text-align:center;
        font-family:Poppins, Arial, sans-serif;
        color:#fff;
      }

      #popup-title{
        margin:0 0 8px;
        font-size:20px;
        line-height:1.3;
        font-weight:900;
        color:#ffffff;
        text-shadow:0 0 10px rgba(196,0,255,.35);
      }

      #popup-desc{
        margin:0 auto;
        max-width:640px;
        font-size:14px;
        line-height:1.5;
        font-weight:500;
        color:rgba(255,255,255,.92);
      }

      #popup-date{
        margin-top:8px;
        font-size:13px;
        line-height:1.4;
        font-weight:700;
        color:#ffd76a;
      }

      #dots{
        display:flex;
        justify-content:center;
        gap:8px;
        margin-top:12px;
      }

      .dot{
        width:10px;
        height:10px;
        border:none;
        border-radius:50%;
        background:#aaa;
        cursor:pointer;
        transition:transform .2s ease, background .2s ease;
      }

      .dot.active{
        background:#fff;
        transform:scale(1.25);
      }

      .btn-ok{
        margin-top:18px;
        padding:13px 44px;
        border:none;
        border-radius:16px;
        background:linear-gradient(180deg,#c400ff,#6a00ff);
        color:#fff;
        font-family:Poppins, Arial, sans-serif;
        font-size:15px;
        font-weight:900;
        cursor:pointer;
        box-shadow:
          0 0 14px rgba(200,0,255,.9),
          0 0 28px rgba(120,0,255,.6),
          0 8px 20px rgba(0,0,0,.4);
        transition:transform .25s ease;
      }

      .btn-ok:hover{
        transform:scale(1.05);
      }

      @keyframes floatUpDown{
        0%{ transform:translateY(0); }
        25%{ transform:translateY(-8px); }
        50%{ transform:translateY(0); }
        75%{ transform:translateY(8px); }
        100%{ transform:translateY(0); }
      }

      @media (max-width:768px){
        #popup{ padding:14px; }
        #popup-box{ width:min(96vw, 760px); }

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

        #prev{ left:8px; }
        #next{ right:8px; }

        #close{
          width:32px;
          height:32px;
          font-size:14px;
        }

        #popup-text{
          margin-top:12px;
          padding:0 8px;
        }

        #popup-title{
          font-size:16px;
          line-height:1.28;
          margin-bottom:6px;
        }

        #popup-desc{
          font-size:12px;
          line-height:1.42;
        }

        #popup-date{
          font-size:11.5px;
          margin-top:6px;
        }

        .btn-ok{
          padding:12px 32px;
          font-size:14px;
          border-radius:14px;
        }
      }

      @media (max-width:420px){
        #popup-box{ width:96vw; }
        #slider{ aspect-ratio:16 / 10; }

        #popup-title{
          font-size:15px;
        }

        #popup-desc{
          font-size:11.5px;
          line-height:1.38;
        }

        #popup-date{
          font-size:11px;
        }

        .btn-ok{
          width:100%;
          max-width:220px;
        }
      }
    `;
    shadow.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="overlay"></div>

      <div id="popup">
        <div id="popup-box">
          <button id="close" type="button" aria-label="Tutup popup">✕</button>

          <div id="slider">
            <button class="nav" id="prev" type="button" aria-label="Gambar sebelumnya">‹</button>
            <img id="img" alt="popup banner">
            <button class="nav" id="next" type="button" aria-label="Gambar berikutnya">›</button>
          </div>

          <div id="popup-text">
            <div id="popup-title">🔥 POINT TUKAR CREDIT 🔥</div>
            <div id="popup-desc">
              Sayang Point Yang Tidak Anda Sadari Setiap Minggu Hangus Tidak Diclaim !
              TUKARKAN POINT KAMU SEKARANG!.
            </div>
            <div id="popup-date">Point Riset Setiap Kamis</div>
          </div>

          <div id="dots"></div>
          <button class="btn-ok" id="okBtn" type="button">HUBUNGI ADMIN</button>
        </div>
      </div>
    `;
    shadow.appendChild(wrapper);

    const img = shadow.querySelector("#img");
    const dots = shadow.querySelector("#dots");
    const btnPrev = shadow.querySelector("#prev");
    const btnNext = shadow.querySelector("#next");
    const btnClose = shadow.querySelector("#close");
    const btnOk = shadow.querySelector("#okBtn");
    const overlay = shadow.querySelector("#overlay");

    function renderDots() {
      dots.innerHTML = "";

      IMAGES.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `dot${index === currentIndex ? " active" : ""}`;
        dot.setAttribute("aria-label", `Lihat slide ${index + 1}`);

        dot.addEventListener("click", () => {
          currentIndex = index;
          updateSlide();
          restartAutoSlide();
        });

        dots.appendChild(dot);
      });
    }

    function updateSlide() {
      clearTimeout(updateTimer);

      img.style.opacity = "0.3";
      img.style.transform = "scale(0.985)";

      updateTimer = setTimeout(() => {
        img.src = IMAGES[currentIndex];
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
        renderDots();
      }, 120);
    }

    function goNext() {
      currentIndex = (currentIndex + 1) % IMAGES.length;
      updateSlide();
    }

    function goPrev() {
      currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
      updateSlide();
    }

    function startAutoSlide() {
      if (IMAGES.length <= 1) return;
      autoSlide = setInterval(goNext, AUTO_SLIDE_DELAY);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = null;
    }

    function restartAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    function closePopup() {
      stopAutoSlide();
      clearTimeout(updateTimer);
      host.remove();
    }

    btnNext.addEventListener("click", () => {
      goNext();
      restartAutoSlide();
    });

    btnPrev.addEventListener("click", () => {
      goPrev();
      restartAutoSlide();
    });

    btnClose.addEventListener("click", closePopup);
    btnOk.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    updateSlide();
    startAutoSlide();
  }

  function isHomePage() {
    const path = (location.pathname || "").toLowerCase();
    const hash = (location.hash || "").toLowerCase();
    const href = (location.href || "").toLowerCase();

    return (
      path === "/" ||
      path === "/home" ||
      path === "/home/" ||
      path.endsWith("/home") ||
      path.endsWith("/home/") ||
      hash === "#/home" ||
      hash === "#home" ||
      hash.startsWith("#/home?") ||
      href.includes("/home")
    );
  }

  function tryShowPopup() {
    const ONLY_HOME = true;

    if (ONLY_HOME && !isHomePage()) return;
    createPopup();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tryShowPopup);
  } else {
    tryShowPopup();
  }

  window.addEventListener("load", tryShowPopup);
  window.addEventListener("hashchange", tryShowPopup);

  let retryCount = 0;
  const retryTimer = setInterval(() => {
    retryCount += 1;
    tryShowPopup();

    if (document.getElementById("popupcrb-host") || retryCount >= 10) {
      clearInterval(retryTimer);
    }
  }, 500);
})();
