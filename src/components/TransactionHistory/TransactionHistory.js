import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {item.length > 0 &&
        item.map(element => (
          <tr key={element.id}>
            <td>{element.type}</td>
            <td>{element.amount}</td>
            <td>{element.currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  item: [],
};
TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
