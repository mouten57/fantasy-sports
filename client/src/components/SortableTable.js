import _ from "lodash";
import React, { Component } from "react";
import { Table, Pagination } from "semantic-ui-react";

export default class SortableTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: null,
      playerData: [""],
      activePage: 1,
      currentVisibleData: [""],
      direction: null
    };
  }

  componentDidMount() {
    let playerData = this.props.playerData;
    let currentVisibleData = this.props.currentVisibleData;
    this.setState({ currentVisibleData, playerData });
  }

  componentDidUpdate(prevProps) {
    // Typical usage
    if (this.props.currentVisibleData !== prevProps.currentVisibleData) {
      this.setState({ currentVisibleData: this.props.currentVisibleData });
    }
  }

  handleSort = clickedColumn => () => {
    const { column, currentVisibleData, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        currentVisibleData: _.sortBy(currentVisibleData, [clickedColumn]),
        direction: "ascending"
      });
      console.log(currentVisibleData);
      return;
    }

    this.setState({
      currentVisibleData: currentVisibleData.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, direction, currentVisibleData } = this.state;

    return (
      <div>
        <Pagination
          defaultActivePage={this.props.activePage || 1}
          totalPages={this.props.totalPages || 1}
          onPageChange={this.props.onPageChange}
        />

        <Table sortable celled fixed style={{ marginTop: "20px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "name" ? direction : null}
                onClick={this.handleSort("name")}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "rank" ? direction : null}
                onClick={this.handleSort("rank")}
              >
                Rank
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "position" ? direction : null}
                onClick={this.handleSort("position")}
              >
                Position
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {currentVisibleData.map(({ name, rank, position }, idx) => {
              return (
                <Table.Row key={idx}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{rank}</Table.Cell>
                  <Table.Cell>{position}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
