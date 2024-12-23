import proto from '../../WAProto';
import type { AuthenticationCreds, SignalCreds, SocketConfig } from '../Types';
import { BinaryNode } from '../WABinary';
export declare const generateMobileNode: (config: SocketConfig) => proto.WAWa6.IClientPayload;
export declare const generateLoginNode: (userJid: string, config: SocketConfig) => proto.WAWa6.IClientPayload;
export declare const generateRegistrationNode: ({ registrationId, signedPreKey, signedIdentityKey }: SignalCreds, config: SocketConfig) => proto.WAWa6.ClientPayload;
export declare const configureSuccessfulPairing: (stanza: BinaryNode, { advSecretKey, signedIdentityKey, signalIdentities }: Pick<AuthenticationCreds, 'advSecretKey' | 'signedIdentityKey' | 'signalIdentities'>) => {
    creds: Partial<AuthenticationCreds>;
    reply: BinaryNode;
};
export declare const encodeSignedDeviceIdentity: (account: proto.WAAdv.IADVSignedDeviceIdentity, includeSignatureKey: boolean) => Uint8Array;
