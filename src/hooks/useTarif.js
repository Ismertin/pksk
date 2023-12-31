export const useTarif = () => {
  const name = ['Стандарт', 'Оптимальный', 'Универсальный'];
  const description = {
    Стандарт:
      'Скорость 10 Мб/сек. Идеально подходит для работы, общения и беcперебойного сетевого взаимодействия',
    Оптимальный:
      'Скорость 20 Мб/сек.Увеличенная скорость обеспечит более быструю загрузку и поможет избежать проблем с соединением',
    Универсальный:
      'Скорость 30 Мб/сек.Подходит для различных задач, будь то работа, потоковое вещание или онлайн-игры',
  };
  const price = {
    Стандарт: { monthly: 1250, yearly: 1500 },
    Отимальный: { monthly: 2084, yearly: 25000 },
    Универсальный: { monthly: 2750, yearly: 33000 },
  };
  return {
    name,
    description,
    price,
  };
};
