/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Goods",
      [
        {
          title:
            "Мужская футболка Maple Leaf Hot Stamping Foil Evisu & Seagull Print",
          price: 12990,
          image: "/img/seeds/good3.png",
          description:
            "Материал: 100% хлопок.Страна-производитель: Китай.Плотная хлопковая ткань.Свободный крой.Расслабленный силуэт.Нагрудный карман.Карманы на задней стороне.Контрастный брендинг.Фирменный патч",
          color: "Белый",
          categoryId: 1,
          genderId: 1,
          brandId: 1,
          size: "M",
          quantity: 1,
        },
        {
          title: "Мужская футболка Lord Santa Pocket",
          price: 4690,
          image: "/img/seeds/good12.png",
          description:
            "Материал: 100% хлопок.Страна-производитель: Мексика.Плотная хлопковая ткань.Свободный крой.Прямой силуэт.Монохромная расцветка.Нагрудный карман.Контрастный брендинг",
          color: "Зеленый",
          categoryId: 1,
          genderId: 1,
          brandId: 2,
          size: "S",
          quantity: 1,
        },
        {
          title: "Мужские джинсы Family Tree Denim ",
          price: 13190,
          image: "/img/seeds/good5.png",
          description:
            "Материал: 100% хлопок.Страна-производитель: Китай.Плотный деним.Свободный крой.Прямой силуэт.Объемный контрастный принт.Застежка на пуговице и молнии.Шлевки для ремня.Три боковых кармана.Два задних кармана.Фирменный патч",
          color: "Серый",
          categoryId: 2,
          genderId: 1,
          brandId: 2,
          size: "M",
          quantity: 1,
        },
        {
          title: "Мужские джинсы Chain Link Denim ",
          price: 13990,
          image: "/img/seeds/good2.png",
          description:
            "Материал: 100% хлопок.Страна-производитель: Китай.Плотный деним.Свободный крой.Прямой силуэт.Объемный контрастный принт.Застежка на молнии и пуговице.Шлевки для ремня.Три боковых кармана.Два задних кармана.Фирменный патч",
          color: "Cиний",
          categoryId: 2,
          genderId: 1,
          brandId: 3,
          size: "M",
          quantity: 1,
        },
        {
          title: "Женское платье Embroidered Jumpman",
          price: 11490,
          image: "/img/seeds/good10.png",
          description:
            "Материал: 63% хлопок, 37% полиэстер.Страна-производитель: Вьетнам.Свободный крой.Расслабленный силуэт.Вышитый брендинг",
          color: "Черный",
          categoryId: 3,
          genderId: 2,
          brandId: 4,
          size: "XS",
          quantity: 1,
        },
        {
          title: "Мужской пуховик Evisukuro Paisley Printed Down",
          price: 45490,
          image: "/img/seeds/good1.png",
          description:
            "Материал: Верх - 100% полиэстер; Подкладка - 100% полиэстер; Наполнитель - 85% пух, 15% перо.Страна-производитель: Китай.Свободный крой.Прямой силуэт.Контрастный объемный принт.Утеплитель из натурального пуха.Воротник-стойка.Застежка на молнии.Два боковых кармана.Эластичные подол и манжеты.Вышитый брендинг",
          color: "Коричневый",
          categoryId: 4,
          genderId: 1,
          brandId: 1,
          size: "M",
          quantity: 1,
        },
        {
          title: "Мужской пуховик Reversible Plaid Puffer",
          price: 23490,
          image: "/img/seeds/good9.png",
          description:
            "Материал: Верх - 100% полиэстер; Подкладка - 100% полиэстер; Наполнитель - 100% полиэстер.Страна-производитель: Китай",
          color: "Белый",
          categoryId: 4,
          genderId: 1,
          brandId: 3,
          size: "M",
          quantity: 1,
        },
        {
          title: "Юбка Brown Plaid Pleated",
          price: 12990,
          image: "/img/seeds/good4.png",
          description:
            "65% полиэстер, 32% вискоза, 3% эластан.Длина мини.Низкая посадка.Застегивается на потайную молнию.Боковой карман на молнии.Металлическая декоративная цепочка",
          color: "Черный",
          categoryId: 5,
          genderId: 2,
          brandId: 5,
          size: "XS",
          quantity: 1,
        },
        {
          title: "Юбка Plaid Pleated",
          price: 14990,
          image: "/img/seeds/good6.png",
          description:
            "80% полиэстер, 18% вискоза, 2% эластан.Длина миди, A-силуэт.Низкая посадка.Застежка на потайную молнию.Регулируемые ремешки на металлических кольцах.Тканая этикетка с логотипом бренда",
          color: "Серый",
          categoryId: 5,
          genderId: 2,
          brandId: 5,
          size: "XS",
          quantity: 1,
        },
        {
          title: "Мужская рубашка Cherry Flannel",
          price: 13990,
          image: "/img/seeds/good8.png",
          description: "Материал: 100% полиэстер.Страна-производитель: Китай",
          color: "Коричневый",
          categoryId: 6,
          genderId: 1,
          brandId: 3,
          size: "L",
          quantity: 1,
        },
        {
          title: "Мужская рубашка Madison Cord",
          price: 11690,
          image: "/img/seeds/good11.png",
          description:
            "Материал: 100% хлопок.Страна-производитель: Бангладеш.Плотная вельветовая ткань.Свободный крой.Прямой силуэт.Фиксированный отложной воротник.Застежка на пуговицах.Манжеты на пуговицах.Вышитый брендинг",
          color: "Черный",
          categoryId: 6,
          genderId: 1,
          brandId: 6,
          size: "M",
          quantity: 1,
        },
        {
          title: "Женский Кардиган Black Tie Front Frill Crochet Crop",
          price: 12990,
          image: "/img/seeds/good7.png",
          description:
            "100% хлопок.Укороченный силуэт.V-образный вырез горловины.Удлиненные рукава.Кулиска на груди",
          color: "Белый",
          categoryId: 7,
          genderId: 2,
          brandId: 5,
          size: "S",
          quantity: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Goods", null, {});
  },
};
