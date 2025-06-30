// Base de datos de productos
const products = [
    {
        code: "4250604",
        description: "ALOE BETA PIÑA, 200 ML E",
        points: 5,
        listPrice: 9700,
        discount35: 8773,
        suggestedPrice: 12800
    },
    {
        code: "4850500",
        description: "EGO FRUTAS DEL BOSQUE EVOLUCIÓN LATA 355 ML",
        points: 26,
        listPrice: 72200,
        discount35: 65298,
        suggestedPrice: 95350
    },
    {
        code: "1260600",
        description: "EGO PLANT BOTELLA 200 ML E",
        points: 5,
        listPrice: 9700,
        discount35: 8773,
        suggestedPrice: 12800
    },
    {
        code: "2075722",
        description: "BIOCROS SUPREME CAJA 30 SOBRES 240G",
        points: 53,
        listPrice: 90900,
        discount35: 82210,
        suggestedPrice: 120050
    },
    {
        code: "1429653",
        description: "OMNILIFE F PLUS",
        points: 54,
        listPrice: 102000,
        discount35: 92249,
        suggestedPrice: 134750
    },
    {
        code: "5174732",
        description: "CAFELIFE PLUS CAJA 30 SOBRES 150 G",
        points: 51,
        listPrice: 85000,
        discount35: 76874,
        suggestedPrice: 112300
    },
    {
        code: "4160100",
        description: "AGUA BLU, SUPREME DE 1.5 LTS",
        points: 3,
        listPrice: 5750,
        discount35: 4370,
        suggestedPrice: 6400
    },
    {
        code: "4160400",
        description: "AGUA BLU, SUPREME 600 ML",
        points: 1,
        listPrice: 2950,
        discount35: 2242,
        suggestedPrice: 3250
    },
    {
        code: "4250204",
        description: "ALOE BETA PIÑA 960 ML E",
        points: 25,
        listPrice: 47100,
        discount35: 42597,
        suggestedPrice: 62200
    },
    {
        code: "3924734",
        description: "AQTUA SUPREME, CAJA 30 SACHETS",
        points: 112,
        listPrice: 146600,
        discount35: 132585,
        suggestedPrice: 193650
    },
    {
        code: "4650609",
        description: "EGO 10 BOTELLA 200 ML E",
        points: 5,
        listPrice: 9700,
        discount35: 8773,
        suggestedPrice: 12800
    },
    {
        code: "4978904",
        description: "EGO LIFE SUPREME CAJA 30 SOBRES",
        points: 32,
        listPrice: 63000,
        discount35: 56977,
        suggestedPrice: 83200
    },
    {
        code: "1675700",
        description: "ESTOP PLUS CAJA 30 SACHETS 450G",
        points: 102,
        listPrice: 190400,
        discount35: 172198,
        suggestedPrice: 251500
    },
    {
        code: "8453000",
        description: "FLU-Y BOTE 60 CAPSULAS",
        points: 39,
        listPrice: 76500,
        discount35: 69187,
        suggestedPrice: 101050
    },
    {
        code: "5350513",
        description: "FX MANZANA EVOLUCIÓN",
        points: 11,
        listPrice: 26000,
        discount35: 23514,
        suggestedPrice: 34350
    },
    {
        code: "5350501",
        description: "FX NARANJA EVOLUCIÓN",
        points: 11,
        listPrice: 26000,
        discount35: 23514,
        suggestedPrice: 34350
    },
    {
        code: "1729752",
        description: "HOMO PLUS, CAJA 30 SACHETS 180 G",
        points: 54,
        listPrice: 102000,
        discount35: 92249,
        suggestedPrice: 134750
    },
    {
        code: "1850610",
        description: "OMNILIFE KOLINA, BOTELLA 200 ML E",
        points: 5,
        listPrice: 9700,
        discount35: 8773,
        suggestedPrice: 12800
    },
    {
        code: "6521959",
        description: "OMNIOST EVOLUCION 300GR",
        points: 57,
        listPrice: 111400,
        discount35: 100750,
        suggestedPrice: 147150
    },
    {
        code: "2350430",
        description: "OMNIPLUS FRUTAS EVOLUCION 30 SACH 6",
        points: 79,
        listPrice: 139700,
        discount35: 126345,
        suggestedPrice: 184550
    },
    {
        code: "2360401",
        description: "OMNIPLUS NARAN SUP CAJA 30 SOBRES 6",
        points: 78,
        listPrice: 139700,
        discount35: 126345,
        suggestedPrice: 184550
    },
    {
        code: "5827415",
        description: "OMNIVIU SUPREME CAJA C/30 SACHETS 1",
        points: 58,
        listPrice: 95600,
        discount35: 86461,
        suggestedPrice: 126300
    },
    {
        code: "2505711",
        description: "COGNOS EVOLUCION CAJA",
        points: 61,
        listPrice: 95200,
        discount35: 86099,
        suggestedPrice: 125750
    },
    {
        code: "6722800",
        description: "OMNILIFE PROBIOTIC CAJA 30 SOBRES S",
        points: 62,
        listPrice: 118400,
        discount35: 107081,
        suggestedPrice: 156400
    },
    {
        code: "5479243",
        description: "OMNILIFE PUMP SUPREME CAJA 12 SOBRE",
        points: 69,
        listPrice: 114800,
        discount35: 103825,
        suggestedPrice: 151650
    },
    {
        code: "7170943",
        description: "OMNILIFE SHAKE SUPREME CAJA 12 SOBR",
        points: 76,
        listPrice: 121700,
        discount35: 110065,
        suggestedPrice: 160750
    },
    {
        code: "7170921",
        description: "OMNILIFE SHAKE SUPREME FRESA SILVES",
        points: 76,
        listPrice: 121700,
        discount35: 110065,
        suggestedPrice: 160750
    },
    {
        code: "3000730",
        description: "STARBIEN EVOLUCIÓN CAJA C 30 SOBRES 240 GR S",
        points: 53,
        listPrice: 89900,
        discount35: 81306,
        suggestedPrice: 118750
    },
    {
        code: "3178516",
        description: "SUPER MIX SUPREME VAINILLA CAJA 510",
        points: 76,
        listPrice: 118900,
        discount35: 107533,
        suggestedPrice: 157050
    },
    {
        code: "3575609",
        description: "THERMOGEN TEA MARAC SUPREME 30 SACH",
        points: 92,
        listPrice: 154400,
        discount35: 139639,
        suggestedPrice: 203950
    },
    {
        code: "3806816",
        description: "UZO EVOLUCION 240 GR",
        points: 167,
        listPrice: 244000,
        discount35: 220674,
        suggestedPrice: 322300
    },
    {
        code: "5025516",
        description: "OMNILIFE VKIDS DOYPACK 400G",
        points: 71,
        listPrice: 121200,
        discount35: 109613,
        suggestedPrice: 160100
    },
    {
        code: "3575605",
        description: "THERMOGEN TEA LIMÓN, SUPREME C/30 SACHET",
        points: 54,
        listPrice: 102400,
        discount35: 92611,
        suggestedPrice: 135250
    },
    {
        code: "6379929",
        description: "ONE C MIX PLUS CAJA",
        points: 43,
        listPrice: 78500,
        discount35: 70995,
        suggestedPrice: 103700
    },
    {
        code: "4475910",
        description: "DOLCE VITA SUPREME TORONJA, CAJA 30 SACHETS",
        points: 63,
        listPrice: 115400,
        discount35: 104368,
        suggestedPrice: 152450
    },
    {
        code: "1578400",
        description: "FIBER'N PLUS SUPREME SACHET 450 G",
        points: 66,
        listPrice: 120800,
        discount35: 109252,
        suggestedPrice: 159550
    },
    {
        code: "2603201",
        description: "POWER MAKER, EVOLUCION",
        points: 110,
        listPrice: 156600,
        discount35: 141629,
        suggestedPrice: 206850
    },
    {
        code: "2904727",
        description: "TMGN COFFEE DE OLLA EVOLUCION",
        points: 39,
        listPrice: 68510,
        discount35: 61960,
        suggestedPrice: 90500
    },
    {
        code: "3304732",
        description: "TMGN COFFEE EVOLUCION",
        points: 39,
        listPrice: 68510,
        discount35: 61960,
        suggestedPrice: 90500
    }
];

