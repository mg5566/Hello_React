import React from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers";

/*
export default class HistoryList extends List {
  componentDidMount() {
    const data = store.getHistoryList();
    this.setState({ data });
  }

  fetch() {
    const data = store.getHistoryList();
    this.setState({ data });
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  renderItem(item) {
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.date)}</span>
        <button
          className="btn-remove"
          onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}
        ></button>
      </>
    );
  }
}
*/
