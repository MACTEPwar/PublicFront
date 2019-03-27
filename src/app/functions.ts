export class Functions {
    constructor(){}

    public static nextTabIndex(tabIndexCurrent:number,tabIndexMax:number):number {
        if (tabIndexCurrent < tabIndexMax) return tabIndexCurrent++;
        else return tabIndexCurrent;
      }
}