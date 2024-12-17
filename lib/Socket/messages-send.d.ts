/// <reference types="node" />
/// <reference types="node" />
import { Boom } from '@hapi/boom';
import { proto } from '../../WAProto';
import { AnyMessageContent, MediaConnInfo, MessageReceiptType, MessageRelayOptions, MiscMessageGenerationOptions, SocketConfig, WAMessageKey } from '../Types';
import { BinaryNode, JidWithDevice } from '../WABinary';
export declare const makeMessagesSocket: (config: SocketConfig) => {
    getPrivacyTokens: (jids: string[]) => Promise<BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: proto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: WAMessageKey[], type: MessageReceiptType) => Promise<void>;
    readMessages: (keys: WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<MediaConnInfo>;
    waUploadToServer: import("@whiskeysockets/baileys/src/Types/Message").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    sendPeerDataOperationMessage: (pdoMessage: proto.Message.IPeerDataOperationRequestMessage) => Promise<string>;
    createParticipantNodes: (jids: string[], message: proto.IMessage, extraAttrs?: BinaryNode['attrs']) => Promise<{
        nodes: BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<JidWithDevice[]>;
    updateMediaMessage: (message: proto.IWebMessageInfo) => Promise<proto.IWebMessageInfo>;
    sendMessage: (jid: string, content: AnyMessageContent, options?: MiscMessageGenerationOptions) => Promise<proto.WebMessageInfo | undefined>;
    groupMetadata: (jid: string) => Promise<import("@whiskeysockets/baileys/src/Types/GroupMetadata").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("@whiskeysockets/baileys/src/Types/GroupMetadata").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "reject" | "approve") => Promise<{
        status: string;
        jid: string;
    }[]>; /** Bulk read messages. Keys can be from different chats & participants */
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("@whiskeysockets/baileys/src/Types/GroupMetadata").ParticipantAction) => Promise<{
        status: string;
        jid: string;
        content: BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string | undefined) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupRevokeInviteV4: (groupJid: string, invitedJid: string) => Promise<boolean>;
    groupAcceptInviteV4: (key: string | proto.IMessageKey, inviteMessage: proto.Message.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("@whiskeysockets/baileys/src/Types/GroupMetadata").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "locked" | "not_announcement" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "all_member_add" | "admin_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("@whiskeysockets/baileys/src/Types/GroupMetadata").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => T | Promise<T>): Promise<T>;
    };
    upsertMessage: (msg: proto.IWebMessageInfo, type: import("@whiskeysockets/baileys/src/Types/Message").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("@whiskeysockets/baileys/src/Types/Chat").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("@whiskeysockets/baileys/src/Types/Chat").WAPresence, toJid?: string | undefined) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer | undefined) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "image" | "preview", timeoutMs?: number | undefined) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        exists: boolean;
        jid: string;
    }[]>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (jid: string) => Promise<{
        status: string | undefined;
        setAt: Date;
    } | undefined>;
    updateProfilePicture: (jid: string, content: import("@whiskeysockets/baileys/src/Types/Message").WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateCallPrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyCallValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("@whiskeysockets/baileys/src/Types/Chat").WAPrivacyGroupAddValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<void | import("../Types").WABusinessProfile>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("@whiskeysockets/baileys/src/Types/Chat").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: string | number | undefined) => Promise<void>;
    addLabel: (jid: string, labels: import("@whiskeysockets/baileys/src/Types/Label").LabelActionBody) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean | undefined;
    }[], star: boolean) => Promise<void>;
    type: "md";
    ws: import("@whiskeysockets/baileys/src/Socket/Client").WebSocketClient;
    ev: import("@whiskeysockets/baileys/src/Types/Events").BaileysEventEmitter & {
        process(handler: (events: Partial<import("@whiskeysockets/baileys/src/Types/Events").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T_1>(work: (...args: A) => Promise<T_1>): (...args: A) => Promise<T_1>;
        flush(force?: boolean | undefined): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("@whiskeysockets/baileys/src/Types/Auth").AuthenticationCreds;
        keys: import("@whiskeysockets/baileys/src/Types/Auth").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("@whiskeysockets/baileys/src/Types/Signal").SignalRepository;
    user: import("@whiskeysockets/baileys/src/Types/Contact").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number | undefined) => Promise<BinaryNode>;
    waitForMessage: <T_2>(msgId: string, timeoutMs?: number | undefined) => Promise<T_2>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: (msg?: string | undefined) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | Boom<any>, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("@whiskeysockets/baileys/src/Types/State").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<BinaryNode>;
};
