function DueAmtCalc(date1, date2) {
  const DuePeriod = 14;
  const DueAmount = 10;
  let due = 0;
  const dateM1 = new Date(date1).getTime();
  const dateM2 = new Date(date2).getTime();

  const diffM = Math.abs(dateM2 - dateM1);

  const diffday = Math.ceil(diffM / (1000 * 60 * 60 * 24));

  if (diffday > DuePeriod) {
    due = (diffday - DuePeriod) * DueAmount;

    return due;
  }
}
module.exports = { DueAmtCalc };
