import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectItem = (state, props) =>
  state.items.find((item) => item.uuid === props.uuid);

export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) => {
  // sum of item quantity * price
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
});

// selectTipAmount => subtotal * tip percentage / 100
export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPrecentage) => subtotal * (tipPrecentage / 100)
);

// selectTotal = tip amount + subtotal
export const selectTotal = createSelector(
  [selectTipAmount, selectSubtotal],
  (tipAmount, subtotal) => tipAmount + subtotal
);

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.quantity * item.price
);
