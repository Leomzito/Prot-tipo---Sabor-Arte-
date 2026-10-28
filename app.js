        function appData() {
            return {
                isMobileNavOpen: false,
                isCartOpen: false,
                isCheckoutModalOpen: false,
                selectedModalItem: null,
                activeCategory: 'all',
                newsletterEmail: '',
                storeQuery: '',
                
                // Forms
                franchiseForm: { name: '', email: '', phone: '', city: '' },
                careerForm: { name: '', email: '', role: '' },

                // Toast state
                toasts: [],
                showToast(message, type = 'success') {
                    const id = Date.now();
                    this.toasts.push({ id, message, type, visible: true });
                    setTimeout(() => {
                        this.toasts = this.toasts.filter(t => t.id !== id);
                    }, 3500);
                },

                // Categories
                categories: [
                    { id: 'burgers', name: 'Burger Lab', icon: 'fa-solid fa-hamburger' },
                    { id: 'pizzas', name: 'La Forno Pizza', icon: 'fa-solid fa-pizza-slice font-bold' },
                    { id: 'fresh', name: 'Verde & Bowls', icon: 'fa-solid fa-leaf' },
                    { id: 'desserts', name: 'Dolce & CaffÃ¨', icon: 'fa-solid fa-mug-hot' }
                ],

                // Menu Items Data
                menuItems: [
                    {
                        id: 1,
                        category: 'burgers',
                        brand: 'Artesanal Burger Lab',
                        title: 'Smokey Bacon Master',
                        price: 42.90,
                        rating: '4.9',
                        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
                        description: 'Blend bovino 180g de Angus, queijo cheddar inglÃªs derretido, bacon artesanal defumado em lenha de macieira e maionese de alho negro.',
                        tags: ['Angus 100%', 'Bacon Defumado', 'Best-Seller']
                    },
                    {
                        id: 2,
                        category: 'burgers',
                        brand: 'Artesanal Burger Lab',
                        title: 'Truffle & Mushroom Burger',
                        price: 48.00,
                        rating: '4.8',
                        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
                        description: 'HambÃºrguer de 180g, cogumelos shimeji flambados no vinho branco, queijo gruyÃ¨re e azeite de trufas brancas no pÃ£o brioche artesanal.',
                        tags: ['Gourmet', 'Trufas', 'Chef Special']
                    },
                    {
                        id: 3,
                        category: 'pizzas',
                        brand: 'La Forno Pizzaria',
                        title: 'Pizza Margherita Di Bufala',
                        price: 68.90,
                        rating: '5.0',
                        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
                        description: 'Massa de fermentaÃ§Ã£o natural 48h, molho de tomate San Marzano italiano, muÃ§arela de bÃºfala fresca e manjericÃ£o orgÃ¢nico.',
                        tags: ['FermentaÃ§Ã£o Natural', 'San Marzano', 'Vegetariano']
                    },
                    {
                        id: 4,
                        category: 'pizzas',
                        brand: 'La Forno Pizzaria',
                        title: 'Pizza Diavola Picante',
                        price: 74.00,
                        rating: '4.7',
                        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
                        description: 'Salame picante artesanal, pimenta jalapeÃ±o, queijo fior di latte e toque de mel silvestre picante pÃ³s-forno.',
                        tags: ['Picante', 'Forno a Lenha']
                    },
                    {
                        id: 5,
                        category: 'fresh',
                        brand: 'Verde & Fresh Bowls',
                        title: 'Bowl de SalmÃ£o & Avocado',
                        price: 39.90,
                        rating: '4.9',
                        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
                        description: 'Cubos de salmÃ£o fresco marinado em gergelim, quinoa real, abacate, edamame, manga picada e molho ponzu especial.',
                        tags: ['Low Carb', 'Rico em Ã”mega-3', 'SaudÃ¡vel']
                    },
                    {
                        id: 6,
                        category: 'fresh',
                        brand: 'Verde & Fresh Bowls',
                        title: 'Caesar Wrap com Frango Grelhado',
                        price: 32.50,
                        rating: '4.6',
                        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
                        description: 'Tiras de peito de frango grelhado na hora, alface americana crocante, croutons artesanais e molho caesar sem glÃºten.',
                        tags: ['Proteico', 'RÃ¡pido & PrÃ¡tico']
                    },
                    {
                        id: 7,
                        category: 'desserts',
                        brand: 'Dolce & CaffÃ¨',
                        title: 'TiramisÃ¹ Tradicional Italiano',
                        price: 26.00,
                        rating: '4.9',
                        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
                        description: 'Biscoito savoiardi embebido em cafÃ© expresso especial e licor de amaretto, intercalado com creme aveludado de mascarpone.',
                        tags: ['Sobremesa Artesanal', 'Receita Original']
                    },
                    {
                        id: 8,
                        category: 'desserts',
                        brand: 'Dolce & CaffÃ¨',
                        title: 'Espresso Blend Reserva Corp',
                        price: 12.00,
                        rating: '4.8',
                        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
                        description: 'GrÃ£os 100% arÃ¡bica cultivados na Serra da Mantiqueira, notas sensoriais de chocolate amargo e avelÃ£ torrada.',
                        tags: ['100% ArÃ¡bica', 'Torra Especial']
                    }
                ],

                // Filtered items computed property equivalent
                get filteredMenuItems() {
                    if (this.activeCategory === 'all') {
                        return this.menuItems;
                    }
                    return this.menuItems.filter(item => item.category === this.activeCategory);
                },

                // Shopping Cart State
                cart: [],
                get cartTotalCount() {
                    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
                },
                get cartSubtotal() {
                    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                },
                get cartFinalTotal() {
                    const delivery = this.cartSubtotal > 100 ? 0 : 8.90;
                    return this.cartSubtotal + (this.cart.length > 0 ? delivery : 0);
                },

                addToCart(item) {
                    const existing = this.cart.find(i => i.id === item.id);
                    if (existing) {
                        existing.quantity++;
                    } else {
                        this.cart.push({ ...item, quantity: 1 });
                    }
                    this.showToast(`"${item.title}" foi adicionado ao seu pedido!`);
                },

                updateCartQty(id, change) {
                    const item = this.cart.find(i => i.id === id);
                    if (item) {
                        item.quantity += change;
                        if (item.quantity <= 0) {
                            this.removeFromCart(id);
                        }
                    }
                },

                removeFromCart(id) {
                    this.cart = this.cart.filter(i => i.id !== id);
                    this.showToast('Item removido do carrinho.', 'info');
                },

                checkoutSimulation() {
                    this.isCartOpen = false;
                    this.cart = [];
                    this.isCheckoutModalOpen = true;
                },

                openModal(item) {
                    this.selectedModalItem = item;
                },

                // Store Finder State
                stores: [
                    {
                        id: 1,
                        name: 'Flagship Jardins - SP',
                        address: 'Alameda Santos, 1420 - Jardins, SÃ£o Paulo',
                        hours: 'Seg a Dom: 11h30 Ã s 23h30',
                        phone: '(11) 3244-9000',
                        status: 'Aberta Agora',
                        features: ['Drive-Thru Gourmet', 'Valet Parking', 'EspaÃ§o Kids', 'Pet Friendly']
                    },
                    {
                        id: 2,
                        name: 'Unidade Ipanema - RJ',
                        address: 'Rua Visconde de PirajÃ¡, 550 - Ipanema, Rio de Janeiro',
                        hours: 'Seg a Dom: 12h00 Ã s 00h00',
                        phone: '(21) 2512-8800',
                        status: 'Aberta Agora',
                        features: ['Vista Mar', 'Rooftop Bar', 'Delivery 24h', 'WiFi Ultra-RÃ¡pido']
                    },
                    {
                        id: 3,
                        name: 'Batel Gastronomia - Curitiba',
                        address: 'Av. do Batel, 1850 - Batel, Curitiba',
                        hours: 'Seg a Sab: 11h30 Ã s 23h00',
                        phone: '(41) 3019-4455',
                        status: 'Aberta Agora',
                        features: ['Adeca Climatizada', 'Estacionamento PrÃ³prio', 'SalÃ£o VIP']
                    },
                    {
                        id: 4,
                        name: 'Lourdes Premium - BH',
                        address: 'Rua da Bahia, 2100 - Lourdes, Belo Horizonte',
                        hours: 'Ter a Dom: 12h00 Ã s 23h00',
                        phone: '(31) 3291-7722',
                        status: 'Aberta Agora',
                        features: ['Forno a Lenha VisÃ­vel', 'Ãrea Externa', 'Som ao Vivo']
                    }
                ],

                selectedStore: {
                    id: 1,
                    name: 'Flagship Jardins - SP',
                    address: 'Alameda Santos, 1420 - Jardins, SÃ£o Paulo',
                    hours: 'Seg a Dom: 11h30 Ã s 23h30',
                    phone: '(11) 3244-9000',
                    status: 'Aberta Agora',
                    features: ['Drive-Thru Gourmet', 'Valet Parking', 'EspaÃ§o Kids', 'Pet Friendly']
                },

                get filteredStores() {
                    if (!this.storeQuery) return this.stores;
                    const q = this.storeQuery.toLowerCase();
                    return this.stores.filter(s => s.name.toLowerCase().includes(q) || s.address.toLowerCase().includes(q));
                },

                // Forms submissions
                submitFranchiseForm() {
                    this.showToast(`Obrigado, ${this.franchiseForm.name}! Nossa equipe de expansÃ£o entrarÃ¡ em contato em atÃ© 24h.`);
                    this.franchiseForm = { name: '', email: '', phone: '', city: '' };
                },

                submitCareerForm() {
                    this.showToast(`Candidatura de ${this.careerForm.name} enviada com sucesso para o nosso RH!`);
                    this.careerForm = { name: '', email: '', role: '' };
                },

                submitNewsletter() {
                    this.showToast(`E-mail ${this.newsletterEmail} cadastrado na nossa newsletter VIP!`);
                    this.newsletterEmail = '';
                }
            }
        }
