export function memory() {
    const produtos = [
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: '',
            valor: 38.00
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: '',
            valor: 30.00
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 30.00
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: '',
            valor: 30.00
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: '',
            valor: 30.00
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: '',
            valor: 30.00
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: '',
            valor: 38.00
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: '',
            valor: 30.00
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: '',
            valor: 38.00
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: '',
            valor: 35.00
        },
        {
            id: 17,
            nome: 'Lombinho',
            descricao: 'Mussarela lombo canadense orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 18,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: '',
            valor: 38.00
        },
        {
            id: 19,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: '',
            valor: 38.00
        },
        {
            id: 20,
            nome: 'Atum',
            descricao: 'Atum mussarela cebola em fios molho da casa e orégano.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 21,
            nome: 'Chocolate',
            descricao: 'Chocolate.',
            imagem: '',
            valor: 30.00
        },
        {
            id: 22,
            nome: 'Chocolate com M&Ms',
            descricao: 'Chocolate e M&Ms.',
            imagem: '',
            valor: 30.00
        },

    ];

    const PizzaMontada = {
        nome: 'Monte Sua Pizza!',
        descricao: 'Escolha até dois sabores e borda!',
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


    const EsfihaAberta = [
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: '',
            valor: 5.50
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: '',
            valor: 5.50
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: '',
            valor: 5.50
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: '',
            valor: 6.00
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: '',
            valor: 6.00
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: '',
            valor: 5.50
        },
        {
            id: 17,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: '',
            valor: 6.00
        },
        {
            id: 18,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: '',
            valor: 6.00
        },
        {
            id: 19,
            nome: 'Chocolate',
            descricao: 'Chocolate.',
            imagem: '',
            valor: 5.50
        },
       
    ];

    const EsfihaFechada = [
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: '',
            valor: 7.00
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: '',
            valor: 7.00
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: '',
            valor: 7.00
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: '',
            valor: 8.00
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: '',
            valor: 8.00
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: '',
            valor: 7.00
        },
        {
            id: 17,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: '',
            valor: 8.00
        },
        {
            id: 18,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: '',
            valor: 8.00
        },
        {
            id: 19,
            nome: 'Chocolate',
            descricao: 'Chocolate.',
            imagem: '',
            valor: 7.00
        },
       
    ];

     

    const beirutes = [
        
        {
            id: 1,
            nome: 'Franbacon',
            descricao: 'Mussarela, frango, bacon, orégano e molho da casa. ',
            imagem: '',
            valor: 45.00
        },
        {
            id: 2,
            nome: 'Frango',
            descricao: 'Mussarela frango milho orégano e molho da casa. ',
            imagem: '',
            valor: 40.00
        },
        {
            id: 3,
            nome: 'Calabresa',
            descricao: 'Mussarela calabresa cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 4,
            nome: 'Mista',
            descricao: 'Mussarela presunto orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 5,
            nome: 'Marguerita',
            descricao: 'Mussarela tomate manjericão orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 6,
            nome: 'Mussarela',
            descricao: 'Mussarela tomate orégano e molho da casa',
            imagem: '',
            valor: 40.00
        },
        {
            id: 7,
            nome: 'Baiana',
            descricao: 'Mussarela calabresa picada pimenta ovo cebola orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 8,
            nome: '4 queijos',
            descricao: 'Mussarela parmesão queijo coalho catupiry orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 9,
            nome: 'Portuguesa',
            descricao: 'Mussarela presunto ovos tomate milho cebola pimentão orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 10,
            nome: 'Carne do sol',
            descricao: 'Mussarela carne do sol cebola roxa orégano e molho da casa.',
            imagem: '',
            valor: 50.00
        },
        {
            id: 11,
            nome: 'A moda da casa',
            descricao: 'Mussarela frango presunto calabresa bacon batata palha orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 12,
            nome: 'Carbonara',
            descricao: 'Mussarela presunto bacon catupiry orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 13,
            nome: 'Milho',
            descricao: 'Mussarela milho verde orégano e molho da casa.',
            imagem: '',
            valor: 40.00
        },
        {
            id: 14,
            nome: 'Bacon',
            descricao: 'Mussarela bacon cebola em fios orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 15,
            nome: 'Brasa rústica',
            descricao: 'Mussarela frango bacon calabresa picada barbecue orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 16,
            nome: 'Barbebacon',
            descricao: 'Mussarela bacon barbecue orégano e molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 17,
            nome: 'Bigonta',
            descricao: 'Frango ovo milho mussarela orégano molho da casa.',
            imagem: '',
            valor: 45.00
        },
        {
            id: 18,
            nome: 'Mexicana',
            descricao: 'Calabresa peperone queijo coalho mussarela pimenta calabresa cebola em fios molho da casa e orégano.',
            imagem: '',
            valor: 45.00
        }
        
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
            imagem: '/',
            valor: 6.00
        },
        {
            id: 2,
            nome: 'Abacaxi',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        {
            id: 3,
            nome: 'Goiaba',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        {
            id: 4,
            nome: 'Cajú',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        {
            id: 5,
            nome: 'Cajá',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        {
            id: 6,
            nome: 'Acerola',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        {
            id: 7,
            nome: 'Manga',
            descricao: '300ml.',
            imagem: '/',
            valor: 6.00
        },
        
    ];

    const bebidas = [
        {
            id: 1,
            nome: 'Coca cola 2L',
            descricao: 'Pet de 2L',
            imagem: '',
            valor: 12.00
        },
        {
            id: 2,
            nome: 'Coca cola 1L ',
            descricao: 'Pet de 2L',
            imagem: '',
            valor: 9.00
        },
        {
            id: 3,
            nome: 'Fanta 2L',
            descricao: 'Pet de 2L',
            imagem: '',
            valor: 12.00
        },
        {
            id: 4,
            nome: 'Fanta 1L',
            descricao: 'Pet de 1L',
            imagem: '',
            valor: 9.00
        },
        {
            id: 5,
            nome: 'Cajuína 2L',
            descricao: 'Pet de 2L',
            imagem: '',
            valor: 10.00
        },
        {
            id: 7,
            nome: 'Cajuína 1L',
            descricao: 'Pet de 1L',
            imagem: '',
            valor: 9.00
        },
        
    ];

    
    

    return {
        produtos,
        PizzaMontada,
        EsfihaAberta,
        EsfihaFechada,
        bairros,
        sucos,
        bebidas,
        beirutes
        
    };
}
