import EnNumber from "./EnNumber";

export default class Currency {
  /**
   * Format value with current Currency
   *
   * @param value {number | string}
   * @returns {string}
   */

  static format = (value: number | string = "") => {
    return (
      <span className="formatted--value">
        {value || 0}
        {" " + "QAR"}
      </span>
    );
  };
}
