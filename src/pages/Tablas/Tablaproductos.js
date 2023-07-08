let tablaProductos = [
  {
    sku: 1,
    familia: 'MURALES A MEDIDA',
    categoria: 'JUNGLAS Y BOTÁNICAS',
    catalogo: 'Boys & Girls I',
    nombre: 'B&G0304',
    descripcion: 'Selva con jirafas y elefantes',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_I04.png.webp',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/02/BG03_W_M04.png.webp'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 2,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Boys & Girls VI',
    nombre: 'B&G0602',
    descripcion: 'Elefantes y Aves',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/BG05_I_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/BG05_I_M02.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 3,
    familia: 'MURALES A MEDIDA',
    categoria: 'TELAS',
    catalogo: 'Shibori II',
    nombre: 'SHI0204',
    descripcion: 'Imitación tela con franjas verticales rosadas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/SHI02_W_I04.png',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/01/SHI02_W_M04.png'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 4,
    familia: 'MURALES A MEDIDA',
    categoria: 'BEBES',
    catalogo: 'New Baby I',
    nombre: 'NEW BAB0130',
    descripcion: 'Globlo en cielo con nubes celestes, con luna y estrellas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_I30.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/06/BAB01_I_M30.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 5,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Sea World I',
    nombre: 'SEA0106',
    descripcion: 'Sirenas en fondo maritimo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SEA01_I_I06.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SEA01_I_M06.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 6,
    familia: 'MURALES A MEDIDA',
    categoria: 'INFANTIL',
    catalogo: 'Sea World I',
    nombre: 'SEA0120',
    descripcion: 'Fondo marino con plantas naranjo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_I20.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_M20.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/03/SEA01_I_M20-1.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 7,
    familia: 'MURALES A MEDIDA',
    categoria: 'NATURALEZA',
    catalogo: 'Botanica VII',
    nombre: 'BOT0701',
    descripcion:
      'Plantas en tonos verde, con flores amarillas, rosadas y naranjas',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/12/BOT07_I_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2021/12/BOT07_I_M01.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 8,
    familia: 'MURALES A MEDIDA',
    categoria: 'MAPAS',
    catalogo: 'Mapas III',
    nombre: 'MAP0301',
    descripcion: 'Mapa infantil con fondo verde agua y autitos',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/07/MAP03_W_I01.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2019/10/MAP0301F_M.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 9,
    familia: 'MURALES A MEDIDA',
    categoria: 'COCINAS',
    catalogo: 'Kitchen II',
    nombre: 'KIT0201',
    descripcion: '',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_I01-2.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/KIT02_W_M01-2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 10,
    familia: 'MURALES A MEDIDA',
    categoria: 'CIUDADES Y PAISAJES',
    catalogo: 'Cities I',
    nombre: 'CIT0102',
    descripcion: 'Foto de Paris con la torre Eiffel y auto antiguo rojo',
    url: [
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_I02.jpg',
      'https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/CIT01_W_M02.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 350,
    precio: 19990,
    venta: ''
  },
  {
    sku: 11,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'BOBINA',
    catalogo: 'Texturas',
    nombre: 'Papel Paris',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg',
      'https://static.wixstatic.com/media/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg',
      'https://static.wixstatic.com/media/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 12,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'BOBINA',
    catalogo: 'Texturas',
    nombre: '12',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_410db04b5b4d4ac192f5ae04d027e717~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_410db04b5b4d4ac192f5ae04d027e717~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_ceb09d1dcf4c49ef9bac7438e2464cba~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_ceb09d1dcf4c49ef9bac7438e2464cba~mv2.jpg'
    ],
    ancho: 110,
    alto: 30,
    peso: 300,
    precio: 80000,
    venta: ''
  },
  {
    sku: 13,
    familia: 'CORTINAS',
    categoria: 'ROLLER',
    catalogo: 'Coleccion Primavera',
    nombre: 'Cortina Roller',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_0a8f9a90328d47cdbcacc93e53d71adf~mv2.jpg/v1/fill/w_318,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_0a8f9a90328d47cdbcacc93e53d71adf~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_9450e3e1f5dc4cdba49edd64a11f18a2~mv2.jpg/v1/fill/w_318,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9450e3e1f5dc4cdba49edd64a11f18a2~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_9f212a7066f446ef890cb4ac685767cb~mv2.jpg/v1/fill/w_318,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_9f212a7066f446ef890cb4ac685767cb~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 600,
    precio: 79990,
    venta: ''
  },
  {
    sku: 14,
    familia: 'CORTINAS',
    categoria: 'PERSIANA',
    catalogo: 'Coleccion Primavera',
    nombre: 'Persiana de Aluminio',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_bd462bf7812d42819484f17e629fc653~mv2.jpg/v1/fill/w_1145,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_bd462bf7812d42819484f17e629fc653~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_6a9efb94faae4be6ad6954460ede9085~mv2.jpg/v1/fill/w_600,h_436,al_c,q_80,enc_auto/12b4f4_6a9efb94faae4be6ad6954460ede9085~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_69e8f5c25dca407cbafad9a68ecb34e3~mv2.jpg/v1/fill/w_660,h_495,al_c,q_80,enc_auto/12b4f4_69e8f5c25dca407cbafad9a68ecb34e3~mv2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 39990,
    venta: ''
  },
  {
    sku: 15,
    familia: 'CORTINAS',
    categoria: 'ROLLER DUO',
    catalogo: 'Coleccion Primavera',
    nombre: '15',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_8c3470f758da427bb2310ce52d1a2d44~mv2.jpg/v1/fill/w_1145,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_8c3470f758da427bb2310ce52d1a2d44~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_6168c460505d4d7fb995cb2a37a894a4~mv2.jpg/v1/fill/w_600,h_300,al_c,q_80,enc_auto/12b4f4_6168c460505d4d7fb995cb2a37a894a4~mv2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 59990,
    venta: ''
  },
  {
    sku: 16,
    familia: 'CORTINAS',
    categoria: 'TOLDO',
    catalogo: 'Coleccion Primavera',
    nombre: '16',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_a0d7f183866944a3aef96e15f1d62801~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,enc_auto/12b4f4_a0d7f183866944a3aef96e15f1d62801~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_20f2b56ce1ec4f5984b3dc5788824045~mv2.jpg/v1/fill/w_359,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/12b4f4_20f2b56ce1ec4f5984b3dc5788824045~mv2.jpg'
    ],
    ancho: 100,
    alto: 100,
    peso: 600,
    precio: 99990,
    venta: ''
  },
  {
    sku: 17,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: '',
    nombre: '17',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_73aaafc77a7d4a118c1a4dc3bf669e67~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_73aaafc77a7d4a118c1a4dc3bf669e67~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_c2d453c00ec547a1819817294ce9d6ca~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_c2d453c00ec547a1819817294ce9d6ca~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: ''
  },
  {
    sku: 18,
    familia: 'PAPEL IMPORTADO',
    categoria: 'TEXTURAS',
    catalogo: '',
    nombre: '18',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_276a3de8b5e74595b9b81e757227aad6~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_276a3de8b5e74595b9b81e757227aad6~mv2.jpg',
      'https://static.wixstatic.com/media/12b4f4_77b450d626b24d61a6a1e7d23df38c60~mv2.jpg/v1/fill/w_633,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12b4f4_77b450d626b24d61a6a1e7d23df38c60~mv2.jpg'
    ],
    ancho: 50,
    alto: 10,
    peso: 280,
    precio: 49990,
    venta: ''
  }
]

export default tablaProductos
