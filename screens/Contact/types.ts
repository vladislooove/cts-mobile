// Constants
import { SEND_FEEDBACK } from './constants';

// Types
import { FeedbackPayload } from '../../services/user/types';

export interface SendFeedbackActionType {
  type: typeof SEND_FEEDBACK;
  payload: FeedbackPayload;
}
