import { connect } from 'react-redux';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
