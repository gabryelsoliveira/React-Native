const personagens = [
  {
    id: 1,
    nome: 'Goku',
    raca: 'Saiyajin',
    genero: 'Masculino',
    idade: '43 anos',
    planeta: 'Planeta Vegeta',

    imagem: require('../../assets/Goku/goku.png'),

    caracteristicas:
      'Alegre, determinado e apaixonado por lutas.',

    tecnicas:
      'Kamehameha, Genki Dama e Teletransporte',

    transformacoes: [
      {
        nome: 'Super Saiyajin',
        descricao: 'Primeira grande transformação dos Saiyajins.',
        imagem: require('../../assets/Goku/gokussj.png'),
      },

      {
        nome: 'Super Saiyajin 2',
        descricao: 'Uma evolução do Super Saiyajin com maior poder.',
        imagem: require('../../assets/Goku/gokussj2.png'),
      },

      {
        nome: 'Super Saiyajin 3',
        descricao: 'Uma transformação extremamente poderosa.',
        imagem: require('../../assets/Goku/gokussj3.png'),
      },

      {
        nome: 'Super Saiyajin God',
        descricao: 'Uma transformação Divina.',
        imagem: require('../../assets/Goku/gokugod.png'),
      },

      {
        nome: 'Super Saiyajin Blue',
        descricao: 'Combina o poder divino com o Super Saiyajin.',
        imagem: require('../../assets/Goku/gokublue.png'),
      },

      {
        nome: 'Instinto Superior',
        descricao: 'Permite que o corpo reaja aos ataques quase automaticamente.',
        imagem: require('../../assets/Goku/gokuui.png'),
      },

      {
        nome: 'Instinto Superior Completo',
        descricao: 'O auge do instinto superior, a técnica dos Anjos.',
        imagem: require('../../assets/Goku/gokumui.png'),
      },
    ],
  },

  {
    id: 2,
    nome: 'Vegeta',
    raca: 'Saiyajin',
    genero: 'Masculino',
    idade: '48 anos',
    planeta: 'Planeta Vegeta',

    imagem: require('../../assets/Vegeta/vegeta.png'),

    caracteristicas:
      'Orgulhoso, competitivo e extremamente determinado.',

    tecnicas:
      'Final Flash, Big Bang Attack e Galick Gun',

    transformacoes: [
      {
        nome: 'Super Saiyajin',
        descricao: 'A transformação clássica dos Saiyajins.',
        imagem: require('../../assets/Vegeta/vegetassj.png'),
      },

      {
        nome: 'Super Saiyajin 2',
        descricao: 'Uma evolução com grande aumento de poder.',
        imagem: require('../../assets/Vegeta/vegetassj2.png'),
      },

      {
        nome: 'Super Saiyajin 2 Majin',
        descricao: 'Transformação que Vegeta alcança após deixar-se controlar.',
        imagem: require('../../assets/Vegeta/vegetassj2M.png'),
      },
      {
        nome: 'Super Saiyajin God',
        descricao: 'Transformação que Vegeta alcança após alcançar o poder divino.',
        imagem: require('../../assets/Vegeta/vegetagod.png'),
      },
      {
        nome: 'Super Saiyajin Blue',
        descricao: 'Forma divina alcançada através do treinamento.',
        imagem: require('../../assets/Vegeta/vegetablue.png'),
      },

      {
        nome: 'Super Saiyajin Blue Evolution',
        descricao: 'Forma divina alcançada através do rompimento dos seus limites.',
        imagem: require('../../assets/Vegeta/vegetablue2.png'),
      },

      {
        nome: 'Ego Superior/Ultra Ego',
        descricao: 'Forma digna de um deus da destruição(hakaishin).',
        imagem: require('../../assets/Vegeta/vegetaego.png'),
      },
    ],
  },

  {
    id: 3,
    nome: 'Gohan',
    raca: 'Meio-Saiyajin',
    genero: 'Masculino',
    idade: '27 anos',
    planeta: 'Terra',

    imagem: require('../../assets/Gohan/gohan.png'),

    caracteristicas:
      'Inteligente, gentil e possui grande potencial de luta.',

    tecnicas:
      'Masenko, Kamehameha e Special Beam Cannon',

    transformacoes: [
      {
        nome: 'Super Saiyajin',
        descricao: 'Primeira transformação de Gohan.',
        imagem: require('../../assets/Gohan/gohanssj.png'),
      },

      {
        nome: 'Super Saiyajin 2',
        descricao: 'Forma alcançada por Gohan durante uma batalha decisiva.',
        imagem: require('../../assets/Gohan/gohanssj2.png'),
      },

      {
        nome: 'Forma Mistica',
        descricao: 'Forma alcançada por Gohan depois de libertar seu pontecial oculto.',
        imagem: require('../../assets/Gohan/gohanmistico.png'),
      },

      {
        nome: 'Gohan Beast',
        descricao: 'Uma transformação que libera um enorme potencial de poder.',
        imagem: require('../../assets/Gohan/gohanbeast.png'),
      },
    ],
  },

  {
    id: 4,
    nome: 'Piccolo',
    raca: 'Namekuseijin',
    genero: 'Masculino',
    idade: 'Mais de 20 anos',
    planeta: 'Namekusei',

    imagem: require('../../assets/Piccolo/piccolo.png'),

    caracteristicas:
      'Calmo, inteligente e um excelente estrategista.',

    tecnicas:
      'Makankosappo, Masenko e Special Beam Cannon',

    transformacoes: [
      {
        nome: 'Piccolo Laranja',
        descricao: 'Uma forma poderosa obtida após seu desejo ao Shenlong.',
        imagem: require('../../assets/Piccolo/piccololaranja.png'),
      },
    ],
  },
];

export default personagens;