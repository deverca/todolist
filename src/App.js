
import './App.css';
import TodoList from './features/components/TodoList';
import {Route, Link, BrowserRouter,Switch, HashRouter} from "react-router-dom";
import React from 'react';
import {useEffect} from 'react';
import NotFoundPage from './features/components/NotFoundPage';
import DoneList from './features/components/DoneList';
import DoneContainer from './features/components/DoneContainer';
import Homepage from './features/components/Homepage';
import {useDispatch} from "react-redux";
import { getTodos } from './features/apis/todos';
import { AddTodos } from './features/reducers/todosSlice';

import {Menu, Layout} from 'antd';

const { SubMenu } = Menu;
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
  
  getTodos().then((response) =>{
  
      dispatch(AddTodos(response.data));
  }
  
  )
  },[])
  





  const { Header, Content, Footer } = Layout;
  return (
 
    <div >
 
<React.Fragment>

<BrowserRouter>
 <Menu className="header" theme= "dark"mode="horizontal">
        <Menu.Item >
        <Link to="/todo"> To Do List</Link>
        </Menu.Item>
        <Menu.Item >
         <Link to="/done">Accomplished Tasks</Link>
        </Menu.Item>
      
      </Menu> 

      <Content className="site-layout">
        
      <div className="site-layout-background" style={{ padding: 24, minHeight: 1001}}>
<Switch>
  <Route exact path="/" component={Homepage}></Route>
  <Route exact path="/todo" component={TodoList}></Route>
  <Route exact path="/done" component={DoneList}></Route>
  <Route path="*" component={NotFoundPage}></Route> 
</Switch>
</div>
</Content>
</BrowserRouter>

</React.Fragment>
    </div>

  );
}

export default App;
