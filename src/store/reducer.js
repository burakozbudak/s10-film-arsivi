import {
  DELETE_MOVIE,
  ADD_MOVIE,
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "./actions";
import movies from "./../data";

// Initial State
const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  favorites: [],
  displayFavorites: true,
};

// Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE: {
      // Aynı film birden çok kez eklenmesini önle
      const isAlreadyFavorite = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );
      if (isAlreadyFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
