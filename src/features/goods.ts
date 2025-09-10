type AddAction = {
  type: 'goods/ADD';
  payload: string;
}

const add = (good: string): AddAction => ({
  type: 'goods/ADD',
  payload: good
});

type TakeAction = {
  type: 'goods/TAKE';
  payload: string;
}

const take = (good: string): TakeAction => ({
  type: 'goods/TAKE',
  payload: good
});

type ClearAction = {
  type: 'goods/CLEAR';
}

const clear = (): ClearAction => ({
  type: 'goods/CLEAR'
});

type Action = AddAction | TakeAction | ClearAction;

export const actions = { add, take, clear };

const goodsReducer = (goods: string[] | undefined, action: any): string[] => {
  if (goods === undefined) goods = [];
  switch (action.type){
    case 'goods/ADD':
      return [...goods, action.payload];
      case "goods/TAKE":
        return goods.filter(good => good !== action.payload);
      case "goods/CLEAR":
        return [];
        default:
          return goods;
  }
};

export default goodsReducer;
