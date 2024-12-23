/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import type { Logger } from 'pino';
import proto from '../../WAProto';
import { BaileysEventEmitter, ChatModification, ChatMutation, Contact, InitialAppStateSyncOptions, LTHashState, WAPatchCreate, WAPatchName } from '../Types';
import { BinaryNode } from '../WABinary';
type FetchAppStateSyncKey = (keyId: string) => Promise<proto.WAE2E.Message.IAppStateSyncKeyData | null | undefined>;
export type ChatMutationMap = {
    [index: string]: ChatMutation;
};
export declare const newLTHashState: () => LTHashState;
export declare const encodeSyncdPatch: ({ type, index, syncAction, apiVersion, operation }: WAPatchCreate, myAppStateKeyId: string, state: LTHashState, getAppStateSyncKey: FetchAppStateSyncKey) => Promise<{
    patch: proto.WAServerSync.ISyncdPatch;
    state: LTHashState;
}>;
export declare const decodeSyncdMutations: (msgMutations: (proto.WAServerSync.ISyncdMutation | proto.WAServerSync.ISyncdRecord)[], initialState: LTHashState, getAppStateSyncKey: FetchAppStateSyncKey, onMutation: (mutation: ChatMutation) => void, validateMacs: boolean) => Promise<{
    hash: Buffer;
    indexValueMap: {
        [indexMacBase64: string]: {
            valueMac: Uint8Array | Buffer;
        };
    };
}>;
export declare const decodeSyncdPatch: (msg: proto.WAServerSync.ISyncdPatch, name: WAPatchName, initialState: LTHashState, getAppStateSyncKey: FetchAppStateSyncKey, onMutation: (mutation: ChatMutation) => void, validateMacs: boolean) => Promise<{
    hash: Buffer;
    indexValueMap: {
        [indexMacBase64: string]: {
            valueMac: Uint8Array | Buffer;
        };
    };
}>;
export declare const extractSyncdPatches: (result: BinaryNode, options: AxiosRequestConfig<any>) => Promise<{
    critical_block: {
        patches: proto.WAServerSync.ISyncdPatch[];
        hasMorePatches: boolean;
        snapshot?: proto.WAServerSync.ISyncdSnapshot | undefined;
    };
    critical_unblock_low: {
        patches: proto.WAServerSync.ISyncdPatch[];
        hasMorePatches: boolean;
        snapshot?: proto.WAServerSync.ISyncdSnapshot | undefined;
    };
    regular_high: {
        patches: proto.WAServerSync.ISyncdPatch[];
        hasMorePatches: boolean;
        snapshot?: proto.WAServerSync.ISyncdSnapshot | undefined;
    };
    regular_low: {
        patches: proto.WAServerSync.ISyncdPatch[];
        hasMorePatches: boolean;
        snapshot?: proto.WAServerSync.ISyncdSnapshot | undefined;
    };
    regular: {
        patches: proto.WAServerSync.ISyncdPatch[];
        hasMorePatches: boolean;
        snapshot?: proto.WAServerSync.ISyncdSnapshot | undefined;
    };
}>;
export declare const downloadExternalBlob: (blob: proto.WAServerSync.IExternalBlobReference, options: AxiosRequestConfig<any>) => Promise<Buffer>;
export declare const downloadExternalPatch: (blob: proto.WAServerSync.IExternalBlobReference, options: AxiosRequestConfig<any>) => Promise<proto.WAServerSync.SyncdMutations>;
export declare const decodeSyncdSnapshot: (name: WAPatchName, snapshot: proto.WAServerSync.ISyncdSnapshot, getAppStateSyncKey: FetchAppStateSyncKey, minimumVersionNumber: number | undefined, validateMacs?: boolean) => Promise<{
    state: LTHashState;
    mutationMap: ChatMutationMap;
}>;
export declare const decodePatches: (name: WAPatchName, syncds: proto.WAServerSync.ISyncdPatch[], initial: LTHashState, getAppStateSyncKey: FetchAppStateSyncKey, options: AxiosRequestConfig<any>, minimumVersionNumber?: number, logger?: Logger, validateMacs?: boolean) => Promise<{
    state: LTHashState;
    mutationMap: ChatMutationMap;
}>;
export declare const chatModificationToAppPatch: (mod: ChatModification, jid: string) => WAPatchCreate;
export declare const processSyncAction: (syncAction: ChatMutation, ev: BaileysEventEmitter, me: Contact, initialSyncOpts?: InitialAppStateSyncOptions, logger?: Logger) => void;
export {};
