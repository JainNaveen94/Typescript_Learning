export class CTCStructure {
    /** Class Properties */
    private ctc: number;
    private basicPay: number;
    private hra: number;
    private pf: number;
    private graduty: number;
    private specialAllowance: number;
    
    /** Constructor of a Class */
    constructor(ctc: number) {
        this.ctc = ctc;
        this.basicPay = 0;
        this.hra = 0;
        this.pf = 0;
        this.graduty = 0;
        this.specialAllowance = 0;
    }

    /** Getter & Setter */
    set setBasicPay(ctc: number) {
        this.basicPay = this.ctc;
    }
    get getBasicPay() {
        return this.basicPay;
    }
    set setHRA(basicPay: number) {
        this.hra = basicPay;
    }
    get getHRA() {
        return this.hra;
    }
    set setPF(pf: number) {
        this.pf = pf;
    }
    get getPF() {
        return this.pf;
    }
    set setGraduty(graduty: number) {
        this.graduty = graduty;
    }
    get getGraduty() {
        return this.graduty;
    }
    set setSpecialAllowance(specialAllowance: number) {
        this.specialAllowance = specialAllowance;
    }
    get getSpecialAllowance() {
        return this.specialAllowance;
    }
}