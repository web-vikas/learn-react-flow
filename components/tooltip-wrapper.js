import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const TooltipWrapper = (props) => {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>{props.children}</TooltipTrigger>
                <TooltipContent side={props.side}>{props.content}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipWrapper