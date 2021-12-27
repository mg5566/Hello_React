import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

export default class App extends React.Component {
  // TODO
  search(searchKeyword) {
    console.log("App search()", searchKeyword);
  }

  handleReset() {
    console.log("TODO: reset button");
  }

  render() {
    return (
      <>
        <Header title={"Searching"} />
        <div className="container">
          {/* TODO */}
          <SearchForm
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    );
  }
}
