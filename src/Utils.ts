export class Utils
{
  public static makeDate(input: string): Date
  {
    input = input.substring(0, input.length - 1); //remove colon
    const date: Date = new Date();
    const d: string[] = input.split("-");
    const month: string = d[0];
    const day: string = d[1];
    const year: string = "20" + d[2];
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  public static printDate(date: Date): string
  {
    const year: number = date.getFullYear() - 2000;
    return date.getMonth() + "-" + date.getDay() + "-" + year;
  }
}
