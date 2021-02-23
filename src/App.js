import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {Route} from "react-router";
import Assets from "./components/Assets/Assets";
import Settings from "./components/Settings/Settings";
import Clients from "./components/Clients/Clients";
import Base from "./components/Base/Base";
import Employees from "./components/Employees/Employees";
import TasksContainer from "./components/Tasks/TasksContainer";

function App() {
  return (
    <div className="App">
        <Menu />
     <main className={"main"}>
         <Header />
             <div>
                <Route path={"/base"} render={() => <Base />}/>
                <Route path={"/tasks"} render={() => <TasksContainer />}/>
                <Route path={"/employees"} component={Employees}/>
                <Route path={"/clients"} component={Clients}/>
                <Route path={"/assets"} component={Assets}/>
                <Route path={"/settings"} component={Settings}/>
             </div>
     </main>
    </div>
  );
}

export default App;
