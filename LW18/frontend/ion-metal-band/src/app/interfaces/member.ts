import { Band } from "./band";

export interface Member{
    id: string;
    name: string;
    instrument: string;
    band: Band;
}