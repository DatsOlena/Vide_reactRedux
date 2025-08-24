type MoveLeftAction = {
  type: 'position/MOVE_LEFT'
}

const moveLeft = (): MoveLeftAction => ({
  type: 'position/MOVE_LEFT'
});

type MoveRightAction = {
  type: 'position/MOVE_RIGHT'
}

const moveRight = (): MoveRightAction => ({
  type: 'position/MOVE_RIGHT'
});

type MoveUpAction = {
  type: 'position/MOVE_UP'
}

const moveUp = (): MoveUpAction => ({
  type: 'position/MOVE_UP'
});

type MoveDownAction = {
  type: 'position/MOVE_DOWN'
}

const moveDown = (): MoveDownAction => ({
  type: 'position/MOVE_DOWN'
});

type Action = MoveLeftAction | MoveRightAction | MoveUpAction | MoveDownAction;

export const actions = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown
};

type Position = {
  x: number;
  y: number;
};

const startPosition: Position = { x: 0, y: 0 };

const positionReducer = (position: Position = startPosition, action: Action): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return { ...position, x: position.x - 1 };
    case 'position/MOVE_RIGHT':
      return { ...position, x: position.x + 1 };
    case 'position/MOVE_UP':
      return { ...position, y: position.y - 1 };
    case 'position/MOVE_DOWN':
      return { ...position, y: position.y + 1 };
    default:
      return position;
  }

};

export default positionReducer;
