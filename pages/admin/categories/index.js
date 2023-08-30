import AuthRedirect from "@/components/Layout"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import { getCategories, deleteCategory } from "@/services/categories";
import NewCategoryModal from "./components/NewCategoryModal"



export default function Categories() {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([])
    const [selectedTab, setSelectedTab] = useState("")
    const [openEdit, setOpenEdit] = useState(false)
    const [params, setParams] = useState({})
    
    useEffect(() => {
        if (openEdit) {
          setOpen(true);
          setSelectedTab("edit");
        }
      }, [openEdit]);

    useEffect(() => {
        getCategories().then((response) => {
            setCategories(response.data.data)
        })
    },[])



    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        {
          field: 'categoryLabel',
          headerName: 'Category Label',
          width: 200,
          editable: true,
        },
        {
          field: 'childCategory',
          headerName: 'Child Category',
          width: 200,
          editable: true,
        },
        {
            field: 'slug',
            headerName: 'Slug',
            width: 200,
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 120,
            renderCell: (params) => {
              const handleEdit = () => {
                 setOpenEdit(!openEdit)
                 setParams({
                    id: params.row.id,
                    label: params.row.categoryLabel,
                    childCategory: params.row.childCategory,
                    slug: params.row.slug
                 })
              };
        
              const handleDelete = async () => {
                const response =  await deleteCategory(params.row.id)
                if (response) {
                    await getCategories().then((res) => {
                        setCategories(res.data.data)
                    })
                }
              };
        
              return (
                <div>
                  <IconButton onClick={() =>handleEdit("edit")} size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={handleDelete} size="small">
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            },
          },
      ];
      
      const rows = [];
        for (var i in categories) {
            rows.push({
                id: categories[i]._id,
                categoryLabel: categories[i].label,
                childCategory: categories[i]?.childCategory,
                slug: categories[i].slug
            })
        }

    return (
        <AuthRedirect allowedRoles={["admin"]} >
            <div className="flex flex-col w-full h-screen">
                <div className="flex justify-end me-4">
                   <NewCategoryModal 
                        setCategories={setCategories}
                            open={open}
                                setOpen={setOpen}
                                    selectedTab={selectedTab}
                                        setSelectedTab={setSelectedTab}
                                            openEdit={openEdit}
                                                setOpenEdit={setOpenEdit}
                                                    params={params}/>
                </div>
                <div className="flex flex-row max-w-full h-full justify-center items-start border p-5">
                <Box sx={{ height: 700, width: '100%' }}>
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