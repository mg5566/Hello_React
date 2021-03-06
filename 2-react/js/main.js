import { formatRelativeDate } from "./js/helpers.js"
import store from "./js/Store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submited: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };

    this.store = store;
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();
    this.setState({
      keywordList,
      historyList,
    });
  }


  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0 && this.state.submited) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchKeyword.length <= 0) {
      return;
    }
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    // TODO
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();

    this.setState({
      searchKeyword,
      searchResult,
      submited: true,
      historyList,
    });
  }

  handleReset() {
    this.setState({
      searchKeyword: "",
      submited: false,
    });
    this.setState(() => {
      return { searchKeyword: "" }
    }, () => {
    });
  }

  handleClickRemoveHistory(event, keyword) {
    // 상위에도 event 가 있기때문에 해당 event 가 발생하면 검색기록이 검색되는 event 가 발생한다.
    // 따라서 해당 event 를 상위 event 로 전파시키면 안됩니다.
    event.stopPropagation();

    store.removeHistory(keyword);
    // update history state
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  render() {
    const searchForm = (
      <form
        onSubmit={(event) => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={this.state.searchKeyword}
          onChange={(event) => this.handleChangeInput(event)}
        />
        {this.state.searchKeyword.length > 0 && (
          <button type="reset" className="btn-reset"></button>
        )}
      </form>
    );

    const searchResult = (
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name}/>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색결과는 없습니다.</div>
      )
    );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => this.search(item.keyword)}
            >
              <span className="number">{index + 1}</span>
              <span>{item.keyword}</span>
            </li>
          );
        })}
      </ul>
    );

    const historyList = (
      <ul className="list">
        {this.state.historyList.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => this.search(item.keyword)}
            >
              <span>{item.keyword}</span>
              <span className="date">{formatRelativeDate(item.date)}</span>
              <button
                className="btn-remove"
                onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}
              ></button>
            </li>
          );
        })}
      </ul>
    );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li
                className={this.state.selectedTab === tabType ? 'active' : ''}
                onClick={() => this.setState({ selectedTab: tabType })}
                key={tabType}
              >
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>
    );

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submited ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
