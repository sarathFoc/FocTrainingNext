import { useState } from "react"
import { Button } from "reactstrap"

type buttonInfo = {
    color: string
    text:string
    handleButtonAction: () => void
}

const ButtonModel = (props: any) => {
    // const [buttoinState, setButtonState] =useState(false)
    const { handleButtonAction, color, text } = props
    return (
        <Button
            outline
            color={color}
            onClick={() => handleButtonAction()}
        >
            {text}
        </Button>
    )
}

export default ButtonModel
