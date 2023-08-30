import { useEffect, useState } from "react";
import TextEditor from "./components/TextEditor";
import { getCategories } from "@/services/categories";

export default function NewBlog() {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategories().then(res => {
            setCategoryList(res.data.data)
        })
    },[])

   
const onSubmit= (data) => {
    console.log(data)
}
  return (
    <div className="w-full flex h-screen items-center justify-center">
        <form className="w-1/2 flex flex-col " onSubmit={onSubmit}>
            <label>Başlık</label>
            <input 
            type="text" 
            className="border mb-2 w-full h-10 " 
            placeholder="Başlık"
            onChange={(e) => setTitle(e.target.value)} 
            />
             <label>Kategori Seçimi</label>
            <select 
            className="border mt-2 mb-2 w-full h-10 " 
            placeholder="Kategori"
            onChange={(e) => setCategory(e.target.value)} 
            >
                { categoryList && 
                  categoryList.length > 0 ?
                  categoryList.map((item, index) => {
                    return <option key={index} value={item.id}>{item.label}</option>
                    }) : ""
                   }
            </select>

            <label>İçerik</label>
            <TextEditor content={value} setContent={setValue}/>
            
            <button type="submit">Gönder</button>
        </form>
    </div>
  );

}