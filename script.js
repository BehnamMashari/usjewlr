// ── Cart State ───────────────────────────────
let cart = JSON.parse(localStorage.getItem('usjewlr_cart') || '[]');

function saveCart() { localStorage.setItem('usjewlr_cart', JSON.stringify(cart)); }

function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function addToCart(id, name, price, image, variant) {
  const existing = cart.find(i => i.id === id && i.variant === variant);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name, price, image, variant: variant || '', qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`${name} added to bag`);
  openCartDrawer();
}

function removeFromCart(id, variant) {
  cart = cart.filter(i => !(i.id === id && i.variant === variant));
  saveCart();
  updateCartUI();
  renderDrawerItems();
  if (document.querySelector('.cart-layout')) renderCartPage();
}

function updateQty(id, variant, delta) {
  const item = cart.find(i => i.id === id && i.variant === variant);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderDrawerItems();
  if (document.querySelector('.cart-layout')) renderCartPage();
}

// ── UI Updates ────────────────────────────────
function updateCartUI() {
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = cartCount(); });
}

// ── Header Scroll ─────────────────────────────
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile Nav ────────────────────────────────
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('mobile-open'));
}

// ── Cart Drawer ───────────────────────────────
function openCartDrawer() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
  renderDrawerItems();
}
function closeCartDrawer() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
}

function renderDrawerItems() {
  const el = document.getElementById('drawer-items');
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = '<p style="text-align:center;color:var(--mid);padding:40px 0;font-size:14px;">Your bag is empty.</p>';
  } else {
    el.innerHTML = cart.map(item => `
      <div class="drawer-item">
        <div class="drawer-item-img"><img src="${item.image}" alt="${item.name}" onerror="this.parentElement.style.background='var(--greige)'"></div>
        <div class="drawer-item-info">
          <div class="drawer-item-name">${item.name}</div>
          ${item.variant ? `<div style="font-size:12px;color:var(--mid)">${item.variant}</div>` : ''}
          <div class="drawer-item-price">$${(item.price * item.qty).toFixed(2)} &nbsp;×&nbsp; ${item.qty}</div>
        </div>
        <button class="drawer-item-remove" onclick="removeFromCart('${item.id}','${item.variant}')">×</button>
      </div>`).join('');
  }
  const tot = document.getElementById('drawer-total');
  if (tot) tot.textContent = `$${cartTotal().toFixed(2)}`;
}

// ── Toast ─────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Gallery (Product Detail) ──────────────────
function initGallery() {
  document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const main = document.querySelector('.gallery-main img');
      if (main) main.src = thumb.querySelector('img')?.src || main.src;
    });
  });
}

// ── Tabs ──────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      btn.closest('.product-tabs').querySelectorAll('.tab-header').forEach(b => b.classList.remove('active'));
      btn.closest('.product-tabs').querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

// ── Qty Selector ─────────────────────────────
function initQtySelectors() {
  document.querySelectorAll('.qty-selector').forEach(sel => {
    const input = sel.querySelector('input');
    sel.querySelector('.qty-minus')?.addEventListener('click', () => {
      input.value = Math.max(1, parseInt(input.value) - 1);
    });
    sel.querySelector('.qty-plus')?.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
    });
  });
}

// ── Swatches ─────────────────────────────────
function initSwatches() {
  document.querySelectorAll('.option-swatches').forEach(group => {
    group.querySelectorAll('.swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        group.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        sw.classList.add('active');
      });
    });
  });
}

// ── Payment Method Toggle ─────────────────────
function initPaymentMethods() {
  document.querySelectorAll('.payment-method-header input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
      radio.closest('.payment-method').classList.add('active');
    });
  });
}

// ── Cart Page ─────────────────────────────────
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:60px 0">
        <p style="font-size:18px;font-family:'Cormorant Garamond',serif;margin-bottom:16px;color:var(--charcoal)">Your bag is empty</p>
        <a href="shop.html" class="btn">Continue Shopping</a>
      </div>`;
  } else {
    container.innerHTML = `
      <div class="cart-header-row">
        <span>Product</span><span>Price</span><span>Quantity</span><span>Total</span><span></span>
      </div>
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" onerror="this.parentElement.style.background='var(--greige)'"></div>
            <div>
              <div class="cart-item-name">${item.name}</div>
              ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
            </div>
          </div>
          <div style="font-size:15px">$${item.price.toFixed(2)}</div>
          <div class="qty-selector" style="width:fit-content">
            <button class="qty-minus" onclick="updateQty('${item.id}','${item.variant}',-1)">−</button>
            <input type="number" value="${item.qty}" min="1" readonly style="width:48px">
            <button class="qty-plus" onclick="updateQty('${item.id}','${item.variant}',1)">+</button>
          </div>
          <div style="font-size:15px">$${(item.price * item.qty).toFixed(2)}</div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}','${item.variant}')">×</button>
        </div>`).join('')}`;
  }

  const subtotal = cartTotal();
  const shipping = subtotal > 150 ? 0 : 12.95;
  const total = subtotal + shipping;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
}

// ── Checkout Summary ──────────────────────────
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-order-items');
  const subtEl = document.getElementById('co-subtotal');
  const totEl = document.getElementById('co-total');
  if (!el) return;

  el.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="order-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.parentElement.style.background='var(--greige)'">
        <span class="order-item-badge">${item.qty}</span>
      </div>
      <span class="order-item-name">${item.name}${item.variant ? '<br><small style="color:var(--mid)">' + item.variant + '</small>' : ''}</span>
      <span class="order-item-price">$${(item.price * item.qty).toFixed(2)}</span>
    </div>`).join('');

  const subtotal = cartTotal();
  const shipping = subtotal > 150 ? 0 : 12.95;
  if (subtEl) subtEl.textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('co-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (totEl) totEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

// ── Place Order ───────────────────────────────
function placeOrder(e) {
  e.preventDefault();
  cart = [];
  saveCart();
  updateCartUI();
  window.location.href = 'success.html';
}

// ── Newsletter ────────────────────────────────
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input');
      showToast('Thank you for subscribing!');
      if (input) input.value = '';
    });
  });
}

// ── Filter (shop page) ────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-option input').forEach(cb => {
    cb.addEventListener('change', () => {
      // visual feedback only in this static build
      showToast('Filter applied');
    });
  });
}

// ── Promo Code ────────────────────────────────
function applyPromo() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'WELCOME10') {
    showToast('10% discount applied!');
  } else if (code === 'FREESHIP') {
    showToast('Free shipping applied!');
  } else {
    showToast('Invalid promo code');
  }
}

// ── Contact Form ──────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We\'ll be in touch soon.');
    form.reset();
  });
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initMobileNav();
  initGallery();
  initTabs();
  initQtySelectors();
  initSwatches();
  initPaymentMethods();
  initNewsletter();
  initFilters();
  initContactForm();

  // Cart drawer
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);
  document.getElementById('btn-open-cart')?.addEventListener('click', openCartDrawer);

  // Cart page
  if (document.querySelector('.cart-layout')) renderCartPage();

  // Checkout summary
  if (document.querySelector('.checkout-layout')) renderCheckoutSummary();

  // Checkout form
  document.getElementById('checkout-form')?.addEventListener('submit', placeOrder);

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
