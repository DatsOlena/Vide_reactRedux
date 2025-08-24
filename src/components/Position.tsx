import { useDispatch } from "react-redux";
import { useAppSelector  } from "../app/hooks";
import { actions as positionActions} from "../features/position";


export const Position = () => {
  const dispatch = useDispatch();
  const position = useAppSelector(state => state.position);

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());

  const transformValue = `translate(${position.x * 100}%, ${position.y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{position.x}:{position.y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }}>
            {position.x + position.y}
          </div>
        </div>
      </div>
    </section>
  );
};
