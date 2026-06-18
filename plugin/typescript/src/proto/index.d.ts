import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace types. */
export namespace types {

    /** Properties of an Account. */
    interface IAccount {

        /** Account address */
        address?: (Uint8Array|null);

        /** Account amount */
        amount?: (number|Long|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccount);

        /** Account address. */
        public address: Uint8Array;

        /** Account amount. */
        public amount: (number|Long);

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: types.IAccount): types.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link types.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link types.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): types.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Account
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Pool. */
    interface IPool {

        /** Pool id */
        id?: (number|Long|null);

        /** Pool amount */
        amount?: (number|Long|null);
    }

    /** Represents a Pool. */
    class Pool implements IPool {

        /**
         * Constructs a new Pool.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPool);

        /** Pool id. */
        public id: (number|Long);

        /** Pool amount. */
        public amount: (number|Long);

        /**
         * Creates a new Pool instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pool instance
         */
        public static create(properties?: types.IPool): types.Pool;

        /**
         * Encodes the specified Pool message. Does not implicitly {@link types.Pool.verify|verify} messages.
         * @param message Pool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pool message, length delimited. Does not implicitly {@link types.Pool.verify|verify} messages.
         * @param message Pool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pool message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Pool;

        /**
         * Decodes a Pool message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Pool;

        /**
         * Verifies a Pool message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pool message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pool
         */
        public static fromObject(object: { [k: string]: any }): types.Pool;

        /**
         * Creates a plain object from a Pool message. Also converts values to other types if specified.
         * @param message Pool
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Pool, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pool to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pool
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event eventType */
        eventType?: (string|null);

        /** Event custom */
        custom?: (types.IEventCustom|null);

        /** Event height */
        height?: (number|Long|null);

        /** Event reference */
        reference?: (string|null);

        /** Event chainId */
        chainId?: (number|Long|null);

        /** Event blockHeight */
        blockHeight?: (number|Long|null);

        /** Event blockHash */
        blockHash?: (Uint8Array|null);

        /** Event address */
        address?: (Uint8Array|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEvent);

        /** Event eventType. */
        public eventType: string;

        /** Event custom. */
        public custom?: (types.IEventCustom|null);

        /** Event height. */
        public height: (number|Long);

        /** Event reference. */
        public reference: string;

        /** Event chainId. */
        public chainId: (number|Long);

        /** Event blockHeight. */
        public blockHeight: (number|Long);

        /** Event blockHash. */
        public blockHash: Uint8Array;

        /** Event address. */
        public address: Uint8Array;

        /** Event msg. */
        public msg?: "custom";

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: types.IEvent): types.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link types.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link types.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): types.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Event
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventCustom. */
    interface IEventCustom {

        /** EventCustom msg */
        msg?: (google.protobuf.IAny|null);
    }

    /** Represents an EventCustom. */
    class EventCustom implements IEventCustom {

        /**
         * Constructs a new EventCustom.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEventCustom);

        /** EventCustom msg. */
        public msg?: (google.protobuf.IAny|null);

        /**
         * Creates a new EventCustom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventCustom instance
         */
        public static create(properties?: types.IEventCustom): types.EventCustom;

        /**
         * Encodes the specified EventCustom message. Does not implicitly {@link types.EventCustom.verify|verify} messages.
         * @param message EventCustom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEventCustom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventCustom message, length delimited. Does not implicitly {@link types.EventCustom.verify|verify} messages.
         * @param message EventCustom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEventCustom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventCustom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventCustom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EventCustom;

        /**
         * Decodes an EventCustom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventCustom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EventCustom;

        /**
         * Verifies an EventCustom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventCustom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventCustom
         */
        public static fromObject(object: { [k: string]: any }): types.EventCustom;

        /**
         * Creates a plain object from an EventCustom message. Also converts values to other types if specified.
         * @param message EventCustom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EventCustom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventCustom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventCustom
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FSMToPlugin. */
    interface IFSMToPlugin {

        /** FSMToPlugin id */
        id?: (number|Long|null);

        /** FSMToPlugin config */
        config?: (types.IPluginFSMConfig|null);

        /** FSMToPlugin genesis */
        genesis?: (types.IPluginGenesisRequest|null);

        /** FSMToPlugin begin */
        begin?: (types.IPluginBeginRequest|null);

        /** FSMToPlugin check */
        check?: (types.IPluginCheckRequest|null);

        /** FSMToPlugin deliver */
        deliver?: (types.IPluginDeliverRequest|null);

        /** FSMToPlugin end */
        end?: (types.IPluginEndRequest|null);

        /** FSMToPlugin stateRead */
        stateRead?: (types.IPluginStateReadResponse|null);

        /** FSMToPlugin stateWrite */
        stateWrite?: (types.IPluginStateWriteResponse|null);

        /** FSMToPlugin error */
        error?: (types.IPluginError|null);
    }

    /** Represents a FSMToPlugin. */
    class FSMToPlugin implements IFSMToPlugin {

        /**
         * Constructs a new FSMToPlugin.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IFSMToPlugin);

        /** FSMToPlugin id. */
        public id: (number|Long);

        /** FSMToPlugin config. */
        public config?: (types.IPluginFSMConfig|null);

        /** FSMToPlugin genesis. */
        public genesis?: (types.IPluginGenesisRequest|null);

        /** FSMToPlugin begin. */
        public begin?: (types.IPluginBeginRequest|null);

        /** FSMToPlugin check. */
        public check?: (types.IPluginCheckRequest|null);

        /** FSMToPlugin deliver. */
        public deliver?: (types.IPluginDeliverRequest|null);

        /** FSMToPlugin end. */
        public end?: (types.IPluginEndRequest|null);

        /** FSMToPlugin stateRead. */
        public stateRead?: (types.IPluginStateReadResponse|null);

        /** FSMToPlugin stateWrite. */
        public stateWrite?: (types.IPluginStateWriteResponse|null);

        /** FSMToPlugin error. */
        public error?: (types.IPluginError|null);

        /** FSMToPlugin payload. */
        public payload?: ("config"|"genesis"|"begin"|"check"|"deliver"|"end"|"stateRead"|"stateWrite"|"error");

        /**
         * Creates a new FSMToPlugin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FSMToPlugin instance
         */
        public static create(properties?: types.IFSMToPlugin): types.FSMToPlugin;

        /**
         * Encodes the specified FSMToPlugin message. Does not implicitly {@link types.FSMToPlugin.verify|verify} messages.
         * @param message FSMToPlugin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IFSMToPlugin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FSMToPlugin message, length delimited. Does not implicitly {@link types.FSMToPlugin.verify|verify} messages.
         * @param message FSMToPlugin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IFSMToPlugin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FSMToPlugin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FSMToPlugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.FSMToPlugin;

        /**
         * Decodes a FSMToPlugin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FSMToPlugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.FSMToPlugin;

        /**
         * Verifies a FSMToPlugin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FSMToPlugin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FSMToPlugin
         */
        public static fromObject(object: { [k: string]: any }): types.FSMToPlugin;

        /**
         * Creates a plain object from a FSMToPlugin message. Also converts values to other types if specified.
         * @param message FSMToPlugin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.FSMToPlugin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FSMToPlugin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FSMToPlugin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginToFSM. */
    interface IPluginToFSM {

        /** PluginToFSM id */
        id?: (number|Long|null);

        /** PluginToFSM config */
        config?: (types.IPluginConfig|null);

        /** PluginToFSM genesis */
        genesis?: (types.IPluginGenesisResponse|null);

        /** PluginToFSM begin */
        begin?: (types.IPluginBeginResponse|null);

        /** PluginToFSM check */
        check?: (types.IPluginCheckResponse|null);

        /** PluginToFSM deliver */
        deliver?: (types.IPluginDeliverResponse|null);

        /** PluginToFSM end */
        end?: (types.IPluginEndResponse|null);

        /** PluginToFSM stateRead */
        stateRead?: (types.IPluginStateReadRequest|null);

        /** PluginToFSM stateWrite */
        stateWrite?: (types.IPluginStateWriteRequest|null);
    }

    /** Represents a PluginToFSM. */
    class PluginToFSM implements IPluginToFSM {

        /**
         * Constructs a new PluginToFSM.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginToFSM);

        /** PluginToFSM id. */
        public id: (number|Long);

        /** PluginToFSM config. */
        public config?: (types.IPluginConfig|null);

        /** PluginToFSM genesis. */
        public genesis?: (types.IPluginGenesisResponse|null);

        /** PluginToFSM begin. */
        public begin?: (types.IPluginBeginResponse|null);

        /** PluginToFSM check. */
        public check?: (types.IPluginCheckResponse|null);

        /** PluginToFSM deliver. */
        public deliver?: (types.IPluginDeliverResponse|null);

        /** PluginToFSM end. */
        public end?: (types.IPluginEndResponse|null);

        /** PluginToFSM stateRead. */
        public stateRead?: (types.IPluginStateReadRequest|null);

        /** PluginToFSM stateWrite. */
        public stateWrite?: (types.IPluginStateWriteRequest|null);

        /** PluginToFSM payload. */
        public payload?: ("config"|"genesis"|"begin"|"check"|"deliver"|"end"|"stateRead"|"stateWrite");

        /**
         * Creates a new PluginToFSM instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginToFSM instance
         */
        public static create(properties?: types.IPluginToFSM): types.PluginToFSM;

        /**
         * Encodes the specified PluginToFSM message. Does not implicitly {@link types.PluginToFSM.verify|verify} messages.
         * @param message PluginToFSM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginToFSM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginToFSM message, length delimited. Does not implicitly {@link types.PluginToFSM.verify|verify} messages.
         * @param message PluginToFSM message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginToFSM, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginToFSM message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginToFSM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginToFSM;

        /**
         * Decodes a PluginToFSM message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginToFSM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginToFSM;

        /**
         * Verifies a PluginToFSM message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginToFSM message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginToFSM
         */
        public static fromObject(object: { [k: string]: any }): types.PluginToFSM;

        /**
         * Creates a plain object from a PluginToFSM message. Also converts values to other types if specified.
         * @param message PluginToFSM
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginToFSM, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginToFSM to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginToFSM
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginConfig. */
    interface IPluginConfig {

        /** PluginConfig name */
        name?: (string|null);

        /** PluginConfig id */
        id?: (number|Long|null);

        /** PluginConfig version */
        version?: (number|Long|null);

        /** PluginConfig supportedTransactions */
        supportedTransactions?: (string[]|null);

        /** PluginConfig fileDescriptorProtos */
        fileDescriptorProtos?: (Uint8Array[]|null);

        /** PluginConfig transactionTypeUrls */
        transactionTypeUrls?: (string[]|null);

        /** PluginConfig eventTypeUrls */
        eventTypeUrls?: (string[]|null);
    }

    /** Represents a PluginConfig. */
    class PluginConfig implements IPluginConfig {

        /**
         * Constructs a new PluginConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginConfig);

        /** PluginConfig name. */
        public name: string;

        /** PluginConfig id. */
        public id: (number|Long);

        /** PluginConfig version. */
        public version: (number|Long);

        /** PluginConfig supportedTransactions. */
        public supportedTransactions: string[];

        /** PluginConfig fileDescriptorProtos. */
        public fileDescriptorProtos: Uint8Array[];

        /** PluginConfig transactionTypeUrls. */
        public transactionTypeUrls: string[];

        /** PluginConfig eventTypeUrls. */
        public eventTypeUrls: string[];

        /**
         * Creates a new PluginConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginConfig instance
         */
        public static create(properties?: types.IPluginConfig): types.PluginConfig;

        /**
         * Encodes the specified PluginConfig message. Does not implicitly {@link types.PluginConfig.verify|verify} messages.
         * @param message PluginConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginConfig message, length delimited. Does not implicitly {@link types.PluginConfig.verify|verify} messages.
         * @param message PluginConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginConfig;

        /**
         * Decodes a PluginConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginConfig;

        /**
         * Verifies a PluginConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginConfig
         */
        public static fromObject(object: { [k: string]: any }): types.PluginConfig;

        /**
         * Creates a plain object from a PluginConfig message. Also converts values to other types if specified.
         * @param message PluginConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginFSMConfig. */
    interface IPluginFSMConfig {

        /** PluginFSMConfig config */
        config?: (types.IPluginConfig|null);
    }

    /** Represents a PluginFSMConfig. */
    class PluginFSMConfig implements IPluginFSMConfig {

        /**
         * Constructs a new PluginFSMConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginFSMConfig);

        /** PluginFSMConfig config. */
        public config?: (types.IPluginConfig|null);

        /**
         * Creates a new PluginFSMConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginFSMConfig instance
         */
        public static create(properties?: types.IPluginFSMConfig): types.PluginFSMConfig;

        /**
         * Encodes the specified PluginFSMConfig message. Does not implicitly {@link types.PluginFSMConfig.verify|verify} messages.
         * @param message PluginFSMConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginFSMConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginFSMConfig message, length delimited. Does not implicitly {@link types.PluginFSMConfig.verify|verify} messages.
         * @param message PluginFSMConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginFSMConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginFSMConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginFSMConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginFSMConfig;

        /**
         * Decodes a PluginFSMConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginFSMConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginFSMConfig;

        /**
         * Verifies a PluginFSMConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginFSMConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginFSMConfig
         */
        public static fromObject(object: { [k: string]: any }): types.PluginFSMConfig;

        /**
         * Creates a plain object from a PluginFSMConfig message. Also converts values to other types if specified.
         * @param message PluginFSMConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginFSMConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginFSMConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginFSMConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginGenesisRequest. */
    interface IPluginGenesisRequest {

        /** PluginGenesisRequest genesisJson */
        genesisJson?: (Uint8Array|null);
    }

    /** Represents a PluginGenesisRequest. */
    class PluginGenesisRequest implements IPluginGenesisRequest {

        /**
         * Constructs a new PluginGenesisRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginGenesisRequest);

        /** PluginGenesisRequest genesisJson. */
        public genesisJson: Uint8Array;

        /**
         * Creates a new PluginGenesisRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginGenesisRequest instance
         */
        public static create(properties?: types.IPluginGenesisRequest): types.PluginGenesisRequest;

        /**
         * Encodes the specified PluginGenesisRequest message. Does not implicitly {@link types.PluginGenesisRequest.verify|verify} messages.
         * @param message PluginGenesisRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginGenesisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginGenesisRequest message, length delimited. Does not implicitly {@link types.PluginGenesisRequest.verify|verify} messages.
         * @param message PluginGenesisRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginGenesisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginGenesisRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginGenesisRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginGenesisRequest;

        /**
         * Decodes a PluginGenesisRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginGenesisRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginGenesisRequest;

        /**
         * Verifies a PluginGenesisRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginGenesisRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginGenesisRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginGenesisRequest;

        /**
         * Creates a plain object from a PluginGenesisRequest message. Also converts values to other types if specified.
         * @param message PluginGenesisRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginGenesisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginGenesisRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginGenesisRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginGenesisResponse. */
    interface IPluginGenesisResponse {

        /** PluginGenesisResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginGenesisResponse. */
    class PluginGenesisResponse implements IPluginGenesisResponse {

        /**
         * Constructs a new PluginGenesisResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginGenesisResponse);

        /** PluginGenesisResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginGenesisResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginGenesisResponse instance
         */
        public static create(properties?: types.IPluginGenesisResponse): types.PluginGenesisResponse;

        /**
         * Encodes the specified PluginGenesisResponse message. Does not implicitly {@link types.PluginGenesisResponse.verify|verify} messages.
         * @param message PluginGenesisResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginGenesisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginGenesisResponse message, length delimited. Does not implicitly {@link types.PluginGenesisResponse.verify|verify} messages.
         * @param message PluginGenesisResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginGenesisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginGenesisResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginGenesisResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginGenesisResponse;

        /**
         * Decodes a PluginGenesisResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginGenesisResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginGenesisResponse;

        /**
         * Verifies a PluginGenesisResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginGenesisResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginGenesisResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginGenesisResponse;

        /**
         * Creates a plain object from a PluginGenesisResponse message. Also converts values to other types if specified.
         * @param message PluginGenesisResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginGenesisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginGenesisResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginGenesisResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginBeginRequest. */
    interface IPluginBeginRequest {

        /** PluginBeginRequest height */
        height?: (number|Long|null);
    }

    /** Represents a PluginBeginRequest. */
    class PluginBeginRequest implements IPluginBeginRequest {

        /**
         * Constructs a new PluginBeginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginBeginRequest);

        /** PluginBeginRequest height. */
        public height: (number|Long);

        /**
         * Creates a new PluginBeginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginBeginRequest instance
         */
        public static create(properties?: types.IPluginBeginRequest): types.PluginBeginRequest;

        /**
         * Encodes the specified PluginBeginRequest message. Does not implicitly {@link types.PluginBeginRequest.verify|verify} messages.
         * @param message PluginBeginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginBeginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginBeginRequest message, length delimited. Does not implicitly {@link types.PluginBeginRequest.verify|verify} messages.
         * @param message PluginBeginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginBeginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginBeginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginBeginRequest;

        /**
         * Decodes a PluginBeginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginBeginRequest;

        /**
         * Verifies a PluginBeginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginBeginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginBeginRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginBeginRequest;

        /**
         * Creates a plain object from a PluginBeginRequest message. Also converts values to other types if specified.
         * @param message PluginBeginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginBeginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginBeginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginBeginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginBeginResponse. */
    interface IPluginBeginResponse {

        /** PluginBeginResponse events */
        events?: (types.IEvent[]|null);

        /** PluginBeginResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginBeginResponse. */
    class PluginBeginResponse implements IPluginBeginResponse {

        /**
         * Constructs a new PluginBeginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginBeginResponse);

        /** PluginBeginResponse events. */
        public events: types.IEvent[];

        /** PluginBeginResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginBeginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginBeginResponse instance
         */
        public static create(properties?: types.IPluginBeginResponse): types.PluginBeginResponse;

        /**
         * Encodes the specified PluginBeginResponse message. Does not implicitly {@link types.PluginBeginResponse.verify|verify} messages.
         * @param message PluginBeginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginBeginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginBeginResponse message, length delimited. Does not implicitly {@link types.PluginBeginResponse.verify|verify} messages.
         * @param message PluginBeginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginBeginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginBeginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginBeginResponse;

        /**
         * Decodes a PluginBeginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginBeginResponse;

        /**
         * Verifies a PluginBeginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginBeginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginBeginResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginBeginResponse;

        /**
         * Creates a plain object from a PluginBeginResponse message. Also converts values to other types if specified.
         * @param message PluginBeginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginBeginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginBeginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginBeginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginCheckRequest. */
    interface IPluginCheckRequest {

        /** PluginCheckRequest tx */
        tx?: (types.ITransaction|null);
    }

    /** Represents a PluginCheckRequest. */
    class PluginCheckRequest implements IPluginCheckRequest {

        /**
         * Constructs a new PluginCheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginCheckRequest);

        /** PluginCheckRequest tx. */
        public tx?: (types.ITransaction|null);

        /**
         * Creates a new PluginCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginCheckRequest instance
         */
        public static create(properties?: types.IPluginCheckRequest): types.PluginCheckRequest;

        /**
         * Encodes the specified PluginCheckRequest message. Does not implicitly {@link types.PluginCheckRequest.verify|verify} messages.
         * @param message PluginCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginCheckRequest message, length delimited. Does not implicitly {@link types.PluginCheckRequest.verify|verify} messages.
         * @param message PluginCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginCheckRequest;

        /**
         * Decodes a PluginCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginCheckRequest;

        /**
         * Verifies a PluginCheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginCheckRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginCheckRequest;

        /**
         * Creates a plain object from a PluginCheckRequest message. Also converts values to other types if specified.
         * @param message PluginCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginCheckRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginCheckResponse. */
    interface IPluginCheckResponse {

        /** PluginCheckResponse authorizedSigners */
        authorizedSigners?: (Uint8Array[]|null);

        /** PluginCheckResponse recipient */
        recipient?: (Uint8Array|null);

        /** PluginCheckResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginCheckResponse. */
    class PluginCheckResponse implements IPluginCheckResponse {

        /**
         * Constructs a new PluginCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginCheckResponse);

        /** PluginCheckResponse authorizedSigners. */
        public authorizedSigners: Uint8Array[];

        /** PluginCheckResponse recipient. */
        public recipient: Uint8Array;

        /** PluginCheckResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginCheckResponse instance
         */
        public static create(properties?: types.IPluginCheckResponse): types.PluginCheckResponse;

        /**
         * Encodes the specified PluginCheckResponse message. Does not implicitly {@link types.PluginCheckResponse.verify|verify} messages.
         * @param message PluginCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginCheckResponse message, length delimited. Does not implicitly {@link types.PluginCheckResponse.verify|verify} messages.
         * @param message PluginCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginCheckResponse;

        /**
         * Decodes a PluginCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginCheckResponse;

        /**
         * Verifies a PluginCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginCheckResponse;

        /**
         * Creates a plain object from a PluginCheckResponse message. Also converts values to other types if specified.
         * @param message PluginCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginCheckResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginDeliverRequest. */
    interface IPluginDeliverRequest {

        /** PluginDeliverRequest tx */
        tx?: (types.ITransaction|null);
    }

    /** Represents a PluginDeliverRequest. */
    class PluginDeliverRequest implements IPluginDeliverRequest {

        /**
         * Constructs a new PluginDeliverRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginDeliverRequest);

        /** PluginDeliverRequest tx. */
        public tx?: (types.ITransaction|null);

        /**
         * Creates a new PluginDeliverRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginDeliverRequest instance
         */
        public static create(properties?: types.IPluginDeliverRequest): types.PluginDeliverRequest;

        /**
         * Encodes the specified PluginDeliverRequest message. Does not implicitly {@link types.PluginDeliverRequest.verify|verify} messages.
         * @param message PluginDeliverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginDeliverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginDeliverRequest message, length delimited. Does not implicitly {@link types.PluginDeliverRequest.verify|verify} messages.
         * @param message PluginDeliverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginDeliverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginDeliverRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginDeliverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginDeliverRequest;

        /**
         * Decodes a PluginDeliverRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginDeliverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginDeliverRequest;

        /**
         * Verifies a PluginDeliverRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginDeliverRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginDeliverRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginDeliverRequest;

        /**
         * Creates a plain object from a PluginDeliverRequest message. Also converts values to other types if specified.
         * @param message PluginDeliverRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginDeliverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginDeliverRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginDeliverRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginDeliverResponse. */
    interface IPluginDeliverResponse {

        /** PluginDeliverResponse events */
        events?: (types.IEvent[]|null);

        /** PluginDeliverResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginDeliverResponse. */
    class PluginDeliverResponse implements IPluginDeliverResponse {

        /**
         * Constructs a new PluginDeliverResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginDeliverResponse);

        /** PluginDeliverResponse events. */
        public events: types.IEvent[];

        /** PluginDeliverResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginDeliverResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginDeliverResponse instance
         */
        public static create(properties?: types.IPluginDeliverResponse): types.PluginDeliverResponse;

        /**
         * Encodes the specified PluginDeliverResponse message. Does not implicitly {@link types.PluginDeliverResponse.verify|verify} messages.
         * @param message PluginDeliverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginDeliverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginDeliverResponse message, length delimited. Does not implicitly {@link types.PluginDeliverResponse.verify|verify} messages.
         * @param message PluginDeliverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginDeliverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginDeliverResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginDeliverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginDeliverResponse;

        /**
         * Decodes a PluginDeliverResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginDeliverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginDeliverResponse;

        /**
         * Verifies a PluginDeliverResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginDeliverResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginDeliverResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginDeliverResponse;

        /**
         * Creates a plain object from a PluginDeliverResponse message. Also converts values to other types if specified.
         * @param message PluginDeliverResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginDeliverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginDeliverResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginDeliverResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginEndRequest. */
    interface IPluginEndRequest {

        /** PluginEndRequest height */
        height?: (number|Long|null);

        /** PluginEndRequest proposerAddress */
        proposerAddress?: (Uint8Array|null);
    }

    /** Represents a PluginEndRequest. */
    class PluginEndRequest implements IPluginEndRequest {

        /**
         * Constructs a new PluginEndRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginEndRequest);

        /** PluginEndRequest height. */
        public height: (number|Long);

        /** PluginEndRequest proposerAddress. */
        public proposerAddress: Uint8Array;

        /**
         * Creates a new PluginEndRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginEndRequest instance
         */
        public static create(properties?: types.IPluginEndRequest): types.PluginEndRequest;

        /**
         * Encodes the specified PluginEndRequest message. Does not implicitly {@link types.PluginEndRequest.verify|verify} messages.
         * @param message PluginEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginEndRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginEndRequest message, length delimited. Does not implicitly {@link types.PluginEndRequest.verify|verify} messages.
         * @param message PluginEndRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginEndRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginEndRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginEndRequest;

        /**
         * Decodes a PluginEndRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginEndRequest;

        /**
         * Verifies a PluginEndRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginEndRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginEndRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginEndRequest;

        /**
         * Creates a plain object from a PluginEndRequest message. Also converts values to other types if specified.
         * @param message PluginEndRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginEndRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginEndRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginEndRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginEndResponse. */
    interface IPluginEndResponse {

        /** PluginEndResponse events */
        events?: (types.IEvent[]|null);

        /** PluginEndResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginEndResponse. */
    class PluginEndResponse implements IPluginEndResponse {

        /**
         * Constructs a new PluginEndResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginEndResponse);

        /** PluginEndResponse events. */
        public events: types.IEvent[];

        /** PluginEndResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginEndResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginEndResponse instance
         */
        public static create(properties?: types.IPluginEndResponse): types.PluginEndResponse;

        /**
         * Encodes the specified PluginEndResponse message. Does not implicitly {@link types.PluginEndResponse.verify|verify} messages.
         * @param message PluginEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginEndResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginEndResponse message, length delimited. Does not implicitly {@link types.PluginEndResponse.verify|verify} messages.
         * @param message PluginEndResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginEndResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginEndResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginEndResponse;

        /**
         * Decodes a PluginEndResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginEndResponse;

        /**
         * Verifies a PluginEndResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginEndResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginEndResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginEndResponse;

        /**
         * Creates a plain object from a PluginEndResponse message. Also converts values to other types if specified.
         * @param message PluginEndResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginEndResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginEndResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginEndResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginError. */
    interface IPluginError {

        /** PluginError code */
        code?: (number|Long|null);

        /** PluginError module */
        module?: (string|null);

        /** PluginError msg */
        msg?: (string|null);
    }

    /** Represents a PluginError. */
    class PluginError implements IPluginError {

        /**
         * Constructs a new PluginError.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginError);

        /** PluginError code. */
        public code: (number|Long);

        /** PluginError module. */
        public module: string;

        /** PluginError msg. */
        public msg: string;

        /**
         * Creates a new PluginError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginError instance
         */
        public static create(properties?: types.IPluginError): types.PluginError;

        /**
         * Encodes the specified PluginError message. Does not implicitly {@link types.PluginError.verify|verify} messages.
         * @param message PluginError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginError message, length delimited. Does not implicitly {@link types.PluginError.verify|verify} messages.
         * @param message PluginError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginError;

        /**
         * Decodes a PluginError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginError;

        /**
         * Verifies a PluginError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginError
         */
        public static fromObject(object: { [k: string]: any }): types.PluginError;

        /**
         * Creates a plain object from a PluginError message. Also converts values to other types if specified.
         * @param message PluginError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginStateReadRequest. */
    interface IPluginStateReadRequest {

        /** PluginStateReadRequest keys */
        keys?: (types.IPluginKeyRead[]|null);

        /** PluginStateReadRequest ranges */
        ranges?: (types.IPluginRangeRead[]|null);
    }

    /** Represents a PluginStateReadRequest. */
    class PluginStateReadRequest implements IPluginStateReadRequest {

        /**
         * Constructs a new PluginStateReadRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginStateReadRequest);

        /** PluginStateReadRequest keys. */
        public keys: types.IPluginKeyRead[];

        /** PluginStateReadRequest ranges. */
        public ranges: types.IPluginRangeRead[];

        /**
         * Creates a new PluginStateReadRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginStateReadRequest instance
         */
        public static create(properties?: types.IPluginStateReadRequest): types.PluginStateReadRequest;

        /**
         * Encodes the specified PluginStateReadRequest message. Does not implicitly {@link types.PluginStateReadRequest.verify|verify} messages.
         * @param message PluginStateReadRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginStateReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginStateReadRequest message, length delimited. Does not implicitly {@link types.PluginStateReadRequest.verify|verify} messages.
         * @param message PluginStateReadRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginStateReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginStateReadRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginStateReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginStateReadRequest;

        /**
         * Decodes a PluginStateReadRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginStateReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginStateReadRequest;

        /**
         * Verifies a PluginStateReadRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginStateReadRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginStateReadRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginStateReadRequest;

        /**
         * Creates a plain object from a PluginStateReadRequest message. Also converts values to other types if specified.
         * @param message PluginStateReadRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginStateReadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginStateReadRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginStateReadRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginKeyRead. */
    interface IPluginKeyRead {

        /** PluginKeyRead queryId */
        queryId?: (number|Long|null);

        /** PluginKeyRead key */
        key?: (Uint8Array|null);
    }

    /** Represents a PluginKeyRead. */
    class PluginKeyRead implements IPluginKeyRead {

        /**
         * Constructs a new PluginKeyRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginKeyRead);

        /** PluginKeyRead queryId. */
        public queryId: (number|Long);

        /** PluginKeyRead key. */
        public key: Uint8Array;

        /**
         * Creates a new PluginKeyRead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginKeyRead instance
         */
        public static create(properties?: types.IPluginKeyRead): types.PluginKeyRead;

        /**
         * Encodes the specified PluginKeyRead message. Does not implicitly {@link types.PluginKeyRead.verify|verify} messages.
         * @param message PluginKeyRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginKeyRead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginKeyRead message, length delimited. Does not implicitly {@link types.PluginKeyRead.verify|verify} messages.
         * @param message PluginKeyRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginKeyRead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginKeyRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginKeyRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginKeyRead;

        /**
         * Decodes a PluginKeyRead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginKeyRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginKeyRead;

        /**
         * Verifies a PluginKeyRead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginKeyRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginKeyRead
         */
        public static fromObject(object: { [k: string]: any }): types.PluginKeyRead;

        /**
         * Creates a plain object from a PluginKeyRead message. Also converts values to other types if specified.
         * @param message PluginKeyRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginKeyRead, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginKeyRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginKeyRead
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginRangeRead. */
    interface IPluginRangeRead {

        /** PluginRangeRead queryId */
        queryId?: (number|Long|null);

        /** PluginRangeRead prefix */
        prefix?: (Uint8Array|null);

        /** PluginRangeRead limit */
        limit?: (number|Long|null);

        /** PluginRangeRead reverse */
        reverse?: (boolean|null);
    }

    /** Represents a PluginRangeRead. */
    class PluginRangeRead implements IPluginRangeRead {

        /**
         * Constructs a new PluginRangeRead.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginRangeRead);

        /** PluginRangeRead queryId. */
        public queryId: (number|Long);

        /** PluginRangeRead prefix. */
        public prefix: Uint8Array;

        /** PluginRangeRead limit. */
        public limit: (number|Long);

        /** PluginRangeRead reverse. */
        public reverse: boolean;

        /**
         * Creates a new PluginRangeRead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginRangeRead instance
         */
        public static create(properties?: types.IPluginRangeRead): types.PluginRangeRead;

        /**
         * Encodes the specified PluginRangeRead message. Does not implicitly {@link types.PluginRangeRead.verify|verify} messages.
         * @param message PluginRangeRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginRangeRead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginRangeRead message, length delimited. Does not implicitly {@link types.PluginRangeRead.verify|verify} messages.
         * @param message PluginRangeRead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginRangeRead, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginRangeRead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginRangeRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginRangeRead;

        /**
         * Decodes a PluginRangeRead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginRangeRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginRangeRead;

        /**
         * Verifies a PluginRangeRead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginRangeRead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginRangeRead
         */
        public static fromObject(object: { [k: string]: any }): types.PluginRangeRead;

        /**
         * Creates a plain object from a PluginRangeRead message. Also converts values to other types if specified.
         * @param message PluginRangeRead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginRangeRead, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginRangeRead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginRangeRead
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginStateReadResponse. */
    interface IPluginStateReadResponse {

        /** PluginStateReadResponse results */
        results?: (types.IPluginReadResult[]|null);

        /** PluginStateReadResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginStateReadResponse. */
    class PluginStateReadResponse implements IPluginStateReadResponse {

        /**
         * Constructs a new PluginStateReadResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginStateReadResponse);

        /** PluginStateReadResponse results. */
        public results: types.IPluginReadResult[];

        /** PluginStateReadResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginStateReadResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginStateReadResponse instance
         */
        public static create(properties?: types.IPluginStateReadResponse): types.PluginStateReadResponse;

        /**
         * Encodes the specified PluginStateReadResponse message. Does not implicitly {@link types.PluginStateReadResponse.verify|verify} messages.
         * @param message PluginStateReadResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginStateReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginStateReadResponse message, length delimited. Does not implicitly {@link types.PluginStateReadResponse.verify|verify} messages.
         * @param message PluginStateReadResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginStateReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginStateReadResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginStateReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginStateReadResponse;

        /**
         * Decodes a PluginStateReadResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginStateReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginStateReadResponse;

        /**
         * Verifies a PluginStateReadResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginStateReadResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginStateReadResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginStateReadResponse;

        /**
         * Creates a plain object from a PluginStateReadResponse message. Also converts values to other types if specified.
         * @param message PluginStateReadResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginStateReadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginStateReadResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginStateReadResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginReadResult. */
    interface IPluginReadResult {

        /** PluginReadResult queryId */
        queryId?: (number|Long|null);

        /** PluginReadResult entries */
        entries?: (types.IPluginStateEntry[]|null);
    }

    /** Represents a PluginReadResult. */
    class PluginReadResult implements IPluginReadResult {

        /**
         * Constructs a new PluginReadResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginReadResult);

        /** PluginReadResult queryId. */
        public queryId: (number|Long);

        /** PluginReadResult entries. */
        public entries: types.IPluginStateEntry[];

        /**
         * Creates a new PluginReadResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginReadResult instance
         */
        public static create(properties?: types.IPluginReadResult): types.PluginReadResult;

        /**
         * Encodes the specified PluginReadResult message. Does not implicitly {@link types.PluginReadResult.verify|verify} messages.
         * @param message PluginReadResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginReadResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginReadResult message, length delimited. Does not implicitly {@link types.PluginReadResult.verify|verify} messages.
         * @param message PluginReadResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginReadResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginReadResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginReadResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginReadResult;

        /**
         * Decodes a PluginReadResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginReadResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginReadResult;

        /**
         * Verifies a PluginReadResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginReadResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginReadResult
         */
        public static fromObject(object: { [k: string]: any }): types.PluginReadResult;

        /**
         * Creates a plain object from a PluginReadResult message. Also converts values to other types if specified.
         * @param message PluginReadResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginReadResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginReadResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginReadResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginStateWriteRequest. */
    interface IPluginStateWriteRequest {

        /** PluginStateWriteRequest sets */
        sets?: (types.IPluginSetOp[]|null);

        /** PluginStateWriteRequest deletes */
        deletes?: (types.IPluginDeleteOp[]|null);
    }

    /** Represents a PluginStateWriteRequest. */
    class PluginStateWriteRequest implements IPluginStateWriteRequest {

        /**
         * Constructs a new PluginStateWriteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginStateWriteRequest);

        /** PluginStateWriteRequest sets. */
        public sets: types.IPluginSetOp[];

        /** PluginStateWriteRequest deletes. */
        public deletes: types.IPluginDeleteOp[];

        /**
         * Creates a new PluginStateWriteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginStateWriteRequest instance
         */
        public static create(properties?: types.IPluginStateWriteRequest): types.PluginStateWriteRequest;

        /**
         * Encodes the specified PluginStateWriteRequest message. Does not implicitly {@link types.PluginStateWriteRequest.verify|verify} messages.
         * @param message PluginStateWriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginStateWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginStateWriteRequest message, length delimited. Does not implicitly {@link types.PluginStateWriteRequest.verify|verify} messages.
         * @param message PluginStateWriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginStateWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginStateWriteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginStateWriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginStateWriteRequest;

        /**
         * Decodes a PluginStateWriteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginStateWriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginStateWriteRequest;

        /**
         * Verifies a PluginStateWriteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginStateWriteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginStateWriteRequest
         */
        public static fromObject(object: { [k: string]: any }): types.PluginStateWriteRequest;

        /**
         * Creates a plain object from a PluginStateWriteRequest message. Also converts values to other types if specified.
         * @param message PluginStateWriteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginStateWriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginStateWriteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginStateWriteRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginStateWriteResponse. */
    interface IPluginStateWriteResponse {

        /** PluginStateWriteResponse error */
        error?: (types.IPluginError|null);
    }

    /** Represents a PluginStateWriteResponse. */
    class PluginStateWriteResponse implements IPluginStateWriteResponse {

        /**
         * Constructs a new PluginStateWriteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginStateWriteResponse);

        /** PluginStateWriteResponse error. */
        public error?: (types.IPluginError|null);

        /**
         * Creates a new PluginStateWriteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginStateWriteResponse instance
         */
        public static create(properties?: types.IPluginStateWriteResponse): types.PluginStateWriteResponse;

        /**
         * Encodes the specified PluginStateWriteResponse message. Does not implicitly {@link types.PluginStateWriteResponse.verify|verify} messages.
         * @param message PluginStateWriteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginStateWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginStateWriteResponse message, length delimited. Does not implicitly {@link types.PluginStateWriteResponse.verify|verify} messages.
         * @param message PluginStateWriteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginStateWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginStateWriteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginStateWriteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginStateWriteResponse;

        /**
         * Decodes a PluginStateWriteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginStateWriteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginStateWriteResponse;

        /**
         * Verifies a PluginStateWriteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginStateWriteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginStateWriteResponse
         */
        public static fromObject(object: { [k: string]: any }): types.PluginStateWriteResponse;

        /**
         * Creates a plain object from a PluginStateWriteResponse message. Also converts values to other types if specified.
         * @param message PluginStateWriteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginStateWriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginStateWriteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginStateWriteResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginSetOp. */
    interface IPluginSetOp {

        /** PluginSetOp key */
        key?: (Uint8Array|null);

        /** PluginSetOp value */
        value?: (Uint8Array|null);
    }

    /** Represents a PluginSetOp. */
    class PluginSetOp implements IPluginSetOp {

        /**
         * Constructs a new PluginSetOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginSetOp);

        /** PluginSetOp key. */
        public key: Uint8Array;

        /** PluginSetOp value. */
        public value: Uint8Array;

        /**
         * Creates a new PluginSetOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginSetOp instance
         */
        public static create(properties?: types.IPluginSetOp): types.PluginSetOp;

        /**
         * Encodes the specified PluginSetOp message. Does not implicitly {@link types.PluginSetOp.verify|verify} messages.
         * @param message PluginSetOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginSetOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginSetOp message, length delimited. Does not implicitly {@link types.PluginSetOp.verify|verify} messages.
         * @param message PluginSetOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginSetOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginSetOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginSetOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginSetOp;

        /**
         * Decodes a PluginSetOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginSetOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginSetOp;

        /**
         * Verifies a PluginSetOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginSetOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginSetOp
         */
        public static fromObject(object: { [k: string]: any }): types.PluginSetOp;

        /**
         * Creates a plain object from a PluginSetOp message. Also converts values to other types if specified.
         * @param message PluginSetOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginSetOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginSetOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginSetOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginDeleteOp. */
    interface IPluginDeleteOp {

        /** PluginDeleteOp key */
        key?: (Uint8Array|null);
    }

    /** Represents a PluginDeleteOp. */
    class PluginDeleteOp implements IPluginDeleteOp {

        /**
         * Constructs a new PluginDeleteOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginDeleteOp);

        /** PluginDeleteOp key. */
        public key: Uint8Array;

        /**
         * Creates a new PluginDeleteOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginDeleteOp instance
         */
        public static create(properties?: types.IPluginDeleteOp): types.PluginDeleteOp;

        /**
         * Encodes the specified PluginDeleteOp message. Does not implicitly {@link types.PluginDeleteOp.verify|verify} messages.
         * @param message PluginDeleteOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginDeleteOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginDeleteOp message, length delimited. Does not implicitly {@link types.PluginDeleteOp.verify|verify} messages.
         * @param message PluginDeleteOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginDeleteOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginDeleteOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginDeleteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginDeleteOp;

        /**
         * Decodes a PluginDeleteOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginDeleteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginDeleteOp;

        /**
         * Verifies a PluginDeleteOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginDeleteOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginDeleteOp
         */
        public static fromObject(object: { [k: string]: any }): types.PluginDeleteOp;

        /**
         * Creates a plain object from a PluginDeleteOp message. Also converts values to other types if specified.
         * @param message PluginDeleteOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginDeleteOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginDeleteOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginDeleteOp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PluginStateEntry. */
    interface IPluginStateEntry {

        /** PluginStateEntry key */
        key?: (Uint8Array|null);

        /** PluginStateEntry value */
        value?: (Uint8Array|null);
    }

    /** Represents a PluginStateEntry. */
    class PluginStateEntry implements IPluginStateEntry {

        /**
         * Constructs a new PluginStateEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPluginStateEntry);

        /** PluginStateEntry key. */
        public key: Uint8Array;

        /** PluginStateEntry value. */
        public value: Uint8Array;

        /**
         * Creates a new PluginStateEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PluginStateEntry instance
         */
        public static create(properties?: types.IPluginStateEntry): types.PluginStateEntry;

        /**
         * Encodes the specified PluginStateEntry message. Does not implicitly {@link types.PluginStateEntry.verify|verify} messages.
         * @param message PluginStateEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPluginStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PluginStateEntry message, length delimited. Does not implicitly {@link types.PluginStateEntry.verify|verify} messages.
         * @param message PluginStateEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPluginStateEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PluginStateEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PluginStateEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PluginStateEntry;

        /**
         * Decodes a PluginStateEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PluginStateEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PluginStateEntry;

        /**
         * Verifies a PluginStateEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PluginStateEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PluginStateEntry
         */
        public static fromObject(object: { [k: string]: any }): types.PluginStateEntry;

        /**
         * Creates a plain object from a PluginStateEntry message. Also converts values to other types if specified.
         * @param message PluginStateEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PluginStateEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PluginStateEntry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PluginStateEntry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction messageType */
        messageType?: (string|null);

        /** Transaction msg */
        msg?: (google.protobuf.IAny|null);

        /** Transaction signature */
        signature?: (types.ISignature|null);

        /** Transaction createdHeight */
        createdHeight?: (number|Long|null);

        /** Transaction time */
        time?: (number|Long|null);

        /** Transaction fee */
        fee?: (number|Long|null);

        /** Transaction memo */
        memo?: (string|null);

        /** Transaction networkId */
        networkId?: (number|Long|null);

        /** Transaction chainId */
        chainId?: (number|Long|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ITransaction);

        /** Transaction messageType. */
        public messageType: string;

        /** Transaction msg. */
        public msg?: (google.protobuf.IAny|null);

        /** Transaction signature. */
        public signature?: (types.ISignature|null);

        /** Transaction createdHeight. */
        public createdHeight: (number|Long);

        /** Transaction time. */
        public time: (number|Long);

        /** Transaction fee. */
        public fee: (number|Long);

        /** Transaction memo. */
        public memo: string;

        /** Transaction networkId. */
        public networkId: (number|Long);

        /** Transaction chainId. */
        public chainId: (number|Long);

        /**
         * Creates a new Transaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transaction instance
         */
        public static create(properties?: types.ITransaction): types.Transaction;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link types.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link types.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): types.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transaction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageSend. */
    interface IMessageSend {

        /** MessageSend fromAddress */
        fromAddress?: (Uint8Array|null);

        /** MessageSend toAddress */
        toAddress?: (Uint8Array|null);

        /** MessageSend amount */
        amount?: (number|Long|null);
    }

    /** Represents a MessageSend. */
    class MessageSend implements IMessageSend {

        /**
         * Constructs a new MessageSend.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageSend);

        /** MessageSend fromAddress. */
        public fromAddress: Uint8Array;

        /** MessageSend toAddress. */
        public toAddress: Uint8Array;

        /** MessageSend amount. */
        public amount: (number|Long);

        /**
         * Creates a new MessageSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageSend instance
         */
        public static create(properties?: types.IMessageSend): types.MessageSend;

        /**
         * Encodes the specified MessageSend message. Does not implicitly {@link types.MessageSend.verify|verify} messages.
         * @param message MessageSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageSend message, length delimited. Does not implicitly {@link types.MessageSend.verify|verify} messages.
         * @param message MessageSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageSend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageSend;

        /**
         * Decodes a MessageSend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageSend;

        /**
         * Verifies a MessageSend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageSend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageSend
         */
        public static fromObject(object: { [k: string]: any }): types.MessageSend;

        /**
         * Creates a plain object from a MessageSend message. Also converts values to other types if specified.
         * @param message MessageSend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageSend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageRegisterProfile. */
    interface IMessageRegisterProfile {

        /** MessageRegisterProfile ownerAddress */
        ownerAddress?: (Uint8Array|null);

        /** MessageRegisterProfile handle */
        handle?: (string|null);

        /** MessageRegisterProfile bio */
        bio?: (string|null);
    }

    /** Represents a MessageRegisterProfile. */
    class MessageRegisterProfile implements IMessageRegisterProfile {

        /**
         * Constructs a new MessageRegisterProfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageRegisterProfile);

        /** MessageRegisterProfile ownerAddress. */
        public ownerAddress: Uint8Array;

        /** MessageRegisterProfile handle. */
        public handle: string;

        /** MessageRegisterProfile bio. */
        public bio: string;

        /**
         * Creates a new MessageRegisterProfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRegisterProfile instance
         */
        public static create(properties?: types.IMessageRegisterProfile): types.MessageRegisterProfile;

        /**
         * Encodes the specified MessageRegisterProfile message. Does not implicitly {@link types.MessageRegisterProfile.verify|verify} messages.
         * @param message MessageRegisterProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageRegisterProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRegisterProfile message, length delimited. Does not implicitly {@link types.MessageRegisterProfile.verify|verify} messages.
         * @param message MessageRegisterProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageRegisterProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRegisterProfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRegisterProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageRegisterProfile;

        /**
         * Decodes a MessageRegisterProfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRegisterProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageRegisterProfile;

        /**
         * Verifies a MessageRegisterProfile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageRegisterProfile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageRegisterProfile
         */
        public static fromObject(object: { [k: string]: any }): types.MessageRegisterProfile;

        /**
         * Creates a plain object from a MessageRegisterProfile message. Also converts values to other types if specified.
         * @param message MessageRegisterProfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageRegisterProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageRegisterProfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageRegisterProfile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageGiveVibe. */
    interface IMessageGiveVibe {

        /** MessageGiveVibe fromAddress */
        fromAddress?: (Uint8Array|null);

        /** MessageGiveVibe toAddress */
        toAddress?: (Uint8Array|null);

        /** MessageGiveVibe amount */
        amount?: (number|Long|null);

        /** MessageGiveVibe tag */
        tag?: (string|null);

        /** MessageGiveVibe note */
        note?: (string|null);
    }

    /** Represents a MessageGiveVibe. */
    class MessageGiveVibe implements IMessageGiveVibe {

        /**
         * Constructs a new MessageGiveVibe.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageGiveVibe);

        /** MessageGiveVibe fromAddress. */
        public fromAddress: Uint8Array;

        /** MessageGiveVibe toAddress. */
        public toAddress: Uint8Array;

        /** MessageGiveVibe amount. */
        public amount: (number|Long);

        /** MessageGiveVibe tag. */
        public tag: string;

        /** MessageGiveVibe note. */
        public note: string;

        /**
         * Creates a new MessageGiveVibe instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageGiveVibe instance
         */
        public static create(properties?: types.IMessageGiveVibe): types.MessageGiveVibe;

        /**
         * Encodes the specified MessageGiveVibe message. Does not implicitly {@link types.MessageGiveVibe.verify|verify} messages.
         * @param message MessageGiveVibe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageGiveVibe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageGiveVibe message, length delimited. Does not implicitly {@link types.MessageGiveVibe.verify|verify} messages.
         * @param message MessageGiveVibe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageGiveVibe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageGiveVibe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageGiveVibe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageGiveVibe;

        /**
         * Decodes a MessageGiveVibe message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageGiveVibe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageGiveVibe;

        /**
         * Verifies a MessageGiveVibe message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageGiveVibe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageGiveVibe
         */
        public static fromObject(object: { [k: string]: any }): types.MessageGiveVibe;

        /**
         * Creates a plain object from a MessageGiveVibe message. Also converts values to other types if specified.
         * @param message MessageGiveVibe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageGiveVibe, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageGiveVibe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageGiveVibe
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageCreateGuild. */
    interface IMessageCreateGuild {

        /** MessageCreateGuild creatorAddress */
        creatorAddress?: (Uint8Array|null);

        /** MessageCreateGuild slug */
        slug?: (string|null);

        /** MessageCreateGuild name */
        name?: (string|null);

        /** MessageCreateGuild description */
        description?: (string|null);
    }

    /** Represents a MessageCreateGuild. */
    class MessageCreateGuild implements IMessageCreateGuild {

        /**
         * Constructs a new MessageCreateGuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageCreateGuild);

        /** MessageCreateGuild creatorAddress. */
        public creatorAddress: Uint8Array;

        /** MessageCreateGuild slug. */
        public slug: string;

        /** MessageCreateGuild name. */
        public name: string;

        /** MessageCreateGuild description. */
        public description: string;

        /**
         * Creates a new MessageCreateGuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageCreateGuild instance
         */
        public static create(properties?: types.IMessageCreateGuild): types.MessageCreateGuild;

        /**
         * Encodes the specified MessageCreateGuild message. Does not implicitly {@link types.MessageCreateGuild.verify|verify} messages.
         * @param message MessageCreateGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageCreateGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageCreateGuild message, length delimited. Does not implicitly {@link types.MessageCreateGuild.verify|verify} messages.
         * @param message MessageCreateGuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageCreateGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageCreateGuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageCreateGuild;

        /**
         * Decodes a MessageCreateGuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageCreateGuild;

        /**
         * Verifies a MessageCreateGuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageCreateGuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageCreateGuild
         */
        public static fromObject(object: { [k: string]: any }): types.MessageCreateGuild;

        /**
         * Creates a plain object from a MessageCreateGuild message. Also converts values to other types if specified.
         * @param message MessageCreateGuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageCreateGuild, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageCreateGuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageCreateGuild
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessagePostQuest. */
    interface IMessagePostQuest {

        /** MessagePostQuest creatorAddress */
        creatorAddress?: (Uint8Array|null);

        /** MessagePostQuest guildId */
        guildId?: (number|Long|null);

        /** MessagePostQuest title */
        title?: (string|null);

        /** MessagePostQuest tag */
        tag?: (string|null);

        /** MessagePostQuest rewardRep */
        rewardRep?: (number|Long|null);
    }

    /** Represents a MessagePostQuest. */
    class MessagePostQuest implements IMessagePostQuest {

        /**
         * Constructs a new MessagePostQuest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessagePostQuest);

        /** MessagePostQuest creatorAddress. */
        public creatorAddress: Uint8Array;

        /** MessagePostQuest guildId. */
        public guildId: (number|Long);

        /** MessagePostQuest title. */
        public title: string;

        /** MessagePostQuest tag. */
        public tag: string;

        /** MessagePostQuest rewardRep. */
        public rewardRep: (number|Long);

        /**
         * Creates a new MessagePostQuest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessagePostQuest instance
         */
        public static create(properties?: types.IMessagePostQuest): types.MessagePostQuest;

        /**
         * Encodes the specified MessagePostQuest message. Does not implicitly {@link types.MessagePostQuest.verify|verify} messages.
         * @param message MessagePostQuest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessagePostQuest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessagePostQuest message, length delimited. Does not implicitly {@link types.MessagePostQuest.verify|verify} messages.
         * @param message MessagePostQuest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessagePostQuest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessagePostQuest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessagePostQuest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessagePostQuest;

        /**
         * Decodes a MessagePostQuest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessagePostQuest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessagePostQuest;

        /**
         * Verifies a MessagePostQuest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessagePostQuest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessagePostQuest
         */
        public static fromObject(object: { [k: string]: any }): types.MessagePostQuest;

        /**
         * Creates a plain object from a MessagePostQuest message. Also converts values to other types if specified.
         * @param message MessagePostQuest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessagePostQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessagePostQuest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessagePostQuest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageSubmitProof. */
    interface IMessageSubmitProof {

        /** MessageSubmitProof contributorAddress */
        contributorAddress?: (Uint8Array|null);

        /** MessageSubmitProof guildId */
        guildId?: (number|Long|null);

        /** MessageSubmitProof questId */
        questId?: (number|Long|null);

        /** MessageSubmitProof proofUri */
        proofUri?: (string|null);

        /** MessageSubmitProof note */
        note?: (string|null);
    }

    /** Represents a MessageSubmitProof. */
    class MessageSubmitProof implements IMessageSubmitProof {

        /**
         * Constructs a new MessageSubmitProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageSubmitProof);

        /** MessageSubmitProof contributorAddress. */
        public contributorAddress: Uint8Array;

        /** MessageSubmitProof guildId. */
        public guildId: (number|Long);

        /** MessageSubmitProof questId. */
        public questId: (number|Long);

        /** MessageSubmitProof proofUri. */
        public proofUri: string;

        /** MessageSubmitProof note. */
        public note: string;

        /**
         * Creates a new MessageSubmitProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageSubmitProof instance
         */
        public static create(properties?: types.IMessageSubmitProof): types.MessageSubmitProof;

        /**
         * Encodes the specified MessageSubmitProof message. Does not implicitly {@link types.MessageSubmitProof.verify|verify} messages.
         * @param message MessageSubmitProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageSubmitProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageSubmitProof message, length delimited. Does not implicitly {@link types.MessageSubmitProof.verify|verify} messages.
         * @param message MessageSubmitProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageSubmitProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageSubmitProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageSubmitProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageSubmitProof;

        /**
         * Decodes a MessageSubmitProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageSubmitProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageSubmitProof;

        /**
         * Verifies a MessageSubmitProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageSubmitProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageSubmitProof
         */
        public static fromObject(object: { [k: string]: any }): types.MessageSubmitProof;

        /**
         * Creates a plain object from a MessageSubmitProof message. Also converts values to other types if specified.
         * @param message MessageSubmitProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageSubmitProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageSubmitProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageSubmitProof
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageAttestContribution. */
    interface IMessageAttestContribution {

        /** MessageAttestContribution reviewerAddress */
        reviewerAddress?: (Uint8Array|null);

        /** MessageAttestContribution proofId */
        proofId?: (number|Long|null);

        /** MessageAttestContribution amount */
        amount?: (number|Long|null);

        /** MessageAttestContribution note */
        note?: (string|null);
    }

    /** Represents a MessageAttestContribution. */
    class MessageAttestContribution implements IMessageAttestContribution {

        /**
         * Constructs a new MessageAttestContribution.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageAttestContribution);

        /** MessageAttestContribution reviewerAddress. */
        public reviewerAddress: Uint8Array;

        /** MessageAttestContribution proofId. */
        public proofId: (number|Long);

        /** MessageAttestContribution amount. */
        public amount: (number|Long);

        /** MessageAttestContribution note. */
        public note: string;

        /**
         * Creates a new MessageAttestContribution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageAttestContribution instance
         */
        public static create(properties?: types.IMessageAttestContribution): types.MessageAttestContribution;

        /**
         * Encodes the specified MessageAttestContribution message. Does not implicitly {@link types.MessageAttestContribution.verify|verify} messages.
         * @param message MessageAttestContribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageAttestContribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageAttestContribution message, length delimited. Does not implicitly {@link types.MessageAttestContribution.verify|verify} messages.
         * @param message MessageAttestContribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageAttestContribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageAttestContribution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageAttestContribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageAttestContribution;

        /**
         * Decodes a MessageAttestContribution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageAttestContribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageAttestContribution;

        /**
         * Verifies a MessageAttestContribution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageAttestContribution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageAttestContribution
         */
        public static fromObject(object: { [k: string]: any }): types.MessageAttestContribution;

        /**
         * Creates a plain object from a MessageAttestContribution message. Also converts values to other types if specified.
         * @param message MessageAttestContribution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageAttestContribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageAttestContribution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageAttestContribution
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageIssueBadge. */
    interface IMessageIssueBadge {

        /** MessageIssueBadge issuerAddress */
        issuerAddress?: (Uint8Array|null);

        /** MessageIssueBadge toAddress */
        toAddress?: (Uint8Array|null);

        /** MessageIssueBadge guildId */
        guildId?: (number|Long|null);

        /** MessageIssueBadge badgeName */
        badgeName?: (string|null);

        /** MessageIssueBadge badgeUri */
        badgeUri?: (string|null);
    }

    /** Represents a MessageIssueBadge. */
    class MessageIssueBadge implements IMessageIssueBadge {

        /**
         * Constructs a new MessageIssueBadge.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageIssueBadge);

        /** MessageIssueBadge issuerAddress. */
        public issuerAddress: Uint8Array;

        /** MessageIssueBadge toAddress. */
        public toAddress: Uint8Array;

        /** MessageIssueBadge guildId. */
        public guildId: (number|Long);

        /** MessageIssueBadge badgeName. */
        public badgeName: string;

        /** MessageIssueBadge badgeUri. */
        public badgeUri: string;

        /**
         * Creates a new MessageIssueBadge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageIssueBadge instance
         */
        public static create(properties?: types.IMessageIssueBadge): types.MessageIssueBadge;

        /**
         * Encodes the specified MessageIssueBadge message. Does not implicitly {@link types.MessageIssueBadge.verify|verify} messages.
         * @param message MessageIssueBadge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageIssueBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageIssueBadge message, length delimited. Does not implicitly {@link types.MessageIssueBadge.verify|verify} messages.
         * @param message MessageIssueBadge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageIssueBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageIssueBadge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageIssueBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageIssueBadge;

        /**
         * Decodes a MessageIssueBadge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageIssueBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageIssueBadge;

        /**
         * Verifies a MessageIssueBadge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageIssueBadge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageIssueBadge
         */
        public static fromObject(object: { [k: string]: any }): types.MessageIssueBadge;

        /**
         * Creates a plain object from a MessageIssueBadge message. Also converts values to other types if specified.
         * @param message MessageIssueBadge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageIssueBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageIssueBadge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageIssueBadge
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageCreateGate. */
    interface IMessageCreateGate {

        /** MessageCreateGate creatorAddress */
        creatorAddress?: (Uint8Array|null);

        /** MessageCreateGate guildId */
        guildId?: (number|Long|null);

        /** MessageCreateGate gateName */
        gateName?: (string|null);

        /** MessageCreateGate requiredRep */
        requiredRep?: (number|Long|null);

        /** MessageCreateGate requiredBadge */
        requiredBadge?: (string|null);
    }

    /** Represents a MessageCreateGate. */
    class MessageCreateGate implements IMessageCreateGate {

        /**
         * Constructs a new MessageCreateGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageCreateGate);

        /** MessageCreateGate creatorAddress. */
        public creatorAddress: Uint8Array;

        /** MessageCreateGate guildId. */
        public guildId: (number|Long);

        /** MessageCreateGate gateName. */
        public gateName: string;

        /** MessageCreateGate requiredRep. */
        public requiredRep: (number|Long);

        /** MessageCreateGate requiredBadge. */
        public requiredBadge: string;

        /**
         * Creates a new MessageCreateGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageCreateGate instance
         */
        public static create(properties?: types.IMessageCreateGate): types.MessageCreateGate;

        /**
         * Encodes the specified MessageCreateGate message. Does not implicitly {@link types.MessageCreateGate.verify|verify} messages.
         * @param message MessageCreateGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageCreateGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageCreateGate message, length delimited. Does not implicitly {@link types.MessageCreateGate.verify|verify} messages.
         * @param message MessageCreateGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageCreateGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageCreateGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageCreateGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageCreateGate;

        /**
         * Decodes a MessageCreateGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageCreateGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageCreateGate;

        /**
         * Verifies a MessageCreateGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageCreateGate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageCreateGate
         */
        public static fromObject(object: { [k: string]: any }): types.MessageCreateGate;

        /**
         * Creates a plain object from a MessageCreateGate message. Also converts values to other types if specified.
         * @param message MessageCreateGate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageCreateGate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageCreateGate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageCreateGate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageCheckGateAccess. */
    interface IMessageCheckGateAccess {

        /** MessageCheckGateAccess visitorAddress */
        visitorAddress?: (Uint8Array|null);

        /** MessageCheckGateAccess gateId */
        gateId?: (number|Long|null);
    }

    /** Represents a MessageCheckGateAccess. */
    class MessageCheckGateAccess implements IMessageCheckGateAccess {

        /**
         * Constructs a new MessageCheckGateAccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageCheckGateAccess);

        /** MessageCheckGateAccess visitorAddress. */
        public visitorAddress: Uint8Array;

        /** MessageCheckGateAccess gateId. */
        public gateId: (number|Long);

        /**
         * Creates a new MessageCheckGateAccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageCheckGateAccess instance
         */
        public static create(properties?: types.IMessageCheckGateAccess): types.MessageCheckGateAccess;

        /**
         * Encodes the specified MessageCheckGateAccess message. Does not implicitly {@link types.MessageCheckGateAccess.verify|verify} messages.
         * @param message MessageCheckGateAccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageCheckGateAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageCheckGateAccess message, length delimited. Does not implicitly {@link types.MessageCheckGateAccess.verify|verify} messages.
         * @param message MessageCheckGateAccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageCheckGateAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageCheckGateAccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageCheckGateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageCheckGateAccess;

        /**
         * Decodes a MessageCheckGateAccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageCheckGateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageCheckGateAccess;

        /**
         * Verifies a MessageCheckGateAccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageCheckGateAccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageCheckGateAccess
         */
        public static fromObject(object: { [k: string]: any }): types.MessageCheckGateAccess;

        /**
         * Creates a plain object from a MessageCheckGateAccess message. Also converts values to other types if specified.
         * @param message MessageCheckGateAccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageCheckGateAccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageCheckGateAccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageCheckGateAccess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MessageCastReputationVote. */
    interface IMessageCastReputationVote {

        /** MessageCastReputationVote voterAddress */
        voterAddress?: (Uint8Array|null);

        /** MessageCastReputationVote guildId */
        guildId?: (number|Long|null);

        /** MessageCastReputationVote proposalId */
        proposalId?: (string|null);

        /** MessageCastReputationVote choice */
        choice?: (string|null);
    }

    /** Represents a MessageCastReputationVote. */
    class MessageCastReputationVote implements IMessageCastReputationVote {

        /**
         * Constructs a new MessageCastReputationVote.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IMessageCastReputationVote);

        /** MessageCastReputationVote voterAddress. */
        public voterAddress: Uint8Array;

        /** MessageCastReputationVote guildId. */
        public guildId: (number|Long);

        /** MessageCastReputationVote proposalId. */
        public proposalId: string;

        /** MessageCastReputationVote choice. */
        public choice: string;

        /**
         * Creates a new MessageCastReputationVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageCastReputationVote instance
         */
        public static create(properties?: types.IMessageCastReputationVote): types.MessageCastReputationVote;

        /**
         * Encodes the specified MessageCastReputationVote message. Does not implicitly {@link types.MessageCastReputationVote.verify|verify} messages.
         * @param message MessageCastReputationVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IMessageCastReputationVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageCastReputationVote message, length delimited. Does not implicitly {@link types.MessageCastReputationVote.verify|verify} messages.
         * @param message MessageCastReputationVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IMessageCastReputationVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageCastReputationVote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageCastReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.MessageCastReputationVote;

        /**
         * Decodes a MessageCastReputationVote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageCastReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.MessageCastReputationVote;

        /**
         * Verifies a MessageCastReputationVote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageCastReputationVote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageCastReputationVote
         */
        public static fromObject(object: { [k: string]: any }): types.MessageCastReputationVote;

        /**
         * Creates a plain object from a MessageCastReputationVote message. Also converts values to other types if specified.
         * @param message MessageCastReputationVote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.MessageCastReputationVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageCastReputationVote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MessageCastReputationVote
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SocialProfile. */
    interface ISocialProfile {

        /** SocialProfile ownerAddress */
        ownerAddress?: (Uint8Array|null);

        /** SocialProfile handle */
        handle?: (string|null);

        /** SocialProfile bio */
        bio?: (string|null);

        /** SocialProfile vibeScore */
        vibeScore?: (number|Long|null);

        /** SocialProfile vibesGiven */
        vibesGiven?: (number|Long|null);

        /** SocialProfile vibesReceived */
        vibesReceived?: (number|Long|null);

        /** SocialProfile createdHeight */
        createdHeight?: (number|Long|null);

        /** SocialProfile updatedHeight */
        updatedHeight?: (number|Long|null);
    }

    /** Represents a SocialProfile. */
    class SocialProfile implements ISocialProfile {

        /**
         * Constructs a new SocialProfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISocialProfile);

        /** SocialProfile ownerAddress. */
        public ownerAddress: Uint8Array;

        /** SocialProfile handle. */
        public handle: string;

        /** SocialProfile bio. */
        public bio: string;

        /** SocialProfile vibeScore. */
        public vibeScore: (number|Long);

        /** SocialProfile vibesGiven. */
        public vibesGiven: (number|Long);

        /** SocialProfile vibesReceived. */
        public vibesReceived: (number|Long);

        /** SocialProfile createdHeight. */
        public createdHeight: (number|Long);

        /** SocialProfile updatedHeight. */
        public updatedHeight: (number|Long);

        /**
         * Creates a new SocialProfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SocialProfile instance
         */
        public static create(properties?: types.ISocialProfile): types.SocialProfile;

        /**
         * Encodes the specified SocialProfile message. Does not implicitly {@link types.SocialProfile.verify|verify} messages.
         * @param message SocialProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISocialProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SocialProfile message, length delimited. Does not implicitly {@link types.SocialProfile.verify|verify} messages.
         * @param message SocialProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISocialProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SocialProfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SocialProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.SocialProfile;

        /**
         * Decodes a SocialProfile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SocialProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.SocialProfile;

        /**
         * Verifies a SocialProfile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SocialProfile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SocialProfile
         */
        public static fromObject(object: { [k: string]: any }): types.SocialProfile;

        /**
         * Creates a plain object from a SocialProfile message. Also converts values to other types if specified.
         * @param message SocialProfile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.SocialProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SocialProfile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SocialProfile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VibeAttestation. */
    interface IVibeAttestation {

        /** VibeAttestation id */
        id?: (number|Long|null);

        /** VibeAttestation fromAddress */
        fromAddress?: (Uint8Array|null);

        /** VibeAttestation toAddress */
        toAddress?: (Uint8Array|null);

        /** VibeAttestation amount */
        amount?: (number|Long|null);

        /** VibeAttestation tag */
        tag?: (string|null);

        /** VibeAttestation note */
        note?: (string|null);

        /** VibeAttestation height */
        height?: (number|Long|null);
    }

    /** Represents a VibeAttestation. */
    class VibeAttestation implements IVibeAttestation {

        /**
         * Constructs a new VibeAttestation.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVibeAttestation);

        /** VibeAttestation id. */
        public id: (number|Long);

        /** VibeAttestation fromAddress. */
        public fromAddress: Uint8Array;

        /** VibeAttestation toAddress. */
        public toAddress: Uint8Array;

        /** VibeAttestation amount. */
        public amount: (number|Long);

        /** VibeAttestation tag. */
        public tag: string;

        /** VibeAttestation note. */
        public note: string;

        /** VibeAttestation height. */
        public height: (number|Long);

        /**
         * Creates a new VibeAttestation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VibeAttestation instance
         */
        public static create(properties?: types.IVibeAttestation): types.VibeAttestation;

        /**
         * Encodes the specified VibeAttestation message. Does not implicitly {@link types.VibeAttestation.verify|verify} messages.
         * @param message VibeAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVibeAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VibeAttestation message, length delimited. Does not implicitly {@link types.VibeAttestation.verify|verify} messages.
         * @param message VibeAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVibeAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VibeAttestation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VibeAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VibeAttestation;

        /**
         * Decodes a VibeAttestation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VibeAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VibeAttestation;

        /**
         * Verifies a VibeAttestation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VibeAttestation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VibeAttestation
         */
        public static fromObject(object: { [k: string]: any }): types.VibeAttestation;

        /**
         * Creates a plain object from a VibeAttestation message. Also converts values to other types if specified.
         * @param message VibeAttestation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VibeAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VibeAttestation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VibeAttestation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VibeCounter. */
    interface IVibeCounter {

        /** VibeCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a VibeCounter. */
    class VibeCounter implements IVibeCounter {

        /**
         * Constructs a new VibeCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVibeCounter);

        /** VibeCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new VibeCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VibeCounter instance
         */
        public static create(properties?: types.IVibeCounter): types.VibeCounter;

        /**
         * Encodes the specified VibeCounter message. Does not implicitly {@link types.VibeCounter.verify|verify} messages.
         * @param message VibeCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVibeCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VibeCounter message, length delimited. Does not implicitly {@link types.VibeCounter.verify|verify} messages.
         * @param message VibeCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVibeCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VibeCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VibeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VibeCounter;

        /**
         * Decodes a VibeCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VibeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VibeCounter;

        /**
         * Verifies a VibeCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VibeCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VibeCounter
         */
        public static fromObject(object: { [k: string]: any }): types.VibeCounter;

        /**
         * Creates a plain object from a VibeCounter message. Also converts values to other types if specified.
         * @param message VibeCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VibeCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VibeCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VibeCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Guild. */
    interface IGuild {

        /** Guild id */
        id?: (number|Long|null);

        /** Guild creatorAddress */
        creatorAddress?: (Uint8Array|null);

        /** Guild slug */
        slug?: (string|null);

        /** Guild name */
        name?: (string|null);

        /** Guild description */
        description?: (string|null);

        /** Guild memberCount */
        memberCount?: (number|Long|null);

        /** Guild totalReputation */
        totalReputation?: (number|Long|null);

        /** Guild createdHeight */
        createdHeight?: (number|Long|null);
    }

    /** Represents a Guild. */
    class Guild implements IGuild {

        /**
         * Constructs a new Guild.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGuild);

        /** Guild id. */
        public id: (number|Long);

        /** Guild creatorAddress. */
        public creatorAddress: Uint8Array;

        /** Guild slug. */
        public slug: string;

        /** Guild name. */
        public name: string;

        /** Guild description. */
        public description: string;

        /** Guild memberCount. */
        public memberCount: (number|Long);

        /** Guild totalReputation. */
        public totalReputation: (number|Long);

        /** Guild createdHeight. */
        public createdHeight: (number|Long);

        /**
         * Creates a new Guild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Guild instance
         */
        public static create(properties?: types.IGuild): types.Guild;

        /**
         * Encodes the specified Guild message. Does not implicitly {@link types.Guild.verify|verify} messages.
         * @param message Guild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Guild message, length delimited. Does not implicitly {@link types.Guild.verify|verify} messages.
         * @param message Guild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Guild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Guild;

        /**
         * Decodes a Guild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Guild;

        /**
         * Verifies a Guild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Guild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Guild
         */
        public static fromObject(object: { [k: string]: any }): types.Guild;

        /**
         * Creates a plain object from a Guild message. Also converts values to other types if specified.
         * @param message Guild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Guild, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Guild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Guild
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildCounter. */
    interface IGuildCounter {

        /** GuildCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a GuildCounter. */
    class GuildCounter implements IGuildCounter {

        /**
         * Constructs a new GuildCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGuildCounter);

        /** GuildCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new GuildCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildCounter instance
         */
        public static create(properties?: types.IGuildCounter): types.GuildCounter;

        /**
         * Encodes the specified GuildCounter message. Does not implicitly {@link types.GuildCounter.verify|verify} messages.
         * @param message GuildCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGuildCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildCounter message, length delimited. Does not implicitly {@link types.GuildCounter.verify|verify} messages.
         * @param message GuildCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGuildCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GuildCounter;

        /**
         * Decodes a GuildCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GuildCounter;

        /**
         * Verifies a GuildCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildCounter
         */
        public static fromObject(object: { [k: string]: any }): types.GuildCounter;

        /**
         * Creates a plain object from a GuildCounter message. Also converts values to other types if specified.
         * @param message GuildCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GuildCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Quest. */
    interface IQuest {

        /** Quest id */
        id?: (number|Long|null);

        /** Quest guildId */
        guildId?: (number|Long|null);

        /** Quest creatorAddress */
        creatorAddress?: (Uint8Array|null);

        /** Quest title */
        title?: (string|null);

        /** Quest tag */
        tag?: (string|null);

        /** Quest rewardRep */
        rewardRep?: (number|Long|null);

        /** Quest open */
        open?: (boolean|null);

        /** Quest createdHeight */
        createdHeight?: (number|Long|null);
    }

    /** Represents a Quest. */
    class Quest implements IQuest {

        /**
         * Constructs a new Quest.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IQuest);

        /** Quest id. */
        public id: (number|Long);

        /** Quest guildId. */
        public guildId: (number|Long);

        /** Quest creatorAddress. */
        public creatorAddress: Uint8Array;

        /** Quest title. */
        public title: string;

        /** Quest tag. */
        public tag: string;

        /** Quest rewardRep. */
        public rewardRep: (number|Long);

        /** Quest open. */
        public open: boolean;

        /** Quest createdHeight. */
        public createdHeight: (number|Long);

        /**
         * Creates a new Quest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quest instance
         */
        public static create(properties?: types.IQuest): types.Quest;

        /**
         * Encodes the specified Quest message. Does not implicitly {@link types.Quest.verify|verify} messages.
         * @param message Quest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IQuest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Quest message, length delimited. Does not implicitly {@link types.Quest.verify|verify} messages.
         * @param message Quest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IQuest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Quest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Quest;

        /**
         * Decodes a Quest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Quest;

        /**
         * Verifies a Quest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Quest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Quest
         */
        public static fromObject(object: { [k: string]: any }): types.Quest;

        /**
         * Creates a plain object from a Quest message. Also converts values to other types if specified.
         * @param message Quest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Quest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Quest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Quest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a QuestCounter. */
    interface IQuestCounter {

        /** QuestCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a QuestCounter. */
    class QuestCounter implements IQuestCounter {

        /**
         * Constructs a new QuestCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IQuestCounter);

        /** QuestCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new QuestCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuestCounter instance
         */
        public static create(properties?: types.IQuestCounter): types.QuestCounter;

        /**
         * Encodes the specified QuestCounter message. Does not implicitly {@link types.QuestCounter.verify|verify} messages.
         * @param message QuestCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IQuestCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuestCounter message, length delimited. Does not implicitly {@link types.QuestCounter.verify|verify} messages.
         * @param message QuestCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IQuestCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuestCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.QuestCounter;

        /**
         * Decodes a QuestCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuestCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.QuestCounter;

        /**
         * Verifies a QuestCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuestCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuestCounter
         */
        public static fromObject(object: { [k: string]: any }): types.QuestCounter;

        /**
         * Creates a plain object from a QuestCounter message. Also converts values to other types if specified.
         * @param message QuestCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.QuestCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuestCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QuestCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContributionProof. */
    interface IContributionProof {

        /** ContributionProof id */
        id?: (number|Long|null);

        /** ContributionProof guildId */
        guildId?: (number|Long|null);

        /** ContributionProof questId */
        questId?: (number|Long|null);

        /** ContributionProof contributorAddress */
        contributorAddress?: (Uint8Array|null);

        /** ContributionProof proofUri */
        proofUri?: (string|null);

        /** ContributionProof note */
        note?: (string|null);

        /** ContributionProof status */
        status?: (string|null);

        /** ContributionProof createdHeight */
        createdHeight?: (number|Long|null);

        /** ContributionProof reviewedHeight */
        reviewedHeight?: (number|Long|null);
    }

    /** Represents a ContributionProof. */
    class ContributionProof implements IContributionProof {

        /**
         * Constructs a new ContributionProof.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IContributionProof);

        /** ContributionProof id. */
        public id: (number|Long);

        /** ContributionProof guildId. */
        public guildId: (number|Long);

        /** ContributionProof questId. */
        public questId: (number|Long);

        /** ContributionProof contributorAddress. */
        public contributorAddress: Uint8Array;

        /** ContributionProof proofUri. */
        public proofUri: string;

        /** ContributionProof note. */
        public note: string;

        /** ContributionProof status. */
        public status: string;

        /** ContributionProof createdHeight. */
        public createdHeight: (number|Long);

        /** ContributionProof reviewedHeight. */
        public reviewedHeight: (number|Long);

        /**
         * Creates a new ContributionProof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContributionProof instance
         */
        public static create(properties?: types.IContributionProof): types.ContributionProof;

        /**
         * Encodes the specified ContributionProof message. Does not implicitly {@link types.ContributionProof.verify|verify} messages.
         * @param message ContributionProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IContributionProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContributionProof message, length delimited. Does not implicitly {@link types.ContributionProof.verify|verify} messages.
         * @param message ContributionProof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IContributionProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContributionProof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContributionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ContributionProof;

        /**
         * Decodes a ContributionProof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContributionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ContributionProof;

        /**
         * Verifies a ContributionProof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContributionProof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContributionProof
         */
        public static fromObject(object: { [k: string]: any }): types.ContributionProof;

        /**
         * Creates a plain object from a ContributionProof message. Also converts values to other types if specified.
         * @param message ContributionProof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ContributionProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContributionProof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContributionProof
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProofCounter. */
    interface IProofCounter {

        /** ProofCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a ProofCounter. */
    class ProofCounter implements IProofCounter {

        /**
         * Constructs a new ProofCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IProofCounter);

        /** ProofCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new ProofCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProofCounter instance
         */
        public static create(properties?: types.IProofCounter): types.ProofCounter;

        /**
         * Encodes the specified ProofCounter message. Does not implicitly {@link types.ProofCounter.verify|verify} messages.
         * @param message ProofCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IProofCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProofCounter message, length delimited. Does not implicitly {@link types.ProofCounter.verify|verify} messages.
         * @param message ProofCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IProofCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProofCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProofCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ProofCounter;

        /**
         * Decodes a ProofCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProofCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ProofCounter;

        /**
         * Verifies a ProofCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProofCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProofCounter
         */
        public static fromObject(object: { [k: string]: any }): types.ProofCounter;

        /**
         * Creates a plain object from a ProofCounter message. Also converts values to other types if specified.
         * @param message ProofCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ProofCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProofCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProofCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuildBadge. */
    interface IGuildBadge {

        /** GuildBadge id */
        id?: (number|Long|null);

        /** GuildBadge guildId */
        guildId?: (number|Long|null);

        /** GuildBadge issuerAddress */
        issuerAddress?: (Uint8Array|null);

        /** GuildBadge toAddress */
        toAddress?: (Uint8Array|null);

        /** GuildBadge badgeName */
        badgeName?: (string|null);

        /** GuildBadge badgeUri */
        badgeUri?: (string|null);

        /** GuildBadge issuedHeight */
        issuedHeight?: (number|Long|null);
    }

    /** Represents a GuildBadge. */
    class GuildBadge implements IGuildBadge {

        /**
         * Constructs a new GuildBadge.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGuildBadge);

        /** GuildBadge id. */
        public id: (number|Long);

        /** GuildBadge guildId. */
        public guildId: (number|Long);

        /** GuildBadge issuerAddress. */
        public issuerAddress: Uint8Array;

        /** GuildBadge toAddress. */
        public toAddress: Uint8Array;

        /** GuildBadge badgeName. */
        public badgeName: string;

        /** GuildBadge badgeUri. */
        public badgeUri: string;

        /** GuildBadge issuedHeight. */
        public issuedHeight: (number|Long);

        /**
         * Creates a new GuildBadge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuildBadge instance
         */
        public static create(properties?: types.IGuildBadge): types.GuildBadge;

        /**
         * Encodes the specified GuildBadge message. Does not implicitly {@link types.GuildBadge.verify|verify} messages.
         * @param message GuildBadge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGuildBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuildBadge message, length delimited. Does not implicitly {@link types.GuildBadge.verify|verify} messages.
         * @param message GuildBadge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGuildBadge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildBadge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuildBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GuildBadge;

        /**
         * Decodes a GuildBadge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuildBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GuildBadge;

        /**
         * Verifies a GuildBadge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuildBadge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuildBadge
         */
        public static fromObject(object: { [k: string]: any }): types.GuildBadge;

        /**
         * Creates a plain object from a GuildBadge message. Also converts values to other types if specified.
         * @param message GuildBadge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GuildBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuildBadge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuildBadge
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BadgeCounter. */
    interface IBadgeCounter {

        /** BadgeCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a BadgeCounter. */
    class BadgeCounter implements IBadgeCounter {

        /**
         * Constructs a new BadgeCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IBadgeCounter);

        /** BadgeCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new BadgeCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BadgeCounter instance
         */
        public static create(properties?: types.IBadgeCounter): types.BadgeCounter;

        /**
         * Encodes the specified BadgeCounter message. Does not implicitly {@link types.BadgeCounter.verify|verify} messages.
         * @param message BadgeCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IBadgeCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BadgeCounter message, length delimited. Does not implicitly {@link types.BadgeCounter.verify|verify} messages.
         * @param message BadgeCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IBadgeCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BadgeCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BadgeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.BadgeCounter;

        /**
         * Decodes a BadgeCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BadgeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.BadgeCounter;

        /**
         * Verifies a BadgeCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BadgeCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BadgeCounter
         */
        public static fromObject(object: { [k: string]: any }): types.BadgeCounter;

        /**
         * Creates a plain object from a BadgeCounter message. Also converts values to other types if specified.
         * @param message BadgeCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.BadgeCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BadgeCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BadgeCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccessGate. */
    interface IAccessGate {

        /** AccessGate id */
        id?: (number|Long|null);

        /** AccessGate guildId */
        guildId?: (number|Long|null);

        /** AccessGate gateName */
        gateName?: (string|null);

        /** AccessGate requiredRep */
        requiredRep?: (number|Long|null);

        /** AccessGate requiredBadge */
        requiredBadge?: (string|null);

        /** AccessGate createdHeight */
        createdHeight?: (number|Long|null);
    }

    /** Represents an AccessGate. */
    class AccessGate implements IAccessGate {

        /**
         * Constructs a new AccessGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IAccessGate);

        /** AccessGate id. */
        public id: (number|Long);

        /** AccessGate guildId. */
        public guildId: (number|Long);

        /** AccessGate gateName. */
        public gateName: string;

        /** AccessGate requiredRep. */
        public requiredRep: (number|Long);

        /** AccessGate requiredBadge. */
        public requiredBadge: string;

        /** AccessGate createdHeight. */
        public createdHeight: (number|Long);

        /**
         * Creates a new AccessGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessGate instance
         */
        public static create(properties?: types.IAccessGate): types.AccessGate;

        /**
         * Encodes the specified AccessGate message. Does not implicitly {@link types.AccessGate.verify|verify} messages.
         * @param message AccessGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IAccessGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessGate message, length delimited. Does not implicitly {@link types.AccessGate.verify|verify} messages.
         * @param message AccessGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IAccessGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.AccessGate;

        /**
         * Decodes an AccessGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.AccessGate;

        /**
         * Verifies an AccessGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessGate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessGate
         */
        public static fromObject(object: { [k: string]: any }): types.AccessGate;

        /**
         * Creates a plain object from an AccessGate message. Also converts values to other types if specified.
         * @param message AccessGate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.AccessGate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessGate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccessGate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GateCounter. */
    interface IGateCounter {

        /** GateCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a GateCounter. */
    class GateCounter implements IGateCounter {

        /**
         * Constructs a new GateCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGateCounter);

        /** GateCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new GateCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateCounter instance
         */
        public static create(properties?: types.IGateCounter): types.GateCounter;

        /**
         * Encodes the specified GateCounter message. Does not implicitly {@link types.GateCounter.verify|verify} messages.
         * @param message GateCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGateCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GateCounter message, length delimited. Does not implicitly {@link types.GateCounter.verify|verify} messages.
         * @param message GateCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGateCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GateCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GateCounter;

        /**
         * Decodes a GateCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GateCounter;

        /**
         * Verifies a GateCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GateCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GateCounter
         */
        public static fromObject(object: { [k: string]: any }): types.GateCounter;

        /**
         * Creates a plain object from a GateCounter message. Also converts values to other types if specified.
         * @param message GateCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GateCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GateCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GateCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GateAccess. */
    interface IGateAccess {

        /** GateAccess id */
        id?: (number|Long|null);

        /** GateAccess gateId */
        gateId?: (number|Long|null);

        /** GateAccess visitorAddress */
        visitorAddress?: (Uint8Array|null);

        /** GateAccess passed */
        passed?: (boolean|null);

        /** GateAccess checkedHeight */
        checkedHeight?: (number|Long|null);
    }

    /** Represents a GateAccess. */
    class GateAccess implements IGateAccess {

        /**
         * Constructs a new GateAccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGateAccess);

        /** GateAccess id. */
        public id: (number|Long);

        /** GateAccess gateId. */
        public gateId: (number|Long);

        /** GateAccess visitorAddress. */
        public visitorAddress: Uint8Array;

        /** GateAccess passed. */
        public passed: boolean;

        /** GateAccess checkedHeight. */
        public checkedHeight: (number|Long);

        /**
         * Creates a new GateAccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateAccess instance
         */
        public static create(properties?: types.IGateAccess): types.GateAccess;

        /**
         * Encodes the specified GateAccess message. Does not implicitly {@link types.GateAccess.verify|verify} messages.
         * @param message GateAccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGateAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GateAccess message, length delimited. Does not implicitly {@link types.GateAccess.verify|verify} messages.
         * @param message GateAccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGateAccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GateAccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GateAccess;

        /**
         * Decodes a GateAccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GateAccess;

        /**
         * Verifies a GateAccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GateAccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GateAccess
         */
        public static fromObject(object: { [k: string]: any }): types.GateAccess;

        /**
         * Creates a plain object from a GateAccess message. Also converts values to other types if specified.
         * @param message GateAccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GateAccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GateAccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GateAccess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GateAccessCounter. */
    interface IGateAccessCounter {

        /** GateAccessCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a GateAccessCounter. */
    class GateAccessCounter implements IGateAccessCounter {

        /**
         * Constructs a new GateAccessCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IGateAccessCounter);

        /** GateAccessCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new GateAccessCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateAccessCounter instance
         */
        public static create(properties?: types.IGateAccessCounter): types.GateAccessCounter;

        /**
         * Encodes the specified GateAccessCounter message. Does not implicitly {@link types.GateAccessCounter.verify|verify} messages.
         * @param message GateAccessCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IGateAccessCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GateAccessCounter message, length delimited. Does not implicitly {@link types.GateAccessCounter.verify|verify} messages.
         * @param message GateAccessCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IGateAccessCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GateAccessCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateAccessCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.GateAccessCounter;

        /**
         * Decodes a GateAccessCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateAccessCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.GateAccessCounter;

        /**
         * Verifies a GateAccessCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GateAccessCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GateAccessCounter
         */
        public static fromObject(object: { [k: string]: any }): types.GateAccessCounter;

        /**
         * Creates a plain object from a GateAccessCounter message. Also converts values to other types if specified.
         * @param message GateAccessCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.GateAccessCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GateAccessCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GateAccessCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReputationVote. */
    interface IReputationVote {

        /** ReputationVote id */
        id?: (number|Long|null);

        /** ReputationVote guildId */
        guildId?: (number|Long|null);

        /** ReputationVote proposalId */
        proposalId?: (string|null);

        /** ReputationVote voterAddress */
        voterAddress?: (Uint8Array|null);

        /** ReputationVote choice */
        choice?: (string|null);

        /** ReputationVote weight */
        weight?: (number|Long|null);

        /** ReputationVote height */
        height?: (number|Long|null);
    }

    /** Represents a ReputationVote. */
    class ReputationVote implements IReputationVote {

        /**
         * Constructs a new ReputationVote.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IReputationVote);

        /** ReputationVote id. */
        public id: (number|Long);

        /** ReputationVote guildId. */
        public guildId: (number|Long);

        /** ReputationVote proposalId. */
        public proposalId: string;

        /** ReputationVote voterAddress. */
        public voterAddress: Uint8Array;

        /** ReputationVote choice. */
        public choice: string;

        /** ReputationVote weight. */
        public weight: (number|Long);

        /** ReputationVote height. */
        public height: (number|Long);

        /**
         * Creates a new ReputationVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReputationVote instance
         */
        public static create(properties?: types.IReputationVote): types.ReputationVote;

        /**
         * Encodes the specified ReputationVote message. Does not implicitly {@link types.ReputationVote.verify|verify} messages.
         * @param message ReputationVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IReputationVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReputationVote message, length delimited. Does not implicitly {@link types.ReputationVote.verify|verify} messages.
         * @param message ReputationVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IReputationVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReputationVote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ReputationVote;

        /**
         * Decodes a ReputationVote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ReputationVote;

        /**
         * Verifies a ReputationVote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReputationVote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReputationVote
         */
        public static fromObject(object: { [k: string]: any }): types.ReputationVote;

        /**
         * Creates a plain object from a ReputationVote message. Also converts values to other types if specified.
         * @param message ReputationVote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ReputationVote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReputationVote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReputationVote
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VoteCounter. */
    interface IVoteCounter {

        /** VoteCounter nextId */
        nextId?: (number|Long|null);
    }

    /** Represents a VoteCounter. */
    class VoteCounter implements IVoteCounter {

        /**
         * Constructs a new VoteCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVoteCounter);

        /** VoteCounter nextId. */
        public nextId: (number|Long);

        /**
         * Creates a new VoteCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteCounter instance
         */
        public static create(properties?: types.IVoteCounter): types.VoteCounter;

        /**
         * Encodes the specified VoteCounter message. Does not implicitly {@link types.VoteCounter.verify|verify} messages.
         * @param message VoteCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVoteCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteCounter message, length delimited. Does not implicitly {@link types.VoteCounter.verify|verify} messages.
         * @param message VoteCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVoteCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VoteCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VoteCounter;

        /**
         * Decodes a VoteCounter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VoteCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VoteCounter;

        /**
         * Verifies a VoteCounter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteCounter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteCounter
         */
        public static fromObject(object: { [k: string]: any }): types.VoteCounter;

        /**
         * Creates a plain object from a VoteCounter message. Also converts values to other types if specified.
         * @param message VoteCounter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VoteCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteCounter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VoteCounter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeeParams. */
    interface IFeeParams {

        /** FeeParams sendFee */
        sendFee?: (number|Long|null);

        /** FeeParams registerProfileFee */
        registerProfileFee?: (number|Long|null);

        /** FeeParams giveVibeFee */
        giveVibeFee?: (number|Long|null);

        /** FeeParams createGuildFee */
        createGuildFee?: (number|Long|null);

        /** FeeParams postQuestFee */
        postQuestFee?: (number|Long|null);

        /** FeeParams submitProofFee */
        submitProofFee?: (number|Long|null);

        /** FeeParams attestContributionFee */
        attestContributionFee?: (number|Long|null);

        /** FeeParams issueBadgeFee */
        issueBadgeFee?: (number|Long|null);

        /** FeeParams createGateFee */
        createGateFee?: (number|Long|null);

        /** FeeParams checkGateAccessFee */
        checkGateAccessFee?: (number|Long|null);

        /** FeeParams castReputationVoteFee */
        castReputationVoteFee?: (number|Long|null);
    }

    /** Represents a FeeParams. */
    class FeeParams implements IFeeParams {

        /**
         * Constructs a new FeeParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IFeeParams);

        /** FeeParams sendFee. */
        public sendFee: (number|Long);

        /** FeeParams registerProfileFee. */
        public registerProfileFee: (number|Long);

        /** FeeParams giveVibeFee. */
        public giveVibeFee: (number|Long);

        /** FeeParams createGuildFee. */
        public createGuildFee: (number|Long);

        /** FeeParams postQuestFee. */
        public postQuestFee: (number|Long);

        /** FeeParams submitProofFee. */
        public submitProofFee: (number|Long);

        /** FeeParams attestContributionFee. */
        public attestContributionFee: (number|Long);

        /** FeeParams issueBadgeFee. */
        public issueBadgeFee: (number|Long);

        /** FeeParams createGateFee. */
        public createGateFee: (number|Long);

        /** FeeParams checkGateAccessFee. */
        public checkGateAccessFee: (number|Long);

        /** FeeParams castReputationVoteFee. */
        public castReputationVoteFee: (number|Long);

        /**
         * Creates a new FeeParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeParams instance
         */
        public static create(properties?: types.IFeeParams): types.FeeParams;

        /**
         * Encodes the specified FeeParams message. Does not implicitly {@link types.FeeParams.verify|verify} messages.
         * @param message FeeParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IFeeParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeParams message, length delimited. Does not implicitly {@link types.FeeParams.verify|verify} messages.
         * @param message FeeParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IFeeParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.FeeParams;

        /**
         * Decodes a FeeParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.FeeParams;

        /**
         * Verifies a FeeParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeParams
         */
        public static fromObject(object: { [k: string]: any }): types.FeeParams;

        /**
         * Creates a plain object from a FeeParams message. Also converts values to other types if specified.
         * @param message FeeParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.FeeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeeParams
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Signature. */
    interface ISignature {

        /** Signature publicKey */
        publicKey?: (Uint8Array|null);

        /** Signature signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a Signature. */
    class Signature implements ISignature {

        /**
         * Constructs a new Signature.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ISignature);

        /** Signature publicKey. */
        public publicKey: Uint8Array;

        /** Signature signature. */
        public signature: Uint8Array;

        /**
         * Creates a new Signature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signature instance
         */
        public static create(properties?: types.ISignature): types.Signature;

        /**
         * Encodes the specified Signature message. Does not implicitly {@link types.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link types.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Signature;

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Signature;

        /**
         * Verifies a Signature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signature
         */
        public static fromObject(object: { [k: string]: any }): types.Signature;

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @param message Signature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Signature
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
