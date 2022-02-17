import { baseActions, baseStates } from '@store/slices/baseSlice';
import Helper from '@utils/Helper';

export default class BaseController {

  public baseAcions;
  public baseStates;

  constructor() {
    this.baseAcions = baseActions;
    this.baseStates = baseStates;
  }
}
