import { configureStore } from '@reduxjs/toolkit';

import evidenceSlice from '../slice/evidenceSlice';

export const store = configureStore({
  reducer: {
    evidence: evidenceSlice
  },
});
