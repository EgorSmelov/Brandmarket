import React, { useEffect, useState } from 'react';
import GoodTableList from '../../components/goods-table-list/GoodTableList';
import type { GoodType } from '../../types/good';
import GoodsService from '../../services/goodsService';

export default function SellerPage(): JSX.Element {
  const [goodsState, goodsSetState] = useState<GoodType[]>([]);

  useEffect(() => {
    GoodsService.getGoods()
      .then((data) => goodsSetState(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>SellerPage</div>
      <GoodTableList goods={goodsState} />
    </>
  );
}
