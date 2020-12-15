// Types
import { Response } from '../types';

export interface INotificationsService {
  getAll: () => Promise<Response<Notification[]>>;
}

export interface Notification {
  active: boolean;
  createdAt: string;
  expiryDate: string | null;
  iconUrl: string;
  id: string;
  noticeAttributes: NoticeAttribute[];
  noticeDescription: string;
  noticeFor: {
    clients: string[];
    excludedUsers: string[];
    excludedCcgs: string[];
    ids: string[];
    integrations: string[];
    type: string;
    userCondition: null;
  };
  noticeHeader: string;
  noticeIssuer: string;
  pinned: boolean;
  startDate: strin | null;
  type: string;
}

export interface NoticeAttribute {
  url: string;
  urlText: string;
}