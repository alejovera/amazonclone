export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logica de add to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //Logica de eliminar of basket

            // creamos una newBasket que tiene replica local del basket
            let newBasket = [...state.basket];

            // Chequeamos si el producto existe. El index representa el espacio del array
            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            )

            if(index >= 0) {
                // el item si esta en basket, se puede borrar
                newBasket.splice(index, 1);
            } else{
                console.warn( `No se puede remover ${action.id}`);
            }

            return { ...state, basket: newBasket};
        default: 
            return state;
    }
}

export default reducer;