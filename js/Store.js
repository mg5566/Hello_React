import storage from "./storage.js";

class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword) {
    return (this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    ));
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }

  // TODO
  addHistory(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) {
      return;
    }

    // 이미 존재하는 지 확인하는 함수 구현
    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );
    // 이미 존재하면 지우고, 새로 등록해서 date 를 최신화시킨다.
    if (hasHistory) this.removeHistory(keyword);

    // 새로 추가하기
    const date = new Date();
    this.storage.historyData.push({ keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }
}

const store = new Store(storage);

export default store;
