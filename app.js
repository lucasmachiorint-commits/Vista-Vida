/* ==========================================================================
   CHÁCARA RECANTO DAS ÁGUAS — CORE APPLICATION & CMS ENGINE
   ========================================================================== */

(function() {
  'use strict';

  // --- DEFAULT MOCK DATA STORE ---
  const DEFAULT_DATA = {
    property: {
      name: "Chácara Vista Vida",
      title: "Chácara Vista Vida — Lazer, Conforto e Natureza",
      description: "Um verdadeiro refúgio de paz a apenas 50 minutos de São Paulo! \n\nA propriedade conta com mais de 3.500m² de área verde totalmente murada e privativa, ampla piscina climatizada com prainha para crianças, área gourmet completa integrada à churrasqueira e forno de pizza a lenha, salão de jogos com bilhar oficial e pebolim, além de campo de futebol gramado com iluminação noturna.\n\nIdeal para reuniões familiares, aniversários intimistas e finais de semana relaxantes com amigos.",
      sleeps: 15,
      events: 80,
      bedrooms: 4,
      bathrooms: 5,
      parking: 10,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo de embed
      address: "Estrada José Maria Tonelli, 1720, Socorro - SP, CEP 13960-000",
      shortAddress: "Socorro, São Paulo - Brasil",
      lat: -22.6929619,
      lng: -46.5522407,
      mapsUrl: "https://maps.app.goo.gl/qX321VcuqdVGxf248",
      roadInfo: "Acesso fácil pela Estrada José Maria Tonelli, via tranquila e bem sinalizada para qualquer veículo de passeio, permitindo chegada segura tanto de dia quanto à noite."
    },
    prices: {
      weekday: 750,
      weekend: 1100,
      holiday: 1400,
      extraGuest: 60,
      includedGuests: 10,
      cleaningFee: 350,
      securityDeposit: 500
    },
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", category: "fachada", caption: "Vista panorâmica da fachada e jardins principais" },
      { id: 2, url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80", category: "piscina", caption: "Piscina climatizada com cascata e espreguiçadeiras" },
      { id: 3, url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", category: "churrasqueira", caption: "Área gourmet com churrasqueira, forno de pizza e bancada" },
      { id: 4, url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", category: "quartos", caption: "Suíte master com cama queen e vista para a mata" },
      { id: 5, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", category: "interior", caption: "Salão de estar integrado com pé direito alto" },
      { id: 6, url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", category: "piscina", caption: "Vista noturna com iluminação de LED na piscina" },
      { id: 7, url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", category: "fachada", caption: "Área de estacionamento amplo para até 10 carros" }
    ],
    amenities: [
      { id: 1, name: "Wi-Fi Fibra Alta Velocidade", icon: "📶", category: "Conectividade" },
      { id: 2, name: "Piscina Climatizada c/ Cascata", icon: "🏊‍♂️", category: "Lazer" },
      { id: 3, name: "Churrasqueira & Forno de Pizza", icon: "🍖", category: "Lazer" },
      { id: 4, name: "Mesa de Bilhar / Sinuca Oficial", icon: "🎱", category: "Lazer" },
      { id: 5, name: "Campo de Futebol Gramado", icon: "⚽", category: "Lazer" },
      { id: 6, name: "Ar-Condicionado nos Quartos", icon: "❄️", category: "Conforto" },
      { id: 7, name: "Cozinha Completa c/ Utensílios", icon: "🍳", category: "Conforto" },
      { id: 8, name: "Freezer Horizontal & Cervejeira", icon: "🍻", category: "Conforto" },
      { id: 9, name: "Caixa de Som Bluetooth Amplificada", icon: "🔊", category: "Lazer" },
      { id: 10, name: "Estacionamento Amplo Fechado", icon: "🚗", category: "Comodidade" },
      { id: 11, name: "Permite Animais de Estimação", icon: "🐾", category: "Comodidade" },
      { id: 12, name: "Ducha Externa na Piscina", icon: "🚿", category: "Lazer" }
    ],
    rules: [
      { id: 1, title: "Horário de Silêncio e Decibéis", desc: "Som moderado durante o dia. A partir das 22h00 até 08h00, som apenas ambiente interno acústico (limite legal de 60 dB). Proibido som automotivo em qualquer horário.", icon: "🔇" },
      { id: 2, title: "Tipo de Evento Permitido", desc: "Permitidas reuniões familiares, aniversários, batizados e churrascos de amigos. Proibidas festas rave abertas com venda de ingressos ou público não identificado.", icon: "🎉" },
      { id: 3, title: "Política Pet Friendly", desc: "Aceitamos cães de pequeno e médio porte bem comportados. É obrigatório recolher os dejetos no gramado e zelar pelo estofamento dos móveis.", icon: "🐶" },
      { id: 4, title: "Regras de Limpeza e Entrega", desc: "O imóvel é entregue limpo e esterilizado. Na saída, a louça deve estar lavada, lixo recolhido em sacos fechados e churrasqueira sem cinzas soltas.", icon: "🧹" }
    ],
    nearbyPoints: [
      { id: 1, title: "Supermercado Rofatto / Da Villa", desc: "A 8 min de carro (centro de Socorro, açougue e padaria)" },
      { id: 2, title: "Adega & Distribuidora de Bebidas", desc: "A 6 min de carro (gelo, bebidas e carvão com entrega rápida)" },
      { id: 3, title: "Farmácia Droga Raia / Farma Conde", desc: "A 8 min de carro no centro" },
      { id: 4, title: "Santa Casa / Hospital de Socorro", desc: "A 10 min de carro com pronto atendimento 24h" }
    ],
    recommendations: [
      { id: 1, name: "Mirante da Pedra Bela Vista", category: "passeio", dist: 9.5, desc: "Ponto turístico mais famoso de Socorro. Vista panorâmica espetacular, pôr do sol inesquecível e gastrobar.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", maps: "https://maps.google.com" },
      { id: 2, name: "Rafting & Ecoturismo no Rio do Peixe", category: "passeio", dist: 8.0, desc: "Parques de aventura com descida de rafting familiar, tirolesa e cachoeiras no polo do turismo de aventura.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", maps: "https://maps.google.com" },
      { id: 3, name: "Restaurante Fogão a Lenha do Lago", category: "restaurante", dist: 5.5, desc: "Culinária caipira autêntica servida em panelas de barro no fogão a lenha com vista para as colinas.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", maps: "https://maps.google.com" },
      { id: 4, name: "Pizzaria e Trattoria Della Nonna", category: "restaurante", dist: 6.0, desc: "Massas artesanais e pizzas crocantes assadas no forno a lenha, com entrega na chácara.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80", maps: "https://maps.google.com" },
      { id: 5, name: "Empório e Alambique do Circuito das Águas", category: "mercado", dist: 5.0, desc: "Queijos artesanais premiados, doces mineiros caseiros, cachaças envelhecidas e vinhos da serra.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80", maps: "https://maps.google.com" }
    ],
    reviews: [],
    faqs: [
      { id: 1, q: "Quais são os horários padrão de Check-in e Check-out?", a: "Para estadias de fim de semana, o check-in tem início às sextas-feiras a partir das 17h00 e o check-out ocorre aos domingos até as 18h00. Horários flexíveis podem ser combinados com o proprietário mediante disponibilidade." },
      { id: 2, q: "Como funciona a assinatura do contrato pelo GOV.BR?", a: "Após a aprovação da solicitação pelo proprietário, o sistema gera automaticamente o PDF do Contrato de Locação por Temporada. Você pode baixá-lo e assiná-lo gratuitamente em poucos segundos no portal oficial 'assinatura.gov.br' usando sua conta GOV Prata ou Ouro, com plena validade jurídica." },
      { id: 3, q: "A piscina é realmente aquecida / climatizada?", a: "Sim! A piscina conta com sistema de aquecimento solar com apoio térmico, mantendo a água em temperatura agradável para banho mesmo nos dias de menor calor." },
      { id: 4, q: "Como funciona o caução de garantia?", a: "O caução é um depósito de garantia contra eventuais danos estruturais graves. Ele é recolhido antes da entrega das chaves e devolvido integralmente em até 24h após a vistoria de saída com a entrega do imóvel nas mesmas condições." },
      { id: 5, q: "Posso agendar uma visita presencial antes de reservar?", a: "Sim, visitas prévias podem ser agendadas pelo WhatsApp diretamente com o proprietário durante dias de semana em que o imóvel não estiver ocupado por hóspedes." }
    ],
    blockedDates: [
      { start: "2026-10-10", end: "2026-10-12", reason: "Feriado N. Sra. Aparecida (Reservado)" },
      { start: "2026-11-20", end: "2026-11-22", reason: "Manutenção Preventiva da Área Verde" }
    ],
    bookings: [
      {
        id: "REC-2026-001",
        guestName: "Roberto Silveira Lima",
        cpf: "123.456.789-00",
        phone: "(11) 98765-4321",
        email: "roberto.lima@email.com",
        purpose: "Familiar",
        checkin: "2026-10-16",
        checkout: "2026-10-18",
        guestsCount: 12,
        total: 2670,
        status: "Solicitada",
        createdAt: "2026-09-21T14:30:00",
        notes: "Comemorar aniversário do meu sogro. Levamos 1 cão pequeno."
      },
      {
        id: "REC-2026-002",
        guestName: "Beatriz Nogueira",
        cpf: "321.654.987-11",
        phone: "(11) 97654-3210",
        email: "beatriz@email.com",
        purpose: "Familiar",
        checkin: "2026-10-23",
        checkout: "2026-10-25",
        guestsCount: 8,
        total: 2550,
        status: "Aprovada",
        createdAt: "2026-09-20T09:15:00",
        notes: "Aguardando pagamento via PIX."
      }
    ]
  };

  // --- STATE CONTROLLER (LOCALSTORAGE PERSISTENCE) ---
  const STORAGE_KEY = 'chacara_vista_vida_db_v3';

  function loadState() {
    try {
      // Clear legacy storage keys
      localStorage.removeItem('chacara_recanto_aguas_db_v1');
      localStorage.removeItem('chacara_vista_vida_db_v2');
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (!parsed.reviews) parsed.reviews = [];
        return parsed;
      }
    } catch (e) {
      console.warn("Erro ao carregar dados do LocalStorage, usando defaults:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Erro ao salvar no LocalStorage:", e);
    }
  }

  let state = loadState();

  // --- DATE & PRICE CALCULATOR ---
  let selectedCheckin = null;
  let selectedCheckout = null;
  let selectedGuests = 2;
  let currentCalDate = new Date(2026, 8, 1); // Setembro 2026

  function isDateBlocked(dateStr) {
    // Check in blockedDates
    for (const b of state.blockedDates) {
      if (dateStr >= b.start && dateStr <= b.end) return true;
    }
    // Check in bookings that are confirmed or approved
    for (const b of state.bookings) {
      if ((b.status === 'Aprovada' || b.status === 'Paga' || b.status === 'Confirmada') &&
          dateStr >= b.checkin && dateStr <= b.checkout) {
        return true;
      }
    }
    return false;
  }

  function formatDateBR(date) {
    const d = ('0' + date.getDate()).slice(-2);
    const m = ('0' + (date.getMonth() + 1)).slice(-2);
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  }

  function formatISODate(date) {
    const y = date.getFullYear();
    const m = ('0' + (date.getMonth() + 1)).slice(-2);
    const d = ('0' + date.getDate()).slice(-2);
    return `${y}-${m}-${d}`;
  }

  function calculateBookingCost(checkinStr, checkoutStr, guests) {
    if (!checkinStr || !checkoutStr) return null;

    const start = new Date(checkinStr + 'T00:00:00');
    const end = new Date(checkoutStr + 'T00:00:00');
    if (end <= start) return null;

    let nights = 0;
    let baseTotal = 0;
    let cur = new Date(start);

    while (cur < end) {
      nights++;
      const dayOfWeek = cur.getDay(); // 0 is Sun, 5 is Fri, 6 is Sat
      const isWeekend = (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0);
      
      const rate = isWeekend ? state.prices.weekend : state.prices.weekday;
      baseTotal += rate;
      cur.setDate(cur.getDate() + 1);
    }

    // Extra guests
    let extraGuestsCount = Math.max(0, guests - state.prices.includedGuests);
    let extraGuestsFee = extraGuestsCount * state.prices.extraGuest * nights;

    let cleaning = state.prices.cleaningFee;
    let deposit = state.prices.securityDeposit;
    let grandTotal = baseTotal + extraGuestsFee + cleaning + deposit;

    return {
      nights,
      baseTotal,
      extraGuestsCount,
      extraGuestsFee,
      cleaning,
      deposit,
      grandTotal,
      avgNight: Math.round(baseTotal / nights)
    };
  }

  // --- RATING & REVIEWS CALCULATOR ---
  function getRatingStats() {
    const reviews = state.reviews || [];
    if (reviews.length === 0) {
      return {
        count: 0,
        avg: 0,
        isNew: true,
        headerBadgeScore: "Novo",
        headerBadgeCount: "(Sem avaliações ainda)",
        cardBadge: "★ Novo",
        sectionSummary: "★ Novo • Sem avaliações ainda",
        adminAvg: "★ Novo"
      };
    }

    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
    const avg = (sum / reviews.length).toFixed(2);
    const count = reviews.length;
    const plural = count > 1 ? 's' : '';

    return {
      count,
      avg,
      isNew: false,
      headerBadgeScore: avg,
      headerBadgeCount: `(${count} avaliação${plural})`,
      cardBadge: `★ ${avg} (${count})`,
      sectionSummary: `★ ${avg} • ${count} avaliação${plural}`,
      adminAvg: `★ ${avg}`
    };
  }

  // --- RENDER DOM FUNCTIONS ---

  function renderPublicView() {
    // Header & Property Specs
    document.getElementById('header-property-name').textContent = state.property.name;
    document.getElementById('display-title').textContent = state.property.title;
    document.getElementById('display-short-address').textContent = state.property.shortAddress;
    document.getElementById('display-full-address').textContent = state.property.address;
    document.getElementById('property-description').textContent = state.property.description;
    document.getElementById('access-road-info').textContent = state.property.roadInfo;

    // Dynamic Rating Badges & Indicators
    const stats = getRatingStats();
    const ratingScoreEl = document.getElementById('rating-score');
    const reviewsCountWrapperEl = document.getElementById('reviews-count-wrapper');
    if (ratingScoreEl) ratingScoreEl.textContent = stats.headerBadgeScore;
    if (reviewsCountWrapperEl) reviewsCountWrapperEl.textContent = stats.headerBadgeCount;

    const cardRatingEl = document.getElementById('card-rating-display');
    if (cardRatingEl) cardRatingEl.textContent = stats.cardBadge;

    const sectionReviewsSummaryEl = document.getElementById('section-reviews-summary');
    if (sectionReviewsSummaryEl) sectionReviewsSummaryEl.textContent = stats.sectionSummary;

    // Google Maps Link & Embedded Iframe Dynamic Update
    const mapsLinkBtn = document.getElementById('btn-google-maps-link');
    if (mapsLinkBtn) {
      mapsLinkBtn.href = state.property.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state.property.address)}`;
    }

    const mapIframe = document.getElementById('google-maps-iframe');
    if (mapIframe) {
      const lat = state.property.lat || -22.6929619;
      const lng = state.property.lng || -46.5522407;
      mapIframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=pt&z=16&output=embed`;
    }

    document.getElementById('spec-sleep').textContent = `Dormem até ${state.property.sleeps}`;
    document.getElementById('spec-event').textContent = `Festas até ${state.property.events}`;
    document.getElementById('spec-rooms').textContent = `${state.property.bedrooms} Qts / ${state.property.bathrooms} Banh.`;
    document.getElementById('spec-parking').textContent = `${state.property.parking} Veículos`;
    document.getElementById('card-price-display').textContent = `R$ ${state.prices.weekday}`;
    document.getElementById('mobile-price-val').textContent = `R$ ${state.prices.weekday}`;

    // Airbnb 5-Photo Mosaic Grid
    renderPhotoMosaic();

    // Amenities
    renderAmenities();

    // House Rules
    renderRules();

    // Nearby Points
    renderNearbyPoints();

    // Recommendations
    renderRecommendations('todos');

    // Reviews
    renderReviews();

    // FAQs
    renderFAQs();

    // Mini Calendar in Booking Card
    renderBookingCalendar();
  }

  function renderPhotoMosaic() {
    const container = document.getElementById('mosaic-container');
    const photos = state.photos;
    document.getElementById('total-photos-count').textContent = photos.length;

    if (!photos || photos.length === 0) {
      container.innerHTML = '<div style="padding: 2rem; text-align: center;">Nenhuma foto cadastrada.</div>';
      return;
    }

    // Select up to 5 photos for the mosaic
    const hero = photos[0];
    const rest = photos.slice(1, 5);

    let html = `
      <div class="mosaic-item mosaic-hero" onclick="window.appOpenGallery('todos')">
        <img src="${hero.url}" alt="${hero.caption || 'Foto principal'}" loading="lazy">
      </div>
    `;

    rest.forEach((p, idx) => {
      html += `
        <div class="mosaic-item" onclick="window.appOpenGallery('${p.category}')">
          <img src="${p.url}" alt="${p.caption || 'Foto ' + (idx + 2)}" loading="lazy">
        </div>
      `;
    });

    container.innerHTML = html;
  }

  function renderAmenities() {
    const container = document.getElementById('amenities-container');
    container.innerHTML = state.amenities.map(a => `
      <div class="amenity-item">
        <span class="icon">${a.icon || '✓'}</span>
        <div>
          <div style="font-weight: 600; color: var(--dark);">${a.name}</div>
          <div style="font-size: 0.75rem; color: var(--gray-500);">${a.category || 'Geral'}</div>
        </div>
      </div>
    `).join('');
  }

  function renderRules() {
    const container = document.getElementById('rules-container');
    container.innerHTML = state.rules.map(r => `
      <div class="rule-card">
        <div class="rule-header">
          <span>${r.icon || '📌'}</span>
          <span>${r.title}</span>
        </div>
        <div class="rule-desc">${r.desc}</div>
      </div>
    `).join('');
  }

  function renderNearbyPoints() {
    const container = document.getElementById('nearby-points-container');
    container.innerHTML = state.nearbyPoints.map(p => `
      <div style="background: var(--white); border: 1px solid var(--gray-200); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
        <div style="font-weight: 600; font-size: 0.9rem;">${p.title}</div>
        <div style="font-size: 0.8rem; color: var(--gray-500);">${p.desc}</div>
      </div>
    `).join('');
  }

  function renderRecommendations(cat) {
    const container = document.getElementById('recommendations-container');
    const filtered = (cat === 'todos') 
      ? state.recommendations 
      : state.recommendations.filter(r => r.category === cat);

    if (filtered.length === 0) {
      container.innerHTML = '<div style="color: var(--gray-500); padding: 1rem 0;">Nenhuma recomendação nesta categoria.</div>';
      return;
    }

    container.innerHTML = filtered.map(r => `
      <div class="rec-card">
        <img src="${r.img || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'}" alt="${r.name}" class="rec-img" loading="lazy">
        <div class="rec-body">
          <div class="rec-meta">
            <span>${r.category === 'restaurante' ? '🍽️ Restaurante' : r.category === 'passeio' ? '🎯 Lazer' : '🛒 Comércio'}</span>
            <span>📍 ${r.dist ? r.dist + ' km' : 'Próximo'}</span>
          </div>
          <h4 style="font-size: 1rem;">${r.name}</h4>
          <p style="font-size: 0.85rem; color: var(--gray-700);">${r.desc}</p>
          ${r.maps ? `<a href="${r.maps}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: var(--forest-green); font-weight: 600; text-decoration: underline; margin-top: 0.25rem;">Abrir no Google Maps ↗</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    if (!state.reviews || state.reviews.length === 0) {
      container.innerHTML = `
        <div class="empty-reviews-card">
          <span class="empty-icon">⭐</span>
          <h3>Seja o primeiro a avaliar a Chácara Vista Vida!</h3>
          <p>Você já se hospedou conosco? Compartilhe sua experiência sobre a estrutura, piscina, acomodações e atendimento para orientar outros visitantes.</p>
          <button class="btn-primary" onclick="window.appOpenReviewModal()" style="font-size: 0.9rem; padding: 0.6rem 1.4rem;">
            ⭐ Deixar uma Avaliação
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = state.reviews.map(rev => {
      const rating = Number(rev.rating) || 5;
      const starsStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);

      return `
        <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; background: var(--white); box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--dark); font-size: 0.95rem;">${rev.author}</strong>
            <span style="color: #ff385c; letter-spacing: 2px;">${starsStr}</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--gray-500);">${rev.date || 'Hóspede recente'}</div>
          <p style="font-size: 0.9rem; color: var(--gray-700); line-height: 1.5;">"${rev.comment}"</p>
        </div>
      `;
    }).join('');
  }

  function renderFAQs() {
    const container = document.getElementById('faq-container');
    container.innerHTML = state.faqs.map((f, idx) => `
      <div class="faq-item" id="faq-item-${f.id}">
        <button class="faq-question" onclick="window.appToggleFaq(${f.id})">
          <span>${f.q}</span>
          <span class="faq-icon" style="font-size: 1.25rem;">+</span>
        </button>
        <div class="faq-answer">
          ${f.a}
        </div>
      </div>
    `).join('');
  }

  // --- CALENDAR RENDERER & INTERACTION ---
  function renderBookingCalendar() {
    const titleEl = document.getElementById('cal-month-title');
    const grid = document.getElementById('calendar-days-container');

    const year = currentCalDate.getFullYear();
    const month = currentCalDate.getMonth();
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    titleEl.textContent = `${monthNames[month]} ${year}`;

    // Header D S T Q Q S S
    let html = `
      <div class="cal-day-header">D</div>
      <div class="cal-day-header">S</div>
      <div class="cal-day-header">T</div>
      <div class="cal-day-header">Q</div>
      <div class="cal-day-header">Q</div>
      <div class="cal-day-header">S</div>
      <div class="cal-day-header">S</div>
    `;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Blank cells before day 1
    for (let i = 0; i < firstDay; i++) {
      html += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month, day);
      const iso = formatISODate(d);
      const blocked = isDateBlocked(iso);

      let classes = ['cal-day'];
      if (blocked) {
        classes.push('occupied');
      } else {
        classes.push('available');
      }

      if (selectedCheckin === iso || selectedCheckout === iso) {
        classes.push('selected');
      } else if (selectedCheckin && selectedCheckout && iso > selectedCheckin && iso < selectedCheckout) {
        classes.push('in-range');
      }

      html += `
        <div class="${classes.join(' ')}" onclick="window.appSelectCalendarDate('${iso}', ${blocked})">
          ${day}
        </div>
      `;
    }

    grid.innerHTML = html;
  }

  window.appSelectCalendarDate = function(iso, blocked) {
    if (blocked) {
      alert("Esta data já se encontra ocupada ou bloqueada pelo proprietário.");
      return;
    }

    if (!selectedCheckin || (selectedCheckin && selectedCheckout)) {
      selectedCheckin = iso;
      selectedCheckout = null;
    } else if (selectedCheckin && !selectedCheckout) {
      if (iso <= selectedCheckin) {
        selectedCheckin = iso;
      } else {
        // Check if any date between checkin and checkout is blocked
        let cur = new Date(selectedCheckin + 'T00:00:00');
        const end = new Date(iso + 'T00:00:00');
        let hasConflict = false;

        while (cur <= end) {
          if (isDateBlocked(formatISODate(cur))) {
            hasConflict = true;
            break;
          }
          cur.setDate(cur.getDate() + 1);
        }

        if (hasConflict) {
          alert("O intervalo selecionado contém datas já ocupadas. Escolha outro período.");
          return;
        }

        selectedCheckout = iso;
      }
    }

    updatePriceAndDisplay();
    renderBookingCalendar();
  };

  function updatePriceAndDisplay() {
    const valIn = document.getElementById('val-checkin');
    const valOut = document.getElementById('val-checkout');
    const mobileSummary = document.getElementById('mobile-dates-summary');

    if (selectedCheckin) {
      valIn.textContent = formatDateBR(new Date(selectedCheckin + 'T00:00:00'));
    } else {
      valIn.textContent = "Adicionar data";
    }

    if (selectedCheckout) {
      valOut.textContent = formatDateBR(new Date(selectedCheckout + 'T00:00:00'));
      mobileSummary.textContent = `${valIn.textContent} até ${valOut.textContent}`;
    } else {
      valOut.textContent = "Adicionar data";
      mobileSummary.textContent = selectedCheckin ? `${valIn.textContent} (escolha a saída)` : "Selecionar datas";
    }

    // Calculation
    if (selectedCheckin && selectedCheckout) {
      const cost = calculateBookingCost(selectedCheckin, selectedCheckout, selectedGuests);
      if (cost) {
        document.getElementById('breakdown-nights-label').textContent = `R$ ${cost.avgNight} x ${cost.nights} diárias`;
        document.getElementById('breakdown-nights-val').textContent = `R$ ${cost.baseTotal.toLocaleString('pt-BR')}`;
        
        const rowExtra = document.getElementById('row-extra-guests');
        if (cost.extraGuestsCount > 0) {
          rowExtra.style.display = 'flex';
          document.getElementById('breakdown-extra-label').textContent = `${cost.extraGuestsCount} hóspede(s) extra(s)`;
          document.getElementById('breakdown-extra-val').textContent = `R$ ${cost.extraGuestsFee.toLocaleString('pt-BR')}`;
        } else {
          rowExtra.style.display = 'none';
        }

        document.getElementById('breakdown-cleaning-val').textContent = `R$ ${cost.cleaning.toLocaleString('pt-BR')}`;
        document.getElementById('breakdown-deposit-val').textContent = `R$ ${cost.deposit.toLocaleString('pt-BR')}`;
        document.getElementById('breakdown-total-val').textContent = `R$ ${cost.grandTotal.toLocaleString('pt-BR')}`;
      }
    }
  }

  // --- LEAFLET INTERACTIVE MAP ---
  let mapInstance = null;

  function initMap() {
    const lat = state.property.lat || -22.6929619;
    const lng = state.property.lng || -46.5522407;

    const mapIframe = document.getElementById('google-maps-iframe');
    if (mapIframe) {
      mapIframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=pt&z=16&output=embed`;
    }

    const mapEl = document.getElementById('map-container');
    if (!mapEl || mapInstance) return;

    try {
      mapInstance = L.map('map-container').setView([lat, lng], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstance);

      // Property Marker
      L.marker([lat, lng]).addTo(mapInstance)
        .bindPopup(`<b>${state.property.name}</b><br>${state.property.address}<br><a href="${state.property.mapsUrl || '#'}" target="_blank" style="color:#008a05;font-weight:bold;">Abrir no Google Maps ↗</a>`)
        .openPopup();
    } catch (e) {
      console.warn("Erro ao carregar Leaflet Map:", e);
    }
  }

  // --- ADMIN CMS RENDERERS & EVENT HANDLERS ---
  function renderAdminView() {
    renderAdminReservas();
    renderAdminReviews();
    renderAdminBlockedDates();
    renderAdminPricesForm();
    renderAdminPropertyForm();
    renderAdminPhotos();
    renderAdminRules();
    renderAdminLocation();
    renderAdminRecommendations();
    renderAdminFAQ();
  }

  function renderAdminReservas() {
    const tbody = document.getElementById('admin-reservas-table-body');
    const pendingCount = state.bookings.filter(b => b.status === 'Solicitada').length;
    document.getElementById('admin-pending-badge').textContent = pendingCount;

    if (!state.bookings || state.bookings.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 2rem;">Nenhuma solicitação de reserva encontrada.</td></tr>';
      return;
    }

    tbody.innerHTML = state.bookings.map(b => {
      let statusClass = 'status-solicitada';
      if (b.status === 'Aprovada') statusClass = 'status-aprovada';
      if (b.status === 'Recusada') statusClass = 'status-recusada';
      if (b.status === 'Paga') statusClass = 'status-paga';
      if (b.status === 'Confirmada') statusClass = 'status-confirmada';

      const inBR = formatDateBR(new Date(b.checkin + 'T00:00:00'));
      const outBR = formatDateBR(new Date(b.checkout + 'T00:00:00'));

      return `
        <tr>
          <td><strong>${b.id}</strong></td>
          <td>
            <strong>${b.guestName}</strong><br>
            <span style="font-size: 0.75rem; color: var(--gray-500);">CPF: ${b.cpf || 'Não inf.'}</span>
          </td>
          <td>
            <span>${b.phone}</span><br>
            <span style="font-size: 0.75rem; color: var(--gray-500);">${b.email}</span>
          </td>
          <td>${inBR} a ${outBR}</td>
          <td>${b.guestsCount} (${b.purpose || 'Familiar'})</td>
          <td><strong>R$ ${b.total.toLocaleString('pt-BR')}</strong></td>
          <td><span class="badge-status ${statusClass}">${b.status}</span></td>
          <td>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
              ${b.status === 'Solicitada' ? `
                <button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; background: var(--success);" onclick="window.appApproveBooking('${b.id}')">✓ Aprovar</button>
                <button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; background: var(--warning);" onclick="window.appRejectBooking('${b.id}')">✕ Recusar</button>
              ` : ''}
              ${b.status === 'Aprovada' ? `
                <button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; background: #0070f3;" onclick="window.appMarkPaidBooking('${b.id}')">💰 Pago</button>
              ` : ''}
              <button class="btn-meta" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="window.appViewContract('${b.id}')">📄 Contrato</button>
              <button class="btn-meta" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; color: #ff385c; border-color: #ff385c;" onclick="window.appSendReviewLink('${b.id}')" title="Gerar link de avaliação para este hóspede">⭐ Avaliação</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.appSendReviewLink = function(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    let baseUrl = 'https://lucasmachiorint-commits.github.io/Vista-Vida/';
    if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== "null" && window.location.origin !== "file://") {
      baseUrl = window.location.origin + window.location.pathname;
    }
    baseUrl = baseUrl.replace(/\/+$/, '') + '/';

    const reviewLink = `${baseUrl}?avaliar=${encodeURIComponent(booking.id)}`;
    const phoneClean = (booking.phone || '').replace(/\D/g, '');
    const message = `Olá ${booking.guestName}! Esperamos que sua estadia na Chácara Vista Vida tenha sido muito especial. Poderia nos ajudar avaliando nosso espaço e atendimento? Leva menos de 1 minuto através do link: ${reviewLink}`;

    const choice = confirm(
      `⭐ Enviar Link de Avaliação\n\n` +
      `Hóspede: ${booking.guestName} (${booking.id})\n` +
      `Link:\n${reviewLink}\n\n` +
      `Clique em OK para abrir o WhatsApp (${booking.phone || 'Sem número'}) com a mensagem pronta, ou CANCELAR para apenas copiar o link para a área de transferência.`
    );

    if (choice) {
      if (phoneClean) {
        window.open(`https://wa.me/55${phoneClean}?text=${encodeURIComponent(message)}`, '_blank');
      } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
      }
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(reviewLink).then(() => {
          alert(`Link de avaliação copiado com sucesso:\n${reviewLink}`);
        }).catch(() => {
          prompt("Copie o link de avaliação:", reviewLink);
        });
      } else {
        prompt("Copie o link de avaliação:", reviewLink);
      }
    }
  };

  function renderAdminReviews() {
    const stats = getRatingStats();
    const badgeEl = document.getElementById('admin-reviews-badge');
    const avgEl = document.getElementById('admin-reviews-avg');
    const totalEl = document.getElementById('admin-reviews-total');
    const listEl = document.getElementById('admin-reviews-list');
    const quickLinkInput = document.getElementById('quick-review-link');

    if (badgeEl) badgeEl.textContent = stats.count;
    if (avgEl) avgEl.textContent = stats.adminAvg;
    if (totalEl) totalEl.textContent = stats.count;

    if (quickLinkInput) {
      let baseUrl = 'https://lucasmachiorint-commits.github.io/Vista-Vida/';
      if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== "null" && window.location.origin !== "file://") {
        baseUrl = window.location.origin + window.location.pathname;
      }
      baseUrl = baseUrl.replace(/\/+$/, '') + '/';
      quickLinkInput.value = `${baseUrl}?avaliar=geral`;
    }

    if (!listEl) return;

    if (!state.reviews || state.reviews.length === 0) {
      listEl.innerHTML = '<p style="color: var(--gray-500); font-size: 0.85rem; padding: 1rem 0;">Nenhuma avaliação cadastrada ainda. Compartilhe o link de avaliação com seus hóspedes pós-estadia para compor o indicador de nota.</p>';
      return;
    }

    listEl.innerHTML = state.reviews.map(rev => {
      const rating = Number(rev.rating) || 5;
      const starsStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);

      return `
        <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-sm); padding: 0.85rem; background: var(--white); display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; flex-wrap: wrap;">
              <strong style="color: var(--dark); font-size: 0.95rem;">${rev.author}</strong>
              <span style="color: #ff385c; letter-spacing: 1px;">${starsStr} (${rating}.0)</span>
              ${rev.bookingId ? `<span style="font-size: 0.75rem; background: var(--gray-100); padding: 0.1rem 0.4rem; border-radius: 4px; color: var(--gray-700);">Reserva: ${rev.bookingId}</span>` : ''}
            </div>
            <div style="font-size: 0.75rem; color: var(--gray-500); margin-bottom: 0.4rem;">${rev.date || 'Hóspede'}</div>
            <p style="font-size: 0.85rem; color: var(--gray-700); line-height: 1.4;">"${rev.comment}"</p>
          </div>
          <button onclick="window.appRemoveReview(${rev.id})" style="color: red; font-size: 0.8rem; font-weight: 600; white-space: nowrap;">Excluir</button>
        </div>
      `;
    }).join('');
  }

  window.appRemoveReview = function(id) {
    if (confirm("Deseja realmente remover esta avaliação?")) {
      state.reviews = state.reviews.filter(r => r.id !== id);
      saveState(state);
      renderAdminReviews();
      renderPublicView();
      alert("Avaliação removida com sucesso.");
    }
  };

  window.appApproveBooking = function(id) {
    const booking = state.bookings.find(b => b.id === id);
    if (!booking) return;

    if (confirm(`Deseja aprovar a solicitação de ${booking.guestName}? O hóspede receberá o link para pagamento e emissão do contrato.`)) {
      booking.status = 'Aprovada';
      saveState(state);
      renderAdminReservas();
      renderBookingCalendar();
      alert(`Reserva ${id} APROVADA com sucesso!`);
    }
  };

  window.appRejectBooking = function(id) {
    const booking = state.bookings.find(b => b.id === id);
    if (!booking) return;

    if (confirm(`Deseja recusar a solicitação de ${booking.guestName}?`)) {
      booking.status = 'Recusada';
      saveState(state);
      renderAdminReservas();
      renderBookingCalendar();
    }
  };

  window.appMarkPaidBooking = function(id) {
    const booking = state.bookings.find(b => b.id === id);
    if (!booking) return;

    booking.status = 'Paga';
    saveState(state);
    renderAdminReservas();
    alert(`Pagamento da reserva ${id} confirmado! O contrato foi liberado para download.`);
  };

  function renderAdminBlockedDates() {
    const container = document.getElementById('blocked-dates-list');
    if (!state.blockedDates || state.blockedDates.length === 0) {
      container.innerHTML = '<p style="color: var(--gray-500); font-size: 0.85rem;">Nenhum bloqueio cadastrado.</p>';
      return;
    }

    container.innerHTML = state.blockedDates.map((b, idx) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background: var(--gray-100); border-radius: var(--radius-sm); margin-bottom: 0.5rem; font-size: 0.85rem;">
        <div>
          <strong>${formatDateBR(new Date(b.start + 'T00:00:00'))} até ${formatDateBR(new Date(b.end + 'T00:00:00'))}</strong>
          <span style="margin-left: 0.5rem; color: var(--gray-500);">${b.reason || 'Sem motivo'}</span>
        </div>
        <button onclick="window.appRemoveDateBlock(${idx})" style="color: red; font-weight: bold; cursor: pointer;">Remover</button>
      </div>
    `).join('');
  }

  window.appRemoveDateBlock = function(idx) {
    state.blockedDates.splice(idx, 1);
    saveState(state);
    renderAdminBlockedDates();
    renderBookingCalendar();
  };

  function renderAdminPricesForm() {
    document.getElementById('price-weekday').value = state.prices.weekday;
    document.getElementById('price-weekend').value = state.prices.weekend;
    document.getElementById('price-holiday').value = state.prices.holiday;
    document.getElementById('price-extra-guest').value = state.prices.extraGuest;
    document.getElementById('price-cleaning').value = state.prices.cleaningFee;
    document.getElementById('price-deposit').value = state.prices.securityDeposit;
  }

  function renderAdminPropertyForm() {
    document.getElementById('admin-prop-name').value = state.property.name;
    document.getElementById('admin-prop-title').value = state.property.title;
    document.getElementById('admin-prop-desc').value = state.property.description;
    document.getElementById('admin-prop-sleep').value = state.property.sleeps;
    document.getElementById('admin-prop-events').value = state.property.events;
    document.getElementById('admin-prop-bedrooms').value = state.property.bedrooms;
    document.getElementById('admin-prop-bathrooms').value = state.property.bathrooms;
    document.getElementById('admin-prop-parking').value = state.property.parking;
    document.getElementById('admin-prop-video').value = state.property.videoUrl;
  }

  function renderAdminPhotos() {
    const container = document.getElementById('admin-photos-grid');
    container.innerHTML = state.photos.map((p, idx) => `
      <div style="border: 1px solid var(--gray-300); border-radius: var(--radius-sm); overflow: hidden; position: relative;">
        <img src="${p.url}" alt="${p.caption}" style="width: 100%; height: 120px; object-fit: cover;">
        <div style="padding: 0.5rem; font-size: 0.75rem;">
          <strong style="text-transform: capitalize;">${p.category}</strong>
          <div style="color: var(--gray-500); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.caption || 'Sem legenda'}</div>
          <button onclick="window.appRemovePhoto(${p.id})" style="color: red; margin-top: 0.35rem; font-weight: 600;">Excluir</button>
        </div>
      </div>
    `).join('');
  }

  window.appRemovePhoto = function(id) {
    if (confirm("Remover esta foto?")) {
      state.photos = state.photos.filter(p => p.id !== id);
      saveState(state);
      renderAdminPhotos();
      renderPhotoMosaic();
    }
  };

  function renderAdminRules() {
    const rulesList = document.getElementById('admin-rules-list');
    rulesList.innerHTML = state.rules.map(r => `
      <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <strong>${r.icon} ${r.title}</strong>
          <p style="font-size: 0.85rem; color: var(--gray-700); margin-top: 0.25rem;">${r.desc}</p>
        </div>
        <button onclick="window.appRemoveRule(${r.id})" style="color: red; font-size: 0.8rem; margin-left: 0.5rem;">Excluir</button>
      </div>
    `).join('');

    const amenitiesList = document.getElementById('admin-amenities-list');
    amenitiesList.innerHTML = state.amenities.map(a => `
      <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem;">
        <span>${a.icon} ${a.name}</span>
        <button onclick="window.appRemoveAmenity(${a.id})" style="color: red; font-size: 0.75rem;">Excluir</button>
      </div>
    `).join('');
  }

  window.appRemoveRule = function(id) {
    state.rules = state.rules.filter(r => r.id !== id);
    saveState(state);
    renderAdminRules();
    renderRules();
  };

  window.appRemoveAmenity = function(id) {
    state.amenities = state.amenities.filter(a => a.id !== id);
    saveState(state);
    renderAdminRules();
    renderAmenities();
  };

  function renderAdminLocation() {
    document.getElementById('admin-loc-address').value = state.property.address || '';
    const shortEl = document.getElementById('admin-loc-short');
    if (shortEl) shortEl.value = state.property.shortAddress || 'Socorro, São Paulo - Brasil';
    const mapsEl = document.getElementById('admin-loc-maps');
    if (mapsEl) mapsEl.value = state.property.mapsUrl || 'https://maps.app.goo.gl/qX321VcuqdVGxf248';
    document.getElementById('admin-loc-lat').value = state.property.lat || -22.6929619;
    document.getElementById('admin-loc-lng').value = state.property.lng || -46.5522407;
    document.getElementById('admin-loc-road').value = state.property.roadInfo || '';
  }

  function renderAdminRecommendations() {
    const list = document.getElementById('admin-rec-list');
    list.innerHTML = state.recommendations.map(r => `
      <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-sm); overflow: hidden; font-size: 0.85rem;">
        <img src="${r.img || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300'}" style="width: 100%; height: 100px; object-fit: cover;">
        <div style="padding: 0.5rem;">
          <strong>${r.name}</strong> (${r.category})
          <div style="color: var(--gray-500);">${r.dist} km • ${r.desc}</div>
          <button onclick="window.appRemoveRec(${r.id})" style="color: red; margin-top: 0.35rem; font-weight: 600;">Excluir</button>
        </div>
      </div>
    `).join('');
  }

  window.appRemoveRec = function(id) {
    state.recommendations = state.recommendations.filter(r => r.id !== id);
    saveState(state);
    renderAdminRecommendations();
    renderRecommendations('todos');
  };

  function renderAdminFAQ() {
    const list = document.getElementById('admin-faq-list');
    list.innerHTML = state.faqs.map(f => `
      <div style="border: 1px solid var(--gray-200); border-radius: var(--radius-sm); padding: 0.75rem; display: flex; justify-content: space-between;">
        <div>
          <strong>${f.q}</strong>
          <p style="font-size: 0.85rem; color: var(--gray-700); margin-top: 0.25rem;">${f.a}</p>
        </div>
        <button onclick="window.appRemoveFaq(${f.id})" style="color: red; font-size: 0.8rem; margin-left: 0.5rem;">Excluir</button>
      </div>
    `).join('');
  }

  window.appRemoveFaq = function(id) {
    state.faqs = state.faqs.filter(f => f.id !== id);
    saveState(state);
    renderAdminFAQ();
    renderFAQs();
  };

  // --- CONTRACT GENERATION & VIEWER (GOV.BR COMPLIANT) ---
  let activeContractBooking = null;

  window.appViewContract = function(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    activeContractBooking = booking;
    const previewEl = document.getElementById('contract-paper-preview');

    const inDate = formatDateBR(new Date(booking.checkin + 'T00:00:00'));
    const outDate = formatDateBR(new Date(booking.checkout + 'T00:00:00'));

    const contractHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: bold; text-transform: uppercase;">CONTRATO DE LOCAÇÃO DE IMÓVEL POR TEMPORADA</h2>
        <p style="font-size: 0.8rem; color: #555;">(Fundamentado na Lei Federal nº 8.245/1991, arts. 48 a 50)</p>
      </div>

      <p><strong>LOCADOR(A):</strong> Administrador / Proprietário de ${state.property.name}, com poderes de gestão sobre o imóvel situado em: ${state.property.address}.</p>
      <p><strong>LOCATÁRIO(A):</strong> ${booking.guestName}, portador(a) do CPF nº ${booking.cpf || 'A PREENCHER'}, telefone/WhatsApp ${booking.phone}, e-mail: ${booking.email}.</p>

      <p style="margin-top: 1rem;"><strong>CLÁUSULA 1ª — DO OBJETO E FINALIDADE:</strong><br>
      O presente contrato tem como objeto a locação por temporada do imóvel denominado <strong>${state.property.name}</strong>, exclusivamente para fins de descanso ou confraternização de caráter <strong>${booking.purpose || 'Familiar'}</strong>, sendo vedada qualquer outra destinação sem expressa anuência prévia.</p>

      <p style="margin-top: 0.75rem;"><strong>CLÁUSULA 2ª — DO PRAZO DE OCUPAÇÃO:</strong><br>
      A locação terá início improrrogável em <strong>${inDate}</strong> e término em <strong>${outDate}</strong>, momento em que o LOCATÁRIO se compromete a desocupar o imóvel e entregá-lo livre de pessoas e pertences.</p>

      <p style="margin-top: 0.75rem;"><strong>CLÁUSULA 3ª — DO VALOR E FORMA DE PAGAMENTO:</strong><br>
      O valor total da locação para o período e o número acordado de ${booking.guestsCount} pessoas é de <strong>R$ ${booking.total.toLocaleString('pt-BR')}</strong>, discriminando diárias, taxa de limpeza e o valor de caução garantia reembolsável de R$ ${state.prices.securityDeposit.toLocaleString('pt-BR')}.</p>

      <p style="margin-top: 0.75rem;"><strong>CLÁUSULA 4ª — DO SILÊNCIO E NORMAS DE CONVIVÊNCIA:</strong><br>
      O LOCATÁRIO declara ciência e total concordância com as regras municipais e internas do imóvel, especialmente quanto à vedação de som excessivo das 22h00 às 08h00 (limite de 60 dB) e proibição absoluta de sons automotivos.</p>

      <p style="margin-top: 0.75rem;"><strong>CLÁUSULA 5ª — DA ASSINATURA DIGITAL AVANÇADA (GOV.BR):</strong><br>
      As partes reconhecem expressamente a plena validade, higidez jurídica e exequibilidade deste instrumento emitido eletronicamente, mediante assinatura digital no portal do Governo Federal (https://assinatura.gov.br), nos termos da Medida Provisória nº 2.200-2/2001 e da Lei Federal nº 14.063/2020.</p>

      <div style="margin-top: 2rem; display: flex; justify-content: space-around; text-align: center;">
        <div style="width: 40%; border-top: 1px solid #000; padding-top: 0.5rem;">
          <strong>LOCADOR(A)</strong><br>
          ${state.property.name}
        </div>
        <div style="width: 40%; border-top: 1px solid #000; padding-top: 0.5rem;">
          <strong>LOCATÁRIO(A)</strong><br>
          ${booking.guestName}
        </div>
      </div>
    `;

    previewEl.innerHTML = contractHTML;
    document.getElementById('modal-contract-viewer').classList.add('active');
  };

  // Download PDF using jsPDF
  document.getElementById('btn-download-contract-pdf').addEventListener('click', function() {
    if (!activeContractBooking || !window.jspdf) {
      alert("jsPDF não carregado.");
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const b = activeContractBooking;
    const inDate = formatDateBR(new Date(b.checkin + 'T00:00:00'));
    const outDate = formatDateBR(new Date(b.checkout + 'T00:00:00'));

    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.text("CONTRATO DE LOCAÇÃO DE IMÓVEL POR TEMPORADA", 105, 20, { align: "center" });

    doc.setFontSize(9);
    doc.setFont("times", "italic");
    doc.text("(Fundamentado na Lei Federal nº 8.245/1991, arts. 48 a 50)", 105, 26, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("times", "normal");

    let y = 38;
    const lineHeight = 6;
    const margin = 20;
    const width = 170;

    const p1 = `LOCADOR(A): Administração de ${state.property.name}, com sede em ${state.property.address}.`;
    doc.text(doc.splitTextToSize(p1, width), margin, y); y += 12;

    const p2 = `LOCATÁRIO(A): ${b.guestName}, portador(a) do CPF ${b.cpf || 'Não informado'}, WhatsApp ${b.phone}, E-mail: ${b.email}.`;
    doc.text(doc.splitTextToSize(p2, width), margin, y); y += 12;

    const p3 = `CLÁUSULA 1ª — OBJETO: Locação por temporada da ${state.property.name}, para finalidade estritamente ${b.purpose || 'Familiar'} com capacidade para até ${b.guestsCount} pessoas.`;
    doc.text(doc.splitTextToSize(p3, width), margin, y); y += 14;

    const p4 = `CLÁUSULA 2ª — PERÍODO: Início em ${inDate} (a partir das 17h00) e término em ${outDate} (até as 18h00), momento em que o imóvel será restituído livre de pessoas e pertences.`;
    doc.text(doc.splitTextToSize(p4, width), margin, y); y += 14;

    const p5 = `CLÁUSULA 3ª — PREÇO: O valor acordado para o período é de R$ ${b.total.toLocaleString('pt-BR')}, incluindo diárias, limpeza e caução garantia reembolsável de R$ ${state.prices.securityDeposit.toLocaleString('pt-BR')}.`;
    doc.text(doc.splitTextToSize(p5, width), margin, y); y += 14;

    const p6 = `CLÁUSULA 4ª — NORMAS E SILÊNCIO: O LOCATÁRIO compromete-se a respeitar o horário de silêncio (22h00 às 08h00) e a não utilizar som automotivo ou perturbar a vizinhança.`;
    doc.text(doc.splitTextToSize(p6, width), margin, y); y += 14;

    const p7 = `CLÁUSULA 5ª — ASSINATURA ELETRÔNICA GOV.BR: As partes aceitam este documento assinado digitalmente pelo portal https://assinatura.gov.br (Lei 14.063/2020), com validade jurídica de título executivo extrajudicial.`;
    doc.text(doc.splitTextToSize(p7, width), margin, y); y += 30;

    doc.line(margin, y, margin + 65, y);
    doc.line(125, y, 190, y);
    doc.text("LOCADOR(A)", margin + 15, y + 5);
    doc.text("LOCATÁRIO(A)", 140, y + 5);

    doc.save(`Contrato_${state.property.name.replace(/\s+/g, '_')}_${b.id}.pdf`);
  });

  // --- MODAL CONTROLS & EVENT LISTENERS ---

  // Gallery Modal
  window.appOpenGallery = function(cat) {
    const grid = document.getElementById('full-gallery-grid');
    const tabs = document.querySelectorAll('#gallery-category-tabs .tab-btn');

    tabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-gallery-cat') === cat);
    });

    const filtered = (cat === 'todos') ? state.photos : state.photos.filter(p => p.category === cat);
    grid.innerHTML = filtered.map(p => `
      <div style="border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm);">
        <img src="${p.url}" alt="${p.caption}" style="width: 100%; height: 180px; object-fit: cover; display: block;" loading="lazy">
        <div style="padding: 0.5rem; font-size: 0.8rem; background: var(--gray-100);">${p.caption || 'Foto da propriedade'}</div>
      </div>
    `).join('');

    document.getElementById('modal-full-gallery').classList.add('active');
  };

  document.getElementById('btn-open-gallery-modal').addEventListener('click', () => window.appOpenGallery('todos'));
  document.getElementById('btn-close-gallery-modal').addEventListener('click', () => {
    document.getElementById('modal-full-gallery').classList.remove('active');
  });

  // Gallery category tabs
  document.querySelectorAll('#gallery-category-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const cat = this.getAttribute('data-gallery-cat');
      window.appOpenGallery(cat);
    });
  });

  // Video Tour Modal
  document.getElementById('btn-watch-video').addEventListener('click', () => {
    const iframe = document.getElementById('video-iframe');
    iframe.src = state.property.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ";
    document.getElementById('modal-video-tour').classList.add('active');
  });
  document.getElementById('btn-close-video-modal').addEventListener('click', () => {
    document.getElementById('modal-video-tour').classList.remove('active');
    document.getElementById('video-iframe').src = "";
  });

  // Booking Request Modal
  function openBookingRequestModal() {
    if (!selectedCheckin || !selectedCheckout) {
      alert("Por favor, selecione as datas de Check-in e Check-out no calendário antes de solicitar.");
      const calBox = document.getElementById('booking-calendar-box');
      calBox.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const cost = calculateBookingCost(selectedCheckin, selectedCheckout, selectedGuests);
    if (!cost) return;

    document.getElementById('modal-summary-dates').textContent = `${formatDateBR(new Date(selectedCheckin + 'T00:00:00'))} até ${formatDateBR(new Date(selectedCheckout + 'T00:00:00'))} (${cost.nights} diárias)`;
    document.getElementById('modal-summary-guests').textContent = `${selectedGuests} pessoas`;
    document.getElementById('modal-summary-total').textContent = `R$ ${cost.grandTotal.toLocaleString('pt-BR')}`;

    document.getElementById('modal-booking-request').classList.add('active');
  }

  document.getElementById('btn-action-solicitar').addEventListener('click', openBookingRequestModal);
  document.getElementById('btn-mobile-solicitar').addEventListener('click', openBookingRequestModal);
  document.getElementById('btn-close-booking-modal').addEventListener('click', () => {
    document.getElementById('modal-booking-request').classList.remove('active');
  });
  document.getElementById('btn-close-contract-modal').addEventListener('click', () => {
    document.getElementById('modal-contract-viewer').classList.remove('active');
  });

  // Form Booking Request Submit
  document.getElementById('form-booking-request').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('req-name').value.trim();
    const cpf = document.getElementById('req-cpf').value.trim();
    const phone = document.getElementById('req-phone').value.trim();
    const email = document.getElementById('req-email').value.trim();
    const purpose = document.getElementById('req-purpose').value;
    const notes = document.getElementById('req-notes').value.trim();

    const cost = calculateBookingCost(selectedCheckin, selectedCheckout, selectedGuests);
    const newId = `REC-${new Date().getFullYear()}-${('00' + (state.bookings.length + 1)).slice(-3)}`;

    const newBooking = {
      id: newId,
      guestName: name,
      cpf: cpf,
      phone: phone,
      email: email,
      purpose: purpose,
      checkin: selectedCheckin,
      checkout: selectedCheckout,
      guestsCount: selectedGuests,
      total: cost ? cost.grandTotal : 0,
      status: 'Solicitada',
      createdAt: new Date().toISOString(),
      notes: notes
    };

    state.bookings.unshift(newBooking);
    saveState(state);

    document.getElementById('modal-booking-request').classList.remove('active');
    this.reset();

    alert(`🎉 Solicitação ${newId} enviada com sucesso ao proprietário!\n\nVocê receberá o aviso de aprovação pelo WhatsApp (${phone}) e por e-mail com as instruções de pagamento e contrato.`);

    // Reset selection
    selectedCheckin = null;
    selectedCheckout = null;
    updatePriceAndDisplay();
    renderBookingCalendar();
  });

  // FAQ Accordion Toggle
  window.appToggleFaq = function(id) {
    const item = document.getElementById(`faq-item-${id}`);
    if (item) {
      item.classList.toggle('open');
      const icon = item.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = item.classList.contains('open') ? '−' : '+';
      }
    }
  };

  // Recommendations category filter
  document.querySelectorAll('#rec-category-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#rec-category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderRecommendations(this.getAttribute('data-category'));
    });
  });

  // Calendar month navigation
  document.getElementById('cal-prev-month').addEventListener('click', () => {
    currentCalDate.setMonth(currentCalDate.getMonth() - 1);
    renderBookingCalendar();
  });
  document.getElementById('cal-next-month').addEventListener('click', () => {
    currentCalDate.setMonth(currentCalDate.getMonth() + 1);
    renderBookingCalendar();
  });

  // Guest Selector click prompt
  document.getElementById('btn-select-guests').addEventListener('click', () => {
    const g = prompt(`Informe a quantidade de hóspedes (Máximo recomendado: ${state.property.sleeps} para dormir / ${state.property.events} para festa):`, selectedGuests);
    if (g && !isNaN(g) && Number(g) > 0) {
      selectedGuests = parseInt(g, 10);
      document.getElementById('val-guests').textContent = `${selectedGuests} hóspedes`;
      updatePriceAndDisplay();
    }
  });

  // Date picker boxes trigger scroll to calendar
  document.getElementById('btn-select-checkin').addEventListener('click', () => {
    document.getElementById('booking-calendar-box').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('btn-select-checkout').addEventListener('click', () => {
    document.getElementById('booking-calendar-box').scrollIntoView({ behavior: 'smooth' });
  });

  // --- ADMIN VIEW NAVIGATION & CMS ACTIONS ---
  const adminView = document.getElementById('admin-view');
  const publicView = document.getElementById('public-view');

  document.getElementById('btn-open-admin').addEventListener('click', () => {
    const pin = prompt("🔐 Digite o PIN de acesso do proprietário (Padrão: 1234):");
    if (pin === "1234" || pin === "admin") {
      publicView.style.display = 'none';
      adminView.classList.add('active');
      renderAdminView();
      window.scrollTo(0, 0);
    } else if (pin !== null) {
      alert("PIN incorreto.");
    }
  });

  document.getElementById('btn-exit-admin').addEventListener('click', () => {
    adminView.classList.remove('active');
    publicView.style.display = 'block';
    renderPublicView();
    window.scrollTo(0, 0);
  });

  // Admin Tab Switching
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const target = this.getAttribute('data-admin-tab');
      document.querySelectorAll('.admin-tab-pane').forEach(p => p.style.display = 'none');
      const pane = document.getElementById(`pane-${target}`);
      if (pane) pane.style.display = 'block';
    });
  });

  // Admin: Add Date Block
  document.getElementById('btn-add-date-block').addEventListener('click', () => {
    const start = document.getElementById('block-start-date').value;
    const end = document.getElementById('block-end-date').value;
    const reason = document.getElementById('block-reason').value.trim();

    if (!start || !end) {
      alert("Preencha as datas de início e fim do bloqueio.");
      return;
    }
    if (end < start) {
      alert("A data final deve ser posterior à data inicial.");
      return;
    }

    state.blockedDates.push({ start, end, reason: reason || "Bloqueio manual" });
    saveState(state);
    renderAdminBlockedDates();
    renderBookingCalendar();
    alert("Período bloqueado no calendário com sucesso!");
  });

  // Admin: Save Prices
  document.getElementById('form-admin-prices').addEventListener('submit', function(e) {
    e.preventDefault();
    state.prices.weekday = Number(document.getElementById('price-weekday').value);
    state.prices.weekend = Number(document.getElementById('price-weekend').value);
    state.prices.holiday = Number(document.getElementById('price-holiday').value);
    state.prices.extraGuest = Number(document.getElementById('price-extra-guest').value);
    state.prices.cleaningFee = Number(document.getElementById('price-cleaning').value);
    state.prices.securityDeposit = Number(document.getElementById('price-deposit').value);

    saveState(state);
    alert("Tabela de preços atualizada com sucesso!");
    updatePriceAndDisplay();
  });

  // Admin: Save Property Info
  document.getElementById('form-admin-property').addEventListener('submit', function(e) {
    e.preventDefault();
    state.property.name = document.getElementById('admin-prop-name').value.trim();
    state.property.title = document.getElementById('admin-prop-title').value.trim();
    state.property.description = document.getElementById('admin-prop-desc').value.trim();
    state.property.sleeps = Number(document.getElementById('admin-prop-sleep').value);
    state.property.events = Number(document.getElementById('admin-prop-events').value);
    state.property.bedrooms = Number(document.getElementById('admin-prop-bedrooms').value);
    state.property.bathrooms = Number(document.getElementById('admin-prop-bathrooms').value);
    state.property.parking = Number(document.getElementById('admin-prop-parking').value);
    state.property.videoUrl = document.getElementById('admin-prop-video').value.trim();

    saveState(state);
    alert("Dados do imóvel atualizados com sucesso!");
  });

  // Admin: Add Photo
  document.getElementById('form-add-photo').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('new-photo-url').value.trim();
    const category = document.getElementById('new-photo-cat').value;
    const caption = document.getElementById('new-photo-caption').value.trim();

    const newId = (state.photos.length > 0) ? Math.max(...state.photos.map(p => p.id)) + 1 : 1;
    state.photos.push({ id: newId, url, category, caption });
    saveState(state);

    this.reset();
    renderAdminPhotos();
    renderPhotoMosaic();
    alert("Foto adicionada com sucesso!");
  });

  // Admin: Add Rule
  document.getElementById('btn-add-rule').addEventListener('click', () => {
    const title = prompt("Título da nova regra (Ex: Política de Som):");
    if (!title) return;
    const desc = prompt("Descrição detalhada da regra:");
    if (!desc) return;
    const icon = prompt("Ícone / Emoji representativo (Ex: 🔊, 🚫, ⏰):", "📜");

    const newId = (state.rules.length > 0) ? Math.max(...state.rules.map(r => r.id)) + 1 : 1;
    state.rules.push({ id: newId, title, desc, icon: icon || "📜" });
    saveState(state);
    renderAdminRules();
    renderRules();
  });

  // Admin: Add Amenity
  document.getElementById('btn-add-amenity').addEventListener('click', () => {
    const name = prompt("Nome da comodidade (Ex: Sauna Seca):");
    if (!name) return;
    const icon = prompt("Ícone / Emoji (Ex: 🧖, 📶, 🏊):", "✓");
    const category = prompt("Categoria (Lazer, Conforto, Comodidade):", "Lazer");

    const newId = (state.amenities.length > 0) ? Math.max(...state.amenities.map(a => a.id)) + 1 : 1;
    state.amenities.push({ id: newId, name, icon: icon || "✓", category: category || "Geral" });
    saveState(state);
    renderAdminRules();
    renderAmenities();
  });

  // Admin: Save Location
  document.getElementById('form-admin-location').addEventListener('submit', function(e) {
    e.preventDefault();
    state.property.address = document.getElementById('admin-loc-address').value.trim();
    
    const shortEl = document.getElementById('admin-loc-short');
    if (shortEl && shortEl.value.trim()) {
      state.property.shortAddress = shortEl.value.trim();
    }
    
    const mapsEl = document.getElementById('admin-loc-maps');
    let mapsUrl = mapsEl ? mapsEl.value.trim() : '';
    if (mapsUrl) {
      state.property.mapsUrl = mapsUrl;
      
      // Auto-extract coords from Google Maps URL if present:
      const atMatch = mapsUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      const bangMatch = mapsUrl.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
      const qMatch = mapsUrl.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);
      
      if (bangMatch) {
        state.property.lat = parseFloat(bangMatch[1]);
        state.property.lng = parseFloat(bangMatch[2]);
        document.getElementById('admin-loc-lat').value = state.property.lat;
        document.getElementById('admin-loc-lng').value = state.property.lng;
      } else if (atMatch) {
        state.property.lat = parseFloat(atMatch[1]);
        state.property.lng = parseFloat(atMatch[2]);
        document.getElementById('admin-loc-lat').value = state.property.lat;
        document.getElementById('admin-loc-lng').value = state.property.lng;
      } else if (qMatch) {
        state.property.lat = parseFloat(qMatch[1]);
        state.property.lng = parseFloat(qMatch[2]);
        document.getElementById('admin-loc-lat').value = state.property.lat;
        document.getElementById('admin-loc-lng').value = state.property.lng;
      }
    }

    const latVal = parseFloat(document.getElementById('admin-loc-lat').value);
    const lngVal = parseFloat(document.getElementById('admin-loc-lng').value);
    if (!isNaN(latVal)) state.property.lat = latVal;
    if (!isNaN(lngVal)) state.property.lng = lngVal;

    state.property.roadInfo = document.getElementById('admin-loc-road').value.trim();

    saveState(state);
    renderPublicView();
    alert("Localização, link do Google Maps e mapa atualizados com sucesso!");
    if (mapInstance) {
      mapInstance.setView([state.property.lat, state.property.lng], 16);
    }
  });

  // Auto-detect coordinates as soon as user pastes Google Maps link in input
  const mapsInputEl = document.getElementById('admin-loc-maps');
  if (mapsInputEl) {
    mapsInputEl.addEventListener('input', function() {
      const val = this.value;
      const atMatch = val.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      const bangMatch = val.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
      const qMatch = val.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (bangMatch) {
        document.getElementById('admin-loc-lat').value = bangMatch[1];
        document.getElementById('admin-loc-lng').value = bangMatch[2];
      } else if (atMatch) {
        document.getElementById('admin-loc-lat').value = atMatch[1];
        document.getElementById('admin-loc-lng').value = atMatch[2];
      } else if (qMatch) {
        document.getElementById('admin-loc-lat').value = qMatch[1];
        document.getElementById('admin-loc-lng').value = qMatch[2];
      }
    });
  }

  // Admin: Add Recommendation
  document.getElementById('form-add-rec').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('rec-name').value.trim();
    const category = document.getElementById('rec-cat').value;
    const dist = parseFloat(document.getElementById('rec-dist').value) || 0;
    const desc = document.getElementById('rec-desc').value.trim();
    const img = document.getElementById('rec-img').value.trim();
    const maps = document.getElementById('rec-maps').value.trim();

    const newId = (state.recommendations.length > 0) ? Math.max(...state.recommendations.map(r => r.id)) + 1 : 1;
    state.recommendations.push({ id: newId, name, category, dist, desc, img, maps });
    saveState(state);

    this.reset();
    renderAdminRecommendations();
    renderRecommendations('todos');
    alert("Recomendação cadastrada com sucesso!");
  });

  // Admin: Add FAQ
  document.getElementById('btn-add-faq').addEventListener('click', () => {
    const q = prompt("Pergunta frequente (Ex: É permitido fumar dentro da casa?):");
    if (!q) return;
    const a = prompt("Resposta detalhada:");
    if (!a) return;

    const newId = (state.faqs.length > 0) ? Math.max(...state.faqs.map(f => f.id)) + 1 : 1;
    state.faqs.push({ id: newId, q, a });
    saveState(state);
    renderAdminFAQ();
    renderFAQs();
  });

  // Admin: Backup Export (JSON Download)
  document.getElementById('btn-export-backup').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `backup_chacara_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  });

  // Admin: Backup Restore (JSON Upload)
  const importInput = document.getElementById('file-import-input');
  document.getElementById('btn-import-backup').addEventListener('click', () => {
    importInput.click();
  });

  importInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (imported.property && imported.prices) {
          state = imported;
          saveState(state);
          renderAdminView();
          renderPublicView();
          alert("Backup restaurado com sucesso!");
        } else {
          alert("Arquivo JSON com formato inválido.");
        }
      } catch (err) {
        alert("Erro ao ler o arquivo JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  });

  // --- GUEST REVIEW MODAL & STAR PICKER LOGIC ---
  const reviewModal = document.getElementById('modal-guest-review');
  const reviewForm = document.getElementById('form-guest-review');
  const starButtons = document.querySelectorAll('#star-picker .star-btn');
  const ratingInput = document.getElementById('review-rating');
  const ratingLabel = document.getElementById('star-rating-label');

  const ratingDescriptions = {
    1: '1.0 (Muito ruim)',
    2: '2.0 (Ruim)',
    3: '3.0 (Regular)',
    4: '4.0 (Muito bom)',
    5: '5.0 (Excelente!)'
  };

  function setStarRating(val) {
    if (ratingInput) ratingInput.value = val;
    if (ratingLabel) ratingLabel.textContent = ratingDescriptions[val] || `${val}.0`;
    starButtons.forEach(btn => {
      const bVal = parseInt(btn.getAttribute('data-rating'), 10);
      btn.classList.toggle('active', bVal <= val);
    });
  }

  starButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const val = parseInt(this.getAttribute('data-rating'), 10);
      setStarRating(val);
    });

    btn.addEventListener('mouseenter', function() {
      const val = parseInt(this.getAttribute('data-rating'), 10);
      starButtons.forEach(b => {
        const bVal = parseInt(b.getAttribute('data-rating'), 10);
        b.classList.toggle('hovered', bVal <= val);
      });
    });
  });

  const starPickerContainer = document.getElementById('star-picker');
  if (starPickerContainer) {
    starPickerContainer.addEventListener('mouseleave', function() {
      const cur = parseInt(ratingInput ? ratingInput.value : 5, 10);
      starButtons.forEach(b => {
        b.classList.remove('hovered');
        const bVal = parseInt(b.getAttribute('data-rating'), 10);
        b.classList.toggle('active', bVal <= cur);
      });
    });
  }

  window.appOpenReviewModal = function(bookingId) {
    if (!reviewModal) return;

    if (bookingId && typeof bookingId === 'string' && bookingId !== 'geral') {
      const booking = state.bookings.find(b => b.id === bookingId);
      if (booking) {
        document.getElementById('review-booking-id').value = booking.id;
        document.getElementById('review-author').value = booking.guestName;
        const inDate = new Date(booking.checkin + 'T00:00:00');
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        document.getElementById('review-date').value = `${monthNames[inDate.getMonth()]} ${inDate.getFullYear()}`;
      } else {
        document.getElementById('review-booking-id').value = bookingId;
      }
    } else {
      document.getElementById('review-booking-id').value = '';
      const now = new Date();
      const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      const dateEl = document.getElementById('review-date');
      if (dateEl && !dateEl.value) {
        dateEl.value = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
      }
    }

    setStarRating(5);
    reviewModal.classList.add('active');
  };

  const btnOpenGuestReview = document.getElementById('btn-open-guest-review');
  if (btnOpenGuestReview) {
    btnOpenGuestReview.addEventListener('click', () => window.appOpenReviewModal());
  }

  const btnCloseReviewModal = document.getElementById('btn-close-review-modal');
  if (btnCloseReviewModal) {
    btnCloseReviewModal.addEventListener('click', () => {
      if (reviewModal) reviewModal.classList.remove('active');
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const author = document.getElementById('review-author').value.trim();
      const date = document.getElementById('review-date').value.trim();
      const rating = parseInt(document.getElementById('review-rating').value, 10) || 5;
      const comment = document.getElementById('review-comment').value.trim();
      const bookingId = document.getElementById('review-booking-id').value.trim();

      const newReview = {
        id: Date.now(),
        author,
        date,
        rating,
        comment,
        bookingId: bookingId || null,
        createdAt: new Date().toISOString()
      };

      if (!state.reviews) state.reviews = [];
      state.reviews.unshift(newReview);
      saveState(state);

      this.reset();
      if (reviewModal) reviewModal.classList.remove('active');

      renderPublicView();
      renderAdminReviews();

      alert(`🎉 Muito obrigado pela sua avaliação, ${author}!\n\nSua nota (${rating}.0) e seu comentário foram computados no indicador oficial da Chácara Vista Vida.`);

      const reviewsSection = document.getElementById('avaliacoes');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Admin: Copy Review Link Button
  const btnCopyReviewLink = document.getElementById('btn-copy-review-link');
  if (btnCopyReviewLink) {
    btnCopyReviewLink.addEventListener('click', () => {
      const input = document.getElementById('quick-review-link');
      if (input) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(input.value).then(() => {
            alert("Link copiado com sucesso! Você pode enviá-lo pelo WhatsApp para seus hóspedes.");
          }).catch(() => {
            input.select();
            document.execCommand('copy');
            alert("Link copiado!");
          });
        } else {
          input.select();
          document.execCommand('copy');
          alert("Link copiado!");
        }
      }
    });
  }

  // Admin: Manual Review Insertion
  const btnAdminAddReview = document.getElementById('btn-admin-add-review');
  if (btnAdminAddReview) {
    btnAdminAddReview.addEventListener('click', () => {
      const author = prompt("Nome do Hóspede:");
      if (!author) return;
      const date = prompt("Data da Estadia (Ex: Outubro 2026):", "Outubro 2026");
      if (!date) return;
      const ratingStr = prompt("Nota de 1 a 5 estrelas:", "5");
      const rating = parseInt(ratingStr, 10) || 5;
      const comment = prompt("Comentário do Hóspede:");
      if (!comment) return;

      const newReview = {
        id: Date.now(),
        author,
        date,
        rating: Math.min(5, Math.max(1, rating)),
        comment,
        bookingId: null,
        createdAt: new Date().toISOString()
      };

      if (!state.reviews) state.reviews = [];
      state.reviews.unshift(newReview);
      saveState(state);

      renderAdminReviews();
      renderPublicView();
      alert("Avaliação cadastrada com sucesso!");
    });
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    renderPublicView();
    setTimeout(initMap, 500);

    // Auto-open review modal if ?avaliar=... or ?review=... is in URL
    const urlParams = new URLSearchParams(window.location.search);
    const reviewParam = urlParams.get('avaliar') || urlParams.get('review');
    if (reviewParam) {
      setTimeout(() => {
        window.appOpenReviewModal(reviewParam);
      }, 300);
    }
  });

})();
