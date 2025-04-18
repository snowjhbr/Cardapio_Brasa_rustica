export function memory() {
    const produtos = [
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: 'pizzas/PizzaFranbacon.png',
            valor: 38.00,
            tipoProduto: 'Pizza' 
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: 'pizzas/PizzaFrango.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: 'pizzas/PizzaCalabresa.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: 'pizzas/PizzaMista.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: 'pizzas/PizzaMarguerita.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: 'pizzas/PizzaMussarela.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: 'pizzas/PizzaBaiana.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: 'pizzas/Pizza4queijos.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: 'pizzas/PizzaPortuguesa.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: 'pizzas/PizzaCarnedesol.png',
            valor: 40.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: 'pizzas/PizzaModa.png',
            valor: 38.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: 'pizzas/PizzaCarbonara.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: 'pizzas/PizzaMilho.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: 'pizzas/PizzaBacon.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: 'pizzas/PizzaBrasarustica.png',
            valor: 38.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: 'pizzas/PizzaBarbebacon.png',
            valor: 35.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 17,
            nome: 'Lombinho',
            descricao: 'Mussarela lombo canadense orégano e molho da casa.',
            imagem: 'pizzas/PizzaLombinho.png',
            valor: 40.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 18,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: 'pizzas/PizzaBigonta.png',
            valor: 38.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 19,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: 'pizzas/PizzaMexicana.png',
            valor: 38.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 20,
            nome: 'Atum',
            descricao: 'Atum mussarela cebola em fios molho da casa e orégano.',
            imagem: 'pizzas/PizzaAtum.png',
            valor: 40.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 21,
            nome: 'Chocolate',
            descricao: 'Chocolate.',
            imagem: 'pizzas/PizzaChocolate.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },
        {
            id: 22,
            nome: 'Chocolate com M&Ms',
            descricao: 'Chocolate e M&Ms.',
            imagem: 'pizzas/PizzaChocolatemem.png',
            valor: 30.00,
            tipoProduto: 'Pizza'
        },

    ];

    const bordas = [
        { nome: 'Sem recheio', valor: 0.00 },
        { nome: 'Catupiry', valor: 7.00 },
        { nome: 'Cheddar', valor: 7.00 },
        { nome: 'Chocolate', valor: 5.00 },
        { nome: 'Cream Cheese', valor: 8.00 },
        { nome: 'Coxinha', valor: 15.00 },
        { nome: 'Vulcão', valor: 9.00 },
      ];

    const PizzaMontada = {
        nome: 'Monte Sua Pizza!',
        descricao: 'Escolha até dois sabores e borda!',
        imagem: '/pizzas/PizzaMontesuapizza.png',
        valorInicial: 50.00,
        grupoAdicional: [
            
            {
                grupoAdicional: 'Metade 1',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    
                    {
                        nome: 'Franbacon',
                        descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Frango',
                        descricao: 'Mussarela frango milho orégano e molho da casa. ',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Calabresa',
                        descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Mista',
                        descricao: 'Mussarela presunto orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Marguerita',
                        descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Mussarela',
                        descricao: 'Mussarela tomate orégano e molho da casa',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Baiana',
                        descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: '4 queijos',
                        descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Portuguesa',
                        descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Carne do sol',
                        descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'A moda da casa',
                        descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Carbonara',
                        descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Milho',
                        descricao: 'Mussarela milho verde orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Bacon',
                        descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Brasa rústica',
                        descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Barbebacon',
                        descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Lombinho',
                        descricao: 'Mussarela lombo canadense orégano e molho da casa.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'Bigonta',
                        descricao: 'Frango ovo milho mussarela orégano molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Mexicana',
                        descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Atum',
                        descricao: 'Atum mussarela cebola em fios molho da casa e orégano.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'Chocolate',
                        descricao: 'Chocolate.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Chocolate com M&Ms',
                        descricao: 'Chocolate e M&Ms.',
                        imagem: '',
                        valor: 15.00
                    }
                ]
            },
            {
                grupoAdicional: 'Metade2',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    {
                        nome: 'Franbacon',
                        descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Frango',
                        descricao: 'Mussarela frango milho orégano e molho da casa. ',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Calabresa',
                        descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Mista',
                        descricao: 'Mussarela presunto orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Marguerita',
                        descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Mussarela',
                        descricao: 'Mussarela tomate orégano e molho da casa',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Baiana',
                        descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: '4 queijos',
                        descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Portuguesa',
                        descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Carne do sol',
                        descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'A moda da casa',
                        descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Carbonara',
                        descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Milho',
                        descricao: 'Mussarela milho verde orégano e molho da casa.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Bacon',
                        descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Brasa rústica',
                        descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Barbebacon',
                        descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
                        imagem: '',
                        valor: 17.50
                    },
                    {
                        
                        nome: 'Lombinho',
                        descricao: 'Mussarela lombo canadense orégano e molho da casa.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'Bigonta',
                        descricao: 'Frango ovo milho mussarela orégano molho da casa.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Mexicana',
                        descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
                        imagem: '',
                        valor: 19.00
                    },
                    {
                        
                        nome: 'Atum',
                        descricao: 'Atum mussarela cebola em fios molho da casa e orégano.',
                        imagem: '',
                        valor: 20.00
                    },
                    {
                        
                        nome: 'Chocolate',
                        descricao: 'Chocolate.',
                        imagem: '',
                        valor: 15.00
                    },
                    {
                        
                        nome: 'Chocolate com M&Ms',
                        descricao: 'Chocolate e M&Ms.',
                        imagem: '',
                        valor: 15.00
                    }
                ]
            }
            
        ]
    };  


    const Esfihas = [
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaFranbacon.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela, frango, milho, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaFrango.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela, calabresa, cebola em fios, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaCalabresa.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela, presunto, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaMista.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela, tomate, manjericão, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaMarguerita.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela, tomate, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaMussarela.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela, calabresa picada, pimenta, ovo, cebola, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaBaiana.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela, parmesão, queijo coalho, catupiry, orégano e molho da casa.',
            imagem: '/esfihas/Esfiha4queijos.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela, presunto, ovos, tomate, milho, cebola, pimentão, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaPortuguesa.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela, carne do sol, cebola roxa, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaCarnedesol.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela, frango, presunto, calabresa, bacon, batata palha, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaModa.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela, presunto, bacon, catupiry, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaCarbonara.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela, milho verde, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaMilho.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela, bacon, cebola em fios, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaBacon.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela, frango, bacon, calabresa picada, barbecue, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaBrasarustica.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela, bacon, barbecue, orégano e molho da casa.',
            imagem: '/esfihas/EsfihaBarbebacon.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 17,
            nome: 'Bigonta',
            descricao: 'Frango, ovo, milho, mussarela, orégano, molho da casa.',
            imagem: '/esfihas/EsfihaBigonta.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 18,
            nome: 'Mexicana',
            descricao: 'Calabresa, peperone, queijo coalho, mussarela, pimenta calabresa, cebola em fios, molho da casa e orégano.',
            imagem: '/esfihas/EsfihaMexicana.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        },
        {
            id: 19,
            nome: 'Chocolate',
            descricao: 'Chocolate.',
            imagem: '/esfihas/EsfihaChocolate.png',
            valor: 7.00,
            tipos: [
                { tipo: 'Aberta', valor: 7.00 },
                { tipo: 'Fechada', valor: 8.00 }
            ]
        }
    ];

     

    const beirutes = [
        
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: '/beirutes/BeiruteFranbacon.png',
            valor: 45.00
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: '/beirutes/BeiruteFrango.png',
            valor: 40.00
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: '/beirutes/BeiruteCalabresa.png',
            valor: 40.00
        },
        {
            id: 4,
            nome: 'Misto',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: '/beirutes/BeiruteMisto.png',
            valor: 40.00
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: '/beirutes/BeiruteMarguerita.png',
            valor: 40.00
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: '/beirutes/BeiruteMussarela.png',
            valor: 40.00
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: '/beirutes/BeiruteBaiana.png',
            valor: 45.00
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: '/beirutes/Beirute4queijos.webp',
            valor: 45.00
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: '/beirutes/BeirutePortuguesa.png',
            valor: 45.00
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: '/beirutes/BeiruteCarnedesol.png',
            valor: 50.00
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: '/beirutes/BeiruteModa.png',
            valor: 45.00
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: '/beirutes/BeiruteCarbonara.png',
            valor: 45.00
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: '/beirutes/BeiruteMilho.png',
            valor: 40.00
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: '/beirutes/BeiruteBacon.png',
            valor: 45.00
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: '/beirutes/BeiruteBrasarustica.png',
            valor: 45.00
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: '/beirutes/BeiruteBarbebacon.png',
            valor: 45.00
        },
        {
            id: 17,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: '/beirutes/BeiruteBigonta.png',
            valor: 45.00
        },
        {
            id: 18,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: '/beirutes/BeiruteMexicana.png',
            valor: 45.00
        }
        
    ];

    const HamburguerArtesanal = [
        {
            id: 1,
            nome: 'Clássico',
            descricao: 'Pão brioche selado, burger bovino 130g, queijo gratinado e molho "secreto" rústico',
            imagem: '/hamburguerartesanal/HamburguerartClassico.png',
            valor: 22.40
        },
        {
            id: 2,
            nome: 'Simples ',
            descricao: 'Pão brioche selado, burger bovino 130g, molho “secreto” rústico',
            imagem: '/hamburguerartesanal/HamburguerartSimples.png',
            valor: 15.90
        },
        {
            id: 3,
            nome: 'X-Bacon',
            descricao: 'Pão brioche selado, burger bovino 130g, creme de cheddar artesanal, bacon e molho "secreto” rústico',
            imagem: '/hamburguerartesanal/HamburguerartXbacon.png',
            valor: 25.90
        },
        {
            id: 4,
            nome: 'Bacon Cream Cheese',
            descricao: 'Pão brioche selado, burger bovino 130g, cream cheese, bacon e molho "secreto" rústico',
            imagem: '/hamburguerartesanal/HamburguerartBaconcreamcheese.png',
            valor: 26.90
        },
        {
            id: 5,
            nome: 'Burger de Siri',
            descricao: 'Pão brioche selado, 3 burger bovino 130g, creme de cheddar artesanal, bacon, molho “secreto” rústico',
            imagem: '/hamburguerartesanal/HamburguerartSiri.png',
            valor: 32.90
        }
                
    ];

    const HamburguerTradicional = [
        {
            id: 1,
            nome: 'X-Tudo',
            descricao: 'Pão bola, carne, frango, bacon, calabresa, queijo, ovo, salsicha, presunto, milho, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerXtudo.png',
            valor: 15.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 2,
            nome: 'Carne de Sol',
            descricao: 'Pão bola, carne de sol, queijo, cebola, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerCarnedesol.png',
            valor: 16.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 3,
            nome: 'Fran Bacon',
            descricao: 'Pão bola, frango, bacon, queijo, milho, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerFranbacon.png',
            valor: 13.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 4,
            nome: 'X-Frango',
            descricao: 'Pão bola, frango, queijo, milho, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerFrango.png',
            valor: 11.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 5,
            nome: 'X-Calabresa',
            descricao: 'Pão bola, carne, calabresa, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerCalabresa.png',
            valor: 12.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 6,
            nome: 'Hamburgão',
            descricao: 'Pão bola, carne, ovo, presunto, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerHamburgao.png',
            valor: 12.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 7,
            nome: 'Super Burguer',
            descricao: 'Pão bola, carne, bacon, ovo, salsicha, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerSuper.png',
            valor: 14.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 8,
            nome: 'X-Egg Bacon',
            descricao: 'Pão bola, bacon, ovo, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerEggbacon.png',
            valor: 11.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 9,
            nome: 'X-Bacon',
            descricao: 'Pão bola, bacon, carne, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerBacon.png',
            valor: 13.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 10,
            nome: 'X-Salada',
            descricao: 'Pão bola, carne, queijo, milho, pimentão, cebola, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerSalada.png',
            valor: 10.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 11,
            nome: 'Americano',
            descricao: 'Pão bola, presunto, ovo, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerAmericano.png',
            valor: 8.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 12,
            nome: 'Bauru Burguer',
            descricao: 'Pão bola, carne, presunto, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerBauru.png',
            valor: 10.00,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 13,
            nome: 'X-Burguer',
            descricao: 'Pão bola, carne, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerXburguer.png',
            valor: 8.50,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 14,
            nome: 'Egg Burguer',
            descricao: 'Pão bola, carne, ovo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerEggburguer.png',
            valor: 8.50,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 15,
            nome: 'Egg',
            descricao: 'Pão bola, ovo, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerEgg.png',
            valor: 7.50,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 16,
            nome: 'Hambúrguer',
            descricao: 'Pão bola, carne, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerHamburguer.png',
            valor: 6.50,
            tipoProduto: 'Hambúrguer',
          },
          {
            id: 17,
            nome: 'Misto',
            descricao: 'Pão bola, presunto, queijo, alface e tomate',
            imagem: '/hamburguertradicional/HamburguerMisto.png',
            valor: 7.50,
            tipoProduto: 'Hambúrguer',
          },
        ];


    const bairros = [
        {
            bairro: 'Combinar',
            frete: 0
        }
    ];

    const sucos = [
        {
            id: 1,
            nome: 'Morango',
            descricao: '300ml.',
            imagem: '/sucos/SucoMorango.png',
            valor: 6.00
        },
        {
            id: 2,
            nome: 'Abacaxi',
            descricao: '300ml.',
            imagem: '/sucos/SucoAbacaxi.png',
            valor: 6.00
        },
        {
            id: 3,
            nome: 'Goiaba',
            descricao: '300ml.',
            imagem: '/sucos/SucoGoiaba.png',
            valor: 6.00
        },
        {
            id: 4,
            nome: 'Cajú',
            descricao: '300ml.',
            imagem: '/sucos/SucoCaju.png',
            valor: 6.00
        },
        {
            id: 5,
            nome: 'Cajá',
            descricao: '300ml.',
            imagem: '/sucos/SucoCaja.png',
            valor: 6.00
        },
        {
            id: 6,
            nome: 'Acerola',
            descricao: '300ml.',
            imagem: '/sucos/SucoAcerola.png',
            valor: 6.00
        },
        {
            id: 7,
            nome: 'Manga',
            descricao: '300ml.',
            imagem: '/sucos/SucoManga.png',
            valor: 6.00
        },
        
    ];

    const bebidas = [
        {
            id: 1,
            nome: 'Coca cola 2L',
            descricao: 'Pet de 2L',
            imagem: '/bebidas/BebidasCoca2l.png',
            valor: 12.00
        },
        {
            id: 2,
            nome: 'Coca cola 1L ',
            descricao: 'Pet de 1L',
            imagem: '/bebidas/BebidasCoca1l.png',
            valor: 9.00
        },
        {
            id: 3,
            nome: 'Fanta 2L',
            descricao: 'Pet de 2L',
            imagem: '/bebidas/BebidasFanta2l.png',
            valor: 12.00
        },
        {
            id: 4,
            nome: 'Fanta 1L',
            descricao: 'Pet de 1L',
            imagem: '/bebidas/BebidasFanta1l.png',
            valor: 9.00
        },
        {
            id: 5,
            nome: 'Cajuína 2L',
            descricao: 'Pet de 2L',
            imagem: '/bebidas/BebidasCajuina2l.png',
            valor: 10.00
        },
        {
            id: 7,
            nome: 'Cajuína 1L',
            descricao: 'Pet de 1L',
            imagem: '/bebidas/BebidasCajuina1l.png',
            valor: 9.00
        },
        
    ];

    /*const cervejas = [
        {
            id: 1,
            nome: 'Skol',
            descricao: '600ml',
            imagem: '',
            valor: 10.00
        },
        {
            id: 2,
            nome: 'Devassa ',
            descricao: '600ml',
            imagem: '',
            valor: 10.00
        },
        {
            id: 3,
            nome: 'Budweiser',
            descricao: '600ml',
            imagem: '',
            valor: 12.00
        },
        {
            id: 4,
            nome: 'Haineken',
            descricao: '600ml',
            imagem: '',
            valor: 15.00
        },
        {
            id: 5,
            nome: 'Itaipava ',
            descricao: '600ml',
            imagem: '',
            valor: 10.00
        },
        {
            id: 7,
            nome: 'Stella',
            descricao: '600ml',
            imagem: '',
            valor: 12.00
        },
        {
            id: 7,
            nome: 'Ice cabaré',
            descricao: '600ml',
            imagem: '',
            valor: 9.00
        },
        
    ];*/

    const drinks = [
        {
            id: 1,
            nome: 'Paixão',
            descricao: '600ml',
            imagem: '/drinks/DrinkPaixao.png',
            valor: 15.00
        },
        {
            id: 2,
            nome: 'Paraíso  ',
            descricao: '600ml',
            imagem: '/drinks/DrinkParaiso.png',
            valor: 15.00
        },
        {
            id: 3,
            nome: 'Lagoa azul',
            descricao: '600ml',
            imagem: '/drinks/DrinkLagoaazul.png',
            valor: 15.00
        },
        {
            id: 4,
            nome: 'Fogo ardente',
            descricao: '600ml',
            imagem: '/drinks/DrinkFogoardente.png',
            valor: 15.00
        },
        {
            id: 5,
            nome: 'Arco-íris',
            descricao: '600ml',
            imagem: '/drinks/DrinkArcoiris.png',
            valor: 15.00
        },
        {
            id: 7,
            nome: 'Cupido',
            descricao: '600ml',
            imagem: '/drinks/DrinkCupido.png',
            valor: 15.00
        },
        {
            id: 7,
            nome: 'Capetinha',
            descricao: '600ml',
            imagem: '/drinks/DrinkCapetinha1.png',
            valor: 15.00
        },
        {
            id: 8,
            nome: 'Capetinha com alcool',
            descricao: '600ml',
            imagem: '/drinks/DrinkCapetinha2.png',
            valor: 15.00
        },
        {
            id: 9,
            nome: 'Soda italiana Azul',
            descricao: 'Soda sabor laranja com limão.',
            imagem: '/drinks/DrinkSodaazul.png',
            valor: 15.00
        },
        {
            id: 10,
            nome: 'Soda italiana Pink ',
            descricao: 'Soda sabor frutas vermelhas.',
            imagem: '/drinks/DrinkSodapink.png',
            valor: 15.00
        },
        {
            id: 11,
            nome: 'Soda italiana Amarela',
            descricao: 'Soda sabor maracujá.',
            imagem: '/drinks/DrinkSodaamarela.png',
            valor: 15.00
        },
        
    ];

    const petiscos = [
        {
            id: 1,
            nome: 'Batata frita 400g',
            descricao: '400g.',
            imagem: '/petiscos/PetiscoBatata400.png',
            valor: 16.00
        },
        {
            id: 2,
            nome: 'Batata frita 250g ',
            descricao: '250g.',
            imagem: '/petiscos/PetiscoBatata250.png',
            valor: 10.00
        },
        {
            id: 3,
            nome: 'Bolinha de queijo',
            descricao: 'Bolinha de queijo 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhaqueijo.png',
            valor: 15.00
        },
        {
            id: 4,
            nome: 'Bolinha de frango',
            descricao: 'Bolinha de frango 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhafrango.png',
            valor: 15.00
        },
        {
            id: 5,
            nome: 'Bolinha mista',
            descricao: 'Bolinha mista 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhamista.png',
            valor: 15.00
        },
        {
            id: 6,
            nome: 'Bolinha de bacalhau',
            descricao: 'Bolinha de bacalhau 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhabacalhau.png',
            valor: 15.00
        },
        {
            id: 7,
            nome: 'Bolinha de carne de sol',
            descricao: 'Bolinha de carne de sol 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhacarnedesol.png',
            valor: 16.00
        },
        {
            id: 8,
            nome: 'Bolinha de camarão',
            descricao: 'Bolinha de camarão 12 unidades.',
            imagem: '/petiscos/PetiscoBolinhacamarao.png',
            valor: 16.00
        },
        {
            id: 9,
            nome: 'Cebola empanada',
            descricao: 'Cebola empanada 12 unidades.',
            imagem: '/petiscos/PetiscoCebolaempanada.png',
            valor: 14.00
        },
        {
            id: 10,
            nome: 'Queijo com melaço',
            descricao: 'Queijo com melaço 150g.',
            imagem: '/petiscos/PetiscoQueijocommelaco.png',
            valor: 10.00
        },
        {
            id: 11,
            nome: 'Filé trinchado com fritas',
            descricao: 'Filé trinchado com fritas 400g.',
            imagem: '/petiscos/PetiscoFiletrinchado.png',
            valor: 14.00
        },
        
    ];

    const paes = [
        { nome: 'Pão Bola', valor: 0.00 },
        { nome: 'Pão Árabe', valor: 2.00 },
    ];

    const mesas = Array.from({ length: 20 }, (_, i) => ({
        numero: (i + 1).toString(),
      }));
    

    
    return {
        produtos,
        bordas,
        PizzaMontada,
        Esfihas,
        bairros,
        sucos,
        bebidas,
        beirutes,
        HamburguerArtesanal,
        HamburguerTradicional,
        paes,
        mesas,
        /*cervejas,*/
        drinks,
        petiscos
        
    };
}
