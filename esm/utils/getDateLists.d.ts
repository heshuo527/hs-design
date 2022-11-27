interface IDdateLists {
    prefix: number[];
    dateList: number[];
    suffix: number[];
}
declare function getDateLists(year: number, month: number): IDdateLists;
export default getDateLists;
