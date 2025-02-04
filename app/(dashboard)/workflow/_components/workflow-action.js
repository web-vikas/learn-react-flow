import TooltipWrapper from '@/components/tooltip-wrapper'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'
import React from 'react'

const WorkflowAction = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                    <TooltipWrapper content="More Actions">
                        <div className='flex items-center justify-center w-full h-full'>
                            <MoreVertical size={18} />
                        </div>
                    </TooltipWrapper>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default WorkflowAction