import React from "react";

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
