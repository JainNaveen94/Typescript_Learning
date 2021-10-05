/** Static Method and Static Properties Demo */

import { CTCStructure } from "./CTCStructure";
import { AvailableService } from "./AvailableService";

export class AccountService {
  static availableServices: AvailableService[] = [
    new AvailableService(
      "generateCTCStructure",
      "TO Generate the CTC Structure Using Total Cost to Company"
    ),
  ];

  static generateCTCStructure(totalEmployeeCost: number): CTCStructure {
    if (typeof totalEmployeeCost === "number" && totalEmployeeCost > 0) {
      // Creating CTC Structure Object
      let ctcStructure = new CTCStructure(totalEmployeeCost);
      // Calculate the CTC
      ctcStructure.setBasicPay = totalEmployeeCost * 0.4;
      ctcStructure.setHRA = ctcStructure.getBasicPay * 0.5;
      ctcStructure.setPF = ctcStructure.getBasicPay * 0.12;
      ctcStructure.setGraduty = ctcStructure.getBasicPay * 0.048;
      ctcStructure.setSpecialAllowance =
        totalEmployeeCost -
        (ctcStructure.getBasicPay +
          ctcStructure.getHRA +
          ctcStructure.getPF +
          ctcStructure.getGraduty);
      return ctcStructure;
    } else {
      throw new Error("!! Invalid Value is Entered !!");
    }
  }
}
