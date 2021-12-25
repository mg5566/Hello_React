// TODO
class App extends React.Component {
  // TODO
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
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
    console.log('handleSubmit', event, this.state.searchKeyword);
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
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
