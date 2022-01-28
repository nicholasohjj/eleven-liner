import { Div, Input, Text } from "atomize"
import React from "react"
import { Radio } from "../hooks"

const Upload = () => {

    const result = Radio()

    const Handlechange = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = (event) => {
            result.onClick(JSON.parse(event.target.result))
            console.log(result.value.currentDate)
        }
        reader.readAsText(file)
    }
    return (
        <Div
        bg="brand300"
        d={{ xs: "block", md: "flex" }}
        flexWrap="wrap"
        m="1rem"
        rounded="lg"
        flexDir="column"
        p="1rem"
        >
        <Text textWeight={{ xs: '400', md: '500' }}>Upload existing raw data here (.txt file) (to do)</Text>
         <Input type="file"
        name="fileupload"
       accept=".txt"
       onChange={Handlechange}/>
       </Div>
    )
}

export default Upload