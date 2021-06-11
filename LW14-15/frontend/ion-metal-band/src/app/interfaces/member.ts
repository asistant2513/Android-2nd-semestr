import { Band } from "./band";

export interface Member{
    id: number;
    name: string;
    instrument: string;
    band: Band;
}