const cartItems = [
  {
    name: 'Pocketable UV Protection Parka',
    category: 'Outerwear',
    gender: 'Women',
    price: 39.9,
    color: 'Light Blue',
    size: 'S',
    images: [
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712155089/modio/women/Pocketable_UV_Protection_Parka_vtfmnf.avif',
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712155088/modio/women/Pocketable_UV_Protection_Parka-2_ajzafe.avif',
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712155089/modio/women/Pocketable_UV_Protection_Parka-3_poj2jp.avif',
    ],
  },
  {
    name: 'AIRism Cotton Crew Neck Striped Short-Sleeve T-Shirt',
    category: 'Short-Sleeve',
    gender: 'Kids',
    price: 14.9,
    color: 'Pink',
    size: 'Kids 7-8Y (130)',
    images: [
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712181068/modio/kids/AIRism_Cotton_Crew_Neck_Striped_Short-Sleeve_T-Shirt_c1ycgd.avif',
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712181065/modio/kids/AIRism_Cotton_Crew_Neck_Striped_Short-Sleeve_T-Shirt-2_ffcvdg.avif',
      'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712181061/modio/kids/AIRism_Cotton_Crew_Neck_Striped_Short-Sleeve_T-Shirt-3_ogdywj.avif',
    ],
  },
];

const cartReducer = (state = cartItems, action) => {
  switch (action.type) {
    case 'NEW_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      const id = action.payload.id;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};

export const addItem = (item) => {
  return {
    type: 'NEW_ITEM',
    payload: item,
  };
};

export const deleteItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { id },
  };
};

export default cartReducer;
