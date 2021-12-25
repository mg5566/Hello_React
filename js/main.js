import store from "./Store.js";

// TODO
class App extends React.Component {
  // TODO
  constructor() {
    super();

    // TODO
    this.state = {
      searchKeyword: "",
      searchResult: [],
    };

    this.store = store;
  }

  // TODO
  handleChangeInput(event) {
    const searchKeyword = event.target.value;

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
    this.setState({ searchResult });
  }

  // TODO
  handleReset() {
    this.setState({
      searchKeyword: "",
    });
    this.setState(() => {
      return { searchKeyword: "" }
    }, () => {
      console.log("handleReset", this.state.searchKeyword);
    });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        {/* TODO */}
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            // onReset={() => this.handleReset()}
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
              <button type="reset" className="btn-reset" onClick={() => this.handleReset()}></button>
            )}
          </form>
          <div className="content">
            {this.state.searchResult.length > 0 ? (
              <ul>
                {this.state.searchResult.map((item) => {
                  return (
                    <li>
                      <img src={item.nubmer} alt={item.name}/>
                      <p>{item.name}</p>
                    </li>
                  );
                })
                }
              </ul>
            ) : (
              <div className="empty-box">검색결과는 없습니다.</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
