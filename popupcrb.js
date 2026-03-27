<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CERIABET Help Center Preview</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: #fff;
      background:
        linear-gradient(rgba(18, 0, 35, 0.78), rgba(8, 0, 20, 0.88)),
        url('https://plcl.me/images/wap3j.jpg') center/cover fixed no-repeat;
      min-height: 100vh;
    }
    .wrap {
      width: min(1100px, 92%);
      margin: 0 auto;
      padding: 28px 0 48px;
    }
    .hero {
      text-align: center;
      padding: 28px 20px 22px;
      border: 1px solid rgba(255, 215, 80, 0.28);
      background: rgba(20, 8, 38, 0.55);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,.28);
    }
    .logo {
      width: 150px;
      max-width: 55%;
      display: block;
      margin: 0 auto 14px;
    }
    h1 {
      margin: 0;
      font-size: clamp(24px, 4vw, 42px);
      letter-spacing: .5px;
    }
    .sub {
      margin: 10px auto 0;
      max-width: 760px;
      color: rgba(255,255,255,.92);
      line-height: 1.65;
      font-size: 15px;
    }
    .pill {
      display: inline-block;
      margin-top: 14px;
      padding: 8px 14px;
      border-radius: 999px;
      background: linear-gradient(90deg, #ffd54f, #b8860b);
      color: #2b1400;
      font-weight: 700;
      font-size: 13px;
    }
    .grid {
      margin-top: 24px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }
    .card {
      position: relative;
      overflow: hidden;
      border-radius: 22px;
      background: rgba(18, 8, 36, 0.62);
      border: 1px solid rgba(255, 215, 80, 0.22);
      box-shadow: 0 10px 26px rgba(0,0,0,.26);
      backdrop-filter: blur(10px);
      min-height: 320px;
      display: flex;
      flex-direction: column;
    }
    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      display: block;
    }
    .card-body {
      padding: 16px 16px 18px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card h3 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #fff4c2;
    }
    .card p {
      margin: 0;
      color: rgba(255,255,255,.92);
      line-height: 1.65;
      font-size: 14px;
    }
    .btns {
      margin-top: auto;
      display: grid;
      gap: 10px;
      padding-top: 16px;
    }
    .btn {
      text-decoration: none;
      text-align: center;
      padding: 12px 14px;
      border-radius: 14px;
      font-weight: 700;
      transition: .2s ease;
    }
    .btn:hover { transform: translateY(-1px); }
    .btn-primary {
      background: linear-gradient(90deg, #ffd54f, #b8860b);
      color: #2d1600;
    }
    .btn-secondary {
      background: rgba(255,255,255,.1);
      color: #fff;
      border: 1px solid rgba(255,215,80,.24);
    }
    .footer-note {
      margin-top: 24px;
      padding: 18px;
      border-radius: 20px;
      background: rgba(18, 8, 36, 0.58);
      border: 1px solid rgba(255, 215, 80, 0.18);
      line-height: 1.7;
      color: rgba(255,255,255,.92);
      text-align: center;
    }
    @media (max-width: 900px) {
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 640px) {
      .wrap { width: min(94%, 560px); padding-top: 18px; }
      .grid { grid-template-columns: 1fr; }
      .hero { padding: 22px 14px 18px; }
      .card { min-height: auto; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <img class="logo" src="https://api2-crb.imgnxb.com/images/POd13iqh6aE/logo_96c00afb-2339-4071-aabc-5685e6905423.gif" alt="Ceriabet Logo">
      <h1>Pusat Bantuan CERIABET</h1>
      <p class="sub">Ini contoh tampilan <b>semacam membersite</b> dengan background penuh, card premium, dan tombol cepat. Jadi kamu bisa lihat hasil visual yang kamu maksud sebelum dipasang ke sistem lain.</p>
      <div class="pill">Preview Membersite Style</div>
    </section>

    <section class="grid">
      <article class="card">
        <img src="https://plcl.me/images/znpiv.png" alt="Deposit">
        <div class="card-body">
          <h3>💳 Tutorial Deposit</h3>
          <p>Ikuti panduan deposit dengan langkah yang rapi, jelas, dan mudah dipahami agar proses masuk saldo lebih cepat.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://access.vpnceria.life/ceriabet-login" target="_blank">Login Ceriabet</a>
            <a class="btn btn-secondary" href="#">Butuh Bantuan Tasya?</a>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://plcl.me/images/znpiv.png" alt="Withdraw">
        <div class="card-body">
          <h3>💸 Tutorial Withdraw</h3>
          <p>Panduan penarikan dana agar proses withdraw lebih lancar, aman, dan minim kendala saat pengecekan data.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://access.vpnceria.life/cara-withdraw" target="_blank">Lihat Tutorial</a>
            <a class="btn btn-secondary" href="#">Butuh Bantuan Tasya?</a>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://plcl.me/images/XcgHR.jpg" alt="Panduan Permainan">
        <div class="card-body">
          <h3>🎮 Panduan Permainan</h3>
          <p>Lihat panduan permainan CERIABET untuk memahami fitur, alur bermain, dan akses informasi penting lainnya.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://access.vpnceria.life/panduan-ceriabet" target="_blank">Lihat Panduan</a>
            <a class="btn btn-secondary" href="#">Butuh Bantuan Tasya?</a>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://plcl.me/images/XcgHR.jpg" alt="Bukti JP">
        <div class="card-body">
          <h3>🏆 Bukti JP & Win</h3>
          <p>Lihat hasil kemenangan member dan bukti JP terbaru untuk memberikan gambaran pengalaman bermain di CERIABET.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://access.vpnceria.life/buktijp-ceriabet" target="_blank">Lihat Bukti JP</a>
            <a class="btn btn-secondary" href="#">Butuh Bantuan Tasya?</a>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://plcl.me/images/XcgHR.jpg" alt="Download APK">
        <div class="card-body">
          <h3>📲 Download APK</h3>
          <p>Dapatkan aplikasi resmi anti blokir untuk pengalaman akses yang lebih stabil, cepat, dan nyaman.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://access.vpnceria.life/ceriabet-apk" target="_blank">Download APK</a>
            <a class="btn btn-secondary" href="https://access.vpnceria.life/cara-download-apk" target="_blank">Lihat Tutorial</a>
          </div>
        </div>
      </article>

      <article class="card">
        <img src="https://plcl.me/images/VkZkA.jpg" alt="Promo">
        <div class="card-body">
          <h3>🎁 Promo & VIP Exclusive</h3>
          <p>Lihat informasi promosi terbaru, benefit member VIP/VVIP, serta berbagai keuntungan eksklusif lainnya.</p>
          <div class="btns">
            <a class="btn btn-primary" href="https://vipceriabetlinkresmi.space/promotion" target="_blank">Lihat Promo</a>
            <a class="btn btn-secondary" href="#">Butuh Bantuan Tasya?</a>
          </div>
        </div>
      </article>
    </section>

    <div class="footer-note">
      Mohon gunakan bahasa yang sopan ya kak 🙏 Kami di sini untuk membantu sebaik mungkin ❤️
    </div>
  </div>
</body>
</html>
