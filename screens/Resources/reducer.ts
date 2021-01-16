// Constants
import { SET_RESOURCES, RESOURCES } from './constants';

// Types
import { SetResourcesActionType, ResourcesState } from './types';

const initialState = {
  [RESOURCES]: [],
};

export default (state: ResourcesState = initialState, { type, payload }: SetResourcesActionType) => {
  switch (type) {
    case SET_RESOURCES:
      return {
        ...state,
        [RESOURCES]: payload,
      };
    default:
      return state;
  }
}
