import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0,
      image:
        "https://www.bing.com/th?id=OPHS.3L5gjgjYRuQuJg474C474&o=5&pid=21.1&w=136&h=136&qlt=100&dpr=1&c=8&pcl=f5f5f5",
      name: "Picotee Begonia",
      price: 9.95,
      quantity: 1,
      totalPrice: 9.95,
      category: "Begonia",
    },
    {
      id: 1,
      image:
        "https://www.bing.com/th?id=OPHS.dUmy8fCbps32Zg474C474&o=5&pid=21.1&w=124&h=124&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      name: "Orange Begonia",
      price: 7.49,
      quantity: 1,
      totalPrice: 7.49,
      category: "Begonia",
    },
    {
      id: 2,
      image:
        "https://www.bing.com/th?id=OPHS.RD3Nk27irmMxmA474C474&o=5&pid=21.1&w=130&h=131&qlt=100&dpr=1&c=17&pcl=f5f5f5",
      name: "White Chrysanthemum",
      price: 15.95,
      quantity: 1,
      totalPrice: 15.95,
      category: "Chrysanthemum",
    },
    {
      id: 3,
      image:
        "https://www.bing.com/th?id=OPHS.b%2bpdo1Q0PEDYOg474C474&o=5&pid=21.1&w=130&h=172&qlt=100&dpr=1&c=8&pcl=f5f5f5",
      name: "Yellow Chrysanthemum",
      price: 15.99,
      quantity: 1,
      totalPrice: 15.99,
      category: "Chrysanthemum",
    },
    {
      id: 4,
      image:
        "https://www.bing.com/th?id=OPHS.ECJmcXN1FyBusg474C474&o=5&pid=21.1&w=136&h=136&qlt=100&dpr=1&c=8&pcl=f5f5f5",
      name: "Hoya Kerrii",
      price: 8.0,
      quantity: 1,
      totalPrice: 8.0,
      category: "Hoya",
    },
    {
      id: 5,
      image:
        "https://www.bing.com/th?id=OPHS.Ob7WtZXWJUlDiw474C474&o=5&pid=21.1&w=124&h=124&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      name: "Hoya Carnosa",
      price: 13.2,
      quantity: 1,
      totalPrice: 13.2,
      category: "Hoya",
    },
  ],
  currentMenu: "home",
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    changeMenu: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

export const { addItem, changeMenu } = itemSlice.actions;
export default itemSlice.reducer;
