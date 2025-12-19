'use client'
import { useState } from "react";

type units = "cm" | "m" | "mm";

interface params{
    val: number,
    unit1: units;
    unit2: units;
}
export function useConvert(){
    const [result, setResult] = useState(0);

    const convert = (val: number, unit1: string, unit2:string) => {
        var returnval:number = val;
        if(unit1 == "cm") returnval = val*10;
        else if(unit1 == "m") returnval = val*1000;

        if(unit2 == "cm") setResult(returnval/10);
        else if(unit2 == "m") setResult(returnval/1000);
        else setResult(returnval);
    };

    return [result, convert];
}