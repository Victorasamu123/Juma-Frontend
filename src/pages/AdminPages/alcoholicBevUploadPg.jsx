import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Enterproduct from '../../components/Enterproduct';
import axios from 'axios';
import AdminSideBar from '../../components/AdminSidebar';
import ProductTable from './productTable';


const AlcoholicBevUploadPg = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpened, setIsOModalOpened] = useState(false);
  const [productImage, setproductimage] = useState("");
  const [productName, setproductname] = useState("");
  const [productCategory, setproductcategory] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [productdescription, setproductdescription] = useState("")
  const [productPrice, setproductprice] = useState("");
  const endpoints = "https://juma-backend-delta.vercel.app/addproduct/newalcoholicproduct"
  const productEndpoints = "https://juma-backend-delta.vercel.app/getproduct/getalcoholicbev"
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const getSaucesProduct = async () => {
      try {
        const response = await axios.get(productEndpoints);
        // console.log(response.data);
        setSelectedData(response.data.alcoholicBevProduct)
      }
      catch (error) {
        console.log(error);
      } finally {
        setisLoading(false)
      }
    }
    getSaucesProduct()
  }, [])

  const handleIsOpen = () => {
    setIsOModalOpened(true);
  }

  return (
    <>
      <div className='flex gap-4 justify-between h-full w-full'>
        <AdminSideBar />
        <div className={`w-full overflow-hidden rounded-md sm:ml-20 max-sm:ml-20 lg:ml-[300px] transition-all duration-300 ease-in-out 
    ${isOpen ? 'sm:translate-x-[220px] max-sm:translate-x-[220px]' : 'sm:ml-0 max-sm:ml-0'}`}>
          <h2 className='text-center mt-5 text-5xl font-semibold'>Add New Snacks Product</h2>
          <div className='flex justify-evenly mt-10 mb-10'>
            <Link to="/adminhome/alcoholicBeverages"><button className='w-[180px] h-[50px] bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold'>Alcoholic bev</button></Link>
          </div>

          <button className='w-fit h-[50px] p-2 bg-[#FE0000] text-[white] rounded-xl text-xl font-semibold' onClick={handleIsOpen}>Add Product</button>
          <ProductTable selectedData={selectedData} />
        </div>
      </div>
      {isModalOpened && (<Enterproduct Enterproduct={handleIsOpen} setproductname={setproductname} setproductimage={setproductimage} setproductprice={setproductprice} setproductdescription={setproductdescription} />)}
    </>
  )
}

export default AlcoholicBevUploadPg;