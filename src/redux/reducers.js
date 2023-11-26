import { UPDATE_RECIPIENT_INFO, UPDATE_GIFT_PREFERENCES } from './actions';

const initialState = {
  recipientInfo: {
    name: '',
    age: '',
    gender: '',
    interests: '',
  },
  giftPreferences: {
    occasion: '',
    giftType: '',
    maxBudget: '',
    country: '',
  },
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RECIPIENT_INFO:
      return {
        ...state,
        recipientInfo: {
          ...state.recipientInfo,
          ...action.payload,
        },
      };

    case UPDATE_GIFT_PREFERENCES:
      return {
        ...state,
        giftPreferences: {
          ...state.giftPreferences,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
