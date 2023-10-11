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

npm install @reduxjs/toolkit
npm install react-redux

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
  e: const selectAllTodos = (state) =>
  e: todoSlice.reducer -> to pass in our store

##### wiring 'em up

- @store
  i: todoReducer from "./features/todoSlice"
  export const store = configureStore({reducer: {todos: todoReducer, user: userReducer}})

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

### Async Actions

it is use for async fn such as fetching data, subscribing to an event etc..
i: {createAsyncThunk} from "@reduxjs/toolkit:"
c: export const fetchTodos = createAsyncThunk("Todos/fetchTodos", async () => {
  try {
    const res = await axios.get(
      "https://645c8a84250a246ae30744d5.mockapi.io/todos"
    );
    return res.data;
  } catch (e) {
    return e.message;
  }
});

params:

1. action string -> fetchTodos
2. payload async callback -> async()=>{}

##### instantiate the extraReducers

through builder we can access .addCase, addMatcher, addDefaultCase
NOTE: promise has 3 internal states. these are fulfilled, pending and error.
extraReducer(builder)=>{
builder
.addCase(fetchTodos.fulfilled, (state, action) => {
     state.status = "succeded";
     state.todos = action.payload;
   })
.addCase(fetchTodos.pending, (state, action) => {
     state.status = "loading";
   })
}
##### exporting
export const selectAllTodos = (state) => state.todos.todos;
export const getTodosStatus = (state) => state.todos.status;
export const getTodosError = (state) => state.todos.error;

##### @file you want to fetch, e:g Todos
i: useDispatch, useSelector
i: {selectAllTodos, getTodosStatus, getTodosError, fetchTodos} from "todoSlice"
i: useEffect

useEffect(() => {
 if (blogsStatus === "idle") {
   dispatch(fetchBlogs());
 }
}, [blogsStatus]);

let content;
  if (blogsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (blogsStatus === "succeded") {
    content = blogs.map((blog) => {
      return (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          body={blog.body}
          author={blog.author}
          likes={blog.likes}
        />
      );
    });
  } else if (blogsStatus === "failed") {
    content = <p>{blogsError}</p>;
  }
render content

##### .unwrap
lets me create a promise to a returned promise

### RTK Query

##### creating slice

i: createApi -> simillar to createSlice
const todosApi = createApi(obj)

<b>parameters:</b>

1. reducerPath -> it is just a name for your reducer
2. baseQuery -> for setting up baseUrl
   baseQuery: fetchBaseQuery({baseUrl: < base url here >})
3. endpoints -> all api endpoints
   get the builder parameter from the endpoints
   endpoints: (builder)=>({endpoint here})

##### creating 1 endpoint

getAllProducts: base.query({query: () => "products"})
query() -> can take a userInput and it can be any data type.

##### exporting

export const {useGetAllProducts} = todosApi

##### wrapping

@app
i: {ApiProvider} from "@reduxjs/toolkit/query/react"
i: {todosApi} from "./features/todosApi"

<Provider store={store}>
  <ApiProvider api={todosApi}>
    <App />
  </ApiProvider>
</Provider>
