"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useId } from 'react'
const StringParam = ({ param, value, updateNodeParamValue }) => {
    const id = useId()
    return (
        <div className='space-y-1 p-1 w-full'>
            <Label htmlFor={id} className="text-xs flex" >{param?.name} {param.required && <p className='text-red-400 px-2'>*</p>}</Label>
            <Input id={id} value={value} onChange={(e) => updateNodeParamValue(e.target.value)} placeholder="Enter Value Here.." />
            {
                param?.helperText &&
                <p className='text-xs text-muted-foreground'>{param.helperText}</p>
            }
        </div>
    )
}

export default StringParam