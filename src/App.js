import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About.js";
import Borrowers from "./Components/Borrowers/Borrowers";
import { EditStudent } from "./Components/Borrowers/EditStudent";
import Books from "./Components/Books/Books";
import Addbooks from "./Components/Books/Addbooks";
import NavBars from "./Components/NavBars";
import { useState,useEffect} from "react";
import Addregister from "./Components/Borrowers/Addregister";

function App() {
const[booksdata,setBooksData]=useState([])

  console.log("booksDAta",booksdata)
  const getbookData = () => {
    fetch("https://library-backend-0af2.onrender.com/borrowers/borrowers", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data1) => setBooksData(data1));
  
  };
useEffect(() => getbookData(), []);
  const Deletebooks = (id) => {
    fetch(`https://library-backend-0af2.onrender.com/borrowers/borrowers/${id}`, {
      method: "DELETE",
    }).then((data) => getbookData(data));
  };
const [tableData, setTableData] = useState([]);
console.log("tabledata",tableData)
const getData = () => {
  fetch("https://6354ef52483f5d2df3a96755.mockapi.io/movies", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => setTableData(data));

};
useEffect(() => getData(), []);
const DeleteUser = (id) => {
  fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/movies/${id}`, {
    method: "DELETE",
  }).then((data) => getData(data));
};
  return (
    <div className="App">
      <NavBars/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/borrowers" element={<Borrowers data={{DeleteUser,tableData, setTableData}}/>} />
        <Route path="/addregister" element={<Addregister data={{getData,DeleteUser,tableData, setTableData}}/>} />
        <Route path="student/editstudent/:id" element={<EditStudent />} />
        <Route path="/books" element={<Books data={{Deletebooks,booksdata,setBooksData}}/>} />
        <Route path="/addbooks" element={<Addbooks data={{getbookData,booksdata}}/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
