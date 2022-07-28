import { React, useEffect, useState } from 'react'
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from '../src/config/firebase'

function View() {
    const data =[];
    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        console.log(data)
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div>
            <ul>
                {data.map((task, imdex) => {
                    return (
                        <li key={imdex}>
                            <h4>{task.name}</h4>
                            <p>{task.description}</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default View