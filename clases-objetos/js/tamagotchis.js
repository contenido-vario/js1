//Datos de los diferentes tamagotchis
const IMAGENES = './img/';
const tamagotchis = [
    new Tamagotchi20(
        'Tayo tayo',
        'Un tamagotchi medio japonés',
        'tayotayo.jpg',
        [
            new Accion20('duchar', 'tayoducha.jpg'),
            new Accion20('jugar',  'tayojuega.jpg'),
        ]
    ),
    new Tamagotchi20('Minomi',
        'Un leoncito coreano',
        'minomi.png',
        [
            new Accion20('duchar', 'minomiducha.jpg'),
            new Accion20('jugar',  'minomijuega.jpg'),
            new Accion20('muere',  'minomimuere.jpg'),
        ]
    ),    

]

