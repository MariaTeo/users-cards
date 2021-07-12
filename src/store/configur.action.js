import * as constant from './configur.constant';

export const setCardDataAction = (data) => ({
  type: constant.SET_CARD_DATA,
  data,
});

export const setSearchAction = (search) => ({
  type: constant.SET_SEARCH,
  search,
});
