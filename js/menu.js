// Données complètes du menu pour la page menu.html
const menuData = {
    categories: [
        {
            id: "plats-principaux",
            name: "Plats Principaux",
            items: [
                { id: 1, name: "Ndolé aux crevettes", description: "Feuilles de ndolé, arachides, viande et crevettes séchées", price: 3500, popular: true },
                { id: 2, name: "Poulet DG", description: "Poulet frit avec plantain et légumes frais", price: 3000, popular: true },
                { id: 3, name: "Sauce d'arachide au poisson", description: "Sauce onctueuse au poisson fumé", price: 2500, popular: false },
                { id: 4, name: "Eru/Ekoki", description: "Légumes feuilles avec viande ou poisson fumé", price: 2800, popular: false },
                { id: 5, name: "Mbongo'o Tchobi", description: "Sauce noire épicée au poisson", price: 4000, popular: true }
            ]
        },
        {
            id: "grillades",
            name: "Grillades & Viandes",
            items: [
                { id: 6, name: "Poisson braisé (Capitaine)", description: "Poisson grillé aux épices locales", price: 4000, popular: true },
                { id: 7, name: "Soya", description: "Brochettes de viande épicées", price: 1500, popular: false },
                { id: 8, name: "Kondre", description: "Ragoût de plantain vert avec viande de chèvre", price: 3500, popular: false }
            ]
        },
        {
            id: "accompagnements",
            name: "Accompagnements",
            items: [
                { id: 9, name: "Riz blanc", description: "", price: 500, popular: false },
                { id: 10, name: "Plantain frit", description: "", price: 800, popular: true },
                { id: 11, name: "Bâton de manioc (Miondo)", description: "", price: 700, popular: false },
                { id: 12, name: "Foufou d'igname", description: "", price: 1000, popular: false },
                { id: 13, name: "Macabo râpé (Kouakoukou)", description: "Macabo râpé cuit en papillote", price: 1200, popular: true }
            ]
        },
        {
            id: "boissons",
            name: "Boissons",
            items: [
                { id: 14, name: "Eau minérale", description: "1.5L", price: 800, popular: false },
                { id: 15, name: "Jus naturel", description: "Ananas, Mangue, Orange", price: 1200, popular: true },
                { id: 16, name: "Soda", description: "Coca, Fanta, Sprite", price: 1000, popular: false },
                { id: 17, name: "Bière locale", description: "", price: 1500, popular: false }
            ]
        }
    ],
    
    // Menu du jour (exemple)
    dailyMenu: {
        date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }),
        plat: "Poulet DG avec plantain",
        prix: 3000,
        description: "Notre plat du jour spécial, préparé avec des ingrédients frais du marché."
    }
};

// Fonction pour charger le menu complet (pour menu.html)
function loadFullMenu() {
    const menuContainer = document.getElementById('menu-container');
    const dailyMenuContainer = document.getElementById('daily-menu');
    
    if (!menuContainer) return;
    
    // Afficher le menu du jour si le conteneur existe
    if (dailyMenuContainer) {
        const daily = menuData.dailyMenu;
        dailyMenuContainer.innerHTML = `
            <div class="daily-menu-card">
                <div class="daily-menu-header">
                    <h3><i class="fas fa-calendar-day"></i> Menu du Jour</h3>
                    <span class="daily-date">${daily.date}</span>
                </div>
                <div class="daily-menu-content">
                    <h4>${daily.plat}</h4>
                    <p>${daily.description}</p>
                    <div class="daily-menu-price">${daily.prix} FCFA</div>
                </div>
            </div>
        `;
    }
    
    // Générer le menu par catégories
    let menuHTML = '';
    
    menuData.categories.forEach(category => {
        menuHTML += `
        <div class="menu-category" id="${category.id}">
            <h3 class="category-title">${category.name}</h3>
            <div class="category-items">
        `;
        
        category.items.forEach(item => {
            menuHTML += `
            <div class="menu-item ${item.popular ? 'popular-item' : ''}">
                <div class="item-info">
                    <h4 class="item-name">
                        ${item.name}
                        ${item.popular ? '<span class="popular-badge"><i class="fas fa-star"></i> Populaire</span>' : ''}
                    </h4>
                    ${item.description ? `<p class="item-desc">${item.description}</p>` : ''}
                </div>
                <div class="item-price">${item.price} FCFA</div>
            </div>
            `;
        });
        
        menuHTML += `
            </div>
        </div>
        `;
    });
    
    menuContainer.innerHTML = menuHTML;
}

// Filtrer le menu par catégorie
function filterMenu(categoryId) {
    if (categoryId === 'all') {
        document.querySelectorAll('.menu-category').forEach(cat => {
            cat.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.menu-category').forEach(cat => {
            cat.style.display = cat.id === categoryId ? 'block' : 'none';
        });
    }
}

// Initialiser le menu quand la page est chargée
if (document.querySelector('.menu-page')) {
    document.addEventListener('DOMContentLoaded', loadFullMenu);
}