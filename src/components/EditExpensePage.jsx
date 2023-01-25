import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpenseAsync, removeExpenseAsync } from '../actions/expenses';
import M from 'materialize-css';

const EditExpensePage = ({
  history,
  selectedExpense,
  editExpense,
  removeExpense,
}) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className='container' style={{}}>
      <ExpenseForm
        selectedExpense={selectedExpense}
        handleSubmit={(expense) => {
          editExpense(selectedExpense.id, expense);
          history.push('/');
        }}
      />
      <a
        style={{ marginLeft: '14px' }}
        className='waves-effect waves-light btn-large red darken-1 modal-trigger'
        href='#modal1'
      >
        Delete
      </a>
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>Alert</h4>
          <h6>Are you sure you want to delete this expense?</h6>
        </div>
        <div className='modal-footer'>
          <a
            className='waves-effect waves-green btn-flat'
            onClick={() => {
              removeExpense(selectedExpense.id);
              history.push('/');
            }}
          >
            Confirm
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedExpense: state.expenses.find(
      (expense) => expense.id === ownProps.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpenseAsync(id, expense)),
  removeExpense: (id) => dispatch(removeExpenseAsync(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
