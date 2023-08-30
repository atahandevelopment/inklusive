import { getUsers } from "@/services/users"
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NewCategoryModal from "../categories/components/NewCategoryModal";
import AuthRedirect from "@/components/Layout";

export default function UserList() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        getUsers().then(res => setUsers(res.data.data)) 
    },[])

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        {
          field: 'fullname',
          headerName: 'Full Name',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'E-Mail',
          width: 200,
          editable: true,
        },
        {
            field: 'role',
            headerName: 'User Role',
            width: 200,
            editable: true,
            renderCell: (params) => {
                const value = params.value;
                
                const roleStyle = {
                    color: 'white',
                    padding: "5px",
                    backgroundColor: value === 'admin' ? 'red' : 'yellowgreen',
                    border: '1px solid gray',
                    borderRadius: "5px",
                    display: !value && 'none',
                    cursor: 'pointer'
                };
                
                return <b style={roleStyle}>{value}</b>;
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 120,
            renderCell: (params) => {
            //   const handleEdit = () => {
            //      setOpenEdit(!openEdit)
            //      setParams({
            //         id: params.row.id,
            //         label: params.row.categoryLabel,
            //         childCategory: params.row.childCategory,
            //         slug: params.row.slug
            //      })
            //   };
        
            //   const handleDelete = async () => {
            //     const response =  await deleteCategory(params.row.id)
            //     if (response) {
            //         await getCategories().then((res) => {
            //             setCategories(res.data.data)
            //         })
            //     }
            //   };
        
              return (
                <div>
                  <IconButton  size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton  size="small">
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            },
          },
      ];


      const rows = [];
      for (var i in users) {
          rows.push({
              id: users[i]._id,
              fullname: users[i].fullname,
              email: users[i]?.email,
              role: users[i]?.role
          })
      }

    return (
        <AuthRedirect allowedRoles={["admin"]}>
              <div className="flex flex-col w-full h-screen">
                <div className="flex justify-end me-4">
              
                </div>
                <div className="flex flex-row max-w-full h-95 justify-center items-start border p-5">
                <Box sx={{ height: 800, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      initialState={{
                        pagination: {
                          paginationModel: {
                            pageSize: 10,
                          },
                        },
                      }}
                      pageSizeOptions={[10]}
                      checkboxSelection
                      disableRowSelectionOnClick
                    />
                </Box> 
                </div>
        </div>
        </AuthRedirect>
        
    )
}