import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Table from 'react-bootstrap/esm/Table';
import { Container, Input, Spacer} from "@nextui-org/react";
import { Button } from '@nextui-org/react';




function Borrowers(props) {
const navigate=useNavigate()
const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState('');


const rows = props.data.tableData
const searchItems = (searchValue) => {
  setSearchInput(searchValue)
  if (searchInput !== '') {
      const filteredData = rows.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(rows)
  }
}


const handlerecieved = (boo) => { 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  
   fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/movies/${boo.id}`,
    {
     method: 'PUT',
     body: JSON.stringify({
       title: boo.title,
       serialnumber: boo.serialnumber,
       nobooks:boo.nobooks,
       user:boo.user,
       useridnumber:boo.useridnumber,
       userphonenumber:boo.userphonenumber,
       dateofissued:boo.dateofissued,
       dateofrecieved: date,
       id: boo.id
     }),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   }).then(response =>response.json())
     .then(()=>window.location.reload(true))
     
   }


  return (
    <div >
       <div className="btn mt-2"><Button variant="contained" onClick={() => navigate("/addregister")}>
            Add List
          </Button></div>
      
      <Container>
      <Spacer y={4} />
      <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
   
      <Spacer y={2} />
      <Table striped bordered hover variant="dark">
      <thead>
      <tr>
            <th >#no</th>
            <th >Bookname</th>
            <th >Name</th>
            <th >idnumber</th>
            <th >phone number</th>
            <th >dateofissued</th>
            <th >dateofrecieved</th>
            </tr>
        </thead>  
        
        <tbody>
        {searchInput.length > 1 ?
        (filteredResults.map((e,i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{e.title}</td>
            <td>{e.user}</td>
            <td>{e.useridnumber}</td>
            <td>{e.userphonenumber}</td>
            <td>{e.dateofissued}</td>
            <td>{!e.dateofrecieved?(<button onClick={()=>handlerecieved(e)}>close the date</button>)
              :e.dateofrecieved}
            </td>

          </tr>
        )))
          :(rows.map((e,i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td>{e.user}</td>
              <td>{e.useridnumber}</td>
              <td>{e.userphonenumber}</td>
              <td>{e.dateofissued}</td>
              <td>{!e.dateofrecieved?(<button onClick={()=>handlerecieved(e)}>close the date</button>)
                :e.dateofrecieved}
              </td>

            </tr>
          )))}
        </tbody>
      </Table>
      
              
    </Container>
      
      </div>
  )
}

export default Borrowers