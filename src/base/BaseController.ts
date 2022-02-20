import { baseActions, baseStates } from '@store/slices/baseSlice';
import Helper from '@utils/Helper';

export default class BaseController {

  public baseAcions;
  public baseStates;

  constructor() {
    this.baseAcions = baseActions;
    this.baseStates = baseStates;
  }

  public getCountInList = <T>(item: T, list: T[]) => {
    let count = 0;
    list.forEach(element => element === item && count++);
    return count;
  }

}
