import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

// Redux-logger middleware
const logger = createLogger();

// Store oluştur
export const myStore = createStore(reducer, applyMiddleware(logger));
