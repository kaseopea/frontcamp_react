// todo: add uniq ids
// todo: add dates to plips

import uuid from 'uuid';

export const PLIPMOCK = [
  {
    id: uuid.v4(),
    content: 'Блювалет, блюдама, блюкороль и блютуз',
    author: 'Monocl'
  },
  {
    id: uuid.v4(),
    content: 'Это ссылка. Хотелось бы это подчеркнуть.',
    author: 'Victor'
  },
  {
    id: uuid.v4(),
    content: 'Рекс-фекс-пекс в большом городе',
    author: 'Lennart'
  },
  {
    id: uuid.v4(),
    content: 'Дятлы с перфоратором',
    author: 'Monocl'
  },
  {
    id: uuid.v4(),
    content: 'Вин-нипуха ни пера!',
    author: 'Victor'
  },
  {
    id: uuid.v4(),
    content: 'Булочка с матом',
    author: 'Lennart'
  }
];