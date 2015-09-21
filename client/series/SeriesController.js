(function() {
  'use strict';

  angular
    .module('TemporadaApp')
    .controller('SeriesController', SeriesController);

  SeriesController.$inject = [];

  function SeriesController() {
    var vm = this;
    vm.series = [
      {
        image: 'http://cdn.exstreamist.com/wp-content/uploads/2015/06/homeland.jpg',
        notation: '8.3',
        name: 'HOMELAND',
        type: 'drama, suspense',
        quantity: '5 temporadas',
        total_comments: 500,
        total_stars: 12,
        total_likes: 2
      },
      {
        image: 'http://sounds2.lyrics.songonlyrics.net/wp-content/uploads/2013/10/Elementary-Season-2.jpg',
        notation: '7',
        name: 'ELEMENTARY',
        type: 'drama, suspense',
        quantity: '4 temporadas',
        total_comments: 10,
        total_stars: 2,
        total_likes: 5
       },
      {
        image: 'http://www.clickgratis.com.br/fotos-imagens/chapolin-colorado/aHR0cDovL3d3dy5jdWx0dXJlYmEuY29tLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAyL2NoYXBvbGluLWNvbG9yYWRvLmpwZw==.jpg',
        notation: '10',
        name: 'CHAPOLIN COLORADO',
        type: 'drama, suspense',
        quantity: '5 temporadas',
        total_comments: 500,
        total_stars: 12,
        total_likes: 2
      },
      {
        image: 'http://www.gazetadopovo.com.br/blogs/relacoes-internacionais-em-perspectiva/wp-content/uploads/sites/125/2014/04/house_of_cards_divulgacao.jpg?410996',
        notation: '10',
        name: 'HOUSE OF CARDS',
        type: 'drama, suspense',
        quantity: '3 temporadas',
        total_comments: 500,
        total_stars: 12,
        total_likes: 2
      },
      {
        image: 'https://pasteldeseries.files.wordpress.com/2011/05/house_season_3.jpg',
        notation: '7',
        name: 'HOUSE M.D',
        type: 'drama, suspense',
        quantity: '8 temporadas',
        total_comments: 500,
        total_stars: 12,
        total_likes: 2
      },
      {
        image: 'https://pbs.twimg.com/profile_images/3212434818/212ee897d755e8ce9c674c246abfaf9b.jpeg',
        notation: '10',
        name: 'BREAKING BAD',
        type: 'drama, suspense',
        quantity: '5 temporadas',
        total_comments: 500,
        total_stars: 12,
        total_likes: 2
      }
  ];
  }

})();
