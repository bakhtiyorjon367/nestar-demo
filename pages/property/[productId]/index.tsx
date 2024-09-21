import { useRouter } from "next/router";

const DetailList = () =>{
    const router = useRouter();
    const {productId} = router.query;
    return (
        <div>Detail List {productId}</div>
        )
}

export default DetailList ;