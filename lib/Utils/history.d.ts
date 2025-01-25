import { AxiosRequestConfig } from 'axios';
import proto from '../../WAProto';
import { Chat, Contact } from '../Types';
export declare const downloadHistory: (msg: proto.WAE2E.Message.IHistorySyncNotification, options: AxiosRequestConfig<any>) => Promise<proto.WAHistorySync.HistorySync>;
export declare const processHistoryMessage: (item: proto.WAHistorySync.IHistorySync) => {
    chats: Chat[];
    contacts: Contact[];
    messages: proto.WAWeb.IWebMessageInfo[];
};
export declare const downloadAndProcessHistorySyncNotification: (msg: proto.WAE2E.Message.IHistorySyncNotification, options: AxiosRequestConfig<any>) => Promise<{
    chats: Chat[];
    contacts: Contact[];
    messages: proto.WAWeb.IWebMessageInfo[];
}>;
export declare const getHistoryMsg: (message: proto.WAE2E.IMessage) => proto.WAE2E.Message.IHistorySyncNotification | null | undefined;
