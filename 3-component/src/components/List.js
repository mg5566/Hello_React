import React from "react";
import { formatRelativeDate } from "../helpers";

// 조합 특수화
const List = ({
  data = [],
  onClick,
  hasIndex = false,
  hasDate = false,
  onRemove,
}) => {

  const handleClickRemoveHistory = (event, keyword) => {
    event.stopPropagation();
    onRemove(keyword);
  };

  return (
    <ul className="list">
      {data.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => onClick(item.keyword)}
          >
            {hasIndex && (<span className="number">{index + 1}</span>)}
            <span>{item.keyword}</span>
            {hasDate && (<span className="date">{formatRelativeDate(item.date)}</span>)}
            {!!onRemove && (
              <button
                className="btn-remove"
                onClick={(event) => handleClickRemoveHistory(event, item.keyword)}
              ></button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/*
// 함수 컴포넌트를 사용하여 조합 방식
const List = ({ data = [], onClick, renderItem }) => {
  return (
    <ul className="list">
      {data.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => onClick(item.keyword)}
          >
            {renderItem(item, index)}
          </li>
        );
      })}
    </ul>
  );
}
*/

export default List;


// 추상화를 사용한 상속 방식
/*
export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    }
  }

  renderItem(item, index) {
    throw "renderItem() 을 구현하세요.";
  }

  render() {
    return (
      <ul className="list">
        {this.state.data.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => this.props.onClick(item.keyword)}
            >
              {this.renderItem(item, index)}
            </li>
          );
        })}
      </ul>
    );
  }
}
*/
