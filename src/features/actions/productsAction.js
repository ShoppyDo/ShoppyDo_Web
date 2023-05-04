import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice';
import { shoppyDoData } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';


export const getProducts = async (dispatch) => {
    try {
        dispatch(productsRequest())
        const productsCollection = collection(shoppyDoData, "products");
        const querySnapshot = await getDocs(productsCollection);
        
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        dispatch(productsSuccess(products));
    } catch (error) {
        dispatch(productsFail(error.message))
    }
}