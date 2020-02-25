import React, { Component } from "react";
import axios from "axios";
import SortableTable from "./SortableTable";
import Loader from "./Loader";

class playerGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      totalPages: 0,
      activePage: 1,
      recordsPerPage: 20,
      playerData: [""],
      currentVisibleData: [""]
    };
  }
  async componentDidMount() {
    const res = await axios.get("/api/ros");
    const currentVisibleData = res.data.slice(0, this.state.recordsPerPage);
    const totalPages = Math.round(res.data.length / this.state.recordsPerPage);
    this.setState({
      loading: true,
      playerData: res.data,
      loading: false,
      currentVisibleData,
      totalPages
    });
  }

  onPageChange = (e, { activePage }) => {
    let currentEnd = this.state.recordsPerPage * activePage;
    let currentStart = currentEnd - this.state.recordsPerPage;
    let currentVisibleData = this.state.playerData.slice(
      currentStart,
      currentEnd
    );

    this.setState({ activePage, currentVisibleData });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <SortableTable
            onPageChange={this.onPageChange}
            playerData={this.state.playerData}
            currentVisibleData={this.state.currentVisibleData}
            handlePageChange={this.handlePageChange}
            totalPages={this.state.totalPages}
            recordsPerPage={this.state.recordsPerPage}
          />
        )}
      </div>
    );
  }
}

export default playerGrid;
