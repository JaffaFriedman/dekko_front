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
    sku: 212,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: '212',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png/v1/fill/w_906,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_45e09180a99e4a0695aab181b1106f3c~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 300,
    precio: 80000,
    venta: ''
  },
  {
    sku: 213,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: '213',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png/v1/fill/w_900,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_a17c8853d4b54885becc39b20e624c99~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 300,
    precio: 80000,
    venta: ''
  },
  {
    sku: 214,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'MURAVINIL',
    catalogo: 'MURAVINIL',
    nombre: '214',
    descripcion: '',
    url: ["https://static.wixstatic.com/media/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png/v1/fill/w_912,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_ba7909f4a28d4d0f8cd54a34a70453e5~mv2.png"
    ],
    ancho: 110,
    alto: 30,
    peso: 300,
    precio: 80000,
    venta: ''
  },
  {
  sku: 215,
  familia: 'PAPEL CONSTRUCTORA',
  categoria: 'MURAVINIL',
  catalogo: 'MURAVINIL',
  nombre: '215',
  descripcion: '',
  url: ["https://static.wixstatic.com/media/12b4f4_5c3d7cc2d8d14294a5d050e4dc714f93~mv2.png/v1/fill/w_903,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_5c3d7cc2d8d14294a5d050e4dc714f93~mv2.png"
  ],
  ancho: 110,
  alto: 30,
  peso: 300,
  precio: 80000,
  venta: ''
},
{
  sku: 216,
  familia: 'PAPEL CONSTRUCTORA',
  categoria: 'MURAVINIL',
  catalogo: 'MURAVINIL',
  nombre: '216',
  descripcion: '',
  url: ["https://static.wixstatic.com/media/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png/v1/fill/w_914,h_764,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/12b4f4_146d4161b2004b90aa9bf2124b7f7043~mv2.png"
  ],
  ancho: 110,
  alto: 30,
  peso: 300,
  precio: 80000,
  venta: ''
},
{
    sku: 13,
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'CORTINA ROLLER',
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
    familia: 'CORTINAS Y TOLDOS',
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
    familia: 'CORTINAS Y TOLDOS',
    categoria: 'CORTINA ROLLER DUO',
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
    familia: 'CORTINAS Y TOLDOS',
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
  },

  {
    sku: 111,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Pin point',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_91714ea6a7f341ef8b5d102f33aa4dd9.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 112,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Rattan',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_93ac3d363996493bafac8b6030488ea5.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 113,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Ceylan',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_824d9428908f41c89f6629b8851b09fe.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 114,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Square',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg/v1/fill/w_760,h_507,al_c,q_85,enc_auto/12b4f4_251d6ca87b134e0d92a13c286eaa26a4~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 115,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Niza',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg/v1/fill/w_760,h_507,al_c,q_85,enc_auto/12b4f4_a372897eeb684c74bc7551d99afb9370~mv2.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 116,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Junco',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_5df7ca17601f4e22b1db9135dcb23dff.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 117,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Intimate',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_d81299c57d804f22937aaafdcf89810e.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 118,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Elite',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_ff698f88b25345a4b8a5def923f5431c.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 129,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Petate',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_833aeb12630a4dfbb80dd30dc5dd7208.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 119,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Cañamo',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_e26a124c49b74f1bb760827a3b59c94d.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 120,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Bermatex',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_42207c76b8c74696862389d607453413.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_42207c76b8c74696862389d607453413.jpg'
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
  {
    sku: 110,
    familia: 'PAPEL CONSTRUCTORA',
    categoria: 'CARPENTER',
    catalogo: 'Carpenter',
    nombre: 'Oxford',
    descripcion: '',
    url: [
      'https://static.wixstatic.com/media/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg'],
       
    variaciones: [
      {codigo: 1, url:'https://static.wixstatic.com/media/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1d2ee32d4dcf4dda8e74916970fc7f3e.jpg'},
      {codigo: 2, url:'https://static.wixstatic.com/media/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_036b0e58cfac438eb3140b605111dbd9.jpg'},
      {codigo: 3, url:'https://static.wixstatic.com/media/12b4f4_77607dd9d4c643f9874a22f4deec7d74.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_77607dd9d4c643f9874a22f4deec7d74.jpg'},
      {codigo: 4, url:'https://static.wixstatic.com/media/12b4f4_1e722b8c510b406fa3485d30feb53930.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1e722b8c510b406fa3485d30feb53930.jpg'},
      {codigo: 5, url:'https://static.wixstatic.com/media/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_1e6f0388b01145f1b2d91d1b51327353.jpg'},
      {codigo: 6, url:'https://static.wixstatic.com/media/12b4f4_0a7ac89e73fb4a418f3500957614aac6.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_0a7ac89e73fb4a418f3500957614aac6.jpg'},
      {codigo: 7, url:'https://static.wixstatic.com/media/12b4f4_23c234868434416b8b0e1b5c7e7a92c1.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_23c234868434416b8b0e1b5c7e7a92c1.jpg'},
      {codigo: 8, url:'https://static.wixstatic.com/media/12b4f4_8b4d9ec5bead4ec889d4d1604cb70f3d.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_8b4d9ec5bead4ec889d4d1604cb70f3d.jpg'},
      {codigo: 9, url:'https://static.wixstatic.com/media/12b4f4_b2c961b7fcdd4109b9454102c4d7b2bf.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_b2c961b7fcdd4109b9454102c4d7b2bf.jpg'},
      {codigo: 10, url:'https://static.wixstatic.com/media/12b4f4_a6c38a01fc3d4050ac5b15df8689d379.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_a6c38a01fc3d4050ac5b15df8689d379.jpg'},
      {codigo: 11, url:'https://static.wixstatic.com/media/12b4f4_281d1fc3e7564346ba725a32d28c42d7.jpg/v1/fill/w_375,h_400,al_c,q_80,enc_auto/12b4f4_281d1fc3e7564346ba725a32d28c42d7.jpg'},
    ],
    ancho: 140,
    alto: 10,
    peso: 300,
    precio: 4990,
    venta: ''
  },
]

export default tablaProductos
