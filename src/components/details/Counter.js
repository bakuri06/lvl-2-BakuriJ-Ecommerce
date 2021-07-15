import { Box } from "@material-ui/core"
import { useState } from "react"
import "./Counter.css"
import { Button } from "@material-ui/core"

const Counter = () => {

    let [data, setData] = useState(0);
    const minusCounter = () => {
        let smth = data;
        setData(--smth);
        if (data < 0) {
            return 0;
        }
    }
    const plusCounter = () => {
        let smth = data;
        setData(++smth);
    }

    return (
        <Box mt={'20px'}>
            <Box color='#554F4F' fontSize='15px'>Quantity</Box>
            <Box>
                <form noValidate autoComplete="off" >
                    <Button variant='outlined' onClick={minusCounter} >-</Button>
                    <Button variant="outlined">{data}</Button>
                    <Button variant='outlined' onClick={plusCounter} >+</Button>
                </form>
            </Box>
        </Box>
    )
}

export default Counter;
