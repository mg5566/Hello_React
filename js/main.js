import store from "./js/Store.js";  // 이게 중요하네...

// TODO
class App extends React.Component {
  // TODO
  constructor() {
    super();

    // TODO
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submited: false,
    };

    this.store = store;
  }

  // TODO
  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword,
    });
  }

  // TODO
  handleSubmit(event) {
    event.preventDefault();

    this.search(this.state.searchKeyword);
  }

  // TODO
  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      submited: true,
    });
  }

  // TODO
  handleReset() {
    this.setState({
      searchKeyword: "",
      searchResult: [],
    });
    this.setState(() => {
      return { searchKeyword: "" }
    }, () => {
      // console.log("handleReset", this.state.searchKeyword);
    });
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
          // TODO
          onChange={(event) => this.handleChangeInput(event)}
        />
        {/* TODO */}
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

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        {/* TODO */}
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submited && searchResult}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