// Variables globales
let selectedProduct = null;

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantityInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');
const productsTableBody = document.getElementById('productsTableBody');

// Formatear números como moneda colombiana
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Formatear porcentaje
function formatPercentage(percentage) {
    return `${percentage.toFixed(1)}%`;
}

// Inicializar la aplicación
function initApp() {
    populateProductSelect();
    populateProductsTable();
    setupEventListeners();
    
    console.log('🚀 Aplicación inicializada correctamente');
    console.log(`📊 ${products.length} productos cargados`);
}

// Poblar el select de productos
function populateProductSelect() {
    productSelect.innerHTML = '<option value="">Selecciona un producto...</option>';
    
    products.forEach((product, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${product.code} - ${product.description}`;
        productSelect.appendChild(option);
    });
}

// Poblar la tabla de productos
function populateProductsTable() {
    productsTableBody.innerHTML = '';
    
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${product.code}</strong></td>
            <td>${product.description}</td>
            <td>${product.points}</td>
            <td>${formatCurrency(product.listPrice)}</td>
            <td class="text-success"><strong>${formatCurrency(product.discount35)}</strong></td>
            <td class="text-warning"><strong>${formatCurrency(product.suggestedPrice)}</strong></td>
            <td>
                <button class="select-btn" onclick="selectProduct(${index})">
                    <i class="fas fa-check"></i> Seleccionar
                </button>
            </td>
        `;
        productsTableBody.appendChild(row);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Búsqueda de productos
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Calculadora
    calculateBtn.addEventListener('click', calculatePrices);
    quantityInput.addEventListener('input', validateQuantity);
    
    // Selección de producto
    productSelect.addEventListener('change', handleProductSelection);
    
    // Cerrar resultados de búsqueda al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
}

// Manejar búsqueda de productos
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.code.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    
    displaySearchResults(filteredProducts);
}

// Mostrar resultados de búsqueda
function displaySearchResults(filteredProducts) {
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No se encontraron productos 😞</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    searchResults.innerHTML = '';
    filteredProducts.slice(0, 10).forEach((product, index) => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div class="result-code">${product.code}</div>
            <div class="result-description">${product.description}</div>
            <div class="result-price">Tu costo: ${formatCurrency(product.discount35)} | Precio sugerido: ${formatCurrency(product.suggestedPrice)}</div>
        `;
        
        div.addEventListener('click', () => {
            const productIndex = products.findIndex(p => p.code === product.code);
            selectProduct(productIndex);
            searchResults.style.display = 'none';
            searchInput.value = '';
        });
        
        searchResults.appendChild(div);
    });
    
    searchResults.style.display = 'block';
}

// Limpiar búsqueda
function clearSearch() {
    searchInput.value = '';
    searchResults.style.display = 'none';
}

// Seleccionar producto
function selectProduct(index) {
    selectedProduct = products[index];
    productSelect.value = index;
    
    // Mostrar mensaje de confirmación
    const productName = selectedProduct.description.substring(0, 30) + '...';
    console.log(`✅ Producto seleccionado: ${productName}`);
    
    // Auto-calcular si hay cantidad
    if (quantityInput.value && quantityInput.value > 0) {
        calculatePrices();
    }
}

// Manejar selección de producto desde el select
function handleProductSelection() {
    const index = productSelect.value;
    if (index) {
        selectProduct(parseInt(index));
    } else {
        selectedProduct = null;
        resultsDiv.style.display = 'none';
    }
}

// Validar cantidad
function validateQuantity() {
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
        quantityInput.value = 1;
    }
}

// Calcular precios
function calculatePrices() {
    if (!selectedProduct) {
        alert('⚠️ Por favor selecciona un producto primero');
        return;
    }
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Cálculos
    const totalCost = selectedProduct.discount35 * quantity;
    const totalSuggestedPrice = selectedProduct.suggestedPrice * quantity;
    const totalProfit = totalSuggestedPrice - totalCost;
    const profitMargin = ((totalProfit / totalCost) * 100);
    
    // Mostrar resultados
    document.getElementById('costResult').textContent = formatCurrency(totalCost);
    document.getElementById('priceResult').textContent = formatCurrency(totalSuggestedPrice);
    document.getElementById('profitResult').textContent = formatCurrency(totalProfit);
    document.getElementById('marginResult').textContent = formatPercentage(profitMargin);
    
    // Cambiar colores según el margen
    const marginElement = document.getElementById('marginResult');
    if (profitMargin >= 50) {
        marginElement.className = 'result-value text-success';
    } else if (profitMargin >= 30) {
        marginElement.className = 'result-value text-warning';
    } else {
        marginElement.className = 'result-value text-danger';
    }
    
    resultsDiv.style.display = 'block';
    
    console.log(`📊 Cálculo realizado para ${selectedProduct.description} x${quantity}`);
    console.log(`💰 Ganancia: ${formatCurrency(totalProfit)} (${formatPercentage(profitMargin)})`);
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initApp);

// Agregar funcionalidades adicionales para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('🔧 Service Worker registrado');
            })
            .catch(error => {
                console.log('❌ Error al registrar Service Worker');
            });
    });
}

// Función para exportar datos (bonus)
function exportData() {
    const data = {
        products: products,
        exportDate: new Date().toISOString(),
        totalProducts: products.length
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'productos_omnilife.json';
    a.click();
    
    console.log('📁 Datos exportados correctamente');
}

// Hacer la función disponible globalmente
window.selectProduct = selectProduct;
window.exportData = exportData;

