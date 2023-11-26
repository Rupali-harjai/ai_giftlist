export const UPDATE_RECIPIENT_INFO = 'UPDATE_RECIPIENT_INFO';
export const UPDATE_GIFT_PREFERENCES = 'UPDATE_GIFT_PREFERENCES';

// Action creators
export const updateRecipientInfo = (payload) => ({
  type: UPDATE_RECIPIENT_INFO,
  payload,
});

export const updateGiftPreferences = (payload) => ({
  type: UPDATE_GIFT_PREFERENCES,
  payload,
});