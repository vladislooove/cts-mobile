// Constants
import { SEND_FEEDBACK } from './constants';

// Types
import { SendFeedbackActionType } from './types';
import { FeedbackPayload } from '../../services/user/types';

export const sendFeedback = (data: FeedbackPayload): SendFeedbackActionType => ({
  type: SEND_FEEDBACK,
  payload: data,
});
