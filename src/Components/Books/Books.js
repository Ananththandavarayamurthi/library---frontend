import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import "../Books/Mentor.css"
import { Button } from '@nextui-org/react';


function Books(props) {
  const navigate = useNavigate();
  const books=props.data.booksdata;
 console.log("bookslist",books)

  const handleAdd = (boo) => {
    
   console.log(boo)
    fetch(`https://library-backend-0af2.onrender.com/borrowers/borrowers/${boo.id}`,
     {
			method: 'PUT',
			body: JSON.stringify({
				title: boo.title,
        nobooks:++boo.nobooks,
        id:boo.id
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response =>response.json())
      .then(()=>navigate("/books"))
			
		}

  const handleminus=(b)=>{
    console.log(b)
    fetch(`https://library-backend-0af2.onrender.com/borrowers/borrowers/${b.id}`,
     {
			method: 'PUT',
			body: JSON.stringify({
				title: b.title,
        nobooks:--b.nobooks,
        id: b.id
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response =>response.json())
      .then(()=>navigate("/books"))
  }
 
 
   
  
  return (
   
      <div>
        
        <div className="btn mt-2"><Button variant="contained" onPress={() => navigate("/addbooks")}>
            Add New Book
          </Button></div>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#No</th>
          <th>BookName</th>
          <th>no of avilability</th>
          

        </tr>
      </thead>
      <tbody>
      {
        books.map((e,i)=>(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{e.title}</td>
          <td className='buttondelete' >
            {e.nobooks}
            <div><button onClick={()=>handleAdd(e)}>+</button>
            <DeleteIcon onClick={()=>{props.data.Deletebooks(e.id)}}/>
            <button onClick={()=>handleminus(e)}>-</button></div>
            
          </td>
          
          
          
        </tr>
        )

        )
}
      </tbody>
    </Table>
      

      </div>
  )
}

export default Books