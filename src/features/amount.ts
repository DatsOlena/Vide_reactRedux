type AddAction = {
  type: 'amount/ADD';
  payload: number;
}

const add = (value: number): AddAction => ({
  type: 'amount/ADD',
  payload: value
});

type TakeAction = {
  type: 'amount/TAKE';
  payload: number;
}

const take = (value: number): TakeAction => ({
  type: 'amount/TAKE',
  payload: value
});

type ClearAction = {
  type: 'amount/CLEAR';
}

const clear = (): ClearAction => ({
  type: 'amount/CLEAR'
});

type Action = AddAction | TakeAction | ClearAction;

const amountReducer = (amount: number | undefined, action: any): number => {
  if (amount === undefined) amount = 0;
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;
    case 'amount/TAKE': {
      if (amount < action.payload) return amount;
      return amount - action.payload;
    }

    case 'amount/CLEAR':
      return 0;
    default:
      return amount;
  }
};

export const actions = { add, take, clear };

export default amountReducer;
