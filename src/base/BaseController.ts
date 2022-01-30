import {baseActions, baseStates} from '@store/slices/baseSlice';

export default class BaseController {
  public baseAcions;
  public baseStates;

  constructor() {
    this.baseAcions = baseActions;
    this.baseStates = baseStates;
  }
}
