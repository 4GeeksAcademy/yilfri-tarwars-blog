export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    favoritos: [],
    planetas: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'get_personajes':
      return {
        ...store,
        personajes: action.payload
      }

    case 'get_planetas':
      return {
        ...store,
        planetas: action.payload
      }

    case 'add_favoritos':
      const { nombre } = action.payload;
      const existe = store.favoritos.includes(nombre);
      
      return {
        ...store,
        favoritos: existe
          ? store.favoritos.filter(fav => fav !== nombre)
          : [...store.favoritos, nombre] 
      };


    default:
      throw Error('Unknown action.');
  }
}
