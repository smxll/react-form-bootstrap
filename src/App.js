import React, { useState } from "react";
import firestore from './database/firebase';
import { Table } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [userName, setUserName,] = useState("");
  const [userlName, setUserlName] = useState("");
  const [age, setAge] = useState("");
  const addUserHanler =(obj) => {
    const ref = firestore.collection("student");
    ref
      .add(obj)
      .then(() => {
        console.log("add success");
      })
      .catch((err)=> console.log(err));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      userName: userName,
      userlName: userlName,
      age: age,
    };
    setUserName("");
    setUserlName("");
    setAge("");
    addUserHanler(obj);
  };
    return(
      <div className="App" >
        <form onSubmit={onSubmitHandler}>
        <Table table striped responsive >
          <tbody align="center">
            <tr >
              <td>
                <label>ชื่อ</label>
              </td>
              <td>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>นามสกุล</label>
              </td>
              <td>
                <input type ="text" value={userlName} onChange={(e) => setUserlName(e.target.value)}/>
              </td>
            </tr>
            <tr >
              <td >
                <label>อายุ</label>
              </td>
              <td>
                <input type ="text" value={age} onChange={(e) => setAge(e.target.value)}/>
              </td>
            </tr>
            <tr >
              <td  align="center" colSpan="2">
                <button type="submit">เพิ่มข้อมูล</button>
              </td>
            </tr>
          </tbody>
        </Table>
        </form>
      </div>

      
    );
  
}
export default App;