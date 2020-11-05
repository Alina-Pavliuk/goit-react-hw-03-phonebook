import React, { Component } from 'react';
import styles from './Filter.module.css'
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { filter, filterHandler } = this.props
    return (
      <>
        <label>
          <span className={styles.filterLabel}> Find contacts by name</span>
          <input
            className={styles.filterInput}
            type="text"
            name="filter"
            value={filter}
            onChange={filterHandler}
            placeholder="Search"
          />
        </label>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterHandler: PropTypes.func.isRequired
}