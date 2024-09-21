import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { NextPage } from "next";
import {useState} from "react";

const Comunity:NextPage = () =>{
    const [title, setTitle] = useState<string>("hello");
    return (
        <div>
            COMMUNITY{""}
            <button onClick={()=>alert("Hello MIT")} style={{color:"white"}}>
                PressMe
            </button>
        </div>
        );
};

export default withLayoutBasic(Comunity);