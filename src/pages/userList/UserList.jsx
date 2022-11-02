import "./userlist.css"
import React, { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {userRows} from "../../dummyData"
import {Link} from "react-router-dom"

export default function UserList() {
    const [data,setData] = useState(userRows)
    const handleDelete = (id)=>{
      setData(data.filter(item=>item.id !== id))
    }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'UserName', width: 200, renderCell: (params)=> {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.userName}
        </div>
      )
    } },
    { field: 'email', headerName: 'EMail', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      type: 'number',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
