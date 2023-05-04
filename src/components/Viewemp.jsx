import './Table.css'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import {React,useEffect,useState} from 'react'
import axios from 'axios'

const Viewemp = () => {
    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users);
            setValue(value=response.data.users);
        })


    },[])
    return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className='Head'>First Name</TableCell>
                    <TableCell className='Head'>Last Name</TableCell>
                    <TableCell className='Head'>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {value.map((data,ind)=>{
                    return <TableRow>
                        <TableCell>
                            {data.firstName}
                        </TableCell>
                        <TableCell>
                            {data.lastName}
                        </TableCell>
                        <TableCell>
                            {data.age}
                        </TableCell>
                    </TableRow>
            }
                )}
            </TableBody>
        </Table>
    </div>
  )
}

export default Viewemp
