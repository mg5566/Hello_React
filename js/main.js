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
    this.setState({
      searchKeyword: event.target.value
    });
  }

  // TODO
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', event, this.state.searchKeyword);
  }

  render() {
    // let resetButton = null;

    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = (<button type="reset" className="btn-reset"></button>);
    // }

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        {/* TODO */}
        <div className="container">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              // TODO
              onChange={(event) => this.handleChangeInput(event)}
            />
            {/* TODO */}
            {/* {resetButton}
            {this.state.searchKeyword.length > 0 ? (<button type="reset" className="btn-reset"></button>) : null} */}
            {this.state.searchKeyword.length > 0 && (<button type="reset" className="btn-reset"></button>)}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
