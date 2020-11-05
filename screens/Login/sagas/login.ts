// Types
import { LoginActionType } from '../types';

export default function* login({ payload }: LoginActionType) {
  alert(`${payload.email} ${payload.password}`);
}
