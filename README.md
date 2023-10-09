# learning Redux toolkit

### What it is?

- Redux toolkit is a centralize state management where data can be access no matter how deep the components are

### jargons

1. store - it is the centralize state management that can contains lots of features
2. reducers - modifies data base on action words, e.g: "addBlog"
3. useSelector - basically a middleman between component and store that can selectively ask the store of certain data
4. useDispatch - ask for a specific reducer
5. slice - it is a one of many features of our store

### installation

### setting up

##### create a file where I can configure store.

@store.jsx

- i: {configureStore} from @reduxjs/toolkit -> this is a fn
- c: export const store = configureStore({}) -> takes a obj as parameter

##### create a reducers for each feature

- c:feature folder -> c:slice

@todoSlice.jsx

i: createSlice from "@reduxjs/toolkit"
oi: nanoid from "@reduxjs/toolkit"
c: const initialState = { <br>
todos: []<br>
}<br>

<b>So this is the slice that we append in store</b>

- c: const todoSlice

<b>Important key/value @todoSlice</b>

1. name: < name of slice > ->
2. initailSate -> initialState of our slice, it can be empty or fetched data from api/backend
3. reducers -> obj of action words that perform data manipulation to our slice in store
   e.g: addTodo, deleteTodo<br>
   params: state, action<br>

- params
  state -> current state of our slice
  action -> data that we received from use

- exporting
  e: const {addTodo, deleteTodo} = todoSlice.actions -> export each reducer to use it on later part
  e: todoSlice.reducer -> to pass in our store

##### wiring 'em up

- @store
  i: todoReducer from "./features/todoSlice"
  export const store = configureStore({reducers: [{ todoReducer}]})

##### provide context to the app

ofcourse we cannot use reducer or get data without wrapping in a context

- @app
  i: {provider} from "react-redux"
  i: store from "./app/store"
  wrap our <App /> in that provider and pass the prop store={store}

##### getting the data

i: {useSelector} from "react-redux"
const todos = useSelector(state => state.todos)

##### using reducer

i: useDispatch from "react-redux"
i: reducer e.g: addTodo
c: const dispatch = useDispatch();
dispatch(addTodo({})) -> pass action which any data that contains user input
