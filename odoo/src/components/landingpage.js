<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ReWear – Community Clothing Exchange</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: 'Segoe UI', sans-serif; margin: 0; background: #f7fafc; color: #222; }
    .navbar { background: #fff; box-shadow: 0 2px 8px #eee; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
    .navbar .logo { font-size: 26px; color: #2d7a46; font-weight: bold; letter-spacing: 1px; }
    .navbar .cta { font-size: 16px; color: #2d7a46; text-decoration: none; font-weight: 500; }
    .hero { text-align: center; padding: 60px 20px 30px 20px; }
    .hero h1 { font-size: 42px; color: #2d7a46; margin-bottom: 18px; }
    .hero p { font-size: 20px; color: #444; max-width: 600px; margin: 0 auto 30px auto; }
    .cta-buttons { margin: 36px 0 0 0; }
    .cta-buttons a {
      background: #2d7a46; color: #fff; padding: 14px 28px;
      border-radius: 8px; text-decoration: none; font-weight: bold; margin: 0 10px;
      display: inline-block; transition: background 0.2s;
    }
    .cta-buttons a.secondary {
      background: #fff; color: #2d7a46; border: 2px solid #2d7a46;
    }
    .cta-buttons a:hover { background: #226637; color: #fff; }
    .cta-buttons a.secondary:hover { background: #e6f4ea; color: #2d7a46; }
    .carousel-section { max-width: 420px; margin: 50px auto 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #eee; padding: 24px 0 16px 0; text-align: center; }
    .carousel-section h2 { color: #2d7a46; margin-bottom: 18px; }
    .carousel { position: relative; }
    .carousel img { width: 90%; height: 220px; object-fit: cover; border-radius: 8px; }
    .carousel-title { font-size: 20px; margin: 12px 0 6px 0; }
    .carousel-desc { color: #555; font-size: 15px; margin-bottom: 12px; }
    .carousel-btns button {
      background: #e6f4ea; color: #2d7a46; border: none; border-radius: 6px;
      font-size: 18px; font-weight: bold; margin: 0 8px; padding: 7px 18px; cursor: pointer;
      transition: background 0.2s;
    }
    .carousel-btns button:hover { background: #b7e4c7; }
    footer { background: #fff; text-align: center; padding: 22px 0; margin-top: 60px; box-shadow: 0 -1px 4px #eee; color: #888; }
    @media (max-width: 600px) {
      .navbar { flex-direction: column; padding: 15px 10px; }
      .hero h1 { font-size: 30px; }
      .carousel-section { max-width: 99%; }
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <div class="navbar">
    <span class="logo">ReWear</span>
    <a href="#cta" class="cta">Get Started</a>
  </div>

  <!-- Platform Introduction -->
  <section class="hero">
    <h1>Welcome to ReWear</h1>
    <p>
      ReWear is a community platform for exchanging unused clothing.<br>
      Swap directly or use points to redeem new finds, and join the movement for sustainable fashion!
    </p>
    <!-- Calls-to-action -->
    <div class="cta-buttons" id="cta">
      <a href="/register">Start Swapping</a>
      <a href="/browse" class="secondary">Browse Items</a>
      <a href="/list" class="secondary">List an Item</a>
    </div>
  </section>

  <!-- Featured Items Carousel -->
  <section class="carousel-section">
    <h2>Featured Items</h2>
    <div class="carousel">
      <img id="carousel-img" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="Blue Denim Jacket">
      <div class="carousel-title" id="carousel-title">Blue Denim Jacket</div>
      <div class="carousel-desc" id="carousel-desc">Trendy denim jacket in great condition.</div>
      <div class="carousel-btns">
        <button onclick="prevItem()">&#9664;</button>
        <button onclick="nextItem()">&#9654;</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 ReWear. All rights reserved.
  </footer>

  <!-- Carousel Script -->
  <script>
    const items = [
      {
        title: "Blue Denim Jacket",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
        desc: "Trendy denim jacket in great condition."
      },
      {
        title: "Red Summer Dress",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
        desc: "Lightweight and perfect for summer."
      },
      {
        title: "Classic White Shirt",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        desc: "A wardrobe staple, barely used."
      }
    ];
    let current = 0;
    function showItem(idx) {
      document.getElementById('carousel-img').src = items[idx].image;
      document.getElementById('carousel-img').alt = items[idx].title;
      document.getElementById('carousel-title').textContent = items[idx].title;
      document.getElementById('carousel-desc').textContent = items[idx].desc;
    }
    function nextItem() {
      current = (current + 1) % items.length;
      showItem(current);
    }
    function prevItem() {
      current = (current - 1 + items.length) % items.length;
      showItem(current);
    }
  </script>
</body>
</html>
