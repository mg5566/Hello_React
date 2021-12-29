import React from "react";
import List from "./List.js";
import store from "../Store.js";

// 조합 방식
export default class KeywordList extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    return (
      <List
        data={this.state.keywordList}
        onClick={this.props.onClick}
        renderItem={(item, index) => {  // render Props
          return (
            <>
              <span className="number">{index + 1}</span>
              <span>{item.keyword}</span>
            </>
          );
        }}
      />
    );
  }
}


// 추상화를 통한 상속방식
/*
export default class KeywordList extends List {
  componentDidMount() {
    const data = store.getKeywordList();
    this.setState({ data });
  }
  renderItem(item, index) {
    return (
      <>
        <span className="number">{index + 1}</span>
        <span>{item.keyword}</span>
      </>
    );
  }
}
*/
