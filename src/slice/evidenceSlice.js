import { createSlice } from "@reduxjs/toolkit";

const evidenceSlice = createSlice({
  name: 'evidence',
  initialState: {
    list: ['прообразом Чубакки стал пёс режиссёра;', 'актёрам разрешили подобрать любимый цвет для своих световых мечей;', 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;', 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;', 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.'],
    currentList: []
  },
  reducers: {
    showEvidence(state, action) {
      console.log(state, action);
      state.currentList = [...state.list.slice(0, action.payload)];
    }
  }
})

export const { showEvidence } = evidenceSlice.actions;
export default evidenceSlice.reducer;