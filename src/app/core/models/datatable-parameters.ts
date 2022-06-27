export class DatatableParameters {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
    constructor() {
        this.data = [];
        this.draw = 0;
        this.recordsFiltered = 0;
        this.recordsTotal = 0;
    }
   
}
