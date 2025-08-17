// script.js - Versión mejorada (búsqueda debounce, accesibilidad, sin innerHTML inseguro)

// Base de datos de productos (sin cambios)
const products = [
    { code: "4250604", description: "ALOE BETA PIÑA, 200 ML E", points: 5, listPrice: 9700, discount35: 8773, suggestedPrice: 12800 },
    { code: "4850500", description: "EGO FRUTAS DEL BOSQUE EVOLUCIÓN LATA 355 ML", points: 26, listPrice: 72200, discount35: 65298, suggestedPrice: 95350 },
    { code: "1260600", description: "EGO PLANT BOTELLA 200 ML E", points: 5, listPrice: 9700, discount35: 8773, suggestedPrice: 12800 },
    { code: "2075722", description: "BIOCROS SUPREME CAJA 30 SOBRES 240G", points: 53, listPrice: 90900, discount35: 82210, suggestedPrice: 120050 },
    { code: "1429653", description: "OMNILIFE F PLUS", points: 54, listPrice: 102000, discount35: 92249, suggestedPrice: 134750 },
    { code: "5174732", description: "CAFELIFE PLUS CAJA 30 SOBRES 150 G", points: 51, listPrice: 85000, discount35: 76874, suggestedPrice: 112300 },
    { code: "4160100", description: "AGUA BLU, SUPREME DE 1.5 LTS", points: 3, listPrice: 5750, discount35: 4370, suggestedPrice: 6400 },
    { code: "4160400", description: "AGUA BLU, SUPREME 600 ML", points: 1, listPrice: 2950, discount35: 2242, suggestedPrice: 3250 },
    { code: "4250204", description: "ALOE BETA PIÑA 960 ML E", points: 25, listPrice: 47100, discount35: 42597, suggestedPrice: 62200 },
    { code: "3924734", description: "AQTUA SUPREME, CAJA 30 SACHETS", points: 112, listPrice: 146600, discount35: 132585, suggestedPrice: 193650 },
    { code: "4650609", description: "EGO 10 BOTELLA 200 ML E", points: 5, listPrice: 9700, discount35: 8773, suggestedPrice: 12800 },
    { code: "4978904", description: "EGO LIFE SUPREME CAJA 30 SOBRES", points: 32, listPrice: 63000, discount35: 56977, suggestedPrice: 83200 },
    { code: "1675700", description: "ESTOP PLUS CAJA 30 SACHETS 450G", points: 102, listPrice: 190400, discount35: 172198, suggestedPrice: 251500 },
    { code: "8453000", description: "FLU-Y BOTE 60 CAPSULAS", points: 39, listPrice: 76500, discount35: 69187, suggestedPrice: 101050 },
    { code: "5350513", description: "FX MANZANA EVOLUCIÓN", points: 11, listPrice: 26000, discount35: 23514, suggestedPrice: 34350 },
    { code: "5350501", description: "FX NARANJA EVOLUCIÓN", points: 11, listPrice: 26000, discount35: 23514, suggestedPrice: 34350 },
    { code: "1729752", description: "HOMO PLUS, CAJA 30 SACHETS 180 G", points: 54, listPrice: 102000, discount35: 92249, suggestedPrice: 134750 },
    { code: "1850610", description: "OMNILIFE KOLINA, BOTELLA 200 ML E", points: 5, listPrice: 9700, discount35: 8773, suggestedPrice: 12800 },
    { code: "6521959", description: "OMNIOST EVOLUCION 300GR", points: 57, listPrice: 111400, discount35: 100750, suggestedPrice: 147150 },
    { code: "2350430", description: "OMNIPLUS FRUTAS EVOLUCION 30 SACH 6", points: 79, listPrice: 139700, discount35: 126345, suggestedPrice: 184550 },
    { code: "2360401", description: "OMNIPLUS NARAN SUP CAJA 30 SOBRES 6", points: 78, listPrice: 139700, discount35: 126345, suggestedPrice: 184550 },
    { code: "5827415", description: "OMNIVIU SUPREME CAJA C/30 SACHETS 1", points: 58, listPrice: 95600, discount35: 86461, suggestedPrice: 126300 },
    { code: "2505711", description: "COGNOS EVOLUCION CAJA", points: 61, listPrice: 95200, discount35: 86099, suggestedPrice: 125750 },
    { code: "6722800", description: "OMNILIFE PROBIOTIC CAJA 30 SOBRES S", points: 62, listPrice: 118400, discount35: 107081, suggestedPrice: 156400 },
    { code: "5479243", description: "OMNILIFE PUMP SUPREME CAJA 12 SOBRE", points: 69, listPrice: 114800, discount35: 103825, suggestedPrice: 151650 },
    { code: "7170943", description: "OMNILIFE SHAKE SUPREME CAJA 12 SOBR", points: 76, listPrice: 121700, discount35: 110065, suggestedPrice: 160750 },
    { code: "7170921", description: "OMNILIFE SHAKE SUPREME FRESA SILVES", points: 76, listPrice: 121700, discount35: 110065, suggestedPrice: 160750 },
    { code: "3000730", description: "STARBIEN EVOLUCIÓN CAJA C 30 SOBRES 240 GR S", points: 53, listPrice: 89900, discount35: 81306, suggestedPrice: 118750 },
    { code: "3178516", description: "SUPER MIX SUPREME VAINILLA CAJA 510", points: 76, listPrice: 118900, discount35: 107533, suggestedPrice: 157050 },
    { code: "3575609", description: "THERMOGEN TEA MARAC SUPREME 30 SACH", points: 92, listPrice: 154400, discount35: 139639, suggestedPrice: 203950 },
    { code: "3806816", description: "UZO EVOLUCION 240 GR", points: 167, listPrice: 244000, discount35: 220674, suggestedPrice: 322300 },
    { code: "5025516", description: "OMNILIFE VKIDS DOYPACK 400G", points: 71, listPrice: 121200, discount35: 109613, suggestedPrice: 160100 },
    { code: "3575605", description: "THERMOGEN TEA LIMÓN, SUPREME C/30 SACHET", points: 54, listPrice: 102400, discount35: 92611, suggestedPrice: 135250 },
    { code: "6379929", description: "ONE C MIX PLUS CAJA", points: 43, listPrice: 78500, discount35: 70995, suggestedPrice: 103700 },
    { code: "4475910", description: "DOLCE VITA SUPREME TORONJA, CAJA 30 SACHETS", points: 63, listPrice: 115400, discount35: 104368, suggestedPrice: 152450 },
    { code: "1578400", description: "FIBER'N PLUS SUPREME SACHET 450 G", points: 66, listPrice: 120800, discount35: 109252, suggestedPrice: 159550 },
    { code: "2603201", description: "POWER MAKER, EVOLUCION", points: 110, listPrice: 156600, discount35: 141629, suggestedPrice: 206850 },
    { code: "2904727", description: "TMGN COFFEE DE OLLA EVOLUCION", points: 39, listPrice: 68510, discount35: 61960, suggestedPrice: 90500 },
    { code: "3304732", description: "TMGN COFFEE EVOLUCION", points: 39, listPrice: 68510, discount35: 61960, suggestedPrice: 90500 }
];

