import React from 'react';
import { shoppyDoData, storage } from '../../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const ProductsForm = () => {

    // const [err, setErr] = useState(false);
    // const [errMsg, setErrMsg] = useState(false);
    // const [dataLoading, setDataLoading] = useState(false)

    const productId = uuidv4();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const brand = e.target[0].value;
        const category = e.target[1].value;
        const detail = e.target[2].value;
        const img = e.target[3].files[0];
        const productName = e.target[4].value;
        const price = e.target[5].value;
        const quantity = e.target[6].value;
        const ratings = e.target[7].value;
        const retailerId = e.target[8].value;
        const retailerName = e.target[9].value;
        const reviews = e.target[10].value;

        try {
            // Convert image to Blob object
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend = async () => {
                const base64data = reader.result;
                const res = await fetch(base64data);
                const blob = await res.blob();

                // Upload the image to Firebase Storage
                const storageRef = ref(storage, `product_images/${img.name}`);
                const uploadTask = uploadBytesResumable(storageRef, blob);
                await uploadTask;

                // Get the download URL of the uploaded image
                const imgUrl = await getDownloadURL(storageRef);

                // Save product data to Firestore
                await setDoc(doc(shoppyDoData, 'products', `${productId}-shoppydo`), {
                    brand,
                    category,
                    detail,
                    productName,
                    price,
                    quantity,
                    ratings,
                    retailerId,
                    retailerName,
                    reviews,
                    img: imgUrl, // Use the download URL of the uploaded image
                });
            }
        }
        catch (err) {
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='brand' type='text' />
                <input placeholder='category' type='text' />
                <input placeholder='detail' type='text' />
                <input placeholder='img' type='file' />
                <input placeholder='namea' type='text' />
                <input placeholder='price' type='text' />
                <input placeholder='quantity' type='text' />
                <input placeholder='ratings' type='text' />
                <input placeholder='retailerId' type='text' />
                <input placeholder='retailerName' type='text' />
                <input placeholder='reviews' type='text' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ProductsForm;