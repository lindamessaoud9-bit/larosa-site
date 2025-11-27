document.addEventListener('DOMContentLoaded', () => {
    // Gestion des menus accordéon
    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const submenu = btn.nextElementSibling;
            submenu.classList.toggle('active');
        });
    });

    // Gestion de l'affichage des produits
    const submenuBtns = document.querySelectorAll('.submenu-btn');
    const productDetail = document.getElementById('product-detail');
    const home = document.getElementById('home');
    const about = document.getElementById('about');

    submenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            home.classList.add('hidden');
            about.classList.add('hidden');
            productDetail.classList.remove('hidden');
            displayProducts(category);
        });
    });

    function displayProducts(category) {
        let content = '';
        switch (category) {
            case 'gateaux':
                content = `
                    <h2>Gâteaux</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="gateau-chocolat.jpg" alt="Gâteau au Chocolat">
                            <h4>Gâteau au Chocolat</h4>
                            <p>Ingrédients: Farine, chocolat noir, beurre, sucre, œufs, levure.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="gateau-vanille.jpg" alt="Gâteau à la Vanille">
                            <h4>Gâteau à la Vanille</h4>
                            <p>Ingrédients: Farine, vanille, beurre, sucre, œufs, lait.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="gateau-fruits.jpg" alt="Gâteau aux Fruits">
                            <h4>Gâteau aux Fruits</h4>
                            <p>Ingrédients: Farine, fruits frais, beurre, sucre, œufs, crème.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'biscuits':
                content = `
                    <h2>Biscuits</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="biscuit-sable.jpg" alt="Sablés">
                            <h4>Sablés</h4>
                            <p>Ingrédients: Farine, beurre, sucre, vanille.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="biscuit-noix.jpg" alt="Biscuits aux Noix">
                            <h4>Biscuits aux Noix</h4>
                            <p>Ingrédients: Farine, noix, beurre, sucre, œufs.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="biscuit-chocolat.jpg" alt="Biscuits au Chocolat">
                            <h4>Biscuits au Chocolat</h4>
                            <p>Ingrédients: Farine, chocolat, beurre, sucre.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'millefeuilles':
                content = `
                    <h2>Millefeuilles</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="millefeuille-normal.jpg" alt="Millefeuille Normal">
                            <h4>Millefeuille Normal</h4>
                            <p>Ingrédients: Pâte feuilletée, crème pâtissière, sucre glace.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="millefeuille-chocolat.jpg" alt="Millefeuille au Chocolat">
                            <h4>Millefeuille au Chocolat</h4>
                            <p>Ingrédients: Pâte feuilletée, crème au chocolat, sucre glace.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="millefeuille-amandes.jpg" alt="Millefeuille aux Amandes">
                            <h4>Millefeuille aux Amandes</h4>
                            <p>Ingrédients: Pâte feuilletée, crème aux amandes, amandes grillées.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'tartes':
                content = `
                    <h2>Tartes</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="tarte-fruits.jpg" alt="Tarte aux Fruits">
                            <h4>Tarte aux Fruits</h4>
                            <p>Ingrédients: Pâte sablée, crème pâtissière, fruits frais (fraises, kiwis, etc.).</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="tarte-amandes.jpg" alt="Tarte aux Amandes">
                            <h4>Tarte aux Amandes</h4>
                            <p>Ingrédients: Pâte sablée, frangipane, amandes effilées.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'petits-fours':
                content = `
                    <h2>Petits Fours</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="petits-fours-assortiment.jpg" alt="Assortiment de Petits Fours">
                            <h4>Assortiment de Petits Fours</h4>
                            <p>Ingrédients: Variés (pâte d'amande, chocolat, fruits secs, etc.).</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'macaron-marocain':
                content = `
                    <h2>Macaron Marocain</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="macaron-marocain.jpg" alt="Macaron Marocain">
                            <h4>Macaron Marocain</h4>
                            <p>Ingrédients: Amandes, miel, fleur d'oranger, sucre.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'croissants':
                content = `
                    <h2>Croissants</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="croissant-classique.jpg" alt="Croissant Classique">
                            <h4>Croissant Classique</h4>
                            <p>Ingrédients: Farine, beurre, levure, sel.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="croissant-amandes.jpg" alt="Croissant aux Amandes">
                            <h4>Croissant aux Amandes</h4>
                            <p>Ingrédients: Farine, beurre, crème d'amandes, sucre.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="croissant-chocolat.jpg" alt="Croissant au Chocolat">
                            <h4>Croissant au Chocolat</h4>
                            <p>Ingrédients: Farine, beurre, chocolat, sucre.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'pates':
                content = `
                    <h2>Pâtés</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="pate-viande.jpg" alt="Pâté de Viande">
                            <h4>Pâté de Viande</h4>
                            <p>Ingrédients: Viande hachée, oignons, épices, pâte brisée.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="pate-legumes.jpg" alt="Pâté aux Légumes">
                            <h4>Pâté aux Légumes</h4>
                            <p>Ingrédients: Légumes mixtes, herbes, pâte brisée.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'quiches':
                content = `
                    <h2>Quiches</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="quiche-lorraine.jpg" alt="Quiche Lorraine">
                            <h4>Quiche Lorraine</h4>
                            <p>Ingrédients: Lardons, fromage, œufs, crème, pâte brisée.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="quiche-legumes.jpg" alt="Quiche aux Légumes">
                            <h4>Quiche aux Légumes</h4>
                            <p>Ingrédients: Légumes, fromage, œufs, crème, pâte brisée.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'pizzas':
                content = `
                    <h2>Pizzas</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="pizza-margherita.jpg" alt="Pizza Margherita">
                            <h4>Pizza Margherita</h4>
                            <p>Ingrédients: Pâte à pizza, tomate, mozzarella, basilic.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="pizza-pepperoni.jpg" alt="Pizza Pepperoni">
                            <h4>Pizza Pepperoni</h4>
                            <p>Ingrédients: Pâte à pizza, tomate, mozzarella, pepperoni.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'sale-kg':
                content = `
                    <h2>Salé en kg</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="feuilletes-olives.jpg" alt="Feuilletés aux Olives">
                            <h4>Feuilletés aux Olives</h4>
                            <p>Ingrédients: Pâte feuilletée, olives, fromage.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="feuilletes-fromage.jpg" alt="Feuilletés au Fromage">
                            <h4>Feuilletés au Fromage</h4>
                            <p>Ingrédients: Pâte feuilletée, fromage, herbes.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'sandwiches':
                content = `
                    <h2>Sandwiches</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="sandwich-special.jpg" alt="Spécial Sandwich de La Rosa">
                            <h4>Spécial Sandwich de La Rosa</h4>
                            <p>Ingrédients: Pain maison, jambon, fromage, salade, sauce secrète.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="mini-sandwiches.jpg" alt="Mini Sandwiches">
                            <h4>Mini Sandwiches</h4>
                            <p>Ingrédients: Petits pains, variétés de garnitures (jambon, thon, etc.).</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="burger.jpg" alt="Burger">
                            <h4>Burger</h4>
                            <p>Ingrédients: Pain burger, viande, fromage, salade, tomate, sauce.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'souffles':
                content = `
                    <h2>Soufflés</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="souffle-fromage.jpg" alt="Soufflé au Fromage">
                            <h4>Soufflé au Fromage</h4>
                            <p>Ingrédients: Fromage, œufs, lait, beurre, farine.</p>
                            <span class="price">Prix : </span>
                        </div>
                        <div class="product">
                            <img src="souffle-legumes.jpg" alt="Soufflé aux Légumes">
                            <h4>Soufflé aux Légumes</h4>
                            <p>Ingrédients: Légumes, œufs, lait, beurre, farine.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'jus-orange':
                content = `
                    <h2>Jus d'Orange</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="jus-orange.jpg" alt="Jus d'Orange">
                            <h4>Jus d'Orange Frais</h4>
                            <p>Ingrédients: Oranges fraîches pressées.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            case 'jus-citron':
                content = `
                    <h2>Jus de Citron</h2>
                    <div class="product-grid">
                        <div class="product">
                            <img src="jus-citron.jpg" alt="Jus de Citron">
                            <h4>Jus de Citron Frais</h4>
                            <p>Ingrédients: Citrons frais pressés, sucre optionnel.</p>
                            <span class="price">Prix : </span>
                        </div>
                    </div>`;
                break;
            default:
                content = '<h2>Catégorie non trouvée</h2>';
        }
        productDetail.innerHTML = content;
    }
});