// Estado local
let selectedProduct = null;
let searchFocusIndex = -1; // para navegación con teclado

// Elementos del DOM (cache)
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantityInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');
const productsTableBody = document.getElementById('productsTableBody');
const summaryCountEl = document.getElementById('summaryCount');
const summaryResultsEl = document.getElementById('summaryResults');
const headerTimeEl = document.getElementById('headerTime');

// Utilidades
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}
function formatPercentage(percentage) {
    if (!isFinite(percentage)) return '—';
    return `${percentage.toFixed(1)}%`;
}
function debounce(fn, wait = 200) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

// Inicialización
function initApp() {
    populateProductSelect();
    populateProductsTable();
    setupEventListeners();
    updateSummaryCounts();
    updateHeaderTime();
    setInterval(updateHeaderTime, 60000); // actualizar cada minuto

    console.log('🚀 Aplicación inicializada correctamente');
    console.log(`📊 ${products.length} productos cargados`);
}

// Poblar select de productos (uso indices como value)
function populateProductSelect() {
    productSelect.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecciona un producto...';
    productSelect.appendChild(placeholder);

    products.forEach((p, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${p.code} - ${p.description}`;
        productSelect.appendChild(opt);
    });
}

// Poblar tabla de productos (sin innerHTML para seguridad)
function populateProductsTable() {
    productsTableBody.innerHTML = '';
    products.forEach((product, index) => {
        const tr = document.createElement('tr');

        const tdCode = document.createElement('td');
        const strong = document.createElement('strong');
        strong.textContent = product.code;
        tdCode.appendChild(strong);

        const tdDesc = document.createElement('td');
        tdDesc.textContent = product.description;

        const tdPoints = document.createElement('td');
        tdPoints.textContent = product.points;

        const tdList = document.createElement('td');
        tdList.textContent = formatCurrency(product.listPrice);

        const tdDiscount = document.createElement('td');
        tdDiscount.className = 'text-success';
        const sDiscount = document.createElement('strong');
        sDiscount.textContent = formatCurrency(product.discount35);
        tdDiscount.appendChild(sDiscount);

        const tdSuggested = document.createElement('td');
        tdSuggested.className = 'text-warning';
        const sSuggested = document.createElement('strong');
        sSuggested.textContent = formatCurrency(product.suggestedPrice);
        tdSuggested.appendChild(sSuggested);

        const tdAction = document.createElement('td');
        const btn = document.createElement('button');
        btn.className = 'select-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label', `Seleccionar ${product.code}`);
        btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Seleccionar';
        btn.addEventListener('click', () => selectProduct(index));
        tdAction.appendChild(btn);

        tr.appendChild(tdCode);
        tr.appendChild(tdDesc);
        tr.appendChild(tdPoints);
        tr.appendChild(tdList);
        tr.appendChild(tdDiscount);
        tr.appendChild(tdSuggested);
        tr.appendChild(tdAction);

        productsTableBody.appendChild(tr);
    });
}

// Actualiza counters en header/summary
function updateSummaryCounts(filteredCount = null) {
    if (summaryCountEl) summaryCountEl.textContent = products.length;
    if (summaryResultsEl) summaryResultsEl.textContent = filteredCount === null ? '—' : filteredCount;
}

// Mostrar hora en header
function updateHeaderTime() {
    if (!headerTimeEl) return;
    const now = new Date();
    headerTimeEl.textContent = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false });
}

// Configurar eventos y accesibilidad
function setupEventListeners() {
    // Búsqueda con debounce
    const debouncedSearch = debounce(handleSearch, 200);
    searchInput.addEventListener('input', debouncedSearch);
    clearSearchBtn.addEventListener('click', clearSearch);

    // Teclado para navegación en resultados
    searchInput.addEventListener('keydown', handleSearchKeydown);
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            hideSearchResults();
        }
    });

    // Select / cantidad / calcular
    productSelect.addEventListener('change', handleProductSelection);
    quantityInput.addEventListener('input', validateQuantity);
    calculateBtn.addEventListener('click', calculatePrices);

    // Accesibilidad: permitir seleccionar resultado con Enter cuando searchResults esté visible
    searchResults.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const focused = searchResults.querySelector('.search-result-item.focus');
            if (focused) focused.click();
        }
    });
}

// Manejo de búsqueda
function handleSearch() {
    const query = String(searchInput.value || '').toLowerCase().trim();
    searchFocusIndex = -1;

    if (query.length < 2) {
        hideSearchResults();
        updateSummaryCounts(null);
        return;
    }

    const filtered = products.filter(p =>
        p.code.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    displaySearchResults(filtered);
    updateSummaryCounts(filtered.length);
}

// Mostrar resultados (creando nodos de forma segura)
function displaySearchResults(filteredProducts) {
    searchResults.innerHTML = '';
    searchResults.setAttribute('role', 'listbox');
    searchResults.tabIndex = -1;

    if (filteredProducts.length === 0) {
        const no = document.createElement('div');
        no.className = 'search-result-item no-results';
        no.textContent = 'No se encontraron productos 😞';
        searchResults.appendChild(no);
        showSearchResults();
        return;
    }

    filteredProducts.slice(0, 10).forEach((product) => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.setAttribute('role', 'option');
        item.tabIndex = 0;

        const codeEl = document.createElement('div');
        codeEl.className = 'result-code';
        codeEl.textContent = product.code;

        const descEl = document.createElement('div');
        descEl.className = 'result-description';
        descEl.textContent = product.description;

        const priceEl = document.createElement('div');
        priceEl.className = 'result-price';
        priceEl.textContent = `Tu costo: ${formatCurrency(product.discount35)} | Precio sugerido: ${formatCurrency(product.suggestedPrice)}`;

        item.appendChild(codeEl);
        item.appendChild(descEl);
        item.appendChild(priceEl);

        // click => seleccionar producto
        item.addEventListener('click', () => {
            const idx = products.findIndex(p => p.code === product.code);
            if (idx >= 0) selectProduct(idx);
            hideSearchResults();
            searchInput.value = '';
            searchInput.focus();
        });

        // keyboard: Enter to select
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                item.click();
            }
        });

        searchResults.appendChild(item);
    });

    showSearchResults();
}

// Mostrar/ocultar helpers
function showSearchResults() {
    searchResults.style.display = 'block';
    searchResults.setAttribute('aria-expanded', 'true');
}
function hideSearchResults() {
    searchResults.style.display = 'none';
    searchResults.setAttribute('aria-expanded', 'false');
    // limpiar foco
    const prev = searchResults.querySelector('.search-result-item.focus');
    if (prev) prev.classList.remove('focus');
    searchFocusIndex = -1;
}

// Manejo de teclado en campo de búsqueda (navegación por resultados)
function handleSearchKeydown(e) {
    const items = Array.from(searchResults.querySelectorAll('.search-result-item')).filter(i => !i.classList.contains('no-results'));
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchFocusIndex = Math.min(searchFocusIndex + 1, items.length - 1);
        updateSearchFocus(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchFocusIndex = Math.max(searchFocusIndex - 1, 0);
        updateSearchFocus(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchFocusIndex >= 0 && items[searchFocusIndex]) {
            items[searchFocusIndex].click();
        }
    } else if (e.key === 'Escape') {
        hideSearchResults();
    }
}

function updateSearchFocus(items) {
    items.forEach(i => i.classList.remove('focus'));
    const current = items[searchFocusIndex];
    if (current) {
        current.classList.add('focus');
        current.scrollIntoView({ block: 'nearest' });
        current.focus();
    }
}

// Limpiar búsqueda
function clearSearch() {
    searchInput.value = '';
    hideSearchResults();
    searchInput.focus();
    updateSummaryCounts(null);
}

// Seleccionar producto por índice
function selectProduct(index) {
    if (typeof index !== 'number' || index < 0 || index >= products.length) return;
    selectedProduct = products[index];
    productSelect.value = index.toString();

    // Mostrar feedback accesible y por consola
    const shortName = (selectedProduct.description || '').slice(0, 60);
    console.log(`✅ Producto seleccionado: ${shortName}`);

    // Enfocar cantidad y realizar cálculo automático si hay cantidad válida
    quantityInput.focus();
    if (quantityInput.value && Number(quantityInput.value) > 0) {
        calculatePrices();
    }
}

// Manejo select native
function handleProductSelection() {
    const idx = productSelect.value;
    if (idx === '') {
        selectedProduct = null;
        resultsDiv.style.display = 'none';
    } else {
        selectProduct(parseInt(idx, 10));
    }
}

// Validar cantidad
function validateQuantity() {
    let v = parseInt(quantityInput.value, 10);
    if (isNaN(v) || v < 1) v = 1;
    // Limitar a número razonable para evitar overflow (ej.: 1e6)
    const MAX_Q = 1_000_000;
    if (v > MAX_Q) v = MAX_Q;
    quantityInput.value = v;
}

// Calcular precios y mostrar resultados
function calculatePrices() {
    if (!selectedProduct) {
        alert('⚠️ Por favor selecciona un producto primero');
        return;
    }

    const qty = parseInt(quantityInput.value, 10) || 1;
    const totalCost = selectedProduct.discount35 * qty;
    const totalSuggestedPrice = selectedProduct.suggestedPrice * qty;
    const totalProfit = totalSuggestedPrice - totalCost;
    const profitMargin = totalCost > 0 ? (totalProfit / totalCost) * 100 : NaN;

    // Actualizar UI
    const costEl = document.getElementById('costResult');
    const priceEl = document.getElementById('priceResult');
    const profitEl = document.getElementById('profitResult');
    const marginEl = document.getElementById('marginResult');

    if (costEl) costEl.textContent = formatCurrency(totalCost);
    if (priceEl) priceEl.textContent = formatCurrency(totalSuggestedPrice);
    if (profitEl) profitEl.textContent = formatCurrency(totalProfit);
    if (marginEl) {
        marginEl.textContent = formatPercentage(profitMargin);
        // clases de color (usa clases definidas en CSS: text-success, text-warning, text-danger)
        marginEl.className = 'result-value';
        if (isNaN(profitMargin)) {
            marginEl.classList.add('text-muted');
        } else if (profitMargin >= 50) {
            marginEl.classList.add('text-success');
        } else if (profitMargin >= 30) {
            marginEl.classList.add('text-warning');
        } else {
            marginEl.classList.add('text-danger');
        }
    }

    resultsDiv.style.display = 'block';
    // Actualizar contador de resultados visibles
    updateSummaryCounts(); // mantiene total, results puede seguir siendo —
    console.log(`📊 Cálculo: ${selectedProduct.description} x${qty} -> Ganancia ${formatCurrency(totalProfit)} (${formatPercentage(profitMargin)})`);
}

// Exportar datos (mantengo)
function exportData() {
    const data = { products, exportDate: new Date().toISOString(), totalProducts: products.length };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'productos_omnilife.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    console.log('📁 Datos exportados correctamente');
}

// Service Worker (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => {
            console.log('🔧 Service Worker registrado');
        }).catch(() => {
            console.log('❌ Error al registrar Service Worker');
        });
    });
}

// Exponer funciones globales necesarias
window.selectProduct = selectProduct;
window.exportData = exportData;

// DOM ready
document.addEventListener('DOMContentLoaded', initApp);
