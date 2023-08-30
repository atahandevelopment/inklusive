import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { getCategories, newCategory, editCategory } from '@/services/categories';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewCategoryModal({ 
    setCategories,  
    open,    
    setOpen,   
    openEdit,
    setOpenEdit, 
    selectedTab,    
    setSelectedTab,
    params
     }) {
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
            reset,
          } = useForm()


   const { id, label, slug, childCategory} = params


    const handleOpen = (data) => {
      setOpen(true);
      setSelectedTab(data)
    };
  
    const handleClose = () => {
      setOpen(false);
      reset(); 
    };
  
    const onSubmit = async(data) => {
        if(selectedTab === "add") {
            try {
                const response = await newCategory(data)
                if(response) {
                    await getCategories().then((response) => {
                        setCategories(response.data.data)
                    })
                }
              handleClose();
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await editCategory(id, data)
                if(response) {
                    await getCategories().then((response) => {
                        setCategories(response.data.data)
                    })
                }
                handleClose();
            } catch (error) {
                console.error(error)
            }
        }
    
    };
  

  return (
    <div>
    <Button onClick={() => handleOpen("add")} className="bg-primary-DEFAULT-500 text-white-DEFAULT-100">
      Yeni Kategori
    </Button>
    <Modal
      open={open}
      onClose={() => { setOpenEdit(!openEdit) || handleClose()}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 300, 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4 
             }} >
        <Box className='w-full text-right'>
            <button  onClick={() => { setOpenEdit(!openEdit) || handleClose()}}>
                X
            </button>
        </Box>
       
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-left fw-bold">Category Label</label>
          <input
            className="my-2 rounded-md px-4 py-2 w-full border border-gray-300"
            {...register("label", { required: true })}
            placeholder="Category Label"
            defaultValue={label}
          />
          {errors.label && <span>Kategori ismi zorunlu alandır</span>}

          <button
            className="my-4 px-4 py-2 w-full bg-blue-500 text-white-DEFAULT-200 rounded-md"
            type="submit"
          >
           {selectedTab === "add" ? "Ekle" : "Güncelle"}
          </button>
        </form>
      </Box>
    </Modal>
  </div>
  );
}