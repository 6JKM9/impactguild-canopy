/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.types = (function() {

    /**
     * Namespace types.
     * @exports types
     * @namespace
     */
    var types = {};

    types.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof types
         * @interface IAccount
         * @property {Uint8Array|null} [address] Account address
         * @property {number|Long|null} [amount] Account amount
         */

        /**
         * Constructs a new Account.
         * @memberof types
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {types.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account address.
         * @member {Uint8Array} address
         * @memberof types.Account
         * @instance
         */
        Account.prototype.address = $util.newBuffer([]);

        /**
         * Account amount.
         * @member {number|Long} amount
         * @memberof types.Account
         * @instance
         */
        Account.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Account instance using the specified properties.
         * @function create
         * @memberof types.Account
         * @static
         * @param {types.IAccount=} [properties] Properties to set
         * @returns {types.Account} Account instance
         */
        Account.create = function create(properties) {
            return new Account(properties);
        };

        /**
         * Encodes the specified Account message. Does not implicitly {@link types.Account.verify|verify} messages.
         * @function encode
         * @memberof types.Account
         * @static
         * @param {types.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link types.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Account
         * @static
         * @param {types.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof types.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Account();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.address = reader.bytes();
                        break;
                    }
                case 2: {
                        message.amount = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof types.Account
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Account)
                return object;
            var message = new $root.types.Account();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length >= 0)
                    message.address = object.address;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Account
         * @static
         * @param {types.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof types.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Account
         * @function getTypeUrl
         * @memberof types.Account
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Account.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Account";
        };

        return Account;
    })();

    types.Pool = (function() {

        /**
         * Properties of a Pool.
         * @memberof types
         * @interface IPool
         * @property {number|Long|null} [id] Pool id
         * @property {number|Long|null} [amount] Pool amount
         */

        /**
         * Constructs a new Pool.
         * @memberof types
         * @classdesc Represents a Pool.
         * @implements IPool
         * @constructor
         * @param {types.IPool=} [properties] Properties to set
         */
        function Pool(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pool id.
         * @member {number|Long} id
         * @memberof types.Pool
         * @instance
         */
        Pool.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Pool amount.
         * @member {number|Long} amount
         * @memberof types.Pool
         * @instance
         */
        Pool.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Pool instance using the specified properties.
         * @function create
         * @memberof types.Pool
         * @static
         * @param {types.IPool=} [properties] Properties to set
         * @returns {types.Pool} Pool instance
         */
        Pool.create = function create(properties) {
            return new Pool(properties);
        };

        /**
         * Encodes the specified Pool message. Does not implicitly {@link types.Pool.verify|verify} messages.
         * @function encode
         * @memberof types.Pool
         * @static
         * @param {types.IPool} message Pool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Pool message, length delimited. Does not implicitly {@link types.Pool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Pool
         * @static
         * @param {types.IPool} message Pool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pool message from the specified reader or buffer.
         * @function decode
         * @memberof types.Pool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Pool} Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pool.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Pool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.amount = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Pool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Pool} Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pool message.
         * @function verify
         * @memberof types.Pool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a Pool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Pool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Pool} Pool
         */
        Pool.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Pool)
                return object;
            var message = new $root.types.Pool();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Pool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Pool
         * @static
         * @param {types.Pool} message Pool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            return object;
        };

        /**
         * Converts this Pool to JSON.
         * @function toJSON
         * @memberof types.Pool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Pool
         * @function getTypeUrl
         * @memberof types.Pool
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Pool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Pool";
        };

        return Pool;
    })();

    types.Event = (function() {

        /**
         * Properties of an Event.
         * @memberof types
         * @interface IEvent
         * @property {string|null} [eventType] Event eventType
         * @property {types.IEventCustom|null} [custom] Event custom
         * @property {number|Long|null} [height] Event height
         * @property {string|null} [reference] Event reference
         * @property {number|Long|null} [chainId] Event chainId
         * @property {number|Long|null} [blockHeight] Event blockHeight
         * @property {Uint8Array|null} [blockHash] Event blockHash
         * @property {Uint8Array|null} [address] Event address
         */

        /**
         * Constructs a new Event.
         * @memberof types
         * @classdesc Represents an Event.
         * @implements IEvent
         * @constructor
         * @param {types.IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Event eventType.
         * @member {string} eventType
         * @memberof types.Event
         * @instance
         */
        Event.prototype.eventType = "";

        /**
         * Event custom.
         * @member {types.IEventCustom|null|undefined} custom
         * @memberof types.Event
         * @instance
         */
        Event.prototype.custom = null;

        /**
         * Event height.
         * @member {number|Long} height
         * @memberof types.Event
         * @instance
         */
        Event.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Event reference.
         * @member {string} reference
         * @memberof types.Event
         * @instance
         */
        Event.prototype.reference = "";

        /**
         * Event chainId.
         * @member {number|Long} chainId
         * @memberof types.Event
         * @instance
         */
        Event.prototype.chainId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Event blockHeight.
         * @member {number|Long} blockHeight
         * @memberof types.Event
         * @instance
         */
        Event.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Event blockHash.
         * @member {Uint8Array} blockHash
         * @memberof types.Event
         * @instance
         */
        Event.prototype.blockHash = $util.newBuffer([]);

        /**
         * Event address.
         * @member {Uint8Array} address
         * @memberof types.Event
         * @instance
         */
        Event.prototype.address = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Event msg.
         * @member {"custom"|undefined} msg
         * @memberof types.Event
         * @instance
         */
        Object.defineProperty(Event.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["custom"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof types.Event
         * @static
         * @param {types.IEvent=} [properties] Properties to set
         * @returns {types.Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link types.Event.verify|verify} messages.
         * @function encode
         * @memberof types.Event
         * @static
         * @param {types.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventType);
            if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                $root.types.EventCustom.encode(message.custom, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 91, wireType 0 =*/728).uint64(message.height);
            if (message.reference != null && Object.hasOwnProperty.call(message, "reference"))
                writer.uint32(/* id 92, wireType 2 =*/738).string(message.reference);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 93, wireType 0 =*/744).uint64(message.chainId);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 94, wireType 0 =*/752).uint64(message.blockHeight);
            if (message.blockHash != null && Object.hasOwnProperty.call(message, "blockHash"))
                writer.uint32(/* id 95, wireType 2 =*/762).bytes(message.blockHash);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 96, wireType 2 =*/770).bytes(message.address);
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link types.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Event
         * @static
         * @param {types.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof types.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Event();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.eventType = reader.string();
                        break;
                    }
                case 11: {
                        message.custom = $root.types.EventCustom.decode(reader, reader.uint32());
                        break;
                    }
                case 91: {
                        message.height = reader.uint64();
                        break;
                    }
                case 92: {
                        message.reference = reader.string();
                        break;
                    }
                case 93: {
                        message.chainId = reader.uint64();
                        break;
                    }
                case 94: {
                        message.blockHeight = reader.uint64();
                        break;
                    }
                case 95: {
                        message.blockHash = reader.bytes();
                        break;
                    }
                case 96: {
                        message.address = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof types.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
            if (message.custom != null && message.hasOwnProperty("custom")) {
                properties.msg = 1;
                {
                    var error = $root.types.EventCustom.verify(message.custom);
                    if (error)
                        return "custom." + error;
                }
            }
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            if (message.reference != null && message.hasOwnProperty("reference"))
                if (!$util.isString(message.reference))
                    return "reference: string expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId) && !(message.chainId && $util.isInteger(message.chainId.low) && $util.isInteger(message.chainId.high)))
                    return "chainId: integer|Long expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                    return "blockHash: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Event)
                return object;
            var message = new $root.types.Event();
            if (object.eventType != null)
                message.eventType = String(object.eventType);
            if (object.custom != null) {
                if (typeof object.custom !== "object")
                    throw TypeError(".types.Event.custom: object expected");
                message.custom = $root.types.EventCustom.fromObject(object.custom);
            }
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            if (object.reference != null)
                message.reference = String(object.reference);
            if (object.chainId != null)
                if ($util.Long)
                    (message.chainId = $util.Long.fromValue(object.chainId)).unsigned = true;
                else if (typeof object.chainId === "string")
                    message.chainId = parseInt(object.chainId, 10);
                else if (typeof object.chainId === "number")
                    message.chainId = object.chainId;
                else if (typeof object.chainId === "object")
                    message.chainId = new $util.LongBits(object.chainId.low >>> 0, object.chainId.high >>> 0).toNumber(true);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = true;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber(true);
            if (object.blockHash != null)
                if (typeof object.blockHash === "string")
                    $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
                else if (object.blockHash.length >= 0)
                    message.blockHash = object.blockHash;
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length >= 0)
                    message.address = object.address;
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Event
         * @static
         * @param {types.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventType = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
                object.reference = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.chainId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.chainId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.blockHash = "";
                else {
                    object.blockHash = [];
                    if (options.bytes !== Array)
                        object.blockHash = $util.newBuffer(object.blockHash);
                }
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
            }
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.custom != null && message.hasOwnProperty("custom")) {
                object.custom = $root.types.EventCustom.toObject(message.custom, options);
                if (options.oneofs)
                    object.msg = "custom";
            }
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            if (message.reference != null && message.hasOwnProperty("reference"))
                object.reference = message.reference;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (typeof message.chainId === "number")
                    object.chainId = options.longs === String ? String(message.chainId) : message.chainId;
                else
                    object.chainId = options.longs === String ? $util.Long.prototype.toString.call(message.chainId) : options.longs === Number ? new $util.LongBits(message.chainId.low >>> 0, message.chainId.high >>> 0).toNumber(true) : message.chainId;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber(true) : message.blockHeight;
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof types.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Event
         * @function getTypeUrl
         * @memberof types.Event
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Event";
        };

        return Event;
    })();

    types.EventCustom = (function() {

        /**
         * Properties of an EventCustom.
         * @memberof types
         * @interface IEventCustom
         * @property {google.protobuf.IAny|null} [msg] EventCustom msg
         */

        /**
         * Constructs a new EventCustom.
         * @memberof types
         * @classdesc Represents an EventCustom.
         * @implements IEventCustom
         * @constructor
         * @param {types.IEventCustom=} [properties] Properties to set
         */
        function EventCustom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventCustom msg.
         * @member {google.protobuf.IAny|null|undefined} msg
         * @memberof types.EventCustom
         * @instance
         */
        EventCustom.prototype.msg = null;

        /**
         * Creates a new EventCustom instance using the specified properties.
         * @function create
         * @memberof types.EventCustom
         * @static
         * @param {types.IEventCustom=} [properties] Properties to set
         * @returns {types.EventCustom} EventCustom instance
         */
        EventCustom.create = function create(properties) {
            return new EventCustom(properties);
        };

        /**
         * Encodes the specified EventCustom message. Does not implicitly {@link types.EventCustom.verify|verify} messages.
         * @function encode
         * @memberof types.EventCustom
         * @static
         * @param {types.IEventCustom} message EventCustom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventCustom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.google.protobuf.Any.encode(message.msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EventCustom message, length delimited. Does not implicitly {@link types.EventCustom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.EventCustom
         * @static
         * @param {types.IEventCustom} message EventCustom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventCustom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventCustom message from the specified reader or buffer.
         * @function decode
         * @memberof types.EventCustom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.EventCustom} EventCustom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventCustom.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.EventCustom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.msg = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EventCustom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.EventCustom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.EventCustom} EventCustom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventCustom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventCustom message.
         * @function verify
         * @memberof types.EventCustom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventCustom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                var error = $root.google.protobuf.Any.verify(message.msg);
                if (error)
                    return "msg." + error;
            }
            return null;
        };

        /**
         * Creates an EventCustom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.EventCustom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.EventCustom} EventCustom
         */
        EventCustom.fromObject = function fromObject(object) {
            if (object instanceof $root.types.EventCustom)
                return object;
            var message = new $root.types.EventCustom();
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".types.EventCustom.msg: object expected");
                message.msg = $root.google.protobuf.Any.fromObject(object.msg);
            }
            return message;
        };

        /**
         * Creates a plain object from an EventCustom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.EventCustom
         * @static
         * @param {types.EventCustom} message EventCustom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventCustom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = null;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.google.protobuf.Any.toObject(message.msg, options);
            return object;
        };

        /**
         * Converts this EventCustom to JSON.
         * @function toJSON
         * @memberof types.EventCustom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventCustom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EventCustom
         * @function getTypeUrl
         * @memberof types.EventCustom
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EventCustom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.EventCustom";
        };

        return EventCustom;
    })();

    types.FSMToPlugin = (function() {

        /**
         * Properties of a FSMToPlugin.
         * @memberof types
         * @interface IFSMToPlugin
         * @property {number|Long|null} [id] FSMToPlugin id
         * @property {types.IPluginFSMConfig|null} [config] FSMToPlugin config
         * @property {types.IPluginGenesisRequest|null} [genesis] FSMToPlugin genesis
         * @property {types.IPluginBeginRequest|null} [begin] FSMToPlugin begin
         * @property {types.IPluginCheckRequest|null} [check] FSMToPlugin check
         * @property {types.IPluginDeliverRequest|null} [deliver] FSMToPlugin deliver
         * @property {types.IPluginEndRequest|null} [end] FSMToPlugin end
         * @property {types.IPluginStateReadResponse|null} [stateRead] FSMToPlugin stateRead
         * @property {types.IPluginStateWriteResponse|null} [stateWrite] FSMToPlugin stateWrite
         * @property {types.IPluginError|null} [error] FSMToPlugin error
         */

        /**
         * Constructs a new FSMToPlugin.
         * @memberof types
         * @classdesc Represents a FSMToPlugin.
         * @implements IFSMToPlugin
         * @constructor
         * @param {types.IFSMToPlugin=} [properties] Properties to set
         */
        function FSMToPlugin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FSMToPlugin id.
         * @member {number|Long} id
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FSMToPlugin config.
         * @member {types.IPluginFSMConfig|null|undefined} config
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.config = null;

        /**
         * FSMToPlugin genesis.
         * @member {types.IPluginGenesisRequest|null|undefined} genesis
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.genesis = null;

        /**
         * FSMToPlugin begin.
         * @member {types.IPluginBeginRequest|null|undefined} begin
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.begin = null;

        /**
         * FSMToPlugin check.
         * @member {types.IPluginCheckRequest|null|undefined} check
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.check = null;

        /**
         * FSMToPlugin deliver.
         * @member {types.IPluginDeliverRequest|null|undefined} deliver
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.deliver = null;

        /**
         * FSMToPlugin end.
         * @member {types.IPluginEndRequest|null|undefined} end
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.end = null;

        /**
         * FSMToPlugin stateRead.
         * @member {types.IPluginStateReadResponse|null|undefined} stateRead
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.stateRead = null;

        /**
         * FSMToPlugin stateWrite.
         * @member {types.IPluginStateWriteResponse|null|undefined} stateWrite
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.stateWrite = null;

        /**
         * FSMToPlugin error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.FSMToPlugin
         * @instance
         */
        FSMToPlugin.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * FSMToPlugin payload.
         * @member {"config"|"genesis"|"begin"|"check"|"deliver"|"end"|"stateRead"|"stateWrite"|"error"|undefined} payload
         * @memberof types.FSMToPlugin
         * @instance
         */
        Object.defineProperty(FSMToPlugin.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["config", "genesis", "begin", "check", "deliver", "end", "stateRead", "stateWrite", "error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FSMToPlugin instance using the specified properties.
         * @function create
         * @memberof types.FSMToPlugin
         * @static
         * @param {types.IFSMToPlugin=} [properties] Properties to set
         * @returns {types.FSMToPlugin} FSMToPlugin instance
         */
        FSMToPlugin.create = function create(properties) {
            return new FSMToPlugin(properties);
        };

        /**
         * Encodes the specified FSMToPlugin message. Does not implicitly {@link types.FSMToPlugin.verify|verify} messages.
         * @function encode
         * @memberof types.FSMToPlugin
         * @static
         * @param {types.IFSMToPlugin} message FSMToPlugin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FSMToPlugin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.types.PluginFSMConfig.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.genesis != null && Object.hasOwnProperty.call(message, "genesis"))
                $root.types.PluginGenesisRequest.encode(message.genesis, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                $root.types.PluginBeginRequest.encode(message.begin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.check != null && Object.hasOwnProperty.call(message, "check"))
                $root.types.PluginCheckRequest.encode(message.check, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.deliver != null && Object.hasOwnProperty.call(message, "deliver"))
                $root.types.PluginDeliverRequest.encode(message.deliver, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.types.PluginEndRequest.encode(message.end, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.stateRead != null && Object.hasOwnProperty.call(message, "stateRead"))
                $root.types.PluginStateReadResponse.encode(message.stateRead, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.stateWrite != null && Object.hasOwnProperty.call(message, "stateWrite"))
                $root.types.PluginStateWriteResponse.encode(message.stateWrite, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FSMToPlugin message, length delimited. Does not implicitly {@link types.FSMToPlugin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.FSMToPlugin
         * @static
         * @param {types.IFSMToPlugin} message FSMToPlugin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FSMToPlugin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FSMToPlugin message from the specified reader or buffer.
         * @function decode
         * @memberof types.FSMToPlugin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.FSMToPlugin} FSMToPlugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FSMToPlugin.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.FSMToPlugin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.config = $root.types.PluginFSMConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.genesis = $root.types.PluginGenesisRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.begin = $root.types.PluginBeginRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.check = $root.types.PluginCheckRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.deliver = $root.types.PluginDeliverRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.end = $root.types.PluginEndRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.stateRead = $root.types.PluginStateReadResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.stateWrite = $root.types.PluginStateWriteResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FSMToPlugin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.FSMToPlugin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.FSMToPlugin} FSMToPlugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FSMToPlugin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FSMToPlugin message.
         * @function verify
         * @memberof types.FSMToPlugin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FSMToPlugin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.payload = 1;
                {
                    var error = $root.types.PluginFSMConfig.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.genesis != null && message.hasOwnProperty("genesis")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginGenesisRequest.verify(message.genesis);
                    if (error)
                        return "genesis." + error;
                }
            }
            if (message.begin != null && message.hasOwnProperty("begin")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginBeginRequest.verify(message.begin);
                    if (error)
                        return "begin." + error;
                }
            }
            if (message.check != null && message.hasOwnProperty("check")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginCheckRequest.verify(message.check);
                    if (error)
                        return "check." + error;
                }
            }
            if (message.deliver != null && message.hasOwnProperty("deliver")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginDeliverRequest.verify(message.deliver);
                    if (error)
                        return "deliver." + error;
                }
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginEndRequest.verify(message.end);
                    if (error)
                        return "end." + error;
                }
            }
            if (message.stateRead != null && message.hasOwnProperty("stateRead")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginStateReadResponse.verify(message.stateRead);
                    if (error)
                        return "stateRead." + error;
                }
            }
            if (message.stateWrite != null && message.hasOwnProperty("stateWrite")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginStateWriteResponse.verify(message.stateWrite);
                    if (error)
                        return "stateWrite." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginError.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FSMToPlugin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.FSMToPlugin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.FSMToPlugin} FSMToPlugin
         */
        FSMToPlugin.fromObject = function fromObject(object) {
            if (object instanceof $root.types.FSMToPlugin)
                return object;
            var message = new $root.types.FSMToPlugin();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".types.FSMToPlugin.config: object expected");
                message.config = $root.types.PluginFSMConfig.fromObject(object.config);
            }
            if (object.genesis != null) {
                if (typeof object.genesis !== "object")
                    throw TypeError(".types.FSMToPlugin.genesis: object expected");
                message.genesis = $root.types.PluginGenesisRequest.fromObject(object.genesis);
            }
            if (object.begin != null) {
                if (typeof object.begin !== "object")
                    throw TypeError(".types.FSMToPlugin.begin: object expected");
                message.begin = $root.types.PluginBeginRequest.fromObject(object.begin);
            }
            if (object.check != null) {
                if (typeof object.check !== "object")
                    throw TypeError(".types.FSMToPlugin.check: object expected");
                message.check = $root.types.PluginCheckRequest.fromObject(object.check);
            }
            if (object.deliver != null) {
                if (typeof object.deliver !== "object")
                    throw TypeError(".types.FSMToPlugin.deliver: object expected");
                message.deliver = $root.types.PluginDeliverRequest.fromObject(object.deliver);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".types.FSMToPlugin.end: object expected");
                message.end = $root.types.PluginEndRequest.fromObject(object.end);
            }
            if (object.stateRead != null) {
                if (typeof object.stateRead !== "object")
                    throw TypeError(".types.FSMToPlugin.stateRead: object expected");
                message.stateRead = $root.types.PluginStateReadResponse.fromObject(object.stateRead);
            }
            if (object.stateWrite != null) {
                if (typeof object.stateWrite !== "object")
                    throw TypeError(".types.FSMToPlugin.stateWrite: object expected");
                message.stateWrite = $root.types.PluginStateWriteResponse.fromObject(object.stateWrite);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.FSMToPlugin.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a FSMToPlugin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.FSMToPlugin
         * @static
         * @param {types.FSMToPlugin} message FSMToPlugin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FSMToPlugin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.types.PluginFSMConfig.toObject(message.config, options);
                if (options.oneofs)
                    object.payload = "config";
            }
            if (message.genesis != null && message.hasOwnProperty("genesis")) {
                object.genesis = $root.types.PluginGenesisRequest.toObject(message.genesis, options);
                if (options.oneofs)
                    object.payload = "genesis";
            }
            if (message.begin != null && message.hasOwnProperty("begin")) {
                object.begin = $root.types.PluginBeginRequest.toObject(message.begin, options);
                if (options.oneofs)
                    object.payload = "begin";
            }
            if (message.check != null && message.hasOwnProperty("check")) {
                object.check = $root.types.PluginCheckRequest.toObject(message.check, options);
                if (options.oneofs)
                    object.payload = "check";
            }
            if (message.deliver != null && message.hasOwnProperty("deliver")) {
                object.deliver = $root.types.PluginDeliverRequest.toObject(message.deliver, options);
                if (options.oneofs)
                    object.payload = "deliver";
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                object.end = $root.types.PluginEndRequest.toObject(message.end, options);
                if (options.oneofs)
                    object.payload = "end";
            }
            if (message.stateRead != null && message.hasOwnProperty("stateRead")) {
                object.stateRead = $root.types.PluginStateReadResponse.toObject(message.stateRead, options);
                if (options.oneofs)
                    object.payload = "stateRead";
            }
            if (message.stateWrite != null && message.hasOwnProperty("stateWrite")) {
                object.stateWrite = $root.types.PluginStateWriteResponse.toObject(message.stateWrite, options);
                if (options.oneofs)
                    object.payload = "stateWrite";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.types.PluginError.toObject(message.error, options);
                if (options.oneofs)
                    object.payload = "error";
            }
            return object;
        };

        /**
         * Converts this FSMToPlugin to JSON.
         * @function toJSON
         * @memberof types.FSMToPlugin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FSMToPlugin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FSMToPlugin
         * @function getTypeUrl
         * @memberof types.FSMToPlugin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FSMToPlugin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.FSMToPlugin";
        };

        return FSMToPlugin;
    })();

    types.PluginToFSM = (function() {

        /**
         * Properties of a PluginToFSM.
         * @memberof types
         * @interface IPluginToFSM
         * @property {number|Long|null} [id] PluginToFSM id
         * @property {types.IPluginConfig|null} [config] PluginToFSM config
         * @property {types.IPluginGenesisResponse|null} [genesis] PluginToFSM genesis
         * @property {types.IPluginBeginResponse|null} [begin] PluginToFSM begin
         * @property {types.IPluginCheckResponse|null} [check] PluginToFSM check
         * @property {types.IPluginDeliverResponse|null} [deliver] PluginToFSM deliver
         * @property {types.IPluginEndResponse|null} [end] PluginToFSM end
         * @property {types.IPluginStateReadRequest|null} [stateRead] PluginToFSM stateRead
         * @property {types.IPluginStateWriteRequest|null} [stateWrite] PluginToFSM stateWrite
         */

        /**
         * Constructs a new PluginToFSM.
         * @memberof types
         * @classdesc Represents a PluginToFSM.
         * @implements IPluginToFSM
         * @constructor
         * @param {types.IPluginToFSM=} [properties] Properties to set
         */
        function PluginToFSM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginToFSM id.
         * @member {number|Long} id
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginToFSM config.
         * @member {types.IPluginConfig|null|undefined} config
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.config = null;

        /**
         * PluginToFSM genesis.
         * @member {types.IPluginGenesisResponse|null|undefined} genesis
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.genesis = null;

        /**
         * PluginToFSM begin.
         * @member {types.IPluginBeginResponse|null|undefined} begin
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.begin = null;

        /**
         * PluginToFSM check.
         * @member {types.IPluginCheckResponse|null|undefined} check
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.check = null;

        /**
         * PluginToFSM deliver.
         * @member {types.IPluginDeliverResponse|null|undefined} deliver
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.deliver = null;

        /**
         * PluginToFSM end.
         * @member {types.IPluginEndResponse|null|undefined} end
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.end = null;

        /**
         * PluginToFSM stateRead.
         * @member {types.IPluginStateReadRequest|null|undefined} stateRead
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.stateRead = null;

        /**
         * PluginToFSM stateWrite.
         * @member {types.IPluginStateWriteRequest|null|undefined} stateWrite
         * @memberof types.PluginToFSM
         * @instance
         */
        PluginToFSM.prototype.stateWrite = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * PluginToFSM payload.
         * @member {"config"|"genesis"|"begin"|"check"|"deliver"|"end"|"stateRead"|"stateWrite"|undefined} payload
         * @memberof types.PluginToFSM
         * @instance
         */
        Object.defineProperty(PluginToFSM.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["config", "genesis", "begin", "check", "deliver", "end", "stateRead", "stateWrite"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PluginToFSM instance using the specified properties.
         * @function create
         * @memberof types.PluginToFSM
         * @static
         * @param {types.IPluginToFSM=} [properties] Properties to set
         * @returns {types.PluginToFSM} PluginToFSM instance
         */
        PluginToFSM.create = function create(properties) {
            return new PluginToFSM(properties);
        };

        /**
         * Encodes the specified PluginToFSM message. Does not implicitly {@link types.PluginToFSM.verify|verify} messages.
         * @function encode
         * @memberof types.PluginToFSM
         * @static
         * @param {types.IPluginToFSM} message PluginToFSM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginToFSM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.types.PluginConfig.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.genesis != null && Object.hasOwnProperty.call(message, "genesis"))
                $root.types.PluginGenesisResponse.encode(message.genesis, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                $root.types.PluginBeginResponse.encode(message.begin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.check != null && Object.hasOwnProperty.call(message, "check"))
                $root.types.PluginCheckResponse.encode(message.check, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.deliver != null && Object.hasOwnProperty.call(message, "deliver"))
                $root.types.PluginDeliverResponse.encode(message.deliver, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.types.PluginEndResponse.encode(message.end, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.stateRead != null && Object.hasOwnProperty.call(message, "stateRead"))
                $root.types.PluginStateReadRequest.encode(message.stateRead, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.stateWrite != null && Object.hasOwnProperty.call(message, "stateWrite"))
                $root.types.PluginStateWriteRequest.encode(message.stateWrite, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginToFSM message, length delimited. Does not implicitly {@link types.PluginToFSM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginToFSM
         * @static
         * @param {types.IPluginToFSM} message PluginToFSM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginToFSM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginToFSM message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginToFSM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginToFSM} PluginToFSM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginToFSM.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginToFSM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.config = $root.types.PluginConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.genesis = $root.types.PluginGenesisResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.begin = $root.types.PluginBeginResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.check = $root.types.PluginCheckResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.deliver = $root.types.PluginDeliverResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.end = $root.types.PluginEndResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.stateRead = $root.types.PluginStateReadRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.stateWrite = $root.types.PluginStateWriteRequest.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginToFSM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginToFSM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginToFSM} PluginToFSM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginToFSM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginToFSM message.
         * @function verify
         * @memberof types.PluginToFSM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginToFSM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.payload = 1;
                {
                    var error = $root.types.PluginConfig.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.genesis != null && message.hasOwnProperty("genesis")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginGenesisResponse.verify(message.genesis);
                    if (error)
                        return "genesis." + error;
                }
            }
            if (message.begin != null && message.hasOwnProperty("begin")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginBeginResponse.verify(message.begin);
                    if (error)
                        return "begin." + error;
                }
            }
            if (message.check != null && message.hasOwnProperty("check")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginCheckResponse.verify(message.check);
                    if (error)
                        return "check." + error;
                }
            }
            if (message.deliver != null && message.hasOwnProperty("deliver")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginDeliverResponse.verify(message.deliver);
                    if (error)
                        return "deliver." + error;
                }
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginEndResponse.verify(message.end);
                    if (error)
                        return "end." + error;
                }
            }
            if (message.stateRead != null && message.hasOwnProperty("stateRead")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginStateReadRequest.verify(message.stateRead);
                    if (error)
                        return "stateRead." + error;
                }
            }
            if (message.stateWrite != null && message.hasOwnProperty("stateWrite")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.types.PluginStateWriteRequest.verify(message.stateWrite);
                    if (error)
                        return "stateWrite." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PluginToFSM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginToFSM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginToFSM} PluginToFSM
         */
        PluginToFSM.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginToFSM)
                return object;
            var message = new $root.types.PluginToFSM();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".types.PluginToFSM.config: object expected");
                message.config = $root.types.PluginConfig.fromObject(object.config);
            }
            if (object.genesis != null) {
                if (typeof object.genesis !== "object")
                    throw TypeError(".types.PluginToFSM.genesis: object expected");
                message.genesis = $root.types.PluginGenesisResponse.fromObject(object.genesis);
            }
            if (object.begin != null) {
                if (typeof object.begin !== "object")
                    throw TypeError(".types.PluginToFSM.begin: object expected");
                message.begin = $root.types.PluginBeginResponse.fromObject(object.begin);
            }
            if (object.check != null) {
                if (typeof object.check !== "object")
                    throw TypeError(".types.PluginToFSM.check: object expected");
                message.check = $root.types.PluginCheckResponse.fromObject(object.check);
            }
            if (object.deliver != null) {
                if (typeof object.deliver !== "object")
                    throw TypeError(".types.PluginToFSM.deliver: object expected");
                message.deliver = $root.types.PluginDeliverResponse.fromObject(object.deliver);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".types.PluginToFSM.end: object expected");
                message.end = $root.types.PluginEndResponse.fromObject(object.end);
            }
            if (object.stateRead != null) {
                if (typeof object.stateRead !== "object")
                    throw TypeError(".types.PluginToFSM.stateRead: object expected");
                message.stateRead = $root.types.PluginStateReadRequest.fromObject(object.stateRead);
            }
            if (object.stateWrite != null) {
                if (typeof object.stateWrite !== "object")
                    throw TypeError(".types.PluginToFSM.stateWrite: object expected");
                message.stateWrite = $root.types.PluginStateWriteRequest.fromObject(object.stateWrite);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginToFSM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginToFSM
         * @static
         * @param {types.PluginToFSM} message PluginToFSM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginToFSM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.types.PluginConfig.toObject(message.config, options);
                if (options.oneofs)
                    object.payload = "config";
            }
            if (message.genesis != null && message.hasOwnProperty("genesis")) {
                object.genesis = $root.types.PluginGenesisResponse.toObject(message.genesis, options);
                if (options.oneofs)
                    object.payload = "genesis";
            }
            if (message.begin != null && message.hasOwnProperty("begin")) {
                object.begin = $root.types.PluginBeginResponse.toObject(message.begin, options);
                if (options.oneofs)
                    object.payload = "begin";
            }
            if (message.check != null && message.hasOwnProperty("check")) {
                object.check = $root.types.PluginCheckResponse.toObject(message.check, options);
                if (options.oneofs)
                    object.payload = "check";
            }
            if (message.deliver != null && message.hasOwnProperty("deliver")) {
                object.deliver = $root.types.PluginDeliverResponse.toObject(message.deliver, options);
                if (options.oneofs)
                    object.payload = "deliver";
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                object.end = $root.types.PluginEndResponse.toObject(message.end, options);
                if (options.oneofs)
                    object.payload = "end";
            }
            if (message.stateRead != null && message.hasOwnProperty("stateRead")) {
                object.stateRead = $root.types.PluginStateReadRequest.toObject(message.stateRead, options);
                if (options.oneofs)
                    object.payload = "stateRead";
            }
            if (message.stateWrite != null && message.hasOwnProperty("stateWrite")) {
                object.stateWrite = $root.types.PluginStateWriteRequest.toObject(message.stateWrite, options);
                if (options.oneofs)
                    object.payload = "stateWrite";
            }
            return object;
        };

        /**
         * Converts this PluginToFSM to JSON.
         * @function toJSON
         * @memberof types.PluginToFSM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginToFSM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginToFSM
         * @function getTypeUrl
         * @memberof types.PluginToFSM
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginToFSM.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginToFSM";
        };

        return PluginToFSM;
    })();

    types.PluginConfig = (function() {

        /**
         * Properties of a PluginConfig.
         * @memberof types
         * @interface IPluginConfig
         * @property {string|null} [name] PluginConfig name
         * @property {number|Long|null} [id] PluginConfig id
         * @property {number|Long|null} [version] PluginConfig version
         * @property {Array.<string>|null} [supportedTransactions] PluginConfig supportedTransactions
         * @property {Array.<Uint8Array>|null} [fileDescriptorProtos] PluginConfig fileDescriptorProtos
         * @property {Array.<string>|null} [transactionTypeUrls] PluginConfig transactionTypeUrls
         * @property {Array.<string>|null} [eventTypeUrls] PluginConfig eventTypeUrls
         */

        /**
         * Constructs a new PluginConfig.
         * @memberof types
         * @classdesc Represents a PluginConfig.
         * @implements IPluginConfig
         * @constructor
         * @param {types.IPluginConfig=} [properties] Properties to set
         */
        function PluginConfig(properties) {
            this.supportedTransactions = [];
            this.fileDescriptorProtos = [];
            this.transactionTypeUrls = [];
            this.eventTypeUrls = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginConfig name.
         * @member {string} name
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.name = "";

        /**
         * PluginConfig id.
         * @member {number|Long} id
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginConfig version.
         * @member {number|Long} version
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginConfig supportedTransactions.
         * @member {Array.<string>} supportedTransactions
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.supportedTransactions = $util.emptyArray;

        /**
         * PluginConfig fileDescriptorProtos.
         * @member {Array.<Uint8Array>} fileDescriptorProtos
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.fileDescriptorProtos = $util.emptyArray;

        /**
         * PluginConfig transactionTypeUrls.
         * @member {Array.<string>} transactionTypeUrls
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.transactionTypeUrls = $util.emptyArray;

        /**
         * PluginConfig eventTypeUrls.
         * @member {Array.<string>} eventTypeUrls
         * @memberof types.PluginConfig
         * @instance
         */
        PluginConfig.prototype.eventTypeUrls = $util.emptyArray;

        /**
         * Creates a new PluginConfig instance using the specified properties.
         * @function create
         * @memberof types.PluginConfig
         * @static
         * @param {types.IPluginConfig=} [properties] Properties to set
         * @returns {types.PluginConfig} PluginConfig instance
         */
        PluginConfig.create = function create(properties) {
            return new PluginConfig(properties);
        };

        /**
         * Encodes the specified PluginConfig message. Does not implicitly {@link types.PluginConfig.verify|verify} messages.
         * @function encode
         * @memberof types.PluginConfig
         * @static
         * @param {types.IPluginConfig} message PluginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.id);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.version);
            if (message.supportedTransactions != null && message.supportedTransactions.length)
                for (var i = 0; i < message.supportedTransactions.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.supportedTransactions[i]);
            if (message.fileDescriptorProtos != null && message.fileDescriptorProtos.length)
                for (var i = 0; i < message.fileDescriptorProtos.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.fileDescriptorProtos[i]);
            if (message.transactionTypeUrls != null && message.transactionTypeUrls.length)
                for (var i = 0; i < message.transactionTypeUrls.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.transactionTypeUrls[i]);
            if (message.eventTypeUrls != null && message.eventTypeUrls.length)
                for (var i = 0; i < message.eventTypeUrls.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.eventTypeUrls[i]);
            return writer;
        };

        /**
         * Encodes the specified PluginConfig message, length delimited. Does not implicitly {@link types.PluginConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginConfig
         * @static
         * @param {types.IPluginConfig} message PluginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginConfig message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginConfig} PluginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.uint64();
                        break;
                    }
                case 3: {
                        message.version = reader.uint64();
                        break;
                    }
                case 4: {
                        if (!(message.supportedTransactions && message.supportedTransactions.length))
                            message.supportedTransactions = [];
                        message.supportedTransactions.push(reader.string());
                        break;
                    }
                case 5: {
                        if (!(message.fileDescriptorProtos && message.fileDescriptorProtos.length))
                            message.fileDescriptorProtos = [];
                        message.fileDescriptorProtos.push(reader.bytes());
                        break;
                    }
                case 6: {
                        if (!(message.transactionTypeUrls && message.transactionTypeUrls.length))
                            message.transactionTypeUrls = [];
                        message.transactionTypeUrls.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.eventTypeUrls && message.eventTypeUrls.length))
                            message.eventTypeUrls = [];
                        message.eventTypeUrls.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginConfig} PluginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginConfig message.
         * @function verify
         * @memberof types.PluginConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.supportedTransactions != null && message.hasOwnProperty("supportedTransactions")) {
                if (!Array.isArray(message.supportedTransactions))
                    return "supportedTransactions: array expected";
                for (var i = 0; i < message.supportedTransactions.length; ++i)
                    if (!$util.isString(message.supportedTransactions[i]))
                        return "supportedTransactions: string[] expected";
            }
            if (message.fileDescriptorProtos != null && message.hasOwnProperty("fileDescriptorProtos")) {
                if (!Array.isArray(message.fileDescriptorProtos))
                    return "fileDescriptorProtos: array expected";
                for (var i = 0; i < message.fileDescriptorProtos.length; ++i)
                    if (!(message.fileDescriptorProtos[i] && typeof message.fileDescriptorProtos[i].length === "number" || $util.isString(message.fileDescriptorProtos[i])))
                        return "fileDescriptorProtos: buffer[] expected";
            }
            if (message.transactionTypeUrls != null && message.hasOwnProperty("transactionTypeUrls")) {
                if (!Array.isArray(message.transactionTypeUrls))
                    return "transactionTypeUrls: array expected";
                for (var i = 0; i < message.transactionTypeUrls.length; ++i)
                    if (!$util.isString(message.transactionTypeUrls[i]))
                        return "transactionTypeUrls: string[] expected";
            }
            if (message.eventTypeUrls != null && message.hasOwnProperty("eventTypeUrls")) {
                if (!Array.isArray(message.eventTypeUrls))
                    return "eventTypeUrls: array expected";
                for (var i = 0; i < message.eventTypeUrls.length; ++i)
                    if (!$util.isString(message.eventTypeUrls[i]))
                        return "eventTypeUrls: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PluginConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginConfig} PluginConfig
         */
        PluginConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginConfig)
                return object;
            var message = new $root.types.PluginConfig();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.supportedTransactions) {
                if (!Array.isArray(object.supportedTransactions))
                    throw TypeError(".types.PluginConfig.supportedTransactions: array expected");
                message.supportedTransactions = [];
                for (var i = 0; i < object.supportedTransactions.length; ++i)
                    message.supportedTransactions[i] = String(object.supportedTransactions[i]);
            }
            if (object.fileDescriptorProtos) {
                if (!Array.isArray(object.fileDescriptorProtos))
                    throw TypeError(".types.PluginConfig.fileDescriptorProtos: array expected");
                message.fileDescriptorProtos = [];
                for (var i = 0; i < object.fileDescriptorProtos.length; ++i)
                    if (typeof object.fileDescriptorProtos[i] === "string")
                        $util.base64.decode(object.fileDescriptorProtos[i], message.fileDescriptorProtos[i] = $util.newBuffer($util.base64.length(object.fileDescriptorProtos[i])), 0);
                    else if (object.fileDescriptorProtos[i].length >= 0)
                        message.fileDescriptorProtos[i] = object.fileDescriptorProtos[i];
            }
            if (object.transactionTypeUrls) {
                if (!Array.isArray(object.transactionTypeUrls))
                    throw TypeError(".types.PluginConfig.transactionTypeUrls: array expected");
                message.transactionTypeUrls = [];
                for (var i = 0; i < object.transactionTypeUrls.length; ++i)
                    message.transactionTypeUrls[i] = String(object.transactionTypeUrls[i]);
            }
            if (object.eventTypeUrls) {
                if (!Array.isArray(object.eventTypeUrls))
                    throw TypeError(".types.PluginConfig.eventTypeUrls: array expected");
                message.eventTypeUrls = [];
                for (var i = 0; i < object.eventTypeUrls.length; ++i)
                    message.eventTypeUrls[i] = String(object.eventTypeUrls[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginConfig
         * @static
         * @param {types.PluginConfig} message PluginConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.supportedTransactions = [];
                object.fileDescriptorProtos = [];
                object.transactionTypeUrls = [];
                object.eventTypeUrls = [];
            }
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
            if (message.supportedTransactions && message.supportedTransactions.length) {
                object.supportedTransactions = [];
                for (var j = 0; j < message.supportedTransactions.length; ++j)
                    object.supportedTransactions[j] = message.supportedTransactions[j];
            }
            if (message.fileDescriptorProtos && message.fileDescriptorProtos.length) {
                object.fileDescriptorProtos = [];
                for (var j = 0; j < message.fileDescriptorProtos.length; ++j)
                    object.fileDescriptorProtos[j] = options.bytes === String ? $util.base64.encode(message.fileDescriptorProtos[j], 0, message.fileDescriptorProtos[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.fileDescriptorProtos[j]) : message.fileDescriptorProtos[j];
            }
            if (message.transactionTypeUrls && message.transactionTypeUrls.length) {
                object.transactionTypeUrls = [];
                for (var j = 0; j < message.transactionTypeUrls.length; ++j)
                    object.transactionTypeUrls[j] = message.transactionTypeUrls[j];
            }
            if (message.eventTypeUrls && message.eventTypeUrls.length) {
                object.eventTypeUrls = [];
                for (var j = 0; j < message.eventTypeUrls.length; ++j)
                    object.eventTypeUrls[j] = message.eventTypeUrls[j];
            }
            return object;
        };

        /**
         * Converts this PluginConfig to JSON.
         * @function toJSON
         * @memberof types.PluginConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginConfig
         * @function getTypeUrl
         * @memberof types.PluginConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginConfig";
        };

        return PluginConfig;
    })();

    types.PluginFSMConfig = (function() {

        /**
         * Properties of a PluginFSMConfig.
         * @memberof types
         * @interface IPluginFSMConfig
         * @property {types.IPluginConfig|null} [config] PluginFSMConfig config
         */

        /**
         * Constructs a new PluginFSMConfig.
         * @memberof types
         * @classdesc Represents a PluginFSMConfig.
         * @implements IPluginFSMConfig
         * @constructor
         * @param {types.IPluginFSMConfig=} [properties] Properties to set
         */
        function PluginFSMConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginFSMConfig config.
         * @member {types.IPluginConfig|null|undefined} config
         * @memberof types.PluginFSMConfig
         * @instance
         */
        PluginFSMConfig.prototype.config = null;

        /**
         * Creates a new PluginFSMConfig instance using the specified properties.
         * @function create
         * @memberof types.PluginFSMConfig
         * @static
         * @param {types.IPluginFSMConfig=} [properties] Properties to set
         * @returns {types.PluginFSMConfig} PluginFSMConfig instance
         */
        PluginFSMConfig.create = function create(properties) {
            return new PluginFSMConfig(properties);
        };

        /**
         * Encodes the specified PluginFSMConfig message. Does not implicitly {@link types.PluginFSMConfig.verify|verify} messages.
         * @function encode
         * @memberof types.PluginFSMConfig
         * @static
         * @param {types.IPluginFSMConfig} message PluginFSMConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginFSMConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.types.PluginConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginFSMConfig message, length delimited. Does not implicitly {@link types.PluginFSMConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginFSMConfig
         * @static
         * @param {types.IPluginFSMConfig} message PluginFSMConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginFSMConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginFSMConfig message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginFSMConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginFSMConfig} PluginFSMConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginFSMConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginFSMConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.config = $root.types.PluginConfig.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginFSMConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginFSMConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginFSMConfig} PluginFSMConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginFSMConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginFSMConfig message.
         * @function verify
         * @memberof types.PluginFSMConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginFSMConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.types.PluginConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            return null;
        };

        /**
         * Creates a PluginFSMConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginFSMConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginFSMConfig} PluginFSMConfig
         */
        PluginFSMConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginFSMConfig)
                return object;
            var message = new $root.types.PluginFSMConfig();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".types.PluginFSMConfig.config: object expected");
                message.config = $root.types.PluginConfig.fromObject(object.config);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginFSMConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginFSMConfig
         * @static
         * @param {types.PluginFSMConfig} message PluginFSMConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginFSMConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.config = null;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.types.PluginConfig.toObject(message.config, options);
            return object;
        };

        /**
         * Converts this PluginFSMConfig to JSON.
         * @function toJSON
         * @memberof types.PluginFSMConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginFSMConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginFSMConfig
         * @function getTypeUrl
         * @memberof types.PluginFSMConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginFSMConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginFSMConfig";
        };

        return PluginFSMConfig;
    })();

    types.PluginGenesisRequest = (function() {

        /**
         * Properties of a PluginGenesisRequest.
         * @memberof types
         * @interface IPluginGenesisRequest
         * @property {Uint8Array|null} [genesisJson] PluginGenesisRequest genesisJson
         */

        /**
         * Constructs a new PluginGenesisRequest.
         * @memberof types
         * @classdesc Represents a PluginGenesisRequest.
         * @implements IPluginGenesisRequest
         * @constructor
         * @param {types.IPluginGenesisRequest=} [properties] Properties to set
         */
        function PluginGenesisRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginGenesisRequest genesisJson.
         * @member {Uint8Array} genesisJson
         * @memberof types.PluginGenesisRequest
         * @instance
         */
        PluginGenesisRequest.prototype.genesisJson = $util.newBuffer([]);

        /**
         * Creates a new PluginGenesisRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {types.IPluginGenesisRequest=} [properties] Properties to set
         * @returns {types.PluginGenesisRequest} PluginGenesisRequest instance
         */
        PluginGenesisRequest.create = function create(properties) {
            return new PluginGenesisRequest(properties);
        };

        /**
         * Encodes the specified PluginGenesisRequest message. Does not implicitly {@link types.PluginGenesisRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {types.IPluginGenesisRequest} message PluginGenesisRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginGenesisRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.genesisJson != null && Object.hasOwnProperty.call(message, "genesisJson"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.genesisJson);
            return writer;
        };

        /**
         * Encodes the specified PluginGenesisRequest message, length delimited. Does not implicitly {@link types.PluginGenesisRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {types.IPluginGenesisRequest} message PluginGenesisRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginGenesisRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginGenesisRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginGenesisRequest} PluginGenesisRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginGenesisRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginGenesisRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.genesisJson = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginGenesisRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginGenesisRequest} PluginGenesisRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginGenesisRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginGenesisRequest message.
         * @function verify
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginGenesisRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.genesisJson != null && message.hasOwnProperty("genesisJson"))
                if (!(message.genesisJson && typeof message.genesisJson.length === "number" || $util.isString(message.genesisJson)))
                    return "genesisJson: buffer expected";
            return null;
        };

        /**
         * Creates a PluginGenesisRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginGenesisRequest} PluginGenesisRequest
         */
        PluginGenesisRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginGenesisRequest)
                return object;
            var message = new $root.types.PluginGenesisRequest();
            if (object.genesisJson != null)
                if (typeof object.genesisJson === "string")
                    $util.base64.decode(object.genesisJson, message.genesisJson = $util.newBuffer($util.base64.length(object.genesisJson)), 0);
                else if (object.genesisJson.length >= 0)
                    message.genesisJson = object.genesisJson;
            return message;
        };

        /**
         * Creates a plain object from a PluginGenesisRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {types.PluginGenesisRequest} message PluginGenesisRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginGenesisRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.genesisJson = "";
                else {
                    object.genesisJson = [];
                    if (options.bytes !== Array)
                        object.genesisJson = $util.newBuffer(object.genesisJson);
                }
            if (message.genesisJson != null && message.hasOwnProperty("genesisJson"))
                object.genesisJson = options.bytes === String ? $util.base64.encode(message.genesisJson, 0, message.genesisJson.length) : options.bytes === Array ? Array.prototype.slice.call(message.genesisJson) : message.genesisJson;
            return object;
        };

        /**
         * Converts this PluginGenesisRequest to JSON.
         * @function toJSON
         * @memberof types.PluginGenesisRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginGenesisRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginGenesisRequest
         * @function getTypeUrl
         * @memberof types.PluginGenesisRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginGenesisRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginGenesisRequest";
        };

        return PluginGenesisRequest;
    })();

    types.PluginGenesisResponse = (function() {

        /**
         * Properties of a PluginGenesisResponse.
         * @memberof types
         * @interface IPluginGenesisResponse
         * @property {types.IPluginError|null} [error] PluginGenesisResponse error
         */

        /**
         * Constructs a new PluginGenesisResponse.
         * @memberof types
         * @classdesc Represents a PluginGenesisResponse.
         * @implements IPluginGenesisResponse
         * @constructor
         * @param {types.IPluginGenesisResponse=} [properties] Properties to set
         */
        function PluginGenesisResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginGenesisResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginGenesisResponse
         * @instance
         */
        PluginGenesisResponse.prototype.error = null;

        /**
         * Creates a new PluginGenesisResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {types.IPluginGenesisResponse=} [properties] Properties to set
         * @returns {types.PluginGenesisResponse} PluginGenesisResponse instance
         */
        PluginGenesisResponse.create = function create(properties) {
            return new PluginGenesisResponse(properties);
        };

        /**
         * Encodes the specified PluginGenesisResponse message. Does not implicitly {@link types.PluginGenesisResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {types.IPluginGenesisResponse} message PluginGenesisResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginGenesisResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginGenesisResponse message, length delimited. Does not implicitly {@link types.PluginGenesisResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {types.IPluginGenesisResponse} message PluginGenesisResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginGenesisResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginGenesisResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginGenesisResponse} PluginGenesisResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginGenesisResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginGenesisResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginGenesisResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginGenesisResponse} PluginGenesisResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginGenesisResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginGenesisResponse message.
         * @function verify
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginGenesisResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginGenesisResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginGenesisResponse} PluginGenesisResponse
         */
        PluginGenesisResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginGenesisResponse)
                return object;
            var message = new $root.types.PluginGenesisResponse();
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginGenesisResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginGenesisResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {types.PluginGenesisResponse} message PluginGenesisResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginGenesisResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = null;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginGenesisResponse to JSON.
         * @function toJSON
         * @memberof types.PluginGenesisResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginGenesisResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginGenesisResponse
         * @function getTypeUrl
         * @memberof types.PluginGenesisResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginGenesisResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginGenesisResponse";
        };

        return PluginGenesisResponse;
    })();

    types.PluginBeginRequest = (function() {

        /**
         * Properties of a PluginBeginRequest.
         * @memberof types
         * @interface IPluginBeginRequest
         * @property {number|Long|null} [height] PluginBeginRequest height
         */

        /**
         * Constructs a new PluginBeginRequest.
         * @memberof types
         * @classdesc Represents a PluginBeginRequest.
         * @implements IPluginBeginRequest
         * @constructor
         * @param {types.IPluginBeginRequest=} [properties] Properties to set
         */
        function PluginBeginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginBeginRequest height.
         * @member {number|Long} height
         * @memberof types.PluginBeginRequest
         * @instance
         */
        PluginBeginRequest.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PluginBeginRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginBeginRequest
         * @static
         * @param {types.IPluginBeginRequest=} [properties] Properties to set
         * @returns {types.PluginBeginRequest} PluginBeginRequest instance
         */
        PluginBeginRequest.create = function create(properties) {
            return new PluginBeginRequest(properties);
        };

        /**
         * Encodes the specified PluginBeginRequest message. Does not implicitly {@link types.PluginBeginRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginBeginRequest
         * @static
         * @param {types.IPluginBeginRequest} message PluginBeginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginBeginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
            return writer;
        };

        /**
         * Encodes the specified PluginBeginRequest message, length delimited. Does not implicitly {@link types.PluginBeginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginBeginRequest
         * @static
         * @param {types.IPluginBeginRequest} message PluginBeginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginBeginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginBeginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginBeginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginBeginRequest} PluginBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginBeginRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginBeginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.height = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginBeginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginBeginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginBeginRequest} PluginBeginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginBeginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginBeginRequest message.
         * @function verify
         * @memberof types.PluginBeginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginBeginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            return null;
        };

        /**
         * Creates a PluginBeginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginBeginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginBeginRequest} PluginBeginRequest
         */
        PluginBeginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginBeginRequest)
                return object;
            var message = new $root.types.PluginBeginRequest();
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PluginBeginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginBeginRequest
         * @static
         * @param {types.PluginBeginRequest} message PluginBeginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginBeginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            return object;
        };

        /**
         * Converts this PluginBeginRequest to JSON.
         * @function toJSON
         * @memberof types.PluginBeginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginBeginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginBeginRequest
         * @function getTypeUrl
         * @memberof types.PluginBeginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginBeginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginBeginRequest";
        };

        return PluginBeginRequest;
    })();

    types.PluginBeginResponse = (function() {

        /**
         * Properties of a PluginBeginResponse.
         * @memberof types
         * @interface IPluginBeginResponse
         * @property {Array.<types.IEvent>|null} [events] PluginBeginResponse events
         * @property {types.IPluginError|null} [error] PluginBeginResponse error
         */

        /**
         * Constructs a new PluginBeginResponse.
         * @memberof types
         * @classdesc Represents a PluginBeginResponse.
         * @implements IPluginBeginResponse
         * @constructor
         * @param {types.IPluginBeginResponse=} [properties] Properties to set
         */
        function PluginBeginResponse(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginBeginResponse events.
         * @member {Array.<types.IEvent>} events
         * @memberof types.PluginBeginResponse
         * @instance
         */
        PluginBeginResponse.prototype.events = $util.emptyArray;

        /**
         * PluginBeginResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginBeginResponse
         * @instance
         */
        PluginBeginResponse.prototype.error = null;

        /**
         * Creates a new PluginBeginResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginBeginResponse
         * @static
         * @param {types.IPluginBeginResponse=} [properties] Properties to set
         * @returns {types.PluginBeginResponse} PluginBeginResponse instance
         */
        PluginBeginResponse.create = function create(properties) {
            return new PluginBeginResponse(properties);
        };

        /**
         * Encodes the specified PluginBeginResponse message. Does not implicitly {@link types.PluginBeginResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginBeginResponse
         * @static
         * @param {types.IPluginBeginResponse} message PluginBeginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginBeginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.types.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginBeginResponse message, length delimited. Does not implicitly {@link types.PluginBeginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginBeginResponse
         * @static
         * @param {types.IPluginBeginResponse} message PluginBeginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginBeginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginBeginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginBeginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginBeginResponse} PluginBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginBeginResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginBeginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.types.Event.decode(reader, reader.uint32()));
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginBeginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginBeginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginBeginResponse} PluginBeginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginBeginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginBeginResponse message.
         * @function verify
         * @memberof types.PluginBeginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginBeginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.types.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginBeginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginBeginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginBeginResponse} PluginBeginResponse
         */
        PluginBeginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginBeginResponse)
                return object;
            var message = new $root.types.PluginBeginResponse();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".types.PluginBeginResponse.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".types.PluginBeginResponse.events: object expected");
                    message.events[i] = $root.types.Event.fromObject(object.events[i]);
                }
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginBeginResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginBeginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginBeginResponse
         * @static
         * @param {types.PluginBeginResponse} message PluginBeginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginBeginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults)
                object.error = null;
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.types.Event.toObject(message.events[j], options);
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginBeginResponse to JSON.
         * @function toJSON
         * @memberof types.PluginBeginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginBeginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginBeginResponse
         * @function getTypeUrl
         * @memberof types.PluginBeginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginBeginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginBeginResponse";
        };

        return PluginBeginResponse;
    })();

    types.PluginCheckRequest = (function() {

        /**
         * Properties of a PluginCheckRequest.
         * @memberof types
         * @interface IPluginCheckRequest
         * @property {types.ITransaction|null} [tx] PluginCheckRequest tx
         */

        /**
         * Constructs a new PluginCheckRequest.
         * @memberof types
         * @classdesc Represents a PluginCheckRequest.
         * @implements IPluginCheckRequest
         * @constructor
         * @param {types.IPluginCheckRequest=} [properties] Properties to set
         */
        function PluginCheckRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginCheckRequest tx.
         * @member {types.ITransaction|null|undefined} tx
         * @memberof types.PluginCheckRequest
         * @instance
         */
        PluginCheckRequest.prototype.tx = null;

        /**
         * Creates a new PluginCheckRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginCheckRequest
         * @static
         * @param {types.IPluginCheckRequest=} [properties] Properties to set
         * @returns {types.PluginCheckRequest} PluginCheckRequest instance
         */
        PluginCheckRequest.create = function create(properties) {
            return new PluginCheckRequest(properties);
        };

        /**
         * Encodes the specified PluginCheckRequest message. Does not implicitly {@link types.PluginCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginCheckRequest
         * @static
         * @param {types.IPluginCheckRequest} message PluginCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginCheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                $root.types.Transaction.encode(message.tx, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginCheckRequest message, length delimited. Does not implicitly {@link types.PluginCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginCheckRequest
         * @static
         * @param {types.IPluginCheckRequest} message PluginCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginCheckRequest} PluginCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginCheckRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginCheckRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tx = $root.types.Transaction.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginCheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginCheckRequest} PluginCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginCheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginCheckRequest message.
         * @function verify
         * @memberof types.PluginCheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginCheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tx != null && message.hasOwnProperty("tx")) {
                var error = $root.types.Transaction.verify(message.tx);
                if (error)
                    return "tx." + error;
            }
            return null;
        };

        /**
         * Creates a PluginCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginCheckRequest} PluginCheckRequest
         */
        PluginCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginCheckRequest)
                return object;
            var message = new $root.types.PluginCheckRequest();
            if (object.tx != null) {
                if (typeof object.tx !== "object")
                    throw TypeError(".types.PluginCheckRequest.tx: object expected");
                message.tx = $root.types.Transaction.fromObject(object.tx);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginCheckRequest
         * @static
         * @param {types.PluginCheckRequest} message PluginCheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginCheckRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tx = null;
            if (message.tx != null && message.hasOwnProperty("tx"))
                object.tx = $root.types.Transaction.toObject(message.tx, options);
            return object;
        };

        /**
         * Converts this PluginCheckRequest to JSON.
         * @function toJSON
         * @memberof types.PluginCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginCheckRequest
         * @function getTypeUrl
         * @memberof types.PluginCheckRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginCheckRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginCheckRequest";
        };

        return PluginCheckRequest;
    })();

    types.PluginCheckResponse = (function() {

        /**
         * Properties of a PluginCheckResponse.
         * @memberof types
         * @interface IPluginCheckResponse
         * @property {Array.<Uint8Array>|null} [authorizedSigners] PluginCheckResponse authorizedSigners
         * @property {Uint8Array|null} [recipient] PluginCheckResponse recipient
         * @property {types.IPluginError|null} [error] PluginCheckResponse error
         */

        /**
         * Constructs a new PluginCheckResponse.
         * @memberof types
         * @classdesc Represents a PluginCheckResponse.
         * @implements IPluginCheckResponse
         * @constructor
         * @param {types.IPluginCheckResponse=} [properties] Properties to set
         */
        function PluginCheckResponse(properties) {
            this.authorizedSigners = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginCheckResponse authorizedSigners.
         * @member {Array.<Uint8Array>} authorizedSigners
         * @memberof types.PluginCheckResponse
         * @instance
         */
        PluginCheckResponse.prototype.authorizedSigners = $util.emptyArray;

        /**
         * PluginCheckResponse recipient.
         * @member {Uint8Array} recipient
         * @memberof types.PluginCheckResponse
         * @instance
         */
        PluginCheckResponse.prototype.recipient = $util.newBuffer([]);

        /**
         * PluginCheckResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginCheckResponse
         * @instance
         */
        PluginCheckResponse.prototype.error = null;

        /**
         * Creates a new PluginCheckResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginCheckResponse
         * @static
         * @param {types.IPluginCheckResponse=} [properties] Properties to set
         * @returns {types.PluginCheckResponse} PluginCheckResponse instance
         */
        PluginCheckResponse.create = function create(properties) {
            return new PluginCheckResponse(properties);
        };

        /**
         * Encodes the specified PluginCheckResponse message. Does not implicitly {@link types.PluginCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginCheckResponse
         * @static
         * @param {types.IPluginCheckResponse} message PluginCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authorizedSigners != null && message.authorizedSigners.length)
                for (var i = 0; i < message.authorizedSigners.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.authorizedSigners[i]);
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.recipient);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginCheckResponse message, length delimited. Does not implicitly {@link types.PluginCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginCheckResponse
         * @static
         * @param {types.IPluginCheckResponse} message PluginCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginCheckResponse} PluginCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginCheckResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginCheckResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.authorizedSigners && message.authorizedSigners.length))
                            message.authorizedSigners = [];
                        message.authorizedSigners.push(reader.bytes());
                        break;
                    }
                case 2: {
                        message.recipient = reader.bytes();
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginCheckResponse} PluginCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginCheckResponse message.
         * @function verify
         * @memberof types.PluginCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.authorizedSigners != null && message.hasOwnProperty("authorizedSigners")) {
                if (!Array.isArray(message.authorizedSigners))
                    return "authorizedSigners: array expected";
                for (var i = 0; i < message.authorizedSigners.length; ++i)
                    if (!(message.authorizedSigners[i] && typeof message.authorizedSigners[i].length === "number" || $util.isString(message.authorizedSigners[i])))
                        return "authorizedSigners: buffer[] expected";
            }
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginCheckResponse} PluginCheckResponse
         */
        PluginCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginCheckResponse)
                return object;
            var message = new $root.types.PluginCheckResponse();
            if (object.authorizedSigners) {
                if (!Array.isArray(object.authorizedSigners))
                    throw TypeError(".types.PluginCheckResponse.authorizedSigners: array expected");
                message.authorizedSigners = [];
                for (var i = 0; i < object.authorizedSigners.length; ++i)
                    if (typeof object.authorizedSigners[i] === "string")
                        $util.base64.decode(object.authorizedSigners[i], message.authorizedSigners[i] = $util.newBuffer($util.base64.length(object.authorizedSigners[i])), 0);
                    else if (object.authorizedSigners[i].length >= 0)
                        message.authorizedSigners[i] = object.authorizedSigners[i];
            }
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length >= 0)
                    message.recipient = object.recipient;
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginCheckResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginCheckResponse
         * @static
         * @param {types.PluginCheckResponse} message PluginCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.authorizedSigners = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                object.error = null;
            }
            if (message.authorizedSigners && message.authorizedSigners.length) {
                object.authorizedSigners = [];
                for (var j = 0; j < message.authorizedSigners.length; ++j)
                    object.authorizedSigners[j] = options.bytes === String ? $util.base64.encode(message.authorizedSigners[j], 0, message.authorizedSigners[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.authorizedSigners[j]) : message.authorizedSigners[j];
            }
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginCheckResponse to JSON.
         * @function toJSON
         * @memberof types.PluginCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginCheckResponse
         * @function getTypeUrl
         * @memberof types.PluginCheckResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginCheckResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginCheckResponse";
        };

        return PluginCheckResponse;
    })();

    types.PluginDeliverRequest = (function() {

        /**
         * Properties of a PluginDeliverRequest.
         * @memberof types
         * @interface IPluginDeliverRequest
         * @property {types.ITransaction|null} [tx] PluginDeliverRequest tx
         */

        /**
         * Constructs a new PluginDeliverRequest.
         * @memberof types
         * @classdesc Represents a PluginDeliverRequest.
         * @implements IPluginDeliverRequest
         * @constructor
         * @param {types.IPluginDeliverRequest=} [properties] Properties to set
         */
        function PluginDeliverRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginDeliverRequest tx.
         * @member {types.ITransaction|null|undefined} tx
         * @memberof types.PluginDeliverRequest
         * @instance
         */
        PluginDeliverRequest.prototype.tx = null;

        /**
         * Creates a new PluginDeliverRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {types.IPluginDeliverRequest=} [properties] Properties to set
         * @returns {types.PluginDeliverRequest} PluginDeliverRequest instance
         */
        PluginDeliverRequest.create = function create(properties) {
            return new PluginDeliverRequest(properties);
        };

        /**
         * Encodes the specified PluginDeliverRequest message. Does not implicitly {@link types.PluginDeliverRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {types.IPluginDeliverRequest} message PluginDeliverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeliverRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                $root.types.Transaction.encode(message.tx, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginDeliverRequest message, length delimited. Does not implicitly {@link types.PluginDeliverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {types.IPluginDeliverRequest} message PluginDeliverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeliverRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginDeliverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginDeliverRequest} PluginDeliverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeliverRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginDeliverRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tx = $root.types.Transaction.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginDeliverRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginDeliverRequest} PluginDeliverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeliverRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginDeliverRequest message.
         * @function verify
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginDeliverRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tx != null && message.hasOwnProperty("tx")) {
                var error = $root.types.Transaction.verify(message.tx);
                if (error)
                    return "tx." + error;
            }
            return null;
        };

        /**
         * Creates a PluginDeliverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginDeliverRequest} PluginDeliverRequest
         */
        PluginDeliverRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginDeliverRequest)
                return object;
            var message = new $root.types.PluginDeliverRequest();
            if (object.tx != null) {
                if (typeof object.tx !== "object")
                    throw TypeError(".types.PluginDeliverRequest.tx: object expected");
                message.tx = $root.types.Transaction.fromObject(object.tx);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginDeliverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {types.PluginDeliverRequest} message PluginDeliverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginDeliverRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tx = null;
            if (message.tx != null && message.hasOwnProperty("tx"))
                object.tx = $root.types.Transaction.toObject(message.tx, options);
            return object;
        };

        /**
         * Converts this PluginDeliverRequest to JSON.
         * @function toJSON
         * @memberof types.PluginDeliverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginDeliverRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginDeliverRequest
         * @function getTypeUrl
         * @memberof types.PluginDeliverRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginDeliverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginDeliverRequest";
        };

        return PluginDeliverRequest;
    })();

    types.PluginDeliverResponse = (function() {

        /**
         * Properties of a PluginDeliverResponse.
         * @memberof types
         * @interface IPluginDeliverResponse
         * @property {Array.<types.IEvent>|null} [events] PluginDeliverResponse events
         * @property {types.IPluginError|null} [error] PluginDeliverResponse error
         */

        /**
         * Constructs a new PluginDeliverResponse.
         * @memberof types
         * @classdesc Represents a PluginDeliverResponse.
         * @implements IPluginDeliverResponse
         * @constructor
         * @param {types.IPluginDeliverResponse=} [properties] Properties to set
         */
        function PluginDeliverResponse(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginDeliverResponse events.
         * @member {Array.<types.IEvent>} events
         * @memberof types.PluginDeliverResponse
         * @instance
         */
        PluginDeliverResponse.prototype.events = $util.emptyArray;

        /**
         * PluginDeliverResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginDeliverResponse
         * @instance
         */
        PluginDeliverResponse.prototype.error = null;

        /**
         * Creates a new PluginDeliverResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {types.IPluginDeliverResponse=} [properties] Properties to set
         * @returns {types.PluginDeliverResponse} PluginDeliverResponse instance
         */
        PluginDeliverResponse.create = function create(properties) {
            return new PluginDeliverResponse(properties);
        };

        /**
         * Encodes the specified PluginDeliverResponse message. Does not implicitly {@link types.PluginDeliverResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {types.IPluginDeliverResponse} message PluginDeliverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeliverResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.types.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginDeliverResponse message, length delimited. Does not implicitly {@link types.PluginDeliverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {types.IPluginDeliverResponse} message PluginDeliverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeliverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginDeliverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginDeliverResponse} PluginDeliverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeliverResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginDeliverResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.types.Event.decode(reader, reader.uint32()));
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginDeliverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginDeliverResponse} PluginDeliverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeliverResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginDeliverResponse message.
         * @function verify
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginDeliverResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.types.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginDeliverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginDeliverResponse} PluginDeliverResponse
         */
        PluginDeliverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginDeliverResponse)
                return object;
            var message = new $root.types.PluginDeliverResponse();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".types.PluginDeliverResponse.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".types.PluginDeliverResponse.events: object expected");
                    message.events[i] = $root.types.Event.fromObject(object.events[i]);
                }
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginDeliverResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginDeliverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {types.PluginDeliverResponse} message PluginDeliverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginDeliverResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults)
                object.error = null;
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.types.Event.toObject(message.events[j], options);
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginDeliverResponse to JSON.
         * @function toJSON
         * @memberof types.PluginDeliverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginDeliverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginDeliverResponse
         * @function getTypeUrl
         * @memberof types.PluginDeliverResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginDeliverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginDeliverResponse";
        };

        return PluginDeliverResponse;
    })();

    types.PluginEndRequest = (function() {

        /**
         * Properties of a PluginEndRequest.
         * @memberof types
         * @interface IPluginEndRequest
         * @property {number|Long|null} [height] PluginEndRequest height
         * @property {Uint8Array|null} [proposerAddress] PluginEndRequest proposerAddress
         */

        /**
         * Constructs a new PluginEndRequest.
         * @memberof types
         * @classdesc Represents a PluginEndRequest.
         * @implements IPluginEndRequest
         * @constructor
         * @param {types.IPluginEndRequest=} [properties] Properties to set
         */
        function PluginEndRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginEndRequest height.
         * @member {number|Long} height
         * @memberof types.PluginEndRequest
         * @instance
         */
        PluginEndRequest.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginEndRequest proposerAddress.
         * @member {Uint8Array} proposerAddress
         * @memberof types.PluginEndRequest
         * @instance
         */
        PluginEndRequest.prototype.proposerAddress = $util.newBuffer([]);

        /**
         * Creates a new PluginEndRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginEndRequest
         * @static
         * @param {types.IPluginEndRequest=} [properties] Properties to set
         * @returns {types.PluginEndRequest} PluginEndRequest instance
         */
        PluginEndRequest.create = function create(properties) {
            return new PluginEndRequest(properties);
        };

        /**
         * Encodes the specified PluginEndRequest message. Does not implicitly {@link types.PluginEndRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginEndRequest
         * @static
         * @param {types.IPluginEndRequest} message PluginEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginEndRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
            if (message.proposerAddress != null && Object.hasOwnProperty.call(message, "proposerAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.proposerAddress);
            return writer;
        };

        /**
         * Encodes the specified PluginEndRequest message, length delimited. Does not implicitly {@link types.PluginEndRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginEndRequest
         * @static
         * @param {types.IPluginEndRequest} message PluginEndRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginEndRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginEndRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginEndRequest} PluginEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginEndRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginEndRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.height = reader.uint64();
                        break;
                    }
                case 2: {
                        message.proposerAddress = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginEndRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginEndRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginEndRequest} PluginEndRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginEndRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginEndRequest message.
         * @function verify
         * @memberof types.PluginEndRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginEndRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            if (message.proposerAddress != null && message.hasOwnProperty("proposerAddress"))
                if (!(message.proposerAddress && typeof message.proposerAddress.length === "number" || $util.isString(message.proposerAddress)))
                    return "proposerAddress: buffer expected";
            return null;
        };

        /**
         * Creates a PluginEndRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginEndRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginEndRequest} PluginEndRequest
         */
        PluginEndRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginEndRequest)
                return object;
            var message = new $root.types.PluginEndRequest();
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            if (object.proposerAddress != null)
                if (typeof object.proposerAddress === "string")
                    $util.base64.decode(object.proposerAddress, message.proposerAddress = $util.newBuffer($util.base64.length(object.proposerAddress)), 0);
                else if (object.proposerAddress.length >= 0)
                    message.proposerAddress = object.proposerAddress;
            return message;
        };

        /**
         * Creates a plain object from a PluginEndRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginEndRequest
         * @static
         * @param {types.PluginEndRequest} message PluginEndRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginEndRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.proposerAddress = "";
                else {
                    object.proposerAddress = [];
                    if (options.bytes !== Array)
                        object.proposerAddress = $util.newBuffer(object.proposerAddress);
                }
            }
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            if (message.proposerAddress != null && message.hasOwnProperty("proposerAddress"))
                object.proposerAddress = options.bytes === String ? $util.base64.encode(message.proposerAddress, 0, message.proposerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.proposerAddress) : message.proposerAddress;
            return object;
        };

        /**
         * Converts this PluginEndRequest to JSON.
         * @function toJSON
         * @memberof types.PluginEndRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginEndRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginEndRequest
         * @function getTypeUrl
         * @memberof types.PluginEndRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginEndRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginEndRequest";
        };

        return PluginEndRequest;
    })();

    types.PluginEndResponse = (function() {

        /**
         * Properties of a PluginEndResponse.
         * @memberof types
         * @interface IPluginEndResponse
         * @property {Array.<types.IEvent>|null} [events] PluginEndResponse events
         * @property {types.IPluginError|null} [error] PluginEndResponse error
         */

        /**
         * Constructs a new PluginEndResponse.
         * @memberof types
         * @classdesc Represents a PluginEndResponse.
         * @implements IPluginEndResponse
         * @constructor
         * @param {types.IPluginEndResponse=} [properties] Properties to set
         */
        function PluginEndResponse(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginEndResponse events.
         * @member {Array.<types.IEvent>} events
         * @memberof types.PluginEndResponse
         * @instance
         */
        PluginEndResponse.prototype.events = $util.emptyArray;

        /**
         * PluginEndResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginEndResponse
         * @instance
         */
        PluginEndResponse.prototype.error = null;

        /**
         * Creates a new PluginEndResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginEndResponse
         * @static
         * @param {types.IPluginEndResponse=} [properties] Properties to set
         * @returns {types.PluginEndResponse} PluginEndResponse instance
         */
        PluginEndResponse.create = function create(properties) {
            return new PluginEndResponse(properties);
        };

        /**
         * Encodes the specified PluginEndResponse message. Does not implicitly {@link types.PluginEndResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginEndResponse
         * @static
         * @param {types.IPluginEndResponse} message PluginEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginEndResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.types.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginEndResponse message, length delimited. Does not implicitly {@link types.PluginEndResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginEndResponse
         * @static
         * @param {types.IPluginEndResponse} message PluginEndResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginEndResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginEndResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginEndResponse} PluginEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginEndResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginEndResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.types.Event.decode(reader, reader.uint32()));
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginEndResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginEndResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginEndResponse} PluginEndResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginEndResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginEndResponse message.
         * @function verify
         * @memberof types.PluginEndResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginEndResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.types.Event.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginEndResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginEndResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginEndResponse} PluginEndResponse
         */
        PluginEndResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginEndResponse)
                return object;
            var message = new $root.types.PluginEndResponse();
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".types.PluginEndResponse.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".types.PluginEndResponse.events: object expected");
                    message.events[i] = $root.types.Event.fromObject(object.events[i]);
                }
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginEndResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginEndResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginEndResponse
         * @static
         * @param {types.PluginEndResponse} message PluginEndResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginEndResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults)
                object.error = null;
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.types.Event.toObject(message.events[j], options);
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginEndResponse to JSON.
         * @function toJSON
         * @memberof types.PluginEndResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginEndResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginEndResponse
         * @function getTypeUrl
         * @memberof types.PluginEndResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginEndResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginEndResponse";
        };

        return PluginEndResponse;
    })();

    types.PluginError = (function() {

        /**
         * Properties of a PluginError.
         * @memberof types
         * @interface IPluginError
         * @property {number|Long|null} [code] PluginError code
         * @property {string|null} [module] PluginError module
         * @property {string|null} [msg] PluginError msg
         */

        /**
         * Constructs a new PluginError.
         * @memberof types
         * @classdesc Represents a PluginError.
         * @implements IPluginError
         * @constructor
         * @param {types.IPluginError=} [properties] Properties to set
         */
        function PluginError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginError code.
         * @member {number|Long} code
         * @memberof types.PluginError
         * @instance
         */
        PluginError.prototype.code = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginError module.
         * @member {string} module
         * @memberof types.PluginError
         * @instance
         */
        PluginError.prototype.module = "";

        /**
         * PluginError msg.
         * @member {string} msg
         * @memberof types.PluginError
         * @instance
         */
        PluginError.prototype.msg = "";

        /**
         * Creates a new PluginError instance using the specified properties.
         * @function create
         * @memberof types.PluginError
         * @static
         * @param {types.IPluginError=} [properties] Properties to set
         * @returns {types.PluginError} PluginError instance
         */
        PluginError.create = function create(properties) {
            return new PluginError(properties);
        };

        /**
         * Encodes the specified PluginError message. Does not implicitly {@link types.PluginError.verify|verify} messages.
         * @function encode
         * @memberof types.PluginError
         * @static
         * @param {types.IPluginError} message PluginError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.code);
            if (message.module != null && Object.hasOwnProperty.call(message, "module"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.module);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified PluginError message, length delimited. Does not implicitly {@link types.PluginError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginError
         * @static
         * @param {types.IPluginError} message PluginError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginError message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginError} PluginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginError.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint64();
                        break;
                    }
                case 2: {
                        message.module = reader.string();
                        break;
                    }
                case 3: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginError} PluginError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginError message.
         * @function verify
         * @memberof types.PluginError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            if (message.module != null && message.hasOwnProperty("module"))
                if (!$util.isString(message.module))
                    return "module: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a PluginError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginError} PluginError
         */
        PluginError.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginError)
                return object;
            var message = new $root.types.PluginError();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = true;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber(true);
            if (object.module != null)
                message.module = String(object.module);
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a PluginError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginError
         * @static
         * @param {types.PluginError} message PluginError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.code = options.longs === String ? "0" : 0;
                object.module = "";
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber(true) : message.code;
            if (message.module != null && message.hasOwnProperty("module"))
                object.module = message.module;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this PluginError to JSON.
         * @function toJSON
         * @memberof types.PluginError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginError
         * @function getTypeUrl
         * @memberof types.PluginError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginError";
        };

        return PluginError;
    })();

    types.PluginStateReadRequest = (function() {

        /**
         * Properties of a PluginStateReadRequest.
         * @memberof types
         * @interface IPluginStateReadRequest
         * @property {Array.<types.IPluginKeyRead>|null} [keys] PluginStateReadRequest keys
         * @property {Array.<types.IPluginRangeRead>|null} [ranges] PluginStateReadRequest ranges
         */

        /**
         * Constructs a new PluginStateReadRequest.
         * @memberof types
         * @classdesc Represents a PluginStateReadRequest.
         * @implements IPluginStateReadRequest
         * @constructor
         * @param {types.IPluginStateReadRequest=} [properties] Properties to set
         */
        function PluginStateReadRequest(properties) {
            this.keys = [];
            this.ranges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginStateReadRequest keys.
         * @member {Array.<types.IPluginKeyRead>} keys
         * @memberof types.PluginStateReadRequest
         * @instance
         */
        PluginStateReadRequest.prototype.keys = $util.emptyArray;

        /**
         * PluginStateReadRequest ranges.
         * @member {Array.<types.IPluginRangeRead>} ranges
         * @memberof types.PluginStateReadRequest
         * @instance
         */
        PluginStateReadRequest.prototype.ranges = $util.emptyArray;

        /**
         * Creates a new PluginStateReadRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {types.IPluginStateReadRequest=} [properties] Properties to set
         * @returns {types.PluginStateReadRequest} PluginStateReadRequest instance
         */
        PluginStateReadRequest.create = function create(properties) {
            return new PluginStateReadRequest(properties);
        };

        /**
         * Encodes the specified PluginStateReadRequest message. Does not implicitly {@link types.PluginStateReadRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {types.IPluginStateReadRequest} message PluginStateReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateReadRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    $root.types.PluginKeyRead.encode(message.keys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ranges != null && message.ranges.length)
                for (var i = 0; i < message.ranges.length; ++i)
                    $root.types.PluginRangeRead.encode(message.ranges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginStateReadRequest message, length delimited. Does not implicitly {@link types.PluginStateReadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {types.IPluginStateReadRequest} message PluginStateReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateReadRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginStateReadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginStateReadRequest} PluginStateReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateReadRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginStateReadRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push($root.types.PluginKeyRead.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.ranges && message.ranges.length))
                            message.ranges = [];
                        message.ranges.push($root.types.PluginRangeRead.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginStateReadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginStateReadRequest} PluginStateReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateReadRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginStateReadRequest message.
         * @function verify
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginStateReadRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i) {
                    var error = $root.types.PluginKeyRead.verify(message.keys[i]);
                    if (error)
                        return "keys." + error;
                }
            }
            if (message.ranges != null && message.hasOwnProperty("ranges")) {
                if (!Array.isArray(message.ranges))
                    return "ranges: array expected";
                for (var i = 0; i < message.ranges.length; ++i) {
                    var error = $root.types.PluginRangeRead.verify(message.ranges[i]);
                    if (error)
                        return "ranges." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PluginStateReadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginStateReadRequest} PluginStateReadRequest
         */
        PluginStateReadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginStateReadRequest)
                return object;
            var message = new $root.types.PluginStateReadRequest();
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".types.PluginStateReadRequest.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i) {
                    if (typeof object.keys[i] !== "object")
                        throw TypeError(".types.PluginStateReadRequest.keys: object expected");
                    message.keys[i] = $root.types.PluginKeyRead.fromObject(object.keys[i]);
                }
            }
            if (object.ranges) {
                if (!Array.isArray(object.ranges))
                    throw TypeError(".types.PluginStateReadRequest.ranges: array expected");
                message.ranges = [];
                for (var i = 0; i < object.ranges.length; ++i) {
                    if (typeof object.ranges[i] !== "object")
                        throw TypeError(".types.PluginStateReadRequest.ranges: object expected");
                    message.ranges[i] = $root.types.PluginRangeRead.fromObject(object.ranges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginStateReadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {types.PluginStateReadRequest} message PluginStateReadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginStateReadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.keys = [];
                object.ranges = [];
            }
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = $root.types.PluginKeyRead.toObject(message.keys[j], options);
            }
            if (message.ranges && message.ranges.length) {
                object.ranges = [];
                for (var j = 0; j < message.ranges.length; ++j)
                    object.ranges[j] = $root.types.PluginRangeRead.toObject(message.ranges[j], options);
            }
            return object;
        };

        /**
         * Converts this PluginStateReadRequest to JSON.
         * @function toJSON
         * @memberof types.PluginStateReadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginStateReadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginStateReadRequest
         * @function getTypeUrl
         * @memberof types.PluginStateReadRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginStateReadRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginStateReadRequest";
        };

        return PluginStateReadRequest;
    })();

    types.PluginKeyRead = (function() {

        /**
         * Properties of a PluginKeyRead.
         * @memberof types
         * @interface IPluginKeyRead
         * @property {number|Long|null} [queryId] PluginKeyRead queryId
         * @property {Uint8Array|null} [key] PluginKeyRead key
         */

        /**
         * Constructs a new PluginKeyRead.
         * @memberof types
         * @classdesc Represents a PluginKeyRead.
         * @implements IPluginKeyRead
         * @constructor
         * @param {types.IPluginKeyRead=} [properties] Properties to set
         */
        function PluginKeyRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginKeyRead queryId.
         * @member {number|Long} queryId
         * @memberof types.PluginKeyRead
         * @instance
         */
        PluginKeyRead.prototype.queryId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginKeyRead key.
         * @member {Uint8Array} key
         * @memberof types.PluginKeyRead
         * @instance
         */
        PluginKeyRead.prototype.key = $util.newBuffer([]);

        /**
         * Creates a new PluginKeyRead instance using the specified properties.
         * @function create
         * @memberof types.PluginKeyRead
         * @static
         * @param {types.IPluginKeyRead=} [properties] Properties to set
         * @returns {types.PluginKeyRead} PluginKeyRead instance
         */
        PluginKeyRead.create = function create(properties) {
            return new PluginKeyRead(properties);
        };

        /**
         * Encodes the specified PluginKeyRead message. Does not implicitly {@link types.PluginKeyRead.verify|verify} messages.
         * @function encode
         * @memberof types.PluginKeyRead
         * @static
         * @param {types.IPluginKeyRead} message PluginKeyRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginKeyRead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.queryId != null && Object.hasOwnProperty.call(message, "queryId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.queryId);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
            return writer;
        };

        /**
         * Encodes the specified PluginKeyRead message, length delimited. Does not implicitly {@link types.PluginKeyRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginKeyRead
         * @static
         * @param {types.IPluginKeyRead} message PluginKeyRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginKeyRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginKeyRead message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginKeyRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginKeyRead} PluginKeyRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginKeyRead.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginKeyRead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.queryId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.key = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginKeyRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginKeyRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginKeyRead} PluginKeyRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginKeyRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginKeyRead message.
         * @function verify
         * @memberof types.PluginKeyRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginKeyRead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (!$util.isInteger(message.queryId) && !(message.queryId && $util.isInteger(message.queryId.low) && $util.isInteger(message.queryId.high)))
                    return "queryId: integer|Long expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            return null;
        };

        /**
         * Creates a PluginKeyRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginKeyRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginKeyRead} PluginKeyRead
         */
        PluginKeyRead.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginKeyRead)
                return object;
            var message = new $root.types.PluginKeyRead();
            if (object.queryId != null)
                if ($util.Long)
                    (message.queryId = $util.Long.fromValue(object.queryId)).unsigned = true;
                else if (typeof object.queryId === "string")
                    message.queryId = parseInt(object.queryId, 10);
                else if (typeof object.queryId === "number")
                    message.queryId = object.queryId;
                else if (typeof object.queryId === "object")
                    message.queryId = new $util.LongBits(object.queryId.low >>> 0, object.queryId.high >>> 0).toNumber(true);
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length >= 0)
                    message.key = object.key;
            return message;
        };

        /**
         * Creates a plain object from a PluginKeyRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginKeyRead
         * @static
         * @param {types.PluginKeyRead} message PluginKeyRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginKeyRead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.queryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.queryId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
            }
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (typeof message.queryId === "number")
                    object.queryId = options.longs === String ? String(message.queryId) : message.queryId;
                else
                    object.queryId = options.longs === String ? $util.Long.prototype.toString.call(message.queryId) : options.longs === Number ? new $util.LongBits(message.queryId.low >>> 0, message.queryId.high >>> 0).toNumber(true) : message.queryId;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            return object;
        };

        /**
         * Converts this PluginKeyRead to JSON.
         * @function toJSON
         * @memberof types.PluginKeyRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginKeyRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginKeyRead
         * @function getTypeUrl
         * @memberof types.PluginKeyRead
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginKeyRead.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginKeyRead";
        };

        return PluginKeyRead;
    })();

    types.PluginRangeRead = (function() {

        /**
         * Properties of a PluginRangeRead.
         * @memberof types
         * @interface IPluginRangeRead
         * @property {number|Long|null} [queryId] PluginRangeRead queryId
         * @property {Uint8Array|null} [prefix] PluginRangeRead prefix
         * @property {number|Long|null} [limit] PluginRangeRead limit
         * @property {boolean|null} [reverse] PluginRangeRead reverse
         */

        /**
         * Constructs a new PluginRangeRead.
         * @memberof types
         * @classdesc Represents a PluginRangeRead.
         * @implements IPluginRangeRead
         * @constructor
         * @param {types.IPluginRangeRead=} [properties] Properties to set
         */
        function PluginRangeRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginRangeRead queryId.
         * @member {number|Long} queryId
         * @memberof types.PluginRangeRead
         * @instance
         */
        PluginRangeRead.prototype.queryId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginRangeRead prefix.
         * @member {Uint8Array} prefix
         * @memberof types.PluginRangeRead
         * @instance
         */
        PluginRangeRead.prototype.prefix = $util.newBuffer([]);

        /**
         * PluginRangeRead limit.
         * @member {number|Long} limit
         * @memberof types.PluginRangeRead
         * @instance
         */
        PluginRangeRead.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginRangeRead reverse.
         * @member {boolean} reverse
         * @memberof types.PluginRangeRead
         * @instance
         */
        PluginRangeRead.prototype.reverse = false;

        /**
         * Creates a new PluginRangeRead instance using the specified properties.
         * @function create
         * @memberof types.PluginRangeRead
         * @static
         * @param {types.IPluginRangeRead=} [properties] Properties to set
         * @returns {types.PluginRangeRead} PluginRangeRead instance
         */
        PluginRangeRead.create = function create(properties) {
            return new PluginRangeRead(properties);
        };

        /**
         * Encodes the specified PluginRangeRead message. Does not implicitly {@link types.PluginRangeRead.verify|verify} messages.
         * @function encode
         * @memberof types.PluginRangeRead
         * @static
         * @param {types.IPluginRangeRead} message PluginRangeRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginRangeRead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.queryId != null && Object.hasOwnProperty.call(message, "queryId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.queryId);
            if (message.prefix != null && Object.hasOwnProperty.call(message, "prefix"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.prefix);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.limit);
            if (message.reverse != null && Object.hasOwnProperty.call(message, "reverse"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.reverse);
            return writer;
        };

        /**
         * Encodes the specified PluginRangeRead message, length delimited. Does not implicitly {@link types.PluginRangeRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginRangeRead
         * @static
         * @param {types.IPluginRangeRead} message PluginRangeRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginRangeRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginRangeRead message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginRangeRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginRangeRead} PluginRangeRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginRangeRead.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginRangeRead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.queryId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.prefix = reader.bytes();
                        break;
                    }
                case 3: {
                        message.limit = reader.uint64();
                        break;
                    }
                case 4: {
                        message.reverse = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginRangeRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginRangeRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginRangeRead} PluginRangeRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginRangeRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginRangeRead message.
         * @function verify
         * @memberof types.PluginRangeRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginRangeRead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (!$util.isInteger(message.queryId) && !(message.queryId && $util.isInteger(message.queryId.low) && $util.isInteger(message.queryId.high)))
                    return "queryId: integer|Long expected";
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                if (!(message.prefix && typeof message.prefix.length === "number" || $util.isString(message.prefix)))
                    return "prefix: buffer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            if (message.reverse != null && message.hasOwnProperty("reverse"))
                if (typeof message.reverse !== "boolean")
                    return "reverse: boolean expected";
            return null;
        };

        /**
         * Creates a PluginRangeRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginRangeRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginRangeRead} PluginRangeRead
         */
        PluginRangeRead.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginRangeRead)
                return object;
            var message = new $root.types.PluginRangeRead();
            if (object.queryId != null)
                if ($util.Long)
                    (message.queryId = $util.Long.fromValue(object.queryId)).unsigned = true;
                else if (typeof object.queryId === "string")
                    message.queryId = parseInt(object.queryId, 10);
                else if (typeof object.queryId === "number")
                    message.queryId = object.queryId;
                else if (typeof object.queryId === "object")
                    message.queryId = new $util.LongBits(object.queryId.low >>> 0, object.queryId.high >>> 0).toNumber(true);
            if (object.prefix != null)
                if (typeof object.prefix === "string")
                    $util.base64.decode(object.prefix, message.prefix = $util.newBuffer($util.base64.length(object.prefix)), 0);
                else if (object.prefix.length >= 0)
                    message.prefix = object.prefix;
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = true;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber(true);
            if (object.reverse != null)
                message.reverse = Boolean(object.reverse);
            return message;
        };

        /**
         * Creates a plain object from a PluginRangeRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginRangeRead
         * @static
         * @param {types.PluginRangeRead} message PluginRangeRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginRangeRead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.queryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.queryId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.prefix = "";
                else {
                    object.prefix = [];
                    if (options.bytes !== Array)
                        object.prefix = $util.newBuffer(object.prefix);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
                object.reverse = false;
            }
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (typeof message.queryId === "number")
                    object.queryId = options.longs === String ? String(message.queryId) : message.queryId;
                else
                    object.queryId = options.longs === String ? $util.Long.prototype.toString.call(message.queryId) : options.longs === Number ? new $util.LongBits(message.queryId.low >>> 0, message.queryId.high >>> 0).toNumber(true) : message.queryId;
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                object.prefix = options.bytes === String ? $util.base64.encode(message.prefix, 0, message.prefix.length) : options.bytes === Array ? Array.prototype.slice.call(message.prefix) : message.prefix;
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber(true) : message.limit;
            if (message.reverse != null && message.hasOwnProperty("reverse"))
                object.reverse = message.reverse;
            return object;
        };

        /**
         * Converts this PluginRangeRead to JSON.
         * @function toJSON
         * @memberof types.PluginRangeRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginRangeRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginRangeRead
         * @function getTypeUrl
         * @memberof types.PluginRangeRead
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginRangeRead.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginRangeRead";
        };

        return PluginRangeRead;
    })();

    types.PluginStateReadResponse = (function() {

        /**
         * Properties of a PluginStateReadResponse.
         * @memberof types
         * @interface IPluginStateReadResponse
         * @property {Array.<types.IPluginReadResult>|null} [results] PluginStateReadResponse results
         * @property {types.IPluginError|null} [error] PluginStateReadResponse error
         */

        /**
         * Constructs a new PluginStateReadResponse.
         * @memberof types
         * @classdesc Represents a PluginStateReadResponse.
         * @implements IPluginStateReadResponse
         * @constructor
         * @param {types.IPluginStateReadResponse=} [properties] Properties to set
         */
        function PluginStateReadResponse(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginStateReadResponse results.
         * @member {Array.<types.IPluginReadResult>} results
         * @memberof types.PluginStateReadResponse
         * @instance
         */
        PluginStateReadResponse.prototype.results = $util.emptyArray;

        /**
         * PluginStateReadResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginStateReadResponse
         * @instance
         */
        PluginStateReadResponse.prototype.error = null;

        /**
         * Creates a new PluginStateReadResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {types.IPluginStateReadResponse=} [properties] Properties to set
         * @returns {types.PluginStateReadResponse} PluginStateReadResponse instance
         */
        PluginStateReadResponse.create = function create(properties) {
            return new PluginStateReadResponse(properties);
        };

        /**
         * Encodes the specified PluginStateReadResponse message. Does not implicitly {@link types.PluginStateReadResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {types.IPluginStateReadResponse} message PluginStateReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateReadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.types.PluginReadResult.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginStateReadResponse message, length delimited. Does not implicitly {@link types.PluginStateReadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {types.IPluginStateReadResponse} message PluginStateReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateReadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginStateReadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginStateReadResponse} PluginStateReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateReadResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginStateReadResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.types.PluginReadResult.decode(reader, reader.uint32()));
                        break;
                    }
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginStateReadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginStateReadResponse} PluginStateReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateReadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginStateReadResponse message.
         * @function verify
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginStateReadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.types.PluginReadResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginStateReadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginStateReadResponse} PluginStateReadResponse
         */
        PluginStateReadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginStateReadResponse)
                return object;
            var message = new $root.types.PluginStateReadResponse();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".types.PluginStateReadResponse.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".types.PluginStateReadResponse.results: object expected");
                    message.results[i] = $root.types.PluginReadResult.fromObject(object.results[i]);
                }
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginStateReadResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginStateReadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {types.PluginStateReadResponse} message PluginStateReadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginStateReadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults)
                object.error = null;
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.types.PluginReadResult.toObject(message.results[j], options);
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginStateReadResponse to JSON.
         * @function toJSON
         * @memberof types.PluginStateReadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginStateReadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginStateReadResponse
         * @function getTypeUrl
         * @memberof types.PluginStateReadResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginStateReadResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginStateReadResponse";
        };

        return PluginStateReadResponse;
    })();

    types.PluginReadResult = (function() {

        /**
         * Properties of a PluginReadResult.
         * @memberof types
         * @interface IPluginReadResult
         * @property {number|Long|null} [queryId] PluginReadResult queryId
         * @property {Array.<types.IPluginStateEntry>|null} [entries] PluginReadResult entries
         */

        /**
         * Constructs a new PluginReadResult.
         * @memberof types
         * @classdesc Represents a PluginReadResult.
         * @implements IPluginReadResult
         * @constructor
         * @param {types.IPluginReadResult=} [properties] Properties to set
         */
        function PluginReadResult(properties) {
            this.entries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginReadResult queryId.
         * @member {number|Long} queryId
         * @memberof types.PluginReadResult
         * @instance
         */
        PluginReadResult.prototype.queryId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PluginReadResult entries.
         * @member {Array.<types.IPluginStateEntry>} entries
         * @memberof types.PluginReadResult
         * @instance
         */
        PluginReadResult.prototype.entries = $util.emptyArray;

        /**
         * Creates a new PluginReadResult instance using the specified properties.
         * @function create
         * @memberof types.PluginReadResult
         * @static
         * @param {types.IPluginReadResult=} [properties] Properties to set
         * @returns {types.PluginReadResult} PluginReadResult instance
         */
        PluginReadResult.create = function create(properties) {
            return new PluginReadResult(properties);
        };

        /**
         * Encodes the specified PluginReadResult message. Does not implicitly {@link types.PluginReadResult.verify|verify} messages.
         * @function encode
         * @memberof types.PluginReadResult
         * @static
         * @param {types.IPluginReadResult} message PluginReadResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginReadResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.queryId != null && Object.hasOwnProperty.call(message, "queryId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.queryId);
            if (message.entries != null && message.entries.length)
                for (var i = 0; i < message.entries.length; ++i)
                    $root.types.PluginStateEntry.encode(message.entries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginReadResult message, length delimited. Does not implicitly {@link types.PluginReadResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginReadResult
         * @static
         * @param {types.IPluginReadResult} message PluginReadResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginReadResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginReadResult message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginReadResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginReadResult} PluginReadResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginReadResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginReadResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.queryId = reader.uint64();
                        break;
                    }
                case 2: {
                        if (!(message.entries && message.entries.length))
                            message.entries = [];
                        message.entries.push($root.types.PluginStateEntry.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginReadResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginReadResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginReadResult} PluginReadResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginReadResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginReadResult message.
         * @function verify
         * @memberof types.PluginReadResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginReadResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (!$util.isInteger(message.queryId) && !(message.queryId && $util.isInteger(message.queryId.low) && $util.isInteger(message.queryId.high)))
                    return "queryId: integer|Long expected";
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (var i = 0; i < message.entries.length; ++i) {
                    var error = $root.types.PluginStateEntry.verify(message.entries[i]);
                    if (error)
                        return "entries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PluginReadResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginReadResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginReadResult} PluginReadResult
         */
        PluginReadResult.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginReadResult)
                return object;
            var message = new $root.types.PluginReadResult();
            if (object.queryId != null)
                if ($util.Long)
                    (message.queryId = $util.Long.fromValue(object.queryId)).unsigned = true;
                else if (typeof object.queryId === "string")
                    message.queryId = parseInt(object.queryId, 10);
                else if (typeof object.queryId === "number")
                    message.queryId = object.queryId;
                else if (typeof object.queryId === "object")
                    message.queryId = new $util.LongBits(object.queryId.low >>> 0, object.queryId.high >>> 0).toNumber(true);
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".types.PluginReadResult.entries: array expected");
                message.entries = [];
                for (var i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".types.PluginReadResult.entries: object expected");
                    message.entries[i] = $root.types.PluginStateEntry.fromObject(object.entries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginReadResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginReadResult
         * @static
         * @param {types.PluginReadResult} message PluginReadResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginReadResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.queryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.queryId = options.longs === String ? "0" : 0;
            if (message.queryId != null && message.hasOwnProperty("queryId"))
                if (typeof message.queryId === "number")
                    object.queryId = options.longs === String ? String(message.queryId) : message.queryId;
                else
                    object.queryId = options.longs === String ? $util.Long.prototype.toString.call(message.queryId) : options.longs === Number ? new $util.LongBits(message.queryId.low >>> 0, message.queryId.high >>> 0).toNumber(true) : message.queryId;
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (var j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.types.PluginStateEntry.toObject(message.entries[j], options);
            }
            return object;
        };

        /**
         * Converts this PluginReadResult to JSON.
         * @function toJSON
         * @memberof types.PluginReadResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginReadResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginReadResult
         * @function getTypeUrl
         * @memberof types.PluginReadResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginReadResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginReadResult";
        };

        return PluginReadResult;
    })();

    types.PluginStateWriteRequest = (function() {

        /**
         * Properties of a PluginStateWriteRequest.
         * @memberof types
         * @interface IPluginStateWriteRequest
         * @property {Array.<types.IPluginSetOp>|null} [sets] PluginStateWriteRequest sets
         * @property {Array.<types.IPluginDeleteOp>|null} [deletes] PluginStateWriteRequest deletes
         */

        /**
         * Constructs a new PluginStateWriteRequest.
         * @memberof types
         * @classdesc Represents a PluginStateWriteRequest.
         * @implements IPluginStateWriteRequest
         * @constructor
         * @param {types.IPluginStateWriteRequest=} [properties] Properties to set
         */
        function PluginStateWriteRequest(properties) {
            this.sets = [];
            this.deletes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginStateWriteRequest sets.
         * @member {Array.<types.IPluginSetOp>} sets
         * @memberof types.PluginStateWriteRequest
         * @instance
         */
        PluginStateWriteRequest.prototype.sets = $util.emptyArray;

        /**
         * PluginStateWriteRequest deletes.
         * @member {Array.<types.IPluginDeleteOp>} deletes
         * @memberof types.PluginStateWriteRequest
         * @instance
         */
        PluginStateWriteRequest.prototype.deletes = $util.emptyArray;

        /**
         * Creates a new PluginStateWriteRequest instance using the specified properties.
         * @function create
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {types.IPluginStateWriteRequest=} [properties] Properties to set
         * @returns {types.PluginStateWriteRequest} PluginStateWriteRequest instance
         */
        PluginStateWriteRequest.create = function create(properties) {
            return new PluginStateWriteRequest(properties);
        };

        /**
         * Encodes the specified PluginStateWriteRequest message. Does not implicitly {@link types.PluginStateWriteRequest.verify|verify} messages.
         * @function encode
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {types.IPluginStateWriteRequest} message PluginStateWriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateWriteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sets != null && message.sets.length)
                for (var i = 0; i < message.sets.length; ++i)
                    $root.types.PluginSetOp.encode(message.sets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deletes != null && message.deletes.length)
                for (var i = 0; i < message.deletes.length; ++i)
                    $root.types.PluginDeleteOp.encode(message.deletes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginStateWriteRequest message, length delimited. Does not implicitly {@link types.PluginStateWriteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {types.IPluginStateWriteRequest} message PluginStateWriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateWriteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginStateWriteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginStateWriteRequest} PluginStateWriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateWriteRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginStateWriteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.sets && message.sets.length))
                            message.sets = [];
                        message.sets.push($root.types.PluginSetOp.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.deletes && message.deletes.length))
                            message.deletes = [];
                        message.deletes.push($root.types.PluginDeleteOp.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginStateWriteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginStateWriteRequest} PluginStateWriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateWriteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginStateWriteRequest message.
         * @function verify
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginStateWriteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sets != null && message.hasOwnProperty("sets")) {
                if (!Array.isArray(message.sets))
                    return "sets: array expected";
                for (var i = 0; i < message.sets.length; ++i) {
                    var error = $root.types.PluginSetOp.verify(message.sets[i]);
                    if (error)
                        return "sets." + error;
                }
            }
            if (message.deletes != null && message.hasOwnProperty("deletes")) {
                if (!Array.isArray(message.deletes))
                    return "deletes: array expected";
                for (var i = 0; i < message.deletes.length; ++i) {
                    var error = $root.types.PluginDeleteOp.verify(message.deletes[i]);
                    if (error)
                        return "deletes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PluginStateWriteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginStateWriteRequest} PluginStateWriteRequest
         */
        PluginStateWriteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginStateWriteRequest)
                return object;
            var message = new $root.types.PluginStateWriteRequest();
            if (object.sets) {
                if (!Array.isArray(object.sets))
                    throw TypeError(".types.PluginStateWriteRequest.sets: array expected");
                message.sets = [];
                for (var i = 0; i < object.sets.length; ++i) {
                    if (typeof object.sets[i] !== "object")
                        throw TypeError(".types.PluginStateWriteRequest.sets: object expected");
                    message.sets[i] = $root.types.PluginSetOp.fromObject(object.sets[i]);
                }
            }
            if (object.deletes) {
                if (!Array.isArray(object.deletes))
                    throw TypeError(".types.PluginStateWriteRequest.deletes: array expected");
                message.deletes = [];
                for (var i = 0; i < object.deletes.length; ++i) {
                    if (typeof object.deletes[i] !== "object")
                        throw TypeError(".types.PluginStateWriteRequest.deletes: object expected");
                    message.deletes[i] = $root.types.PluginDeleteOp.fromObject(object.deletes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginStateWriteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {types.PluginStateWriteRequest} message PluginStateWriteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginStateWriteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.sets = [];
                object.deletes = [];
            }
            if (message.sets && message.sets.length) {
                object.sets = [];
                for (var j = 0; j < message.sets.length; ++j)
                    object.sets[j] = $root.types.PluginSetOp.toObject(message.sets[j], options);
            }
            if (message.deletes && message.deletes.length) {
                object.deletes = [];
                for (var j = 0; j < message.deletes.length; ++j)
                    object.deletes[j] = $root.types.PluginDeleteOp.toObject(message.deletes[j], options);
            }
            return object;
        };

        /**
         * Converts this PluginStateWriteRequest to JSON.
         * @function toJSON
         * @memberof types.PluginStateWriteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginStateWriteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginStateWriteRequest
         * @function getTypeUrl
         * @memberof types.PluginStateWriteRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginStateWriteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginStateWriteRequest";
        };

        return PluginStateWriteRequest;
    })();

    types.PluginStateWriteResponse = (function() {

        /**
         * Properties of a PluginStateWriteResponse.
         * @memberof types
         * @interface IPluginStateWriteResponse
         * @property {types.IPluginError|null} [error] PluginStateWriteResponse error
         */

        /**
         * Constructs a new PluginStateWriteResponse.
         * @memberof types
         * @classdesc Represents a PluginStateWriteResponse.
         * @implements IPluginStateWriteResponse
         * @constructor
         * @param {types.IPluginStateWriteResponse=} [properties] Properties to set
         */
        function PluginStateWriteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginStateWriteResponse error.
         * @member {types.IPluginError|null|undefined} error
         * @memberof types.PluginStateWriteResponse
         * @instance
         */
        PluginStateWriteResponse.prototype.error = null;

        /**
         * Creates a new PluginStateWriteResponse instance using the specified properties.
         * @function create
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {types.IPluginStateWriteResponse=} [properties] Properties to set
         * @returns {types.PluginStateWriteResponse} PluginStateWriteResponse instance
         */
        PluginStateWriteResponse.create = function create(properties) {
            return new PluginStateWriteResponse(properties);
        };

        /**
         * Encodes the specified PluginStateWriteResponse message. Does not implicitly {@link types.PluginStateWriteResponse.verify|verify} messages.
         * @function encode
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {types.IPluginStateWriteResponse} message PluginStateWriteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateWriteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.types.PluginError.encode(message.error, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PluginStateWriteResponse message, length delimited. Does not implicitly {@link types.PluginStateWriteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {types.IPluginStateWriteResponse} message PluginStateWriteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateWriteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginStateWriteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginStateWriteResponse} PluginStateWriteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateWriteResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginStateWriteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 99: {
                        message.error = $root.types.PluginError.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginStateWriteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginStateWriteResponse} PluginStateWriteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateWriteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginStateWriteResponse message.
         * @function verify
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginStateWriteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.types.PluginError.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a PluginStateWriteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginStateWriteResponse} PluginStateWriteResponse
         */
        PluginStateWriteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginStateWriteResponse)
                return object;
            var message = new $root.types.PluginStateWriteResponse();
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".types.PluginStateWriteResponse.error: object expected");
                message.error = $root.types.PluginError.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a PluginStateWriteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {types.PluginStateWriteResponse} message PluginStateWriteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginStateWriteResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = null;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.types.PluginError.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this PluginStateWriteResponse to JSON.
         * @function toJSON
         * @memberof types.PluginStateWriteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginStateWriteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginStateWriteResponse
         * @function getTypeUrl
         * @memberof types.PluginStateWriteResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginStateWriteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginStateWriteResponse";
        };

        return PluginStateWriteResponse;
    })();

    types.PluginSetOp = (function() {

        /**
         * Properties of a PluginSetOp.
         * @memberof types
         * @interface IPluginSetOp
         * @property {Uint8Array|null} [key] PluginSetOp key
         * @property {Uint8Array|null} [value] PluginSetOp value
         */

        /**
         * Constructs a new PluginSetOp.
         * @memberof types
         * @classdesc Represents a PluginSetOp.
         * @implements IPluginSetOp
         * @constructor
         * @param {types.IPluginSetOp=} [properties] Properties to set
         */
        function PluginSetOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginSetOp key.
         * @member {Uint8Array} key
         * @memberof types.PluginSetOp
         * @instance
         */
        PluginSetOp.prototype.key = $util.newBuffer([]);

        /**
         * PluginSetOp value.
         * @member {Uint8Array} value
         * @memberof types.PluginSetOp
         * @instance
         */
        PluginSetOp.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new PluginSetOp instance using the specified properties.
         * @function create
         * @memberof types.PluginSetOp
         * @static
         * @param {types.IPluginSetOp=} [properties] Properties to set
         * @returns {types.PluginSetOp} PluginSetOp instance
         */
        PluginSetOp.create = function create(properties) {
            return new PluginSetOp(properties);
        };

        /**
         * Encodes the specified PluginSetOp message. Does not implicitly {@link types.PluginSetOp.verify|verify} messages.
         * @function encode
         * @memberof types.PluginSetOp
         * @static
         * @param {types.IPluginSetOp} message PluginSetOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginSetOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified PluginSetOp message, length delimited. Does not implicitly {@link types.PluginSetOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginSetOp
         * @static
         * @param {types.IPluginSetOp} message PluginSetOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginSetOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginSetOp message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginSetOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginSetOp} PluginSetOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginSetOp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginSetOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.bytes();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginSetOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginSetOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginSetOp} PluginSetOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginSetOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginSetOp message.
         * @function verify
         * @memberof types.PluginSetOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginSetOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates a PluginSetOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginSetOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginSetOp} PluginSetOp
         */
        PluginSetOp.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginSetOp)
                return object;
            var message = new $root.types.PluginSetOp();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length >= 0)
                    message.key = object.key;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a PluginSetOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginSetOp
         * @static
         * @param {types.PluginSetOp} message PluginSetOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginSetOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this PluginSetOp to JSON.
         * @function toJSON
         * @memberof types.PluginSetOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginSetOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginSetOp
         * @function getTypeUrl
         * @memberof types.PluginSetOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginSetOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginSetOp";
        };

        return PluginSetOp;
    })();

    types.PluginDeleteOp = (function() {

        /**
         * Properties of a PluginDeleteOp.
         * @memberof types
         * @interface IPluginDeleteOp
         * @property {Uint8Array|null} [key] PluginDeleteOp key
         */

        /**
         * Constructs a new PluginDeleteOp.
         * @memberof types
         * @classdesc Represents a PluginDeleteOp.
         * @implements IPluginDeleteOp
         * @constructor
         * @param {types.IPluginDeleteOp=} [properties] Properties to set
         */
        function PluginDeleteOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginDeleteOp key.
         * @member {Uint8Array} key
         * @memberof types.PluginDeleteOp
         * @instance
         */
        PluginDeleteOp.prototype.key = $util.newBuffer([]);

        /**
         * Creates a new PluginDeleteOp instance using the specified properties.
         * @function create
         * @memberof types.PluginDeleteOp
         * @static
         * @param {types.IPluginDeleteOp=} [properties] Properties to set
         * @returns {types.PluginDeleteOp} PluginDeleteOp instance
         */
        PluginDeleteOp.create = function create(properties) {
            return new PluginDeleteOp(properties);
        };

        /**
         * Encodes the specified PluginDeleteOp message. Does not implicitly {@link types.PluginDeleteOp.verify|verify} messages.
         * @function encode
         * @memberof types.PluginDeleteOp
         * @static
         * @param {types.IPluginDeleteOp} message PluginDeleteOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeleteOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            return writer;
        };

        /**
         * Encodes the specified PluginDeleteOp message, length delimited. Does not implicitly {@link types.PluginDeleteOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginDeleteOp
         * @static
         * @param {types.IPluginDeleteOp} message PluginDeleteOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginDeleteOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginDeleteOp message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginDeleteOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginDeleteOp} PluginDeleteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeleteOp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginDeleteOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginDeleteOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginDeleteOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginDeleteOp} PluginDeleteOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginDeleteOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginDeleteOp message.
         * @function verify
         * @memberof types.PluginDeleteOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginDeleteOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            return null;
        };

        /**
         * Creates a PluginDeleteOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginDeleteOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginDeleteOp} PluginDeleteOp
         */
        PluginDeleteOp.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginDeleteOp)
                return object;
            var message = new $root.types.PluginDeleteOp();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length >= 0)
                    message.key = object.key;
            return message;
        };

        /**
         * Creates a plain object from a PluginDeleteOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginDeleteOp
         * @static
         * @param {types.PluginDeleteOp} message PluginDeleteOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginDeleteOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            return object;
        };

        /**
         * Converts this PluginDeleteOp to JSON.
         * @function toJSON
         * @memberof types.PluginDeleteOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginDeleteOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginDeleteOp
         * @function getTypeUrl
         * @memberof types.PluginDeleteOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginDeleteOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginDeleteOp";
        };

        return PluginDeleteOp;
    })();

    types.PluginStateEntry = (function() {

        /**
         * Properties of a PluginStateEntry.
         * @memberof types
         * @interface IPluginStateEntry
         * @property {Uint8Array|null} [key] PluginStateEntry key
         * @property {Uint8Array|null} [value] PluginStateEntry value
         */

        /**
         * Constructs a new PluginStateEntry.
         * @memberof types
         * @classdesc Represents a PluginStateEntry.
         * @implements IPluginStateEntry
         * @constructor
         * @param {types.IPluginStateEntry=} [properties] Properties to set
         */
        function PluginStateEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginStateEntry key.
         * @member {Uint8Array} key
         * @memberof types.PluginStateEntry
         * @instance
         */
        PluginStateEntry.prototype.key = $util.newBuffer([]);

        /**
         * PluginStateEntry value.
         * @member {Uint8Array} value
         * @memberof types.PluginStateEntry
         * @instance
         */
        PluginStateEntry.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new PluginStateEntry instance using the specified properties.
         * @function create
         * @memberof types.PluginStateEntry
         * @static
         * @param {types.IPluginStateEntry=} [properties] Properties to set
         * @returns {types.PluginStateEntry} PluginStateEntry instance
         */
        PluginStateEntry.create = function create(properties) {
            return new PluginStateEntry(properties);
        };

        /**
         * Encodes the specified PluginStateEntry message. Does not implicitly {@link types.PluginStateEntry.verify|verify} messages.
         * @function encode
         * @memberof types.PluginStateEntry
         * @static
         * @param {types.IPluginStateEntry} message PluginStateEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified PluginStateEntry message, length delimited. Does not implicitly {@link types.PluginStateEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PluginStateEntry
         * @static
         * @param {types.IPluginStateEntry} message PluginStateEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginStateEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginStateEntry message from the specified reader or buffer.
         * @function decode
         * @memberof types.PluginStateEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PluginStateEntry} PluginStateEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateEntry.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PluginStateEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.bytes();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginStateEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PluginStateEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PluginStateEntry} PluginStateEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginStateEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginStateEntry message.
         * @function verify
         * @memberof types.PluginStateEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginStateEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates a PluginStateEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PluginStateEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PluginStateEntry} PluginStateEntry
         */
        PluginStateEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PluginStateEntry)
                return object;
            var message = new $root.types.PluginStateEntry();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length >= 0)
                    message.key = object.key;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a PluginStateEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PluginStateEntry
         * @static
         * @param {types.PluginStateEntry} message PluginStateEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginStateEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this PluginStateEntry to JSON.
         * @function toJSON
         * @memberof types.PluginStateEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginStateEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginStateEntry
         * @function getTypeUrl
         * @memberof types.PluginStateEntry
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginStateEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PluginStateEntry";
        };

        return PluginStateEntry;
    })();

    types.Transaction = (function() {

        /**
         * Properties of a Transaction.
         * @memberof types
         * @interface ITransaction
         * @property {string|null} [messageType] Transaction messageType
         * @property {google.protobuf.IAny|null} [msg] Transaction msg
         * @property {types.ISignature|null} [signature] Transaction signature
         * @property {number|Long|null} [createdHeight] Transaction createdHeight
         * @property {number|Long|null} [time] Transaction time
         * @property {number|Long|null} [fee] Transaction fee
         * @property {string|null} [memo] Transaction memo
         * @property {number|Long|null} [networkId] Transaction networkId
         * @property {number|Long|null} [chainId] Transaction chainId
         */

        /**
         * Constructs a new Transaction.
         * @memberof types
         * @classdesc Represents a Transaction.
         * @implements ITransaction
         * @constructor
         * @param {types.ITransaction=} [properties] Properties to set
         */
        function Transaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transaction messageType.
         * @member {string} messageType
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.messageType = "";

        /**
         * Transaction msg.
         * @member {google.protobuf.IAny|null|undefined} msg
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.msg = null;

        /**
         * Transaction signature.
         * @member {types.ISignature|null|undefined} signature
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.signature = null;

        /**
         * Transaction createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transaction time.
         * @member {number|Long} time
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transaction fee.
         * @member {number|Long} fee
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transaction memo.
         * @member {string} memo
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.memo = "";

        /**
         * Transaction networkId.
         * @member {number|Long} networkId
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.networkId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transaction chainId.
         * @member {number|Long} chainId
         * @memberof types.Transaction
         * @instance
         */
        Transaction.prototype.chainId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Transaction instance using the specified properties.
         * @function create
         * @memberof types.Transaction
         * @static
         * @param {types.ITransaction=} [properties] Properties to set
         * @returns {types.Transaction} Transaction instance
         */
        Transaction.create = function create(properties) {
            return new Transaction(properties);
        };

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link types.Transaction.verify|verify} messages.
         * @function encode
         * @memberof types.Transaction
         * @static
         * @param {types.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageType);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.google.protobuf.Any.encode(message.msg, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                $root.types.Signature.encode(message.signature, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.createdHeight);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.fee);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.memo);
            if (message.networkId != null && Object.hasOwnProperty.call(message, "networkId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.networkId);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.chainId);
            return writer;
        };

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link types.Transaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Transaction
         * @static
         * @param {types.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @function decode
         * @memberof types.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Transaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.messageType = reader.string();
                        break;
                    }
                case 2: {
                        message.msg = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.signature = $root.types.Signature.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                case 5: {
                        message.time = reader.uint64();
                        break;
                    }
                case 6: {
                        message.fee = reader.uint64();
                        break;
                    }
                case 7: {
                        message.memo = reader.string();
                        break;
                    }
                case 8: {
                        message.networkId = reader.uint64();
                        break;
                    }
                case 9: {
                        message.chainId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transaction message.
         * @function verify
         * @memberof types.Transaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                if (!$util.isString(message.messageType))
                    return "messageType: string expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                var error = $root.google.protobuf.Any.verify(message.msg);
                if (error)
                    return "msg." + error;
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                var error = $root.types.Signature.verify(message.signature);
                if (error)
                    return "signature." + error;
            }
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.networkId != null && message.hasOwnProperty("networkId"))
                if (!$util.isInteger(message.networkId) && !(message.networkId && $util.isInteger(message.networkId.low) && $util.isInteger(message.networkId.high)))
                    return "networkId: integer|Long expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId) && !(message.chainId && $util.isInteger(message.chainId.low) && $util.isInteger(message.chainId.high)))
                    return "chainId: integer|Long expected";
            return null;
        };

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Transaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Transaction} Transaction
         */
        Transaction.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Transaction)
                return object;
            var message = new $root.types.Transaction();
            if (object.messageType != null)
                message.messageType = String(object.messageType);
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".types.Transaction.msg: object expected");
                message.msg = $root.google.protobuf.Any.fromObject(object.msg);
            }
            if (object.signature != null) {
                if (typeof object.signature !== "object")
                    throw TypeError(".types.Transaction.signature: object expected");
                message.signature = $root.types.Signature.fromObject(object.signature);
            }
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = true;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber(true);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.networkId != null)
                if ($util.Long)
                    (message.networkId = $util.Long.fromValue(object.networkId)).unsigned = true;
                else if (typeof object.networkId === "string")
                    message.networkId = parseInt(object.networkId, 10);
                else if (typeof object.networkId === "number")
                    message.networkId = object.networkId;
                else if (typeof object.networkId === "object")
                    message.networkId = new $util.LongBits(object.networkId.low >>> 0, object.networkId.high >>> 0).toNumber(true);
            if (object.chainId != null)
                if ($util.Long)
                    (message.chainId = $util.Long.fromValue(object.chainId)).unsigned = true;
                else if (typeof object.chainId === "string")
                    message.chainId = parseInt(object.chainId, 10);
                else if (typeof object.chainId === "number")
                    message.chainId = object.chainId;
                else if (typeof object.chainId === "object")
                    message.chainId = new $util.LongBits(object.chainId.low >>> 0, object.chainId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Transaction
         * @static
         * @param {types.Transaction} message Transaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = "";
                object.msg = null;
                object.signature = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.memo = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.networkId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.networkId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.chainId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.chainId = options.longs === String ? "0" : 0;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = message.messageType;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.google.protobuf.Any.toObject(message.msg, options);
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = $root.types.Signature.toObject(message.signature, options);
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber(true) : message.fee;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.networkId != null && message.hasOwnProperty("networkId"))
                if (typeof message.networkId === "number")
                    object.networkId = options.longs === String ? String(message.networkId) : message.networkId;
                else
                    object.networkId = options.longs === String ? $util.Long.prototype.toString.call(message.networkId) : options.longs === Number ? new $util.LongBits(message.networkId.low >>> 0, message.networkId.high >>> 0).toNumber(true) : message.networkId;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (typeof message.chainId === "number")
                    object.chainId = options.longs === String ? String(message.chainId) : message.chainId;
                else
                    object.chainId = options.longs === String ? $util.Long.prototype.toString.call(message.chainId) : options.longs === Number ? new $util.LongBits(message.chainId.low >>> 0, message.chainId.high >>> 0).toNumber(true) : message.chainId;
            return object;
        };

        /**
         * Converts this Transaction to JSON.
         * @function toJSON
         * @memberof types.Transaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transaction
         * @function getTypeUrl
         * @memberof types.Transaction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Transaction";
        };

        return Transaction;
    })();

    types.MessageSend = (function() {

        /**
         * Properties of a MessageSend.
         * @memberof types
         * @interface IMessageSend
         * @property {Uint8Array|null} [fromAddress] MessageSend fromAddress
         * @property {Uint8Array|null} [toAddress] MessageSend toAddress
         * @property {number|Long|null} [amount] MessageSend amount
         */

        /**
         * Constructs a new MessageSend.
         * @memberof types
         * @classdesc Represents a MessageSend.
         * @implements IMessageSend
         * @constructor
         * @param {types.IMessageSend=} [properties] Properties to set
         */
        function MessageSend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageSend fromAddress.
         * @member {Uint8Array} fromAddress
         * @memberof types.MessageSend
         * @instance
         */
        MessageSend.prototype.fromAddress = $util.newBuffer([]);

        /**
         * MessageSend toAddress.
         * @member {Uint8Array} toAddress
         * @memberof types.MessageSend
         * @instance
         */
        MessageSend.prototype.toAddress = $util.newBuffer([]);

        /**
         * MessageSend amount.
         * @member {number|Long} amount
         * @memberof types.MessageSend
         * @instance
         */
        MessageSend.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MessageSend instance using the specified properties.
         * @function create
         * @memberof types.MessageSend
         * @static
         * @param {types.IMessageSend=} [properties] Properties to set
         * @returns {types.MessageSend} MessageSend instance
         */
        MessageSend.create = function create(properties) {
            return new MessageSend(properties);
        };

        /**
         * Encodes the specified MessageSend message. Does not implicitly {@link types.MessageSend.verify|verify} messages.
         * @function encode
         * @memberof types.MessageSend
         * @static
         * @param {types.IMessageSend} message MessageSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromAddress != null && Object.hasOwnProperty.call(message, "fromAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.fromAddress);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.toAddress);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified MessageSend message, length delimited. Does not implicitly {@link types.MessageSend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageSend
         * @static
         * @param {types.IMessageSend} message MessageSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageSend message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageSend} MessageSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSend.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageSend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fromAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageSend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageSend} MessageSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageSend message.
         * @function verify
         * @memberof types.MessageSend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageSend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                if (!(message.fromAddress && typeof message.fromAddress.length === "number" || $util.isString(message.fromAddress)))
                    return "fromAddress: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageSend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageSend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageSend} MessageSend
         */
        MessageSend.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageSend)
                return object;
            var message = new $root.types.MessageSend();
            if (object.fromAddress != null)
                if (typeof object.fromAddress === "string")
                    $util.base64.decode(object.fromAddress, message.fromAddress = $util.newBuffer($util.base64.length(object.fromAddress)), 0);
                else if (object.fromAddress.length >= 0)
                    message.fromAddress = object.fromAddress;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MessageSend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageSend
         * @static
         * @param {types.MessageSend} message MessageSend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageSend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.fromAddress = "";
                else {
                    object.fromAddress = [];
                    if (options.bytes !== Array)
                        object.fromAddress = $util.newBuffer(object.fromAddress);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                object.fromAddress = options.bytes === String ? $util.base64.encode(message.fromAddress, 0, message.fromAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.fromAddress) : message.fromAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            return object;
        };

        /**
         * Converts this MessageSend to JSON.
         * @function toJSON
         * @memberof types.MessageSend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageSend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageSend
         * @function getTypeUrl
         * @memberof types.MessageSend
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageSend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageSend";
        };

        return MessageSend;
    })();

    types.MessageRegisterProfile = (function() {

        /**
         * Properties of a MessageRegisterProfile.
         * @memberof types
         * @interface IMessageRegisterProfile
         * @property {Uint8Array|null} [ownerAddress] MessageRegisterProfile ownerAddress
         * @property {string|null} [handle] MessageRegisterProfile handle
         * @property {string|null} [bio] MessageRegisterProfile bio
         */

        /**
         * Constructs a new MessageRegisterProfile.
         * @memberof types
         * @classdesc Represents a MessageRegisterProfile.
         * @implements IMessageRegisterProfile
         * @constructor
         * @param {types.IMessageRegisterProfile=} [properties] Properties to set
         */
        function MessageRegisterProfile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageRegisterProfile ownerAddress.
         * @member {Uint8Array} ownerAddress
         * @memberof types.MessageRegisterProfile
         * @instance
         */
        MessageRegisterProfile.prototype.ownerAddress = $util.newBuffer([]);

        /**
         * MessageRegisterProfile handle.
         * @member {string} handle
         * @memberof types.MessageRegisterProfile
         * @instance
         */
        MessageRegisterProfile.prototype.handle = "";

        /**
         * MessageRegisterProfile bio.
         * @member {string} bio
         * @memberof types.MessageRegisterProfile
         * @instance
         */
        MessageRegisterProfile.prototype.bio = "";

        /**
         * Creates a new MessageRegisterProfile instance using the specified properties.
         * @function create
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {types.IMessageRegisterProfile=} [properties] Properties to set
         * @returns {types.MessageRegisterProfile} MessageRegisterProfile instance
         */
        MessageRegisterProfile.create = function create(properties) {
            return new MessageRegisterProfile(properties);
        };

        /**
         * Encodes the specified MessageRegisterProfile message. Does not implicitly {@link types.MessageRegisterProfile.verify|verify} messages.
         * @function encode
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {types.IMessageRegisterProfile} message MessageRegisterProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRegisterProfile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ownerAddress != null && Object.hasOwnProperty.call(message, "ownerAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ownerAddress);
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.handle);
            if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.bio);
            return writer;
        };

        /**
         * Encodes the specified MessageRegisterProfile message, length delimited. Does not implicitly {@link types.MessageRegisterProfile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {types.IMessageRegisterProfile} message MessageRegisterProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRegisterProfile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRegisterProfile message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageRegisterProfile} MessageRegisterProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRegisterProfile.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageRegisterProfile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ownerAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.handle = reader.string();
                        break;
                    }
                case 3: {
                        message.bio = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageRegisterProfile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageRegisterProfile} MessageRegisterProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRegisterProfile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageRegisterProfile message.
         * @function verify
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageRegisterProfile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                if (!(message.ownerAddress && typeof message.ownerAddress.length === "number" || $util.isString(message.ownerAddress)))
                    return "ownerAddress: buffer expected";
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (!$util.isString(message.handle))
                    return "handle: string expected";
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            return null;
        };

        /**
         * Creates a MessageRegisterProfile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageRegisterProfile} MessageRegisterProfile
         */
        MessageRegisterProfile.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageRegisterProfile)
                return object;
            var message = new $root.types.MessageRegisterProfile();
            if (object.ownerAddress != null)
                if (typeof object.ownerAddress === "string")
                    $util.base64.decode(object.ownerAddress, message.ownerAddress = $util.newBuffer($util.base64.length(object.ownerAddress)), 0);
                else if (object.ownerAddress.length >= 0)
                    message.ownerAddress = object.ownerAddress;
            if (object.handle != null)
                message.handle = String(object.handle);
            if (object.bio != null)
                message.bio = String(object.bio);
            return message;
        };

        /**
         * Creates a plain object from a MessageRegisterProfile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {types.MessageRegisterProfile} message MessageRegisterProfile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageRegisterProfile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ownerAddress = "";
                else {
                    object.ownerAddress = [];
                    if (options.bytes !== Array)
                        object.ownerAddress = $util.newBuffer(object.ownerAddress);
                }
                object.handle = "";
                object.bio = "";
            }
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                object.ownerAddress = options.bytes === String ? $util.base64.encode(message.ownerAddress, 0, message.ownerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ownerAddress) : message.ownerAddress;
            if (message.handle != null && message.hasOwnProperty("handle"))
                object.handle = message.handle;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            return object;
        };

        /**
         * Converts this MessageRegisterProfile to JSON.
         * @function toJSON
         * @memberof types.MessageRegisterProfile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRegisterProfile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageRegisterProfile
         * @function getTypeUrl
         * @memberof types.MessageRegisterProfile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageRegisterProfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageRegisterProfile";
        };

        return MessageRegisterProfile;
    })();

    types.MessageGiveVibe = (function() {

        /**
         * Properties of a MessageGiveVibe.
         * @memberof types
         * @interface IMessageGiveVibe
         * @property {Uint8Array|null} [fromAddress] MessageGiveVibe fromAddress
         * @property {Uint8Array|null} [toAddress] MessageGiveVibe toAddress
         * @property {number|Long|null} [amount] MessageGiveVibe amount
         * @property {string|null} [tag] MessageGiveVibe tag
         * @property {string|null} [note] MessageGiveVibe note
         */

        /**
         * Constructs a new MessageGiveVibe.
         * @memberof types
         * @classdesc Represents a MessageGiveVibe.
         * @implements IMessageGiveVibe
         * @constructor
         * @param {types.IMessageGiveVibe=} [properties] Properties to set
         */
        function MessageGiveVibe(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageGiveVibe fromAddress.
         * @member {Uint8Array} fromAddress
         * @memberof types.MessageGiveVibe
         * @instance
         */
        MessageGiveVibe.prototype.fromAddress = $util.newBuffer([]);

        /**
         * MessageGiveVibe toAddress.
         * @member {Uint8Array} toAddress
         * @memberof types.MessageGiveVibe
         * @instance
         */
        MessageGiveVibe.prototype.toAddress = $util.newBuffer([]);

        /**
         * MessageGiveVibe amount.
         * @member {number|Long} amount
         * @memberof types.MessageGiveVibe
         * @instance
         */
        MessageGiveVibe.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageGiveVibe tag.
         * @member {string} tag
         * @memberof types.MessageGiveVibe
         * @instance
         */
        MessageGiveVibe.prototype.tag = "";

        /**
         * MessageGiveVibe note.
         * @member {string} note
         * @memberof types.MessageGiveVibe
         * @instance
         */
        MessageGiveVibe.prototype.note = "";

        /**
         * Creates a new MessageGiveVibe instance using the specified properties.
         * @function create
         * @memberof types.MessageGiveVibe
         * @static
         * @param {types.IMessageGiveVibe=} [properties] Properties to set
         * @returns {types.MessageGiveVibe} MessageGiveVibe instance
         */
        MessageGiveVibe.create = function create(properties) {
            return new MessageGiveVibe(properties);
        };

        /**
         * Encodes the specified MessageGiveVibe message. Does not implicitly {@link types.MessageGiveVibe.verify|verify} messages.
         * @function encode
         * @memberof types.MessageGiveVibe
         * @static
         * @param {types.IMessageGiveVibe} message MessageGiveVibe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageGiveVibe.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromAddress != null && Object.hasOwnProperty.call(message, "fromAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.fromAddress);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.toAddress);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amount);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tag);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.note);
            return writer;
        };

        /**
         * Encodes the specified MessageGiveVibe message, length delimited. Does not implicitly {@link types.MessageGiveVibe.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageGiveVibe
         * @static
         * @param {types.IMessageGiveVibe} message MessageGiveVibe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageGiveVibe.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageGiveVibe message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageGiveVibe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageGiveVibe} MessageGiveVibe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageGiveVibe.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageGiveVibe();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fromAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.uint64();
                        break;
                    }
                case 4: {
                        message.tag = reader.string();
                        break;
                    }
                case 5: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageGiveVibe message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageGiveVibe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageGiveVibe} MessageGiveVibe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageGiveVibe.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageGiveVibe message.
         * @function verify
         * @memberof types.MessageGiveVibe
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageGiveVibe.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                if (!(message.fromAddress && typeof message.fromAddress.length === "number" || $util.isString(message.fromAddress)))
                    return "fromAddress: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };

        /**
         * Creates a MessageGiveVibe message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageGiveVibe
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageGiveVibe} MessageGiveVibe
         */
        MessageGiveVibe.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageGiveVibe)
                return object;
            var message = new $root.types.MessageGiveVibe();
            if (object.fromAddress != null)
                if (typeof object.fromAddress === "string")
                    $util.base64.decode(object.fromAddress, message.fromAddress = $util.newBuffer($util.base64.length(object.fromAddress)), 0);
                else if (object.fromAddress.length >= 0)
                    message.fromAddress = object.fromAddress;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };

        /**
         * Creates a plain object from a MessageGiveVibe message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageGiveVibe
         * @static
         * @param {types.MessageGiveVibe} message MessageGiveVibe
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageGiveVibe.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.fromAddress = "";
                else {
                    object.fromAddress = [];
                    if (options.bytes !== Array)
                        object.fromAddress = $util.newBuffer(object.fromAddress);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.tag = "";
                object.note = "";
            }
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                object.fromAddress = options.bytes === String ? $util.base64.encode(message.fromAddress, 0, message.fromAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.fromAddress) : message.fromAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };

        /**
         * Converts this MessageGiveVibe to JSON.
         * @function toJSON
         * @memberof types.MessageGiveVibe
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageGiveVibe.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageGiveVibe
         * @function getTypeUrl
         * @memberof types.MessageGiveVibe
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageGiveVibe.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageGiveVibe";
        };

        return MessageGiveVibe;
    })();

    types.MessageCreateGuild = (function() {

        /**
         * Properties of a MessageCreateGuild.
         * @memberof types
         * @interface IMessageCreateGuild
         * @property {Uint8Array|null} [creatorAddress] MessageCreateGuild creatorAddress
         * @property {string|null} [slug] MessageCreateGuild slug
         * @property {string|null} [name] MessageCreateGuild name
         * @property {string|null} [description] MessageCreateGuild description
         */

        /**
         * Constructs a new MessageCreateGuild.
         * @memberof types
         * @classdesc Represents a MessageCreateGuild.
         * @implements IMessageCreateGuild
         * @constructor
         * @param {types.IMessageCreateGuild=} [properties] Properties to set
         */
        function MessageCreateGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageCreateGuild creatorAddress.
         * @member {Uint8Array} creatorAddress
         * @memberof types.MessageCreateGuild
         * @instance
         */
        MessageCreateGuild.prototype.creatorAddress = $util.newBuffer([]);

        /**
         * MessageCreateGuild slug.
         * @member {string} slug
         * @memberof types.MessageCreateGuild
         * @instance
         */
        MessageCreateGuild.prototype.slug = "";

        /**
         * MessageCreateGuild name.
         * @member {string} name
         * @memberof types.MessageCreateGuild
         * @instance
         */
        MessageCreateGuild.prototype.name = "";

        /**
         * MessageCreateGuild description.
         * @member {string} description
         * @memberof types.MessageCreateGuild
         * @instance
         */
        MessageCreateGuild.prototype.description = "";

        /**
         * Creates a new MessageCreateGuild instance using the specified properties.
         * @function create
         * @memberof types.MessageCreateGuild
         * @static
         * @param {types.IMessageCreateGuild=} [properties] Properties to set
         * @returns {types.MessageCreateGuild} MessageCreateGuild instance
         */
        MessageCreateGuild.create = function create(properties) {
            return new MessageCreateGuild(properties);
        };

        /**
         * Encodes the specified MessageCreateGuild message. Does not implicitly {@link types.MessageCreateGuild.verify|verify} messages.
         * @function encode
         * @memberof types.MessageCreateGuild
         * @static
         * @param {types.IMessageCreateGuild} message MessageCreateGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCreateGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.creatorAddress != null && Object.hasOwnProperty.call(message, "creatorAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.creatorAddress);
            if (message.slug != null && Object.hasOwnProperty.call(message, "slug"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.slug);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified MessageCreateGuild message, length delimited. Does not implicitly {@link types.MessageCreateGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageCreateGuild
         * @static
         * @param {types.IMessageCreateGuild} message MessageCreateGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCreateGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageCreateGuild message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageCreateGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageCreateGuild} MessageCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCreateGuild.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageCreateGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.creatorAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.slug = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.description = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageCreateGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageCreateGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageCreateGuild} MessageCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCreateGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageCreateGuild message.
         * @function verify
         * @memberof types.MessageCreateGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageCreateGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                if (!(message.creatorAddress && typeof message.creatorAddress.length === "number" || $util.isString(message.creatorAddress)))
                    return "creatorAddress: buffer expected";
            if (message.slug != null && message.hasOwnProperty("slug"))
                if (!$util.isString(message.slug))
                    return "slug: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a MessageCreateGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageCreateGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageCreateGuild} MessageCreateGuild
         */
        MessageCreateGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageCreateGuild)
                return object;
            var message = new $root.types.MessageCreateGuild();
            if (object.creatorAddress != null)
                if (typeof object.creatorAddress === "string")
                    $util.base64.decode(object.creatorAddress, message.creatorAddress = $util.newBuffer($util.base64.length(object.creatorAddress)), 0);
                else if (object.creatorAddress.length >= 0)
                    message.creatorAddress = object.creatorAddress;
            if (object.slug != null)
                message.slug = String(object.slug);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a MessageCreateGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageCreateGuild
         * @static
         * @param {types.MessageCreateGuild} message MessageCreateGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageCreateGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.creatorAddress = "";
                else {
                    object.creatorAddress = [];
                    if (options.bytes !== Array)
                        object.creatorAddress = $util.newBuffer(object.creatorAddress);
                }
                object.slug = "";
                object.name = "";
                object.description = "";
            }
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                object.creatorAddress = options.bytes === String ? $util.base64.encode(message.creatorAddress, 0, message.creatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.creatorAddress) : message.creatorAddress;
            if (message.slug != null && message.hasOwnProperty("slug"))
                object.slug = message.slug;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this MessageCreateGuild to JSON.
         * @function toJSON
         * @memberof types.MessageCreateGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageCreateGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageCreateGuild
         * @function getTypeUrl
         * @memberof types.MessageCreateGuild
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageCreateGuild.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageCreateGuild";
        };

        return MessageCreateGuild;
    })();

    types.MessagePostQuest = (function() {

        /**
         * Properties of a MessagePostQuest.
         * @memberof types
         * @interface IMessagePostQuest
         * @property {Uint8Array|null} [creatorAddress] MessagePostQuest creatorAddress
         * @property {number|Long|null} [guildId] MessagePostQuest guildId
         * @property {string|null} [title] MessagePostQuest title
         * @property {string|null} [tag] MessagePostQuest tag
         * @property {number|Long|null} [rewardRep] MessagePostQuest rewardRep
         */

        /**
         * Constructs a new MessagePostQuest.
         * @memberof types
         * @classdesc Represents a MessagePostQuest.
         * @implements IMessagePostQuest
         * @constructor
         * @param {types.IMessagePostQuest=} [properties] Properties to set
         */
        function MessagePostQuest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessagePostQuest creatorAddress.
         * @member {Uint8Array} creatorAddress
         * @memberof types.MessagePostQuest
         * @instance
         */
        MessagePostQuest.prototype.creatorAddress = $util.newBuffer([]);

        /**
         * MessagePostQuest guildId.
         * @member {number|Long} guildId
         * @memberof types.MessagePostQuest
         * @instance
         */
        MessagePostQuest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessagePostQuest title.
         * @member {string} title
         * @memberof types.MessagePostQuest
         * @instance
         */
        MessagePostQuest.prototype.title = "";

        /**
         * MessagePostQuest tag.
         * @member {string} tag
         * @memberof types.MessagePostQuest
         * @instance
         */
        MessagePostQuest.prototype.tag = "";

        /**
         * MessagePostQuest rewardRep.
         * @member {number|Long} rewardRep
         * @memberof types.MessagePostQuest
         * @instance
         */
        MessagePostQuest.prototype.rewardRep = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MessagePostQuest instance using the specified properties.
         * @function create
         * @memberof types.MessagePostQuest
         * @static
         * @param {types.IMessagePostQuest=} [properties] Properties to set
         * @returns {types.MessagePostQuest} MessagePostQuest instance
         */
        MessagePostQuest.create = function create(properties) {
            return new MessagePostQuest(properties);
        };

        /**
         * Encodes the specified MessagePostQuest message. Does not implicitly {@link types.MessagePostQuest.verify|verify} messages.
         * @function encode
         * @memberof types.MessagePostQuest
         * @static
         * @param {types.IMessagePostQuest} message MessagePostQuest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePostQuest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.creatorAddress != null && Object.hasOwnProperty.call(message, "creatorAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.creatorAddress);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tag);
            if (message.rewardRep != null && Object.hasOwnProperty.call(message, "rewardRep"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.rewardRep);
            return writer;
        };

        /**
         * Encodes the specified MessagePostQuest message, length delimited. Does not implicitly {@link types.MessagePostQuest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessagePostQuest
         * @static
         * @param {types.IMessagePostQuest} message MessagePostQuest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagePostQuest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessagePostQuest message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessagePostQuest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessagePostQuest} MessagePostQuest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePostQuest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessagePostQuest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.creatorAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.tag = reader.string();
                        break;
                    }
                case 5: {
                        message.rewardRep = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessagePostQuest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessagePostQuest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessagePostQuest} MessagePostQuest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagePostQuest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessagePostQuest message.
         * @function verify
         * @memberof types.MessagePostQuest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessagePostQuest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                if (!(message.creatorAddress && typeof message.creatorAddress.length === "number" || $util.isString(message.creatorAddress)))
                    return "creatorAddress: buffer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.rewardRep != null && message.hasOwnProperty("rewardRep"))
                if (!$util.isInteger(message.rewardRep) && !(message.rewardRep && $util.isInteger(message.rewardRep.low) && $util.isInteger(message.rewardRep.high)))
                    return "rewardRep: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessagePostQuest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessagePostQuest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessagePostQuest} MessagePostQuest
         */
        MessagePostQuest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessagePostQuest)
                return object;
            var message = new $root.types.MessagePostQuest();
            if (object.creatorAddress != null)
                if (typeof object.creatorAddress === "string")
                    $util.base64.decode(object.creatorAddress, message.creatorAddress = $util.newBuffer($util.base64.length(object.creatorAddress)), 0);
                else if (object.creatorAddress.length >= 0)
                    message.creatorAddress = object.creatorAddress;
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.title != null)
                message.title = String(object.title);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.rewardRep != null)
                if ($util.Long)
                    (message.rewardRep = $util.Long.fromValue(object.rewardRep)).unsigned = true;
                else if (typeof object.rewardRep === "string")
                    message.rewardRep = parseInt(object.rewardRep, 10);
                else if (typeof object.rewardRep === "number")
                    message.rewardRep = object.rewardRep;
                else if (typeof object.rewardRep === "object")
                    message.rewardRep = new $util.LongBits(object.rewardRep.low >>> 0, object.rewardRep.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MessagePostQuest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessagePostQuest
         * @static
         * @param {types.MessagePostQuest} message MessagePostQuest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessagePostQuest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.creatorAddress = "";
                else {
                    object.creatorAddress = [];
                    if (options.bytes !== Array)
                        object.creatorAddress = $util.newBuffer(object.creatorAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.title = "";
                object.tag = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.rewardRep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rewardRep = options.longs === String ? "0" : 0;
            }
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                object.creatorAddress = options.bytes === String ? $util.base64.encode(message.creatorAddress, 0, message.creatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.creatorAddress) : message.creatorAddress;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.rewardRep != null && message.hasOwnProperty("rewardRep"))
                if (typeof message.rewardRep === "number")
                    object.rewardRep = options.longs === String ? String(message.rewardRep) : message.rewardRep;
                else
                    object.rewardRep = options.longs === String ? $util.Long.prototype.toString.call(message.rewardRep) : options.longs === Number ? new $util.LongBits(message.rewardRep.low >>> 0, message.rewardRep.high >>> 0).toNumber(true) : message.rewardRep;
            return object;
        };

        /**
         * Converts this MessagePostQuest to JSON.
         * @function toJSON
         * @memberof types.MessagePostQuest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessagePostQuest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessagePostQuest
         * @function getTypeUrl
         * @memberof types.MessagePostQuest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessagePostQuest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessagePostQuest";
        };

        return MessagePostQuest;
    })();

    types.MessageSubmitProof = (function() {

        /**
         * Properties of a MessageSubmitProof.
         * @memberof types
         * @interface IMessageSubmitProof
         * @property {Uint8Array|null} [contributorAddress] MessageSubmitProof contributorAddress
         * @property {number|Long|null} [guildId] MessageSubmitProof guildId
         * @property {number|Long|null} [questId] MessageSubmitProof questId
         * @property {string|null} [proofUri] MessageSubmitProof proofUri
         * @property {string|null} [note] MessageSubmitProof note
         */

        /**
         * Constructs a new MessageSubmitProof.
         * @memberof types
         * @classdesc Represents a MessageSubmitProof.
         * @implements IMessageSubmitProof
         * @constructor
         * @param {types.IMessageSubmitProof=} [properties] Properties to set
         */
        function MessageSubmitProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageSubmitProof contributorAddress.
         * @member {Uint8Array} contributorAddress
         * @memberof types.MessageSubmitProof
         * @instance
         */
        MessageSubmitProof.prototype.contributorAddress = $util.newBuffer([]);

        /**
         * MessageSubmitProof guildId.
         * @member {number|Long} guildId
         * @memberof types.MessageSubmitProof
         * @instance
         */
        MessageSubmitProof.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageSubmitProof questId.
         * @member {number|Long} questId
         * @memberof types.MessageSubmitProof
         * @instance
         */
        MessageSubmitProof.prototype.questId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageSubmitProof proofUri.
         * @member {string} proofUri
         * @memberof types.MessageSubmitProof
         * @instance
         */
        MessageSubmitProof.prototype.proofUri = "";

        /**
         * MessageSubmitProof note.
         * @member {string} note
         * @memberof types.MessageSubmitProof
         * @instance
         */
        MessageSubmitProof.prototype.note = "";

        /**
         * Creates a new MessageSubmitProof instance using the specified properties.
         * @function create
         * @memberof types.MessageSubmitProof
         * @static
         * @param {types.IMessageSubmitProof=} [properties] Properties to set
         * @returns {types.MessageSubmitProof} MessageSubmitProof instance
         */
        MessageSubmitProof.create = function create(properties) {
            return new MessageSubmitProof(properties);
        };

        /**
         * Encodes the specified MessageSubmitProof message. Does not implicitly {@link types.MessageSubmitProof.verify|verify} messages.
         * @function encode
         * @memberof types.MessageSubmitProof
         * @static
         * @param {types.IMessageSubmitProof} message MessageSubmitProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSubmitProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contributorAddress != null && Object.hasOwnProperty.call(message, "contributorAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.contributorAddress);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.questId != null && Object.hasOwnProperty.call(message, "questId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.questId);
            if (message.proofUri != null && Object.hasOwnProperty.call(message, "proofUri"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.proofUri);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.note);
            return writer;
        };

        /**
         * Encodes the specified MessageSubmitProof message, length delimited. Does not implicitly {@link types.MessageSubmitProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageSubmitProof
         * @static
         * @param {types.IMessageSubmitProof} message MessageSubmitProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageSubmitProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageSubmitProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageSubmitProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageSubmitProof} MessageSubmitProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSubmitProof.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageSubmitProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.contributorAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.questId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.proofUri = reader.string();
                        break;
                    }
                case 5: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageSubmitProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageSubmitProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageSubmitProof} MessageSubmitProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageSubmitProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageSubmitProof message.
         * @function verify
         * @memberof types.MessageSubmitProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageSubmitProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contributorAddress != null && message.hasOwnProperty("contributorAddress"))
                if (!(message.contributorAddress && typeof message.contributorAddress.length === "number" || $util.isString(message.contributorAddress)))
                    return "contributorAddress: buffer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.questId != null && message.hasOwnProperty("questId"))
                if (!$util.isInteger(message.questId) && !(message.questId && $util.isInteger(message.questId.low) && $util.isInteger(message.questId.high)))
                    return "questId: integer|Long expected";
            if (message.proofUri != null && message.hasOwnProperty("proofUri"))
                if (!$util.isString(message.proofUri))
                    return "proofUri: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };

        /**
         * Creates a MessageSubmitProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageSubmitProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageSubmitProof} MessageSubmitProof
         */
        MessageSubmitProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageSubmitProof)
                return object;
            var message = new $root.types.MessageSubmitProof();
            if (object.contributorAddress != null)
                if (typeof object.contributorAddress === "string")
                    $util.base64.decode(object.contributorAddress, message.contributorAddress = $util.newBuffer($util.base64.length(object.contributorAddress)), 0);
                else if (object.contributorAddress.length >= 0)
                    message.contributorAddress = object.contributorAddress;
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.questId != null)
                if ($util.Long)
                    (message.questId = $util.Long.fromValue(object.questId)).unsigned = true;
                else if (typeof object.questId === "string")
                    message.questId = parseInt(object.questId, 10);
                else if (typeof object.questId === "number")
                    message.questId = object.questId;
                else if (typeof object.questId === "object")
                    message.questId = new $util.LongBits(object.questId.low >>> 0, object.questId.high >>> 0).toNumber(true);
            if (object.proofUri != null)
                message.proofUri = String(object.proofUri);
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };

        /**
         * Creates a plain object from a MessageSubmitProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageSubmitProof
         * @static
         * @param {types.MessageSubmitProof} message MessageSubmitProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageSubmitProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.contributorAddress = "";
                else {
                    object.contributorAddress = [];
                    if (options.bytes !== Array)
                        object.contributorAddress = $util.newBuffer(object.contributorAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.questId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.questId = options.longs === String ? "0" : 0;
                object.proofUri = "";
                object.note = "";
            }
            if (message.contributorAddress != null && message.hasOwnProperty("contributorAddress"))
                object.contributorAddress = options.bytes === String ? $util.base64.encode(message.contributorAddress, 0, message.contributorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.contributorAddress) : message.contributorAddress;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.questId != null && message.hasOwnProperty("questId"))
                if (typeof message.questId === "number")
                    object.questId = options.longs === String ? String(message.questId) : message.questId;
                else
                    object.questId = options.longs === String ? $util.Long.prototype.toString.call(message.questId) : options.longs === Number ? new $util.LongBits(message.questId.low >>> 0, message.questId.high >>> 0).toNumber(true) : message.questId;
            if (message.proofUri != null && message.hasOwnProperty("proofUri"))
                object.proofUri = message.proofUri;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };

        /**
         * Converts this MessageSubmitProof to JSON.
         * @function toJSON
         * @memberof types.MessageSubmitProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageSubmitProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageSubmitProof
         * @function getTypeUrl
         * @memberof types.MessageSubmitProof
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageSubmitProof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageSubmitProof";
        };

        return MessageSubmitProof;
    })();

    types.MessageAttestContribution = (function() {

        /**
         * Properties of a MessageAttestContribution.
         * @memberof types
         * @interface IMessageAttestContribution
         * @property {Uint8Array|null} [reviewerAddress] MessageAttestContribution reviewerAddress
         * @property {number|Long|null} [proofId] MessageAttestContribution proofId
         * @property {number|Long|null} [amount] MessageAttestContribution amount
         * @property {string|null} [note] MessageAttestContribution note
         */

        /**
         * Constructs a new MessageAttestContribution.
         * @memberof types
         * @classdesc Represents a MessageAttestContribution.
         * @implements IMessageAttestContribution
         * @constructor
         * @param {types.IMessageAttestContribution=} [properties] Properties to set
         */
        function MessageAttestContribution(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageAttestContribution reviewerAddress.
         * @member {Uint8Array} reviewerAddress
         * @memberof types.MessageAttestContribution
         * @instance
         */
        MessageAttestContribution.prototype.reviewerAddress = $util.newBuffer([]);

        /**
         * MessageAttestContribution proofId.
         * @member {number|Long} proofId
         * @memberof types.MessageAttestContribution
         * @instance
         */
        MessageAttestContribution.prototype.proofId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageAttestContribution amount.
         * @member {number|Long} amount
         * @memberof types.MessageAttestContribution
         * @instance
         */
        MessageAttestContribution.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageAttestContribution note.
         * @member {string} note
         * @memberof types.MessageAttestContribution
         * @instance
         */
        MessageAttestContribution.prototype.note = "";

        /**
         * Creates a new MessageAttestContribution instance using the specified properties.
         * @function create
         * @memberof types.MessageAttestContribution
         * @static
         * @param {types.IMessageAttestContribution=} [properties] Properties to set
         * @returns {types.MessageAttestContribution} MessageAttestContribution instance
         */
        MessageAttestContribution.create = function create(properties) {
            return new MessageAttestContribution(properties);
        };

        /**
         * Encodes the specified MessageAttestContribution message. Does not implicitly {@link types.MessageAttestContribution.verify|verify} messages.
         * @function encode
         * @memberof types.MessageAttestContribution
         * @static
         * @param {types.IMessageAttestContribution} message MessageAttestContribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageAttestContribution.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reviewerAddress != null && Object.hasOwnProperty.call(message, "reviewerAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.reviewerAddress);
            if (message.proofId != null && Object.hasOwnProperty.call(message, "proofId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.proofId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amount);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.note);
            return writer;
        };

        /**
         * Encodes the specified MessageAttestContribution message, length delimited. Does not implicitly {@link types.MessageAttestContribution.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageAttestContribution
         * @static
         * @param {types.IMessageAttestContribution} message MessageAttestContribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageAttestContribution.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageAttestContribution message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageAttestContribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageAttestContribution} MessageAttestContribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageAttestContribution.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageAttestContribution();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.reviewerAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.proofId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.amount = reader.uint64();
                        break;
                    }
                case 4: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageAttestContribution message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageAttestContribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageAttestContribution} MessageAttestContribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageAttestContribution.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageAttestContribution message.
         * @function verify
         * @memberof types.MessageAttestContribution
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageAttestContribution.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reviewerAddress != null && message.hasOwnProperty("reviewerAddress"))
                if (!(message.reviewerAddress && typeof message.reviewerAddress.length === "number" || $util.isString(message.reviewerAddress)))
                    return "reviewerAddress: buffer expected";
            if (message.proofId != null && message.hasOwnProperty("proofId"))
                if (!$util.isInteger(message.proofId) && !(message.proofId && $util.isInteger(message.proofId.low) && $util.isInteger(message.proofId.high)))
                    return "proofId: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };

        /**
         * Creates a MessageAttestContribution message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageAttestContribution
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageAttestContribution} MessageAttestContribution
         */
        MessageAttestContribution.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageAttestContribution)
                return object;
            var message = new $root.types.MessageAttestContribution();
            if (object.reviewerAddress != null)
                if (typeof object.reviewerAddress === "string")
                    $util.base64.decode(object.reviewerAddress, message.reviewerAddress = $util.newBuffer($util.base64.length(object.reviewerAddress)), 0);
                else if (object.reviewerAddress.length >= 0)
                    message.reviewerAddress = object.reviewerAddress;
            if (object.proofId != null)
                if ($util.Long)
                    (message.proofId = $util.Long.fromValue(object.proofId)).unsigned = true;
                else if (typeof object.proofId === "string")
                    message.proofId = parseInt(object.proofId, 10);
                else if (typeof object.proofId === "number")
                    message.proofId = object.proofId;
                else if (typeof object.proofId === "object")
                    message.proofId = new $util.LongBits(object.proofId.low >>> 0, object.proofId.high >>> 0).toNumber(true);
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };

        /**
         * Creates a plain object from a MessageAttestContribution message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageAttestContribution
         * @static
         * @param {types.MessageAttestContribution} message MessageAttestContribution
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageAttestContribution.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.reviewerAddress = "";
                else {
                    object.reviewerAddress = [];
                    if (options.bytes !== Array)
                        object.reviewerAddress = $util.newBuffer(object.reviewerAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.proofId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.proofId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.note = "";
            }
            if (message.reviewerAddress != null && message.hasOwnProperty("reviewerAddress"))
                object.reviewerAddress = options.bytes === String ? $util.base64.encode(message.reviewerAddress, 0, message.reviewerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.reviewerAddress) : message.reviewerAddress;
            if (message.proofId != null && message.hasOwnProperty("proofId"))
                if (typeof message.proofId === "number")
                    object.proofId = options.longs === String ? String(message.proofId) : message.proofId;
                else
                    object.proofId = options.longs === String ? $util.Long.prototype.toString.call(message.proofId) : options.longs === Number ? new $util.LongBits(message.proofId.low >>> 0, message.proofId.high >>> 0).toNumber(true) : message.proofId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };

        /**
         * Converts this MessageAttestContribution to JSON.
         * @function toJSON
         * @memberof types.MessageAttestContribution
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageAttestContribution.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageAttestContribution
         * @function getTypeUrl
         * @memberof types.MessageAttestContribution
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageAttestContribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageAttestContribution";
        };

        return MessageAttestContribution;
    })();

    types.MessageIssueBadge = (function() {

        /**
         * Properties of a MessageIssueBadge.
         * @memberof types
         * @interface IMessageIssueBadge
         * @property {Uint8Array|null} [issuerAddress] MessageIssueBadge issuerAddress
         * @property {Uint8Array|null} [toAddress] MessageIssueBadge toAddress
         * @property {number|Long|null} [guildId] MessageIssueBadge guildId
         * @property {string|null} [badgeName] MessageIssueBadge badgeName
         * @property {string|null} [badgeUri] MessageIssueBadge badgeUri
         */

        /**
         * Constructs a new MessageIssueBadge.
         * @memberof types
         * @classdesc Represents a MessageIssueBadge.
         * @implements IMessageIssueBadge
         * @constructor
         * @param {types.IMessageIssueBadge=} [properties] Properties to set
         */
        function MessageIssueBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageIssueBadge issuerAddress.
         * @member {Uint8Array} issuerAddress
         * @memberof types.MessageIssueBadge
         * @instance
         */
        MessageIssueBadge.prototype.issuerAddress = $util.newBuffer([]);

        /**
         * MessageIssueBadge toAddress.
         * @member {Uint8Array} toAddress
         * @memberof types.MessageIssueBadge
         * @instance
         */
        MessageIssueBadge.prototype.toAddress = $util.newBuffer([]);

        /**
         * MessageIssueBadge guildId.
         * @member {number|Long} guildId
         * @memberof types.MessageIssueBadge
         * @instance
         */
        MessageIssueBadge.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageIssueBadge badgeName.
         * @member {string} badgeName
         * @memberof types.MessageIssueBadge
         * @instance
         */
        MessageIssueBadge.prototype.badgeName = "";

        /**
         * MessageIssueBadge badgeUri.
         * @member {string} badgeUri
         * @memberof types.MessageIssueBadge
         * @instance
         */
        MessageIssueBadge.prototype.badgeUri = "";

        /**
         * Creates a new MessageIssueBadge instance using the specified properties.
         * @function create
         * @memberof types.MessageIssueBadge
         * @static
         * @param {types.IMessageIssueBadge=} [properties] Properties to set
         * @returns {types.MessageIssueBadge} MessageIssueBadge instance
         */
        MessageIssueBadge.create = function create(properties) {
            return new MessageIssueBadge(properties);
        };

        /**
         * Encodes the specified MessageIssueBadge message. Does not implicitly {@link types.MessageIssueBadge.verify|verify} messages.
         * @function encode
         * @memberof types.MessageIssueBadge
         * @static
         * @param {types.IMessageIssueBadge} message MessageIssueBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageIssueBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.issuerAddress != null && Object.hasOwnProperty.call(message, "issuerAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.issuerAddress);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.toAddress);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.guildId);
            if (message.badgeName != null && Object.hasOwnProperty.call(message, "badgeName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.badgeName);
            if (message.badgeUri != null && Object.hasOwnProperty.call(message, "badgeUri"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.badgeUri);
            return writer;
        };

        /**
         * Encodes the specified MessageIssueBadge message, length delimited. Does not implicitly {@link types.MessageIssueBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageIssueBadge
         * @static
         * @param {types.IMessageIssueBadge} message MessageIssueBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageIssueBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageIssueBadge message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageIssueBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageIssueBadge} MessageIssueBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageIssueBadge.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageIssueBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.issuerAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 3: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.badgeName = reader.string();
                        break;
                    }
                case 5: {
                        message.badgeUri = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageIssueBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageIssueBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageIssueBadge} MessageIssueBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageIssueBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageIssueBadge message.
         * @function verify
         * @memberof types.MessageIssueBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageIssueBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.issuerAddress != null && message.hasOwnProperty("issuerAddress"))
                if (!(message.issuerAddress && typeof message.issuerAddress.length === "number" || $util.isString(message.issuerAddress)))
                    return "issuerAddress: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.badgeName != null && message.hasOwnProperty("badgeName"))
                if (!$util.isString(message.badgeName))
                    return "badgeName: string expected";
            if (message.badgeUri != null && message.hasOwnProperty("badgeUri"))
                if (!$util.isString(message.badgeUri))
                    return "badgeUri: string expected";
            return null;
        };

        /**
         * Creates a MessageIssueBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageIssueBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageIssueBadge} MessageIssueBadge
         */
        MessageIssueBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageIssueBadge)
                return object;
            var message = new $root.types.MessageIssueBadge();
            if (object.issuerAddress != null)
                if (typeof object.issuerAddress === "string")
                    $util.base64.decode(object.issuerAddress, message.issuerAddress = $util.newBuffer($util.base64.length(object.issuerAddress)), 0);
                else if (object.issuerAddress.length >= 0)
                    message.issuerAddress = object.issuerAddress;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.badgeName != null)
                message.badgeName = String(object.badgeName);
            if (object.badgeUri != null)
                message.badgeUri = String(object.badgeUri);
            return message;
        };

        /**
         * Creates a plain object from a MessageIssueBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageIssueBadge
         * @static
         * @param {types.MessageIssueBadge} message MessageIssueBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageIssueBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.issuerAddress = "";
                else {
                    object.issuerAddress = [];
                    if (options.bytes !== Array)
                        object.issuerAddress = $util.newBuffer(object.issuerAddress);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.badgeName = "";
                object.badgeUri = "";
            }
            if (message.issuerAddress != null && message.hasOwnProperty("issuerAddress"))
                object.issuerAddress = options.bytes === String ? $util.base64.encode(message.issuerAddress, 0, message.issuerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.issuerAddress) : message.issuerAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.badgeName != null && message.hasOwnProperty("badgeName"))
                object.badgeName = message.badgeName;
            if (message.badgeUri != null && message.hasOwnProperty("badgeUri"))
                object.badgeUri = message.badgeUri;
            return object;
        };

        /**
         * Converts this MessageIssueBadge to JSON.
         * @function toJSON
         * @memberof types.MessageIssueBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageIssueBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageIssueBadge
         * @function getTypeUrl
         * @memberof types.MessageIssueBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageIssueBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageIssueBadge";
        };

        return MessageIssueBadge;
    })();

    types.MessageCreateGate = (function() {

        /**
         * Properties of a MessageCreateGate.
         * @memberof types
         * @interface IMessageCreateGate
         * @property {Uint8Array|null} [creatorAddress] MessageCreateGate creatorAddress
         * @property {number|Long|null} [guildId] MessageCreateGate guildId
         * @property {string|null} [gateName] MessageCreateGate gateName
         * @property {number|Long|null} [requiredRep] MessageCreateGate requiredRep
         * @property {string|null} [requiredBadge] MessageCreateGate requiredBadge
         */

        /**
         * Constructs a new MessageCreateGate.
         * @memberof types
         * @classdesc Represents a MessageCreateGate.
         * @implements IMessageCreateGate
         * @constructor
         * @param {types.IMessageCreateGate=} [properties] Properties to set
         */
        function MessageCreateGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageCreateGate creatorAddress.
         * @member {Uint8Array} creatorAddress
         * @memberof types.MessageCreateGate
         * @instance
         */
        MessageCreateGate.prototype.creatorAddress = $util.newBuffer([]);

        /**
         * MessageCreateGate guildId.
         * @member {number|Long} guildId
         * @memberof types.MessageCreateGate
         * @instance
         */
        MessageCreateGate.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageCreateGate gateName.
         * @member {string} gateName
         * @memberof types.MessageCreateGate
         * @instance
         */
        MessageCreateGate.prototype.gateName = "";

        /**
         * MessageCreateGate requiredRep.
         * @member {number|Long} requiredRep
         * @memberof types.MessageCreateGate
         * @instance
         */
        MessageCreateGate.prototype.requiredRep = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageCreateGate requiredBadge.
         * @member {string} requiredBadge
         * @memberof types.MessageCreateGate
         * @instance
         */
        MessageCreateGate.prototype.requiredBadge = "";

        /**
         * Creates a new MessageCreateGate instance using the specified properties.
         * @function create
         * @memberof types.MessageCreateGate
         * @static
         * @param {types.IMessageCreateGate=} [properties] Properties to set
         * @returns {types.MessageCreateGate} MessageCreateGate instance
         */
        MessageCreateGate.create = function create(properties) {
            return new MessageCreateGate(properties);
        };

        /**
         * Encodes the specified MessageCreateGate message. Does not implicitly {@link types.MessageCreateGate.verify|verify} messages.
         * @function encode
         * @memberof types.MessageCreateGate
         * @static
         * @param {types.IMessageCreateGate} message MessageCreateGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCreateGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.creatorAddress != null && Object.hasOwnProperty.call(message, "creatorAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.creatorAddress);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.gateName != null && Object.hasOwnProperty.call(message, "gateName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gateName);
            if (message.requiredRep != null && Object.hasOwnProperty.call(message, "requiredRep"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.requiredRep);
            if (message.requiredBadge != null && Object.hasOwnProperty.call(message, "requiredBadge"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.requiredBadge);
            return writer;
        };

        /**
         * Encodes the specified MessageCreateGate message, length delimited. Does not implicitly {@link types.MessageCreateGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageCreateGate
         * @static
         * @param {types.IMessageCreateGate} message MessageCreateGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCreateGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageCreateGate message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageCreateGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageCreateGate} MessageCreateGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCreateGate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageCreateGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.creatorAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.gateName = reader.string();
                        break;
                    }
                case 4: {
                        message.requiredRep = reader.uint64();
                        break;
                    }
                case 5: {
                        message.requiredBadge = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageCreateGate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageCreateGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageCreateGate} MessageCreateGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCreateGate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageCreateGate message.
         * @function verify
         * @memberof types.MessageCreateGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageCreateGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                if (!(message.creatorAddress && typeof message.creatorAddress.length === "number" || $util.isString(message.creatorAddress)))
                    return "creatorAddress: buffer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.gateName != null && message.hasOwnProperty("gateName"))
                if (!$util.isString(message.gateName))
                    return "gateName: string expected";
            if (message.requiredRep != null && message.hasOwnProperty("requiredRep"))
                if (!$util.isInteger(message.requiredRep) && !(message.requiredRep && $util.isInteger(message.requiredRep.low) && $util.isInteger(message.requiredRep.high)))
                    return "requiredRep: integer|Long expected";
            if (message.requiredBadge != null && message.hasOwnProperty("requiredBadge"))
                if (!$util.isString(message.requiredBadge))
                    return "requiredBadge: string expected";
            return null;
        };

        /**
         * Creates a MessageCreateGate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageCreateGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageCreateGate} MessageCreateGate
         */
        MessageCreateGate.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageCreateGate)
                return object;
            var message = new $root.types.MessageCreateGate();
            if (object.creatorAddress != null)
                if (typeof object.creatorAddress === "string")
                    $util.base64.decode(object.creatorAddress, message.creatorAddress = $util.newBuffer($util.base64.length(object.creatorAddress)), 0);
                else if (object.creatorAddress.length >= 0)
                    message.creatorAddress = object.creatorAddress;
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.gateName != null)
                message.gateName = String(object.gateName);
            if (object.requiredRep != null)
                if ($util.Long)
                    (message.requiredRep = $util.Long.fromValue(object.requiredRep)).unsigned = true;
                else if (typeof object.requiredRep === "string")
                    message.requiredRep = parseInt(object.requiredRep, 10);
                else if (typeof object.requiredRep === "number")
                    message.requiredRep = object.requiredRep;
                else if (typeof object.requiredRep === "object")
                    message.requiredRep = new $util.LongBits(object.requiredRep.low >>> 0, object.requiredRep.high >>> 0).toNumber(true);
            if (object.requiredBadge != null)
                message.requiredBadge = String(object.requiredBadge);
            return message;
        };

        /**
         * Creates a plain object from a MessageCreateGate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageCreateGate
         * @static
         * @param {types.MessageCreateGate} message MessageCreateGate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageCreateGate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.creatorAddress = "";
                else {
                    object.creatorAddress = [];
                    if (options.bytes !== Array)
                        object.creatorAddress = $util.newBuffer(object.creatorAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.gateName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.requiredRep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requiredRep = options.longs === String ? "0" : 0;
                object.requiredBadge = "";
            }
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                object.creatorAddress = options.bytes === String ? $util.base64.encode(message.creatorAddress, 0, message.creatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.creatorAddress) : message.creatorAddress;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.gateName != null && message.hasOwnProperty("gateName"))
                object.gateName = message.gateName;
            if (message.requiredRep != null && message.hasOwnProperty("requiredRep"))
                if (typeof message.requiredRep === "number")
                    object.requiredRep = options.longs === String ? String(message.requiredRep) : message.requiredRep;
                else
                    object.requiredRep = options.longs === String ? $util.Long.prototype.toString.call(message.requiredRep) : options.longs === Number ? new $util.LongBits(message.requiredRep.low >>> 0, message.requiredRep.high >>> 0).toNumber(true) : message.requiredRep;
            if (message.requiredBadge != null && message.hasOwnProperty("requiredBadge"))
                object.requiredBadge = message.requiredBadge;
            return object;
        };

        /**
         * Converts this MessageCreateGate to JSON.
         * @function toJSON
         * @memberof types.MessageCreateGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageCreateGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageCreateGate
         * @function getTypeUrl
         * @memberof types.MessageCreateGate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageCreateGate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageCreateGate";
        };

        return MessageCreateGate;
    })();

    types.MessageCheckGateAccess = (function() {

        /**
         * Properties of a MessageCheckGateAccess.
         * @memberof types
         * @interface IMessageCheckGateAccess
         * @property {Uint8Array|null} [visitorAddress] MessageCheckGateAccess visitorAddress
         * @property {number|Long|null} [gateId] MessageCheckGateAccess gateId
         */

        /**
         * Constructs a new MessageCheckGateAccess.
         * @memberof types
         * @classdesc Represents a MessageCheckGateAccess.
         * @implements IMessageCheckGateAccess
         * @constructor
         * @param {types.IMessageCheckGateAccess=} [properties] Properties to set
         */
        function MessageCheckGateAccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageCheckGateAccess visitorAddress.
         * @member {Uint8Array} visitorAddress
         * @memberof types.MessageCheckGateAccess
         * @instance
         */
        MessageCheckGateAccess.prototype.visitorAddress = $util.newBuffer([]);

        /**
         * MessageCheckGateAccess gateId.
         * @member {number|Long} gateId
         * @memberof types.MessageCheckGateAccess
         * @instance
         */
        MessageCheckGateAccess.prototype.gateId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MessageCheckGateAccess instance using the specified properties.
         * @function create
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {types.IMessageCheckGateAccess=} [properties] Properties to set
         * @returns {types.MessageCheckGateAccess} MessageCheckGateAccess instance
         */
        MessageCheckGateAccess.create = function create(properties) {
            return new MessageCheckGateAccess(properties);
        };

        /**
         * Encodes the specified MessageCheckGateAccess message. Does not implicitly {@link types.MessageCheckGateAccess.verify|verify} messages.
         * @function encode
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {types.IMessageCheckGateAccess} message MessageCheckGateAccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCheckGateAccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visitorAddress != null && Object.hasOwnProperty.call(message, "visitorAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.visitorAddress);
            if (message.gateId != null && Object.hasOwnProperty.call(message, "gateId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gateId);
            return writer;
        };

        /**
         * Encodes the specified MessageCheckGateAccess message, length delimited. Does not implicitly {@link types.MessageCheckGateAccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {types.IMessageCheckGateAccess} message MessageCheckGateAccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCheckGateAccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageCheckGateAccess message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageCheckGateAccess} MessageCheckGateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCheckGateAccess.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageCheckGateAccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.visitorAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.gateId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageCheckGateAccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageCheckGateAccess} MessageCheckGateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCheckGateAccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageCheckGateAccess message.
         * @function verify
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageCheckGateAccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visitorAddress != null && message.hasOwnProperty("visitorAddress"))
                if (!(message.visitorAddress && typeof message.visitorAddress.length === "number" || $util.isString(message.visitorAddress)))
                    return "visitorAddress: buffer expected";
            if (message.gateId != null && message.hasOwnProperty("gateId"))
                if (!$util.isInteger(message.gateId) && !(message.gateId && $util.isInteger(message.gateId.low) && $util.isInteger(message.gateId.high)))
                    return "gateId: integer|Long expected";
            return null;
        };

        /**
         * Creates a MessageCheckGateAccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageCheckGateAccess} MessageCheckGateAccess
         */
        MessageCheckGateAccess.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageCheckGateAccess)
                return object;
            var message = new $root.types.MessageCheckGateAccess();
            if (object.visitorAddress != null)
                if (typeof object.visitorAddress === "string")
                    $util.base64.decode(object.visitorAddress, message.visitorAddress = $util.newBuffer($util.base64.length(object.visitorAddress)), 0);
                else if (object.visitorAddress.length >= 0)
                    message.visitorAddress = object.visitorAddress;
            if (object.gateId != null)
                if ($util.Long)
                    (message.gateId = $util.Long.fromValue(object.gateId)).unsigned = true;
                else if (typeof object.gateId === "string")
                    message.gateId = parseInt(object.gateId, 10);
                else if (typeof object.gateId === "number")
                    message.gateId = object.gateId;
                else if (typeof object.gateId === "object")
                    message.gateId = new $util.LongBits(object.gateId.low >>> 0, object.gateId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MessageCheckGateAccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {types.MessageCheckGateAccess} message MessageCheckGateAccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageCheckGateAccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.visitorAddress = "";
                else {
                    object.visitorAddress = [];
                    if (options.bytes !== Array)
                        object.visitorAddress = $util.newBuffer(object.visitorAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gateId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gateId = options.longs === String ? "0" : 0;
            }
            if (message.visitorAddress != null && message.hasOwnProperty("visitorAddress"))
                object.visitorAddress = options.bytes === String ? $util.base64.encode(message.visitorAddress, 0, message.visitorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.visitorAddress) : message.visitorAddress;
            if (message.gateId != null && message.hasOwnProperty("gateId"))
                if (typeof message.gateId === "number")
                    object.gateId = options.longs === String ? String(message.gateId) : message.gateId;
                else
                    object.gateId = options.longs === String ? $util.Long.prototype.toString.call(message.gateId) : options.longs === Number ? new $util.LongBits(message.gateId.low >>> 0, message.gateId.high >>> 0).toNumber(true) : message.gateId;
            return object;
        };

        /**
         * Converts this MessageCheckGateAccess to JSON.
         * @function toJSON
         * @memberof types.MessageCheckGateAccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageCheckGateAccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageCheckGateAccess
         * @function getTypeUrl
         * @memberof types.MessageCheckGateAccess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageCheckGateAccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageCheckGateAccess";
        };

        return MessageCheckGateAccess;
    })();

    types.MessageCastReputationVote = (function() {

        /**
         * Properties of a MessageCastReputationVote.
         * @memberof types
         * @interface IMessageCastReputationVote
         * @property {Uint8Array|null} [voterAddress] MessageCastReputationVote voterAddress
         * @property {number|Long|null} [guildId] MessageCastReputationVote guildId
         * @property {string|null} [proposalId] MessageCastReputationVote proposalId
         * @property {string|null} [choice] MessageCastReputationVote choice
         */

        /**
         * Constructs a new MessageCastReputationVote.
         * @memberof types
         * @classdesc Represents a MessageCastReputationVote.
         * @implements IMessageCastReputationVote
         * @constructor
         * @param {types.IMessageCastReputationVote=} [properties] Properties to set
         */
        function MessageCastReputationVote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageCastReputationVote voterAddress.
         * @member {Uint8Array} voterAddress
         * @memberof types.MessageCastReputationVote
         * @instance
         */
        MessageCastReputationVote.prototype.voterAddress = $util.newBuffer([]);

        /**
         * MessageCastReputationVote guildId.
         * @member {number|Long} guildId
         * @memberof types.MessageCastReputationVote
         * @instance
         */
        MessageCastReputationVote.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MessageCastReputationVote proposalId.
         * @member {string} proposalId
         * @memberof types.MessageCastReputationVote
         * @instance
         */
        MessageCastReputationVote.prototype.proposalId = "";

        /**
         * MessageCastReputationVote choice.
         * @member {string} choice
         * @memberof types.MessageCastReputationVote
         * @instance
         */
        MessageCastReputationVote.prototype.choice = "";

        /**
         * Creates a new MessageCastReputationVote instance using the specified properties.
         * @function create
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {types.IMessageCastReputationVote=} [properties] Properties to set
         * @returns {types.MessageCastReputationVote} MessageCastReputationVote instance
         */
        MessageCastReputationVote.create = function create(properties) {
            return new MessageCastReputationVote(properties);
        };

        /**
         * Encodes the specified MessageCastReputationVote message. Does not implicitly {@link types.MessageCastReputationVote.verify|verify} messages.
         * @function encode
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {types.IMessageCastReputationVote} message MessageCastReputationVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCastReputationVote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.voterAddress != null && Object.hasOwnProperty.call(message, "voterAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.voterAddress);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.proposalId != null && Object.hasOwnProperty.call(message, "proposalId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.proposalId);
            if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.choice);
            return writer;
        };

        /**
         * Encodes the specified MessageCastReputationVote message, length delimited. Does not implicitly {@link types.MessageCastReputationVote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {types.IMessageCastReputationVote} message MessageCastReputationVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageCastReputationVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageCastReputationVote message from the specified reader or buffer.
         * @function decode
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MessageCastReputationVote} MessageCastReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCastReputationVote.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MessageCastReputationVote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.voterAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.proposalId = reader.string();
                        break;
                    }
                case 4: {
                        message.choice = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageCastReputationVote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MessageCastReputationVote} MessageCastReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageCastReputationVote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageCastReputationVote message.
         * @function verify
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageCastReputationVote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.voterAddress != null && message.hasOwnProperty("voterAddress"))
                if (!(message.voterAddress && typeof message.voterAddress.length === "number" || $util.isString(message.voterAddress)))
                    return "voterAddress: buffer expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.proposalId != null && message.hasOwnProperty("proposalId"))
                if (!$util.isString(message.proposalId))
                    return "proposalId: string expected";
            if (message.choice != null && message.hasOwnProperty("choice"))
                if (!$util.isString(message.choice))
                    return "choice: string expected";
            return null;
        };

        /**
         * Creates a MessageCastReputationVote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MessageCastReputationVote} MessageCastReputationVote
         */
        MessageCastReputationVote.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MessageCastReputationVote)
                return object;
            var message = new $root.types.MessageCastReputationVote();
            if (object.voterAddress != null)
                if (typeof object.voterAddress === "string")
                    $util.base64.decode(object.voterAddress, message.voterAddress = $util.newBuffer($util.base64.length(object.voterAddress)), 0);
                else if (object.voterAddress.length >= 0)
                    message.voterAddress = object.voterAddress;
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.proposalId != null)
                message.proposalId = String(object.proposalId);
            if (object.choice != null)
                message.choice = String(object.choice);
            return message;
        };

        /**
         * Creates a plain object from a MessageCastReputationVote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {types.MessageCastReputationVote} message MessageCastReputationVote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageCastReputationVote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.voterAddress = "";
                else {
                    object.voterAddress = [];
                    if (options.bytes !== Array)
                        object.voterAddress = $util.newBuffer(object.voterAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.proposalId = "";
                object.choice = "";
            }
            if (message.voterAddress != null && message.hasOwnProperty("voterAddress"))
                object.voterAddress = options.bytes === String ? $util.base64.encode(message.voterAddress, 0, message.voterAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.voterAddress) : message.voterAddress;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.proposalId != null && message.hasOwnProperty("proposalId"))
                object.proposalId = message.proposalId;
            if (message.choice != null && message.hasOwnProperty("choice"))
                object.choice = message.choice;
            return object;
        };

        /**
         * Converts this MessageCastReputationVote to JSON.
         * @function toJSON
         * @memberof types.MessageCastReputationVote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageCastReputationVote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageCastReputationVote
         * @function getTypeUrl
         * @memberof types.MessageCastReputationVote
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageCastReputationVote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MessageCastReputationVote";
        };

        return MessageCastReputationVote;
    })();

    types.SocialProfile = (function() {

        /**
         * Properties of a SocialProfile.
         * @memberof types
         * @interface ISocialProfile
         * @property {Uint8Array|null} [ownerAddress] SocialProfile ownerAddress
         * @property {string|null} [handle] SocialProfile handle
         * @property {string|null} [bio] SocialProfile bio
         * @property {number|Long|null} [vibeScore] SocialProfile vibeScore
         * @property {number|Long|null} [vibesGiven] SocialProfile vibesGiven
         * @property {number|Long|null} [vibesReceived] SocialProfile vibesReceived
         * @property {number|Long|null} [createdHeight] SocialProfile createdHeight
         * @property {number|Long|null} [updatedHeight] SocialProfile updatedHeight
         */

        /**
         * Constructs a new SocialProfile.
         * @memberof types
         * @classdesc Represents a SocialProfile.
         * @implements ISocialProfile
         * @constructor
         * @param {types.ISocialProfile=} [properties] Properties to set
         */
        function SocialProfile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SocialProfile ownerAddress.
         * @member {Uint8Array} ownerAddress
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.ownerAddress = $util.newBuffer([]);

        /**
         * SocialProfile handle.
         * @member {string} handle
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.handle = "";

        /**
         * SocialProfile bio.
         * @member {string} bio
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.bio = "";

        /**
         * SocialProfile vibeScore.
         * @member {number|Long} vibeScore
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.vibeScore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SocialProfile vibesGiven.
         * @member {number|Long} vibesGiven
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.vibesGiven = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SocialProfile vibesReceived.
         * @member {number|Long} vibesReceived
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.vibesReceived = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SocialProfile createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SocialProfile updatedHeight.
         * @member {number|Long} updatedHeight
         * @memberof types.SocialProfile
         * @instance
         */
        SocialProfile.prototype.updatedHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SocialProfile instance using the specified properties.
         * @function create
         * @memberof types.SocialProfile
         * @static
         * @param {types.ISocialProfile=} [properties] Properties to set
         * @returns {types.SocialProfile} SocialProfile instance
         */
        SocialProfile.create = function create(properties) {
            return new SocialProfile(properties);
        };

        /**
         * Encodes the specified SocialProfile message. Does not implicitly {@link types.SocialProfile.verify|verify} messages.
         * @function encode
         * @memberof types.SocialProfile
         * @static
         * @param {types.ISocialProfile} message SocialProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocialProfile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ownerAddress != null && Object.hasOwnProperty.call(message, "ownerAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ownerAddress);
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.handle);
            if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.bio);
            if (message.vibeScore != null && Object.hasOwnProperty.call(message, "vibeScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.vibeScore);
            if (message.vibesGiven != null && Object.hasOwnProperty.call(message, "vibesGiven"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.vibesGiven);
            if (message.vibesReceived != null && Object.hasOwnProperty.call(message, "vibesReceived"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.vibesReceived);
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.createdHeight);
            if (message.updatedHeight != null && Object.hasOwnProperty.call(message, "updatedHeight"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.updatedHeight);
            return writer;
        };

        /**
         * Encodes the specified SocialProfile message, length delimited. Does not implicitly {@link types.SocialProfile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.SocialProfile
         * @static
         * @param {types.ISocialProfile} message SocialProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocialProfile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SocialProfile message from the specified reader or buffer.
         * @function decode
         * @memberof types.SocialProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.SocialProfile} SocialProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocialProfile.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.SocialProfile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ownerAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.handle = reader.string();
                        break;
                    }
                case 3: {
                        message.bio = reader.string();
                        break;
                    }
                case 4: {
                        message.vibeScore = reader.uint64();
                        break;
                    }
                case 5: {
                        message.vibesGiven = reader.uint64();
                        break;
                    }
                case 6: {
                        message.vibesReceived = reader.uint64();
                        break;
                    }
                case 7: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                case 8: {
                        message.updatedHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SocialProfile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.SocialProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.SocialProfile} SocialProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocialProfile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SocialProfile message.
         * @function verify
         * @memberof types.SocialProfile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SocialProfile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                if (!(message.ownerAddress && typeof message.ownerAddress.length === "number" || $util.isString(message.ownerAddress)))
                    return "ownerAddress: buffer expected";
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (!$util.isString(message.handle))
                    return "handle: string expected";
            if (message.bio != null && message.hasOwnProperty("bio"))
                if (!$util.isString(message.bio))
                    return "bio: string expected";
            if (message.vibeScore != null && message.hasOwnProperty("vibeScore"))
                if (!$util.isInteger(message.vibeScore) && !(message.vibeScore && $util.isInteger(message.vibeScore.low) && $util.isInteger(message.vibeScore.high)))
                    return "vibeScore: integer|Long expected";
            if (message.vibesGiven != null && message.hasOwnProperty("vibesGiven"))
                if (!$util.isInteger(message.vibesGiven) && !(message.vibesGiven && $util.isInteger(message.vibesGiven.low) && $util.isInteger(message.vibesGiven.high)))
                    return "vibesGiven: integer|Long expected";
            if (message.vibesReceived != null && message.hasOwnProperty("vibesReceived"))
                if (!$util.isInteger(message.vibesReceived) && !(message.vibesReceived && $util.isInteger(message.vibesReceived.low) && $util.isInteger(message.vibesReceived.high)))
                    return "vibesReceived: integer|Long expected";
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            if (message.updatedHeight != null && message.hasOwnProperty("updatedHeight"))
                if (!$util.isInteger(message.updatedHeight) && !(message.updatedHeight && $util.isInteger(message.updatedHeight.low) && $util.isInteger(message.updatedHeight.high)))
                    return "updatedHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a SocialProfile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.SocialProfile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.SocialProfile} SocialProfile
         */
        SocialProfile.fromObject = function fromObject(object) {
            if (object instanceof $root.types.SocialProfile)
                return object;
            var message = new $root.types.SocialProfile();
            if (object.ownerAddress != null)
                if (typeof object.ownerAddress === "string")
                    $util.base64.decode(object.ownerAddress, message.ownerAddress = $util.newBuffer($util.base64.length(object.ownerAddress)), 0);
                else if (object.ownerAddress.length >= 0)
                    message.ownerAddress = object.ownerAddress;
            if (object.handle != null)
                message.handle = String(object.handle);
            if (object.bio != null)
                message.bio = String(object.bio);
            if (object.vibeScore != null)
                if ($util.Long)
                    (message.vibeScore = $util.Long.fromValue(object.vibeScore)).unsigned = true;
                else if (typeof object.vibeScore === "string")
                    message.vibeScore = parseInt(object.vibeScore, 10);
                else if (typeof object.vibeScore === "number")
                    message.vibeScore = object.vibeScore;
                else if (typeof object.vibeScore === "object")
                    message.vibeScore = new $util.LongBits(object.vibeScore.low >>> 0, object.vibeScore.high >>> 0).toNumber(true);
            if (object.vibesGiven != null)
                if ($util.Long)
                    (message.vibesGiven = $util.Long.fromValue(object.vibesGiven)).unsigned = true;
                else if (typeof object.vibesGiven === "string")
                    message.vibesGiven = parseInt(object.vibesGiven, 10);
                else if (typeof object.vibesGiven === "number")
                    message.vibesGiven = object.vibesGiven;
                else if (typeof object.vibesGiven === "object")
                    message.vibesGiven = new $util.LongBits(object.vibesGiven.low >>> 0, object.vibesGiven.high >>> 0).toNumber(true);
            if (object.vibesReceived != null)
                if ($util.Long)
                    (message.vibesReceived = $util.Long.fromValue(object.vibesReceived)).unsigned = true;
                else if (typeof object.vibesReceived === "string")
                    message.vibesReceived = parseInt(object.vibesReceived, 10);
                else if (typeof object.vibesReceived === "number")
                    message.vibesReceived = object.vibesReceived;
                else if (typeof object.vibesReceived === "object")
                    message.vibesReceived = new $util.LongBits(object.vibesReceived.low >>> 0, object.vibesReceived.high >>> 0).toNumber(true);
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            if (object.updatedHeight != null)
                if ($util.Long)
                    (message.updatedHeight = $util.Long.fromValue(object.updatedHeight)).unsigned = true;
                else if (typeof object.updatedHeight === "string")
                    message.updatedHeight = parseInt(object.updatedHeight, 10);
                else if (typeof object.updatedHeight === "number")
                    message.updatedHeight = object.updatedHeight;
                else if (typeof object.updatedHeight === "object")
                    message.updatedHeight = new $util.LongBits(object.updatedHeight.low >>> 0, object.updatedHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SocialProfile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.SocialProfile
         * @static
         * @param {types.SocialProfile} message SocialProfile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SocialProfile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ownerAddress = "";
                else {
                    object.ownerAddress = [];
                    if (options.bytes !== Array)
                        object.ownerAddress = $util.newBuffer(object.ownerAddress);
                }
                object.handle = "";
                object.bio = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.vibeScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.vibeScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.vibesGiven = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.vibesGiven = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.vibesReceived = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.vibesReceived = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.updatedHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedHeight = options.longs === String ? "0" : 0;
            }
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                object.ownerAddress = options.bytes === String ? $util.base64.encode(message.ownerAddress, 0, message.ownerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ownerAddress) : message.ownerAddress;
            if (message.handle != null && message.hasOwnProperty("handle"))
                object.handle = message.handle;
            if (message.bio != null && message.hasOwnProperty("bio"))
                object.bio = message.bio;
            if (message.vibeScore != null && message.hasOwnProperty("vibeScore"))
                if (typeof message.vibeScore === "number")
                    object.vibeScore = options.longs === String ? String(message.vibeScore) : message.vibeScore;
                else
                    object.vibeScore = options.longs === String ? $util.Long.prototype.toString.call(message.vibeScore) : options.longs === Number ? new $util.LongBits(message.vibeScore.low >>> 0, message.vibeScore.high >>> 0).toNumber(true) : message.vibeScore;
            if (message.vibesGiven != null && message.hasOwnProperty("vibesGiven"))
                if (typeof message.vibesGiven === "number")
                    object.vibesGiven = options.longs === String ? String(message.vibesGiven) : message.vibesGiven;
                else
                    object.vibesGiven = options.longs === String ? $util.Long.prototype.toString.call(message.vibesGiven) : options.longs === Number ? new $util.LongBits(message.vibesGiven.low >>> 0, message.vibesGiven.high >>> 0).toNumber(true) : message.vibesGiven;
            if (message.vibesReceived != null && message.hasOwnProperty("vibesReceived"))
                if (typeof message.vibesReceived === "number")
                    object.vibesReceived = options.longs === String ? String(message.vibesReceived) : message.vibesReceived;
                else
                    object.vibesReceived = options.longs === String ? $util.Long.prototype.toString.call(message.vibesReceived) : options.longs === Number ? new $util.LongBits(message.vibesReceived.low >>> 0, message.vibesReceived.high >>> 0).toNumber(true) : message.vibesReceived;
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            if (message.updatedHeight != null && message.hasOwnProperty("updatedHeight"))
                if (typeof message.updatedHeight === "number")
                    object.updatedHeight = options.longs === String ? String(message.updatedHeight) : message.updatedHeight;
                else
                    object.updatedHeight = options.longs === String ? $util.Long.prototype.toString.call(message.updatedHeight) : options.longs === Number ? new $util.LongBits(message.updatedHeight.low >>> 0, message.updatedHeight.high >>> 0).toNumber(true) : message.updatedHeight;
            return object;
        };

        /**
         * Converts this SocialProfile to JSON.
         * @function toJSON
         * @memberof types.SocialProfile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SocialProfile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SocialProfile
         * @function getTypeUrl
         * @memberof types.SocialProfile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SocialProfile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.SocialProfile";
        };

        return SocialProfile;
    })();

    types.VibeAttestation = (function() {

        /**
         * Properties of a VibeAttestation.
         * @memberof types
         * @interface IVibeAttestation
         * @property {number|Long|null} [id] VibeAttestation id
         * @property {Uint8Array|null} [fromAddress] VibeAttestation fromAddress
         * @property {Uint8Array|null} [toAddress] VibeAttestation toAddress
         * @property {number|Long|null} [amount] VibeAttestation amount
         * @property {string|null} [tag] VibeAttestation tag
         * @property {string|null} [note] VibeAttestation note
         * @property {number|Long|null} [height] VibeAttestation height
         */

        /**
         * Constructs a new VibeAttestation.
         * @memberof types
         * @classdesc Represents a VibeAttestation.
         * @implements IVibeAttestation
         * @constructor
         * @param {types.IVibeAttestation=} [properties] Properties to set
         */
        function VibeAttestation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VibeAttestation id.
         * @member {number|Long} id
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VibeAttestation fromAddress.
         * @member {Uint8Array} fromAddress
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.fromAddress = $util.newBuffer([]);

        /**
         * VibeAttestation toAddress.
         * @member {Uint8Array} toAddress
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.toAddress = $util.newBuffer([]);

        /**
         * VibeAttestation amount.
         * @member {number|Long} amount
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VibeAttestation tag.
         * @member {string} tag
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.tag = "";

        /**
         * VibeAttestation note.
         * @member {string} note
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.note = "";

        /**
         * VibeAttestation height.
         * @member {number|Long} height
         * @memberof types.VibeAttestation
         * @instance
         */
        VibeAttestation.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new VibeAttestation instance using the specified properties.
         * @function create
         * @memberof types.VibeAttestation
         * @static
         * @param {types.IVibeAttestation=} [properties] Properties to set
         * @returns {types.VibeAttestation} VibeAttestation instance
         */
        VibeAttestation.create = function create(properties) {
            return new VibeAttestation(properties);
        };

        /**
         * Encodes the specified VibeAttestation message. Does not implicitly {@link types.VibeAttestation.verify|verify} messages.
         * @function encode
         * @memberof types.VibeAttestation
         * @static
         * @param {types.IVibeAttestation} message VibeAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VibeAttestation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.fromAddress != null && Object.hasOwnProperty.call(message, "fromAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.fromAddress);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.toAddress);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amount);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tag);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.note);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.height);
            return writer;
        };

        /**
         * Encodes the specified VibeAttestation message, length delimited. Does not implicitly {@link types.VibeAttestation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VibeAttestation
         * @static
         * @param {types.IVibeAttestation} message VibeAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VibeAttestation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VibeAttestation message from the specified reader or buffer.
         * @function decode
         * @memberof types.VibeAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VibeAttestation} VibeAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VibeAttestation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VibeAttestation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.fromAddress = reader.bytes();
                        break;
                    }
                case 3: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.amount = reader.uint64();
                        break;
                    }
                case 5: {
                        message.tag = reader.string();
                        break;
                    }
                case 6: {
                        message.note = reader.string();
                        break;
                    }
                case 7: {
                        message.height = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VibeAttestation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VibeAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VibeAttestation} VibeAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VibeAttestation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VibeAttestation message.
         * @function verify
         * @memberof types.VibeAttestation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VibeAttestation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                if (!(message.fromAddress && typeof message.fromAddress.length === "number" || $util.isString(message.fromAddress)))
                    return "fromAddress: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            return null;
        };

        /**
         * Creates a VibeAttestation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VibeAttestation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VibeAttestation} VibeAttestation
         */
        VibeAttestation.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VibeAttestation)
                return object;
            var message = new $root.types.VibeAttestation();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.fromAddress != null)
                if (typeof object.fromAddress === "string")
                    $util.base64.decode(object.fromAddress, message.fromAddress = $util.newBuffer($util.base64.length(object.fromAddress)), 0);
                else if (object.fromAddress.length >= 0)
                    message.fromAddress = object.fromAddress;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.note != null)
                message.note = String(object.note);
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a VibeAttestation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VibeAttestation
         * @static
         * @param {types.VibeAttestation} message VibeAttestation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VibeAttestation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.fromAddress = "";
                else {
                    object.fromAddress = [];
                    if (options.bytes !== Array)
                        object.fromAddress = $util.newBuffer(object.fromAddress);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.tag = "";
                object.note = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.fromAddress != null && message.hasOwnProperty("fromAddress"))
                object.fromAddress = options.bytes === String ? $util.base64.encode(message.fromAddress, 0, message.fromAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.fromAddress) : message.fromAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            return object;
        };

        /**
         * Converts this VibeAttestation to JSON.
         * @function toJSON
         * @memberof types.VibeAttestation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VibeAttestation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VibeAttestation
         * @function getTypeUrl
         * @memberof types.VibeAttestation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VibeAttestation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.VibeAttestation";
        };

        return VibeAttestation;
    })();

    types.VibeCounter = (function() {

        /**
         * Properties of a VibeCounter.
         * @memberof types
         * @interface IVibeCounter
         * @property {number|Long|null} [nextId] VibeCounter nextId
         */

        /**
         * Constructs a new VibeCounter.
         * @memberof types
         * @classdesc Represents a VibeCounter.
         * @implements IVibeCounter
         * @constructor
         * @param {types.IVibeCounter=} [properties] Properties to set
         */
        function VibeCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VibeCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.VibeCounter
         * @instance
         */
        VibeCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new VibeCounter instance using the specified properties.
         * @function create
         * @memberof types.VibeCounter
         * @static
         * @param {types.IVibeCounter=} [properties] Properties to set
         * @returns {types.VibeCounter} VibeCounter instance
         */
        VibeCounter.create = function create(properties) {
            return new VibeCounter(properties);
        };

        /**
         * Encodes the specified VibeCounter message. Does not implicitly {@link types.VibeCounter.verify|verify} messages.
         * @function encode
         * @memberof types.VibeCounter
         * @static
         * @param {types.IVibeCounter} message VibeCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VibeCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified VibeCounter message, length delimited. Does not implicitly {@link types.VibeCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VibeCounter
         * @static
         * @param {types.IVibeCounter} message VibeCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VibeCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VibeCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.VibeCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VibeCounter} VibeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VibeCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VibeCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VibeCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VibeCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VibeCounter} VibeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VibeCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VibeCounter message.
         * @function verify
         * @memberof types.VibeCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VibeCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a VibeCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VibeCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VibeCounter} VibeCounter
         */
        VibeCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VibeCounter)
                return object;
            var message = new $root.types.VibeCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a VibeCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VibeCounter
         * @static
         * @param {types.VibeCounter} message VibeCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VibeCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this VibeCounter to JSON.
         * @function toJSON
         * @memberof types.VibeCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VibeCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VibeCounter
         * @function getTypeUrl
         * @memberof types.VibeCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VibeCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.VibeCounter";
        };

        return VibeCounter;
    })();

    types.Guild = (function() {

        /**
         * Properties of a Guild.
         * @memberof types
         * @interface IGuild
         * @property {number|Long|null} [id] Guild id
         * @property {Uint8Array|null} [creatorAddress] Guild creatorAddress
         * @property {string|null} [slug] Guild slug
         * @property {string|null} [name] Guild name
         * @property {string|null} [description] Guild description
         * @property {number|Long|null} [memberCount] Guild memberCount
         * @property {number|Long|null} [totalReputation] Guild totalReputation
         * @property {number|Long|null} [createdHeight] Guild createdHeight
         */

        /**
         * Constructs a new Guild.
         * @memberof types
         * @classdesc Represents a Guild.
         * @implements IGuild
         * @constructor
         * @param {types.IGuild=} [properties] Properties to set
         */
        function Guild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Guild id.
         * @member {number|Long} id
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Guild creatorAddress.
         * @member {Uint8Array} creatorAddress
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.creatorAddress = $util.newBuffer([]);

        /**
         * Guild slug.
         * @member {string} slug
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.slug = "";

        /**
         * Guild name.
         * @member {string} name
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.name = "";

        /**
         * Guild description.
         * @member {string} description
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.description = "";

        /**
         * Guild memberCount.
         * @member {number|Long} memberCount
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.memberCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Guild totalReputation.
         * @member {number|Long} totalReputation
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.totalReputation = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Guild createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.Guild
         * @instance
         */
        Guild.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Guild instance using the specified properties.
         * @function create
         * @memberof types.Guild
         * @static
         * @param {types.IGuild=} [properties] Properties to set
         * @returns {types.Guild} Guild instance
         */
        Guild.create = function create(properties) {
            return new Guild(properties);
        };

        /**
         * Encodes the specified Guild message. Does not implicitly {@link types.Guild.verify|verify} messages.
         * @function encode
         * @memberof types.Guild
         * @static
         * @param {types.IGuild} message Guild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.creatorAddress != null && Object.hasOwnProperty.call(message, "creatorAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.creatorAddress);
            if (message.slug != null && Object.hasOwnProperty.call(message, "slug"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.slug);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.memberCount != null && Object.hasOwnProperty.call(message, "memberCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.memberCount);
            if (message.totalReputation != null && Object.hasOwnProperty.call(message, "totalReputation"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.totalReputation);
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.createdHeight);
            return writer;
        };

        /**
         * Encodes the specified Guild message, length delimited. Does not implicitly {@link types.Guild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Guild
         * @static
         * @param {types.IGuild} message Guild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Guild message from the specified reader or buffer.
         * @function decode
         * @memberof types.Guild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Guild} Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guild.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Guild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.creatorAddress = reader.bytes();
                        break;
                    }
                case 3: {
                        message.slug = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.description = reader.string();
                        break;
                    }
                case 6: {
                        message.memberCount = reader.uint64();
                        break;
                    }
                case 7: {
                        message.totalReputation = reader.uint64();
                        break;
                    }
                case 8: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Guild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Guild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Guild} Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Guild message.
         * @function verify
         * @memberof types.Guild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Guild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                if (!(message.creatorAddress && typeof message.creatorAddress.length === "number" || $util.isString(message.creatorAddress)))
                    return "creatorAddress: buffer expected";
            if (message.slug != null && message.hasOwnProperty("slug"))
                if (!$util.isString(message.slug))
                    return "slug: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                if (!$util.isInteger(message.memberCount) && !(message.memberCount && $util.isInteger(message.memberCount.low) && $util.isInteger(message.memberCount.high)))
                    return "memberCount: integer|Long expected";
            if (message.totalReputation != null && message.hasOwnProperty("totalReputation"))
                if (!$util.isInteger(message.totalReputation) && !(message.totalReputation && $util.isInteger(message.totalReputation.low) && $util.isInteger(message.totalReputation.high)))
                    return "totalReputation: integer|Long expected";
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a Guild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Guild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Guild} Guild
         */
        Guild.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Guild)
                return object;
            var message = new $root.types.Guild();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.creatorAddress != null)
                if (typeof object.creatorAddress === "string")
                    $util.base64.decode(object.creatorAddress, message.creatorAddress = $util.newBuffer($util.base64.length(object.creatorAddress)), 0);
                else if (object.creatorAddress.length >= 0)
                    message.creatorAddress = object.creatorAddress;
            if (object.slug != null)
                message.slug = String(object.slug);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.memberCount != null)
                if ($util.Long)
                    (message.memberCount = $util.Long.fromValue(object.memberCount)).unsigned = true;
                else if (typeof object.memberCount === "string")
                    message.memberCount = parseInt(object.memberCount, 10);
                else if (typeof object.memberCount === "number")
                    message.memberCount = object.memberCount;
                else if (typeof object.memberCount === "object")
                    message.memberCount = new $util.LongBits(object.memberCount.low >>> 0, object.memberCount.high >>> 0).toNumber(true);
            if (object.totalReputation != null)
                if ($util.Long)
                    (message.totalReputation = $util.Long.fromValue(object.totalReputation)).unsigned = true;
                else if (typeof object.totalReputation === "string")
                    message.totalReputation = parseInt(object.totalReputation, 10);
                else if (typeof object.totalReputation === "number")
                    message.totalReputation = object.totalReputation;
                else if (typeof object.totalReputation === "object")
                    message.totalReputation = new $util.LongBits(object.totalReputation.low >>> 0, object.totalReputation.high >>> 0).toNumber(true);
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Guild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Guild
         * @static
         * @param {types.Guild} message Guild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Guild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.creatorAddress = "";
                else {
                    object.creatorAddress = [];
                    if (options.bytes !== Array)
                        object.creatorAddress = $util.newBuffer(object.creatorAddress);
                }
                object.slug = "";
                object.name = "";
                object.description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.memberCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.memberCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.totalReputation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalReputation = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                object.creatorAddress = options.bytes === String ? $util.base64.encode(message.creatorAddress, 0, message.creatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.creatorAddress) : message.creatorAddress;
            if (message.slug != null && message.hasOwnProperty("slug"))
                object.slug = message.slug;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                if (typeof message.memberCount === "number")
                    object.memberCount = options.longs === String ? String(message.memberCount) : message.memberCount;
                else
                    object.memberCount = options.longs === String ? $util.Long.prototype.toString.call(message.memberCount) : options.longs === Number ? new $util.LongBits(message.memberCount.low >>> 0, message.memberCount.high >>> 0).toNumber(true) : message.memberCount;
            if (message.totalReputation != null && message.hasOwnProperty("totalReputation"))
                if (typeof message.totalReputation === "number")
                    object.totalReputation = options.longs === String ? String(message.totalReputation) : message.totalReputation;
                else
                    object.totalReputation = options.longs === String ? $util.Long.prototype.toString.call(message.totalReputation) : options.longs === Number ? new $util.LongBits(message.totalReputation.low >>> 0, message.totalReputation.high >>> 0).toNumber(true) : message.totalReputation;
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            return object;
        };

        /**
         * Converts this Guild to JSON.
         * @function toJSON
         * @memberof types.Guild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Guild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Guild
         * @function getTypeUrl
         * @memberof types.Guild
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Guild.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Guild";
        };

        return Guild;
    })();

    types.GuildCounter = (function() {

        /**
         * Properties of a GuildCounter.
         * @memberof types
         * @interface IGuildCounter
         * @property {number|Long|null} [nextId] GuildCounter nextId
         */

        /**
         * Constructs a new GuildCounter.
         * @memberof types
         * @classdesc Represents a GuildCounter.
         * @implements IGuildCounter
         * @constructor
         * @param {types.IGuildCounter=} [properties] Properties to set
         */
        function GuildCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.GuildCounter
         * @instance
         */
        GuildCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GuildCounter instance using the specified properties.
         * @function create
         * @memberof types.GuildCounter
         * @static
         * @param {types.IGuildCounter=} [properties] Properties to set
         * @returns {types.GuildCounter} GuildCounter instance
         */
        GuildCounter.create = function create(properties) {
            return new GuildCounter(properties);
        };

        /**
         * Encodes the specified GuildCounter message. Does not implicitly {@link types.GuildCounter.verify|verify} messages.
         * @function encode
         * @memberof types.GuildCounter
         * @static
         * @param {types.IGuildCounter} message GuildCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified GuildCounter message, length delimited. Does not implicitly {@link types.GuildCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GuildCounter
         * @static
         * @param {types.IGuildCounter} message GuildCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.GuildCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GuildCounter} GuildCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GuildCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuildCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GuildCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GuildCounter} GuildCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildCounter message.
         * @function verify
         * @memberof types.GuildCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GuildCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GuildCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GuildCounter} GuildCounter
         */
        GuildCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GuildCounter)
                return object;
            var message = new $root.types.GuildCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GuildCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GuildCounter
         * @static
         * @param {types.GuildCounter} message GuildCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this GuildCounter to JSON.
         * @function toJSON
         * @memberof types.GuildCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildCounter
         * @function getTypeUrl
         * @memberof types.GuildCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.GuildCounter";
        };

        return GuildCounter;
    })();

    types.Quest = (function() {

        /**
         * Properties of a Quest.
         * @memberof types
         * @interface IQuest
         * @property {number|Long|null} [id] Quest id
         * @property {number|Long|null} [guildId] Quest guildId
         * @property {Uint8Array|null} [creatorAddress] Quest creatorAddress
         * @property {string|null} [title] Quest title
         * @property {string|null} [tag] Quest tag
         * @property {number|Long|null} [rewardRep] Quest rewardRep
         * @property {boolean|null} [open] Quest open
         * @property {number|Long|null} [createdHeight] Quest createdHeight
         */

        /**
         * Constructs a new Quest.
         * @memberof types
         * @classdesc Represents a Quest.
         * @implements IQuest
         * @constructor
         * @param {types.IQuest=} [properties] Properties to set
         */
        function Quest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Quest id.
         * @member {number|Long} id
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Quest guildId.
         * @member {number|Long} guildId
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Quest creatorAddress.
         * @member {Uint8Array} creatorAddress
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.creatorAddress = $util.newBuffer([]);

        /**
         * Quest title.
         * @member {string} title
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.title = "";

        /**
         * Quest tag.
         * @member {string} tag
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.tag = "";

        /**
         * Quest rewardRep.
         * @member {number|Long} rewardRep
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.rewardRep = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Quest open.
         * @member {boolean} open
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.open = false;

        /**
         * Quest createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.Quest
         * @instance
         */
        Quest.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Quest instance using the specified properties.
         * @function create
         * @memberof types.Quest
         * @static
         * @param {types.IQuest=} [properties] Properties to set
         * @returns {types.Quest} Quest instance
         */
        Quest.create = function create(properties) {
            return new Quest(properties);
        };

        /**
         * Encodes the specified Quest message. Does not implicitly {@link types.Quest.verify|verify} messages.
         * @function encode
         * @memberof types.Quest
         * @static
         * @param {types.IQuest} message Quest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.creatorAddress != null && Object.hasOwnProperty.call(message, "creatorAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.creatorAddress);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tag);
            if (message.rewardRep != null && Object.hasOwnProperty.call(message, "rewardRep"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.rewardRep);
            if (message.open != null && Object.hasOwnProperty.call(message, "open"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.open);
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.createdHeight);
            return writer;
        };

        /**
         * Encodes the specified Quest message, length delimited. Does not implicitly {@link types.Quest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Quest
         * @static
         * @param {types.IQuest} message Quest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quest message from the specified reader or buffer.
         * @function decode
         * @memberof types.Quest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Quest} Quest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Quest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.creatorAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.title = reader.string();
                        break;
                    }
                case 5: {
                        message.tag = reader.string();
                        break;
                    }
                case 6: {
                        message.rewardRep = reader.uint64();
                        break;
                    }
                case 7: {
                        message.open = reader.bool();
                        break;
                    }
                case 8: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Quest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Quest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Quest} Quest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quest message.
         * @function verify
         * @memberof types.Quest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                if (!(message.creatorAddress && typeof message.creatorAddress.length === "number" || $util.isString(message.creatorAddress)))
                    return "creatorAddress: buffer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.rewardRep != null && message.hasOwnProperty("rewardRep"))
                if (!$util.isInteger(message.rewardRep) && !(message.rewardRep && $util.isInteger(message.rewardRep.low) && $util.isInteger(message.rewardRep.high)))
                    return "rewardRep: integer|Long expected";
            if (message.open != null && message.hasOwnProperty("open"))
                if (typeof message.open !== "boolean")
                    return "open: boolean expected";
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a Quest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Quest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Quest} Quest
         */
        Quest.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Quest)
                return object;
            var message = new $root.types.Quest();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.creatorAddress != null)
                if (typeof object.creatorAddress === "string")
                    $util.base64.decode(object.creatorAddress, message.creatorAddress = $util.newBuffer($util.base64.length(object.creatorAddress)), 0);
                else if (object.creatorAddress.length >= 0)
                    message.creatorAddress = object.creatorAddress;
            if (object.title != null)
                message.title = String(object.title);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.rewardRep != null)
                if ($util.Long)
                    (message.rewardRep = $util.Long.fromValue(object.rewardRep)).unsigned = true;
                else if (typeof object.rewardRep === "string")
                    message.rewardRep = parseInt(object.rewardRep, 10);
                else if (typeof object.rewardRep === "number")
                    message.rewardRep = object.rewardRep;
                else if (typeof object.rewardRep === "object")
                    message.rewardRep = new $util.LongBits(object.rewardRep.low >>> 0, object.rewardRep.high >>> 0).toNumber(true);
            if (object.open != null)
                message.open = Boolean(object.open);
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Quest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Quest
         * @static
         * @param {types.Quest} message Quest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.creatorAddress = "";
                else {
                    object.creatorAddress = [];
                    if (options.bytes !== Array)
                        object.creatorAddress = $util.newBuffer(object.creatorAddress);
                }
                object.title = "";
                object.tag = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.rewardRep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rewardRep = options.longs === String ? "0" : 0;
                object.open = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.creatorAddress != null && message.hasOwnProperty("creatorAddress"))
                object.creatorAddress = options.bytes === String ? $util.base64.encode(message.creatorAddress, 0, message.creatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.creatorAddress) : message.creatorAddress;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.rewardRep != null && message.hasOwnProperty("rewardRep"))
                if (typeof message.rewardRep === "number")
                    object.rewardRep = options.longs === String ? String(message.rewardRep) : message.rewardRep;
                else
                    object.rewardRep = options.longs === String ? $util.Long.prototype.toString.call(message.rewardRep) : options.longs === Number ? new $util.LongBits(message.rewardRep.low >>> 0, message.rewardRep.high >>> 0).toNumber(true) : message.rewardRep;
            if (message.open != null && message.hasOwnProperty("open"))
                object.open = message.open;
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            return object;
        };

        /**
         * Converts this Quest to JSON.
         * @function toJSON
         * @memberof types.Quest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Quest
         * @function getTypeUrl
         * @memberof types.Quest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Quest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Quest";
        };

        return Quest;
    })();

    types.QuestCounter = (function() {

        /**
         * Properties of a QuestCounter.
         * @memberof types
         * @interface IQuestCounter
         * @property {number|Long|null} [nextId] QuestCounter nextId
         */

        /**
         * Constructs a new QuestCounter.
         * @memberof types
         * @classdesc Represents a QuestCounter.
         * @implements IQuestCounter
         * @constructor
         * @param {types.IQuestCounter=} [properties] Properties to set
         */
        function QuestCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.QuestCounter
         * @instance
         */
        QuestCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new QuestCounter instance using the specified properties.
         * @function create
         * @memberof types.QuestCounter
         * @static
         * @param {types.IQuestCounter=} [properties] Properties to set
         * @returns {types.QuestCounter} QuestCounter instance
         */
        QuestCounter.create = function create(properties) {
            return new QuestCounter(properties);
        };

        /**
         * Encodes the specified QuestCounter message. Does not implicitly {@link types.QuestCounter.verify|verify} messages.
         * @function encode
         * @memberof types.QuestCounter
         * @static
         * @param {types.IQuestCounter} message QuestCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified QuestCounter message, length delimited. Does not implicitly {@link types.QuestCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.QuestCounter
         * @static
         * @param {types.IQuestCounter} message QuestCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.QuestCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.QuestCounter} QuestCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.QuestCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuestCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.QuestCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.QuestCounter} QuestCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestCounter message.
         * @function verify
         * @memberof types.QuestCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuestCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.QuestCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.QuestCounter} QuestCounter
         */
        QuestCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.QuestCounter)
                return object;
            var message = new $root.types.QuestCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a QuestCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.QuestCounter
         * @static
         * @param {types.QuestCounter} message QuestCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this QuestCounter to JSON.
         * @function toJSON
         * @memberof types.QuestCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuestCounter
         * @function getTypeUrl
         * @memberof types.QuestCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuestCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.QuestCounter";
        };

        return QuestCounter;
    })();

    types.ContributionProof = (function() {

        /**
         * Properties of a ContributionProof.
         * @memberof types
         * @interface IContributionProof
         * @property {number|Long|null} [id] ContributionProof id
         * @property {number|Long|null} [guildId] ContributionProof guildId
         * @property {number|Long|null} [questId] ContributionProof questId
         * @property {Uint8Array|null} [contributorAddress] ContributionProof contributorAddress
         * @property {string|null} [proofUri] ContributionProof proofUri
         * @property {string|null} [note] ContributionProof note
         * @property {string|null} [status] ContributionProof status
         * @property {number|Long|null} [createdHeight] ContributionProof createdHeight
         * @property {number|Long|null} [reviewedHeight] ContributionProof reviewedHeight
         */

        /**
         * Constructs a new ContributionProof.
         * @memberof types
         * @classdesc Represents a ContributionProof.
         * @implements IContributionProof
         * @constructor
         * @param {types.IContributionProof=} [properties] Properties to set
         */
        function ContributionProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContributionProof id.
         * @member {number|Long} id
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContributionProof guildId.
         * @member {number|Long} guildId
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContributionProof questId.
         * @member {number|Long} questId
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.questId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContributionProof contributorAddress.
         * @member {Uint8Array} contributorAddress
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.contributorAddress = $util.newBuffer([]);

        /**
         * ContributionProof proofUri.
         * @member {string} proofUri
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.proofUri = "";

        /**
         * ContributionProof note.
         * @member {string} note
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.note = "";

        /**
         * ContributionProof status.
         * @member {string} status
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.status = "";

        /**
         * ContributionProof createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContributionProof reviewedHeight.
         * @member {number|Long} reviewedHeight
         * @memberof types.ContributionProof
         * @instance
         */
        ContributionProof.prototype.reviewedHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ContributionProof instance using the specified properties.
         * @function create
         * @memberof types.ContributionProof
         * @static
         * @param {types.IContributionProof=} [properties] Properties to set
         * @returns {types.ContributionProof} ContributionProof instance
         */
        ContributionProof.create = function create(properties) {
            return new ContributionProof(properties);
        };

        /**
         * Encodes the specified ContributionProof message. Does not implicitly {@link types.ContributionProof.verify|verify} messages.
         * @function encode
         * @memberof types.ContributionProof
         * @static
         * @param {types.IContributionProof} message ContributionProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContributionProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.questId != null && Object.hasOwnProperty.call(message, "questId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.questId);
            if (message.contributorAddress != null && Object.hasOwnProperty.call(message, "contributorAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.contributorAddress);
            if (message.proofUri != null && Object.hasOwnProperty.call(message, "proofUri"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.proofUri);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.note);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.status);
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.createdHeight);
            if (message.reviewedHeight != null && Object.hasOwnProperty.call(message, "reviewedHeight"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.reviewedHeight);
            return writer;
        };

        /**
         * Encodes the specified ContributionProof message, length delimited. Does not implicitly {@link types.ContributionProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ContributionProof
         * @static
         * @param {types.IContributionProof} message ContributionProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContributionProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContributionProof message from the specified reader or buffer.
         * @function decode
         * @memberof types.ContributionProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ContributionProof} ContributionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContributionProof.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ContributionProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.questId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.contributorAddress = reader.bytes();
                        break;
                    }
                case 5: {
                        message.proofUri = reader.string();
                        break;
                    }
                case 6: {
                        message.note = reader.string();
                        break;
                    }
                case 7: {
                        message.status = reader.string();
                        break;
                    }
                case 8: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                case 9: {
                        message.reviewedHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContributionProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ContributionProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ContributionProof} ContributionProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContributionProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContributionProof message.
         * @function verify
         * @memberof types.ContributionProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContributionProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.questId != null && message.hasOwnProperty("questId"))
                if (!$util.isInteger(message.questId) && !(message.questId && $util.isInteger(message.questId.low) && $util.isInteger(message.questId.high)))
                    return "questId: integer|Long expected";
            if (message.contributorAddress != null && message.hasOwnProperty("contributorAddress"))
                if (!(message.contributorAddress && typeof message.contributorAddress.length === "number" || $util.isString(message.contributorAddress)))
                    return "contributorAddress: buffer expected";
            if (message.proofUri != null && message.hasOwnProperty("proofUri"))
                if (!$util.isString(message.proofUri))
                    return "proofUri: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            if (message.reviewedHeight != null && message.hasOwnProperty("reviewedHeight"))
                if (!$util.isInteger(message.reviewedHeight) && !(message.reviewedHeight && $util.isInteger(message.reviewedHeight.low) && $util.isInteger(message.reviewedHeight.high)))
                    return "reviewedHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a ContributionProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ContributionProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ContributionProof} ContributionProof
         */
        ContributionProof.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ContributionProof)
                return object;
            var message = new $root.types.ContributionProof();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.questId != null)
                if ($util.Long)
                    (message.questId = $util.Long.fromValue(object.questId)).unsigned = true;
                else if (typeof object.questId === "string")
                    message.questId = parseInt(object.questId, 10);
                else if (typeof object.questId === "number")
                    message.questId = object.questId;
                else if (typeof object.questId === "object")
                    message.questId = new $util.LongBits(object.questId.low >>> 0, object.questId.high >>> 0).toNumber(true);
            if (object.contributorAddress != null)
                if (typeof object.contributorAddress === "string")
                    $util.base64.decode(object.contributorAddress, message.contributorAddress = $util.newBuffer($util.base64.length(object.contributorAddress)), 0);
                else if (object.contributorAddress.length >= 0)
                    message.contributorAddress = object.contributorAddress;
            if (object.proofUri != null)
                message.proofUri = String(object.proofUri);
            if (object.note != null)
                message.note = String(object.note);
            if (object.status != null)
                message.status = String(object.status);
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            if (object.reviewedHeight != null)
                if ($util.Long)
                    (message.reviewedHeight = $util.Long.fromValue(object.reviewedHeight)).unsigned = true;
                else if (typeof object.reviewedHeight === "string")
                    message.reviewedHeight = parseInt(object.reviewedHeight, 10);
                else if (typeof object.reviewedHeight === "number")
                    message.reviewedHeight = object.reviewedHeight;
                else if (typeof object.reviewedHeight === "object")
                    message.reviewedHeight = new $util.LongBits(object.reviewedHeight.low >>> 0, object.reviewedHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ContributionProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ContributionProof
         * @static
         * @param {types.ContributionProof} message ContributionProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContributionProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.questId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.questId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.contributorAddress = "";
                else {
                    object.contributorAddress = [];
                    if (options.bytes !== Array)
                        object.contributorAddress = $util.newBuffer(object.contributorAddress);
                }
                object.proofUri = "";
                object.note = "";
                object.status = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.reviewedHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reviewedHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.questId != null && message.hasOwnProperty("questId"))
                if (typeof message.questId === "number")
                    object.questId = options.longs === String ? String(message.questId) : message.questId;
                else
                    object.questId = options.longs === String ? $util.Long.prototype.toString.call(message.questId) : options.longs === Number ? new $util.LongBits(message.questId.low >>> 0, message.questId.high >>> 0).toNumber(true) : message.questId;
            if (message.contributorAddress != null && message.hasOwnProperty("contributorAddress"))
                object.contributorAddress = options.bytes === String ? $util.base64.encode(message.contributorAddress, 0, message.contributorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.contributorAddress) : message.contributorAddress;
            if (message.proofUri != null && message.hasOwnProperty("proofUri"))
                object.proofUri = message.proofUri;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            if (message.reviewedHeight != null && message.hasOwnProperty("reviewedHeight"))
                if (typeof message.reviewedHeight === "number")
                    object.reviewedHeight = options.longs === String ? String(message.reviewedHeight) : message.reviewedHeight;
                else
                    object.reviewedHeight = options.longs === String ? $util.Long.prototype.toString.call(message.reviewedHeight) : options.longs === Number ? new $util.LongBits(message.reviewedHeight.low >>> 0, message.reviewedHeight.high >>> 0).toNumber(true) : message.reviewedHeight;
            return object;
        };

        /**
         * Converts this ContributionProof to JSON.
         * @function toJSON
         * @memberof types.ContributionProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContributionProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ContributionProof
         * @function getTypeUrl
         * @memberof types.ContributionProof
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ContributionProof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ContributionProof";
        };

        return ContributionProof;
    })();

    types.ProofCounter = (function() {

        /**
         * Properties of a ProofCounter.
         * @memberof types
         * @interface IProofCounter
         * @property {number|Long|null} [nextId] ProofCounter nextId
         */

        /**
         * Constructs a new ProofCounter.
         * @memberof types
         * @classdesc Represents a ProofCounter.
         * @implements IProofCounter
         * @constructor
         * @param {types.IProofCounter=} [properties] Properties to set
         */
        function ProofCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProofCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.ProofCounter
         * @instance
         */
        ProofCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ProofCounter instance using the specified properties.
         * @function create
         * @memberof types.ProofCounter
         * @static
         * @param {types.IProofCounter=} [properties] Properties to set
         * @returns {types.ProofCounter} ProofCounter instance
         */
        ProofCounter.create = function create(properties) {
            return new ProofCounter(properties);
        };

        /**
         * Encodes the specified ProofCounter message. Does not implicitly {@link types.ProofCounter.verify|verify} messages.
         * @function encode
         * @memberof types.ProofCounter
         * @static
         * @param {types.IProofCounter} message ProofCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProofCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified ProofCounter message, length delimited. Does not implicitly {@link types.ProofCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ProofCounter
         * @static
         * @param {types.IProofCounter} message ProofCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProofCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProofCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.ProofCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ProofCounter} ProofCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProofCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ProofCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProofCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ProofCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ProofCounter} ProofCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProofCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProofCounter message.
         * @function verify
         * @memberof types.ProofCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProofCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ProofCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ProofCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ProofCounter} ProofCounter
         */
        ProofCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ProofCounter)
                return object;
            var message = new $root.types.ProofCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ProofCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ProofCounter
         * @static
         * @param {types.ProofCounter} message ProofCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProofCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this ProofCounter to JSON.
         * @function toJSON
         * @memberof types.ProofCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProofCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProofCounter
         * @function getTypeUrl
         * @memberof types.ProofCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProofCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ProofCounter";
        };

        return ProofCounter;
    })();

    types.GuildBadge = (function() {

        /**
         * Properties of a GuildBadge.
         * @memberof types
         * @interface IGuildBadge
         * @property {number|Long|null} [id] GuildBadge id
         * @property {number|Long|null} [guildId] GuildBadge guildId
         * @property {Uint8Array|null} [issuerAddress] GuildBadge issuerAddress
         * @property {Uint8Array|null} [toAddress] GuildBadge toAddress
         * @property {string|null} [badgeName] GuildBadge badgeName
         * @property {string|null} [badgeUri] GuildBadge badgeUri
         * @property {number|Long|null} [issuedHeight] GuildBadge issuedHeight
         */

        /**
         * Constructs a new GuildBadge.
         * @memberof types
         * @classdesc Represents a GuildBadge.
         * @implements IGuildBadge
         * @constructor
         * @param {types.IGuildBadge=} [properties] Properties to set
         */
        function GuildBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuildBadge id.
         * @member {number|Long} id
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GuildBadge guildId.
         * @member {number|Long} guildId
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GuildBadge issuerAddress.
         * @member {Uint8Array} issuerAddress
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.issuerAddress = $util.newBuffer([]);

        /**
         * GuildBadge toAddress.
         * @member {Uint8Array} toAddress
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.toAddress = $util.newBuffer([]);

        /**
         * GuildBadge badgeName.
         * @member {string} badgeName
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.badgeName = "";

        /**
         * GuildBadge badgeUri.
         * @member {string} badgeUri
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.badgeUri = "";

        /**
         * GuildBadge issuedHeight.
         * @member {number|Long} issuedHeight
         * @memberof types.GuildBadge
         * @instance
         */
        GuildBadge.prototype.issuedHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GuildBadge instance using the specified properties.
         * @function create
         * @memberof types.GuildBadge
         * @static
         * @param {types.IGuildBadge=} [properties] Properties to set
         * @returns {types.GuildBadge} GuildBadge instance
         */
        GuildBadge.create = function create(properties) {
            return new GuildBadge(properties);
        };

        /**
         * Encodes the specified GuildBadge message. Does not implicitly {@link types.GuildBadge.verify|verify} messages.
         * @function encode
         * @memberof types.GuildBadge
         * @static
         * @param {types.IGuildBadge} message GuildBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.issuerAddress != null && Object.hasOwnProperty.call(message, "issuerAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.issuerAddress);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.toAddress);
            if (message.badgeName != null && Object.hasOwnProperty.call(message, "badgeName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.badgeName);
            if (message.badgeUri != null && Object.hasOwnProperty.call(message, "badgeUri"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.badgeUri);
            if (message.issuedHeight != null && Object.hasOwnProperty.call(message, "issuedHeight"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.issuedHeight);
            return writer;
        };

        /**
         * Encodes the specified GuildBadge message, length delimited. Does not implicitly {@link types.GuildBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GuildBadge
         * @static
         * @param {types.IGuildBadge} message GuildBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuildBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuildBadge message from the specified reader or buffer.
         * @function decode
         * @memberof types.GuildBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GuildBadge} GuildBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildBadge.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GuildBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.issuerAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 5: {
                        message.badgeName = reader.string();
                        break;
                    }
                case 6: {
                        message.badgeUri = reader.string();
                        break;
                    }
                case 7: {
                        message.issuedHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuildBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GuildBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GuildBadge} GuildBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuildBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuildBadge message.
         * @function verify
         * @memberof types.GuildBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuildBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.issuerAddress != null && message.hasOwnProperty("issuerAddress"))
                if (!(message.issuerAddress && typeof message.issuerAddress.length === "number" || $util.isString(message.issuerAddress)))
                    return "issuerAddress: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.badgeName != null && message.hasOwnProperty("badgeName"))
                if (!$util.isString(message.badgeName))
                    return "badgeName: string expected";
            if (message.badgeUri != null && message.hasOwnProperty("badgeUri"))
                if (!$util.isString(message.badgeUri))
                    return "badgeUri: string expected";
            if (message.issuedHeight != null && message.hasOwnProperty("issuedHeight"))
                if (!$util.isInteger(message.issuedHeight) && !(message.issuedHeight && $util.isInteger(message.issuedHeight.low) && $util.isInteger(message.issuedHeight.high)))
                    return "issuedHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a GuildBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GuildBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GuildBadge} GuildBadge
         */
        GuildBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GuildBadge)
                return object;
            var message = new $root.types.GuildBadge();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.issuerAddress != null)
                if (typeof object.issuerAddress === "string")
                    $util.base64.decode(object.issuerAddress, message.issuerAddress = $util.newBuffer($util.base64.length(object.issuerAddress)), 0);
                else if (object.issuerAddress.length >= 0)
                    message.issuerAddress = object.issuerAddress;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.badgeName != null)
                message.badgeName = String(object.badgeName);
            if (object.badgeUri != null)
                message.badgeUri = String(object.badgeUri);
            if (object.issuedHeight != null)
                if ($util.Long)
                    (message.issuedHeight = $util.Long.fromValue(object.issuedHeight)).unsigned = true;
                else if (typeof object.issuedHeight === "string")
                    message.issuedHeight = parseInt(object.issuedHeight, 10);
                else if (typeof object.issuedHeight === "number")
                    message.issuedHeight = object.issuedHeight;
                else if (typeof object.issuedHeight === "object")
                    message.issuedHeight = new $util.LongBits(object.issuedHeight.low >>> 0, object.issuedHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GuildBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GuildBadge
         * @static
         * @param {types.GuildBadge} message GuildBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuildBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.issuerAddress = "";
                else {
                    object.issuerAddress = [];
                    if (options.bytes !== Array)
                        object.issuerAddress = $util.newBuffer(object.issuerAddress);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                object.badgeName = "";
                object.badgeUri = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.issuedHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.issuedHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.issuerAddress != null && message.hasOwnProperty("issuerAddress"))
                object.issuerAddress = options.bytes === String ? $util.base64.encode(message.issuerAddress, 0, message.issuerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.issuerAddress) : message.issuerAddress;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.badgeName != null && message.hasOwnProperty("badgeName"))
                object.badgeName = message.badgeName;
            if (message.badgeUri != null && message.hasOwnProperty("badgeUri"))
                object.badgeUri = message.badgeUri;
            if (message.issuedHeight != null && message.hasOwnProperty("issuedHeight"))
                if (typeof message.issuedHeight === "number")
                    object.issuedHeight = options.longs === String ? String(message.issuedHeight) : message.issuedHeight;
                else
                    object.issuedHeight = options.longs === String ? $util.Long.prototype.toString.call(message.issuedHeight) : options.longs === Number ? new $util.LongBits(message.issuedHeight.low >>> 0, message.issuedHeight.high >>> 0).toNumber(true) : message.issuedHeight;
            return object;
        };

        /**
         * Converts this GuildBadge to JSON.
         * @function toJSON
         * @memberof types.GuildBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuildBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuildBadge
         * @function getTypeUrl
         * @memberof types.GuildBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuildBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.GuildBadge";
        };

        return GuildBadge;
    })();

    types.BadgeCounter = (function() {

        /**
         * Properties of a BadgeCounter.
         * @memberof types
         * @interface IBadgeCounter
         * @property {number|Long|null} [nextId] BadgeCounter nextId
         */

        /**
         * Constructs a new BadgeCounter.
         * @memberof types
         * @classdesc Represents a BadgeCounter.
         * @implements IBadgeCounter
         * @constructor
         * @param {types.IBadgeCounter=} [properties] Properties to set
         */
        function BadgeCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BadgeCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.BadgeCounter
         * @instance
         */
        BadgeCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new BadgeCounter instance using the specified properties.
         * @function create
         * @memberof types.BadgeCounter
         * @static
         * @param {types.IBadgeCounter=} [properties] Properties to set
         * @returns {types.BadgeCounter} BadgeCounter instance
         */
        BadgeCounter.create = function create(properties) {
            return new BadgeCounter(properties);
        };

        /**
         * Encodes the specified BadgeCounter message. Does not implicitly {@link types.BadgeCounter.verify|verify} messages.
         * @function encode
         * @memberof types.BadgeCounter
         * @static
         * @param {types.IBadgeCounter} message BadgeCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BadgeCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified BadgeCounter message, length delimited. Does not implicitly {@link types.BadgeCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.BadgeCounter
         * @static
         * @param {types.IBadgeCounter} message BadgeCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BadgeCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BadgeCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.BadgeCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.BadgeCounter} BadgeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BadgeCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.BadgeCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BadgeCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.BadgeCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.BadgeCounter} BadgeCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BadgeCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BadgeCounter message.
         * @function verify
         * @memberof types.BadgeCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BadgeCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BadgeCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.BadgeCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.BadgeCounter} BadgeCounter
         */
        BadgeCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.BadgeCounter)
                return object;
            var message = new $root.types.BadgeCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BadgeCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.BadgeCounter
         * @static
         * @param {types.BadgeCounter} message BadgeCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BadgeCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this BadgeCounter to JSON.
         * @function toJSON
         * @memberof types.BadgeCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BadgeCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BadgeCounter
         * @function getTypeUrl
         * @memberof types.BadgeCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BadgeCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.BadgeCounter";
        };

        return BadgeCounter;
    })();

    types.AccessGate = (function() {

        /**
         * Properties of an AccessGate.
         * @memberof types
         * @interface IAccessGate
         * @property {number|Long|null} [id] AccessGate id
         * @property {number|Long|null} [guildId] AccessGate guildId
         * @property {string|null} [gateName] AccessGate gateName
         * @property {number|Long|null} [requiredRep] AccessGate requiredRep
         * @property {string|null} [requiredBadge] AccessGate requiredBadge
         * @property {number|Long|null} [createdHeight] AccessGate createdHeight
         */

        /**
         * Constructs a new AccessGate.
         * @memberof types
         * @classdesc Represents an AccessGate.
         * @implements IAccessGate
         * @constructor
         * @param {types.IAccessGate=} [properties] Properties to set
         */
        function AccessGate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccessGate id.
         * @member {number|Long} id
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AccessGate guildId.
         * @member {number|Long} guildId
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AccessGate gateName.
         * @member {string} gateName
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.gateName = "";

        /**
         * AccessGate requiredRep.
         * @member {number|Long} requiredRep
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.requiredRep = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AccessGate requiredBadge.
         * @member {string} requiredBadge
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.requiredBadge = "";

        /**
         * AccessGate createdHeight.
         * @member {number|Long} createdHeight
         * @memberof types.AccessGate
         * @instance
         */
        AccessGate.prototype.createdHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AccessGate instance using the specified properties.
         * @function create
         * @memberof types.AccessGate
         * @static
         * @param {types.IAccessGate=} [properties] Properties to set
         * @returns {types.AccessGate} AccessGate instance
         */
        AccessGate.create = function create(properties) {
            return new AccessGate(properties);
        };

        /**
         * Encodes the specified AccessGate message. Does not implicitly {@link types.AccessGate.verify|verify} messages.
         * @function encode
         * @memberof types.AccessGate
         * @static
         * @param {types.IAccessGate} message AccessGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessGate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.gateName != null && Object.hasOwnProperty.call(message, "gateName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gateName);
            if (message.requiredRep != null && Object.hasOwnProperty.call(message, "requiredRep"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.requiredRep);
            if (message.requiredBadge != null && Object.hasOwnProperty.call(message, "requiredBadge"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.requiredBadge);
            if (message.createdHeight != null && Object.hasOwnProperty.call(message, "createdHeight"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.createdHeight);
            return writer;
        };

        /**
         * Encodes the specified AccessGate message, length delimited. Does not implicitly {@link types.AccessGate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AccessGate
         * @static
         * @param {types.IAccessGate} message AccessGate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccessGate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccessGate message from the specified reader or buffer.
         * @function decode
         * @memberof types.AccessGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AccessGate} AccessGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessGate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AccessGate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.gateName = reader.string();
                        break;
                    }
                case 4: {
                        message.requiredRep = reader.uint64();
                        break;
                    }
                case 5: {
                        message.requiredBadge = reader.string();
                        break;
                    }
                case 6: {
                        message.createdHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccessGate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AccessGate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AccessGate} AccessGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccessGate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccessGate message.
         * @function verify
         * @memberof types.AccessGate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccessGate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.gateName != null && message.hasOwnProperty("gateName"))
                if (!$util.isString(message.gateName))
                    return "gateName: string expected";
            if (message.requiredRep != null && message.hasOwnProperty("requiredRep"))
                if (!$util.isInteger(message.requiredRep) && !(message.requiredRep && $util.isInteger(message.requiredRep.low) && $util.isInteger(message.requiredRep.high)))
                    return "requiredRep: integer|Long expected";
            if (message.requiredBadge != null && message.hasOwnProperty("requiredBadge"))
                if (!$util.isString(message.requiredBadge))
                    return "requiredBadge: string expected";
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (!$util.isInteger(message.createdHeight) && !(message.createdHeight && $util.isInteger(message.createdHeight.low) && $util.isInteger(message.createdHeight.high)))
                    return "createdHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates an AccessGate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AccessGate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AccessGate} AccessGate
         */
        AccessGate.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AccessGate)
                return object;
            var message = new $root.types.AccessGate();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.gateName != null)
                message.gateName = String(object.gateName);
            if (object.requiredRep != null)
                if ($util.Long)
                    (message.requiredRep = $util.Long.fromValue(object.requiredRep)).unsigned = true;
                else if (typeof object.requiredRep === "string")
                    message.requiredRep = parseInt(object.requiredRep, 10);
                else if (typeof object.requiredRep === "number")
                    message.requiredRep = object.requiredRep;
                else if (typeof object.requiredRep === "object")
                    message.requiredRep = new $util.LongBits(object.requiredRep.low >>> 0, object.requiredRep.high >>> 0).toNumber(true);
            if (object.requiredBadge != null)
                message.requiredBadge = String(object.requiredBadge);
            if (object.createdHeight != null)
                if ($util.Long)
                    (message.createdHeight = $util.Long.fromValue(object.createdHeight)).unsigned = true;
                else if (typeof object.createdHeight === "string")
                    message.createdHeight = parseInt(object.createdHeight, 10);
                else if (typeof object.createdHeight === "number")
                    message.createdHeight = object.createdHeight;
                else if (typeof object.createdHeight === "object")
                    message.createdHeight = new $util.LongBits(object.createdHeight.low >>> 0, object.createdHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AccessGate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AccessGate
         * @static
         * @param {types.AccessGate} message AccessGate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccessGate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.gateName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.requiredRep = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requiredRep = options.longs === String ? "0" : 0;
                object.requiredBadge = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createdHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.gateName != null && message.hasOwnProperty("gateName"))
                object.gateName = message.gateName;
            if (message.requiredRep != null && message.hasOwnProperty("requiredRep"))
                if (typeof message.requiredRep === "number")
                    object.requiredRep = options.longs === String ? String(message.requiredRep) : message.requiredRep;
                else
                    object.requiredRep = options.longs === String ? $util.Long.prototype.toString.call(message.requiredRep) : options.longs === Number ? new $util.LongBits(message.requiredRep.low >>> 0, message.requiredRep.high >>> 0).toNumber(true) : message.requiredRep;
            if (message.requiredBadge != null && message.hasOwnProperty("requiredBadge"))
                object.requiredBadge = message.requiredBadge;
            if (message.createdHeight != null && message.hasOwnProperty("createdHeight"))
                if (typeof message.createdHeight === "number")
                    object.createdHeight = options.longs === String ? String(message.createdHeight) : message.createdHeight;
                else
                    object.createdHeight = options.longs === String ? $util.Long.prototype.toString.call(message.createdHeight) : options.longs === Number ? new $util.LongBits(message.createdHeight.low >>> 0, message.createdHeight.high >>> 0).toNumber(true) : message.createdHeight;
            return object;
        };

        /**
         * Converts this AccessGate to JSON.
         * @function toJSON
         * @memberof types.AccessGate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccessGate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccessGate
         * @function getTypeUrl
         * @memberof types.AccessGate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccessGate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.AccessGate";
        };

        return AccessGate;
    })();

    types.GateCounter = (function() {

        /**
         * Properties of a GateCounter.
         * @memberof types
         * @interface IGateCounter
         * @property {number|Long|null} [nextId] GateCounter nextId
         */

        /**
         * Constructs a new GateCounter.
         * @memberof types
         * @classdesc Represents a GateCounter.
         * @implements IGateCounter
         * @constructor
         * @param {types.IGateCounter=} [properties] Properties to set
         */
        function GateCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.GateCounter
         * @instance
         */
        GateCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GateCounter instance using the specified properties.
         * @function create
         * @memberof types.GateCounter
         * @static
         * @param {types.IGateCounter=} [properties] Properties to set
         * @returns {types.GateCounter} GateCounter instance
         */
        GateCounter.create = function create(properties) {
            return new GateCounter(properties);
        };

        /**
         * Encodes the specified GateCounter message. Does not implicitly {@link types.GateCounter.verify|verify} messages.
         * @function encode
         * @memberof types.GateCounter
         * @static
         * @param {types.IGateCounter} message GateCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified GateCounter message, length delimited. Does not implicitly {@link types.GateCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GateCounter
         * @static
         * @param {types.IGateCounter} message GateCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.GateCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GateCounter} GateCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GateCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GateCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GateCounter} GateCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateCounter message.
         * @function verify
         * @memberof types.GateCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GateCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GateCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GateCounter} GateCounter
         */
        GateCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GateCounter)
                return object;
            var message = new $root.types.GateCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GateCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GateCounter
         * @static
         * @param {types.GateCounter} message GateCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GateCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this GateCounter to JSON.
         * @function toJSON
         * @memberof types.GateCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GateCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GateCounter
         * @function getTypeUrl
         * @memberof types.GateCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GateCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.GateCounter";
        };

        return GateCounter;
    })();

    types.GateAccess = (function() {

        /**
         * Properties of a GateAccess.
         * @memberof types
         * @interface IGateAccess
         * @property {number|Long|null} [id] GateAccess id
         * @property {number|Long|null} [gateId] GateAccess gateId
         * @property {Uint8Array|null} [visitorAddress] GateAccess visitorAddress
         * @property {boolean|null} [passed] GateAccess passed
         * @property {number|Long|null} [checkedHeight] GateAccess checkedHeight
         */

        /**
         * Constructs a new GateAccess.
         * @memberof types
         * @classdesc Represents a GateAccess.
         * @implements IGateAccess
         * @constructor
         * @param {types.IGateAccess=} [properties] Properties to set
         */
        function GateAccess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateAccess id.
         * @member {number|Long} id
         * @memberof types.GateAccess
         * @instance
         */
        GateAccess.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GateAccess gateId.
         * @member {number|Long} gateId
         * @memberof types.GateAccess
         * @instance
         */
        GateAccess.prototype.gateId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GateAccess visitorAddress.
         * @member {Uint8Array} visitorAddress
         * @memberof types.GateAccess
         * @instance
         */
        GateAccess.prototype.visitorAddress = $util.newBuffer([]);

        /**
         * GateAccess passed.
         * @member {boolean} passed
         * @memberof types.GateAccess
         * @instance
         */
        GateAccess.prototype.passed = false;

        /**
         * GateAccess checkedHeight.
         * @member {number|Long} checkedHeight
         * @memberof types.GateAccess
         * @instance
         */
        GateAccess.prototype.checkedHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GateAccess instance using the specified properties.
         * @function create
         * @memberof types.GateAccess
         * @static
         * @param {types.IGateAccess=} [properties] Properties to set
         * @returns {types.GateAccess} GateAccess instance
         */
        GateAccess.create = function create(properties) {
            return new GateAccess(properties);
        };

        /**
         * Encodes the specified GateAccess message. Does not implicitly {@link types.GateAccess.verify|verify} messages.
         * @function encode
         * @memberof types.GateAccess
         * @static
         * @param {types.IGateAccess} message GateAccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateAccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.gateId != null && Object.hasOwnProperty.call(message, "gateId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gateId);
            if (message.visitorAddress != null && Object.hasOwnProperty.call(message, "visitorAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.visitorAddress);
            if (message.passed != null && Object.hasOwnProperty.call(message, "passed"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.passed);
            if (message.checkedHeight != null && Object.hasOwnProperty.call(message, "checkedHeight"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.checkedHeight);
            return writer;
        };

        /**
         * Encodes the specified GateAccess message, length delimited. Does not implicitly {@link types.GateAccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GateAccess
         * @static
         * @param {types.IGateAccess} message GateAccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateAccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateAccess message from the specified reader or buffer.
         * @function decode
         * @memberof types.GateAccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GateAccess} GateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateAccess.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GateAccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.gateId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.visitorAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.passed = reader.bool();
                        break;
                    }
                case 5: {
                        message.checkedHeight = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateAccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GateAccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GateAccess} GateAccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateAccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateAccess message.
         * @function verify
         * @memberof types.GateAccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateAccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.gateId != null && message.hasOwnProperty("gateId"))
                if (!$util.isInteger(message.gateId) && !(message.gateId && $util.isInteger(message.gateId.low) && $util.isInteger(message.gateId.high)))
                    return "gateId: integer|Long expected";
            if (message.visitorAddress != null && message.hasOwnProperty("visitorAddress"))
                if (!(message.visitorAddress && typeof message.visitorAddress.length === "number" || $util.isString(message.visitorAddress)))
                    return "visitorAddress: buffer expected";
            if (message.passed != null && message.hasOwnProperty("passed"))
                if (typeof message.passed !== "boolean")
                    return "passed: boolean expected";
            if (message.checkedHeight != null && message.hasOwnProperty("checkedHeight"))
                if (!$util.isInteger(message.checkedHeight) && !(message.checkedHeight && $util.isInteger(message.checkedHeight.low) && $util.isInteger(message.checkedHeight.high)))
                    return "checkedHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a GateAccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GateAccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GateAccess} GateAccess
         */
        GateAccess.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GateAccess)
                return object;
            var message = new $root.types.GateAccess();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.gateId != null)
                if ($util.Long)
                    (message.gateId = $util.Long.fromValue(object.gateId)).unsigned = true;
                else if (typeof object.gateId === "string")
                    message.gateId = parseInt(object.gateId, 10);
                else if (typeof object.gateId === "number")
                    message.gateId = object.gateId;
                else if (typeof object.gateId === "object")
                    message.gateId = new $util.LongBits(object.gateId.low >>> 0, object.gateId.high >>> 0).toNumber(true);
            if (object.visitorAddress != null)
                if (typeof object.visitorAddress === "string")
                    $util.base64.decode(object.visitorAddress, message.visitorAddress = $util.newBuffer($util.base64.length(object.visitorAddress)), 0);
                else if (object.visitorAddress.length >= 0)
                    message.visitorAddress = object.visitorAddress;
            if (object.passed != null)
                message.passed = Boolean(object.passed);
            if (object.checkedHeight != null)
                if ($util.Long)
                    (message.checkedHeight = $util.Long.fromValue(object.checkedHeight)).unsigned = true;
                else if (typeof object.checkedHeight === "string")
                    message.checkedHeight = parseInt(object.checkedHeight, 10);
                else if (typeof object.checkedHeight === "number")
                    message.checkedHeight = object.checkedHeight;
                else if (typeof object.checkedHeight === "object")
                    message.checkedHeight = new $util.LongBits(object.checkedHeight.low >>> 0, object.checkedHeight.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GateAccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GateAccess
         * @static
         * @param {types.GateAccess} message GateAccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GateAccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gateId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gateId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.visitorAddress = "";
                else {
                    object.visitorAddress = [];
                    if (options.bytes !== Array)
                        object.visitorAddress = $util.newBuffer(object.visitorAddress);
                }
                object.passed = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.checkedHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.checkedHeight = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.gateId != null && message.hasOwnProperty("gateId"))
                if (typeof message.gateId === "number")
                    object.gateId = options.longs === String ? String(message.gateId) : message.gateId;
                else
                    object.gateId = options.longs === String ? $util.Long.prototype.toString.call(message.gateId) : options.longs === Number ? new $util.LongBits(message.gateId.low >>> 0, message.gateId.high >>> 0).toNumber(true) : message.gateId;
            if (message.visitorAddress != null && message.hasOwnProperty("visitorAddress"))
                object.visitorAddress = options.bytes === String ? $util.base64.encode(message.visitorAddress, 0, message.visitorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.visitorAddress) : message.visitorAddress;
            if (message.passed != null && message.hasOwnProperty("passed"))
                object.passed = message.passed;
            if (message.checkedHeight != null && message.hasOwnProperty("checkedHeight"))
                if (typeof message.checkedHeight === "number")
                    object.checkedHeight = options.longs === String ? String(message.checkedHeight) : message.checkedHeight;
                else
                    object.checkedHeight = options.longs === String ? $util.Long.prototype.toString.call(message.checkedHeight) : options.longs === Number ? new $util.LongBits(message.checkedHeight.low >>> 0, message.checkedHeight.high >>> 0).toNumber(true) : message.checkedHeight;
            return object;
        };

        /**
         * Converts this GateAccess to JSON.
         * @function toJSON
         * @memberof types.GateAccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GateAccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GateAccess
         * @function getTypeUrl
         * @memberof types.GateAccess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GateAccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.GateAccess";
        };

        return GateAccess;
    })();

    types.GateAccessCounter = (function() {

        /**
         * Properties of a GateAccessCounter.
         * @memberof types
         * @interface IGateAccessCounter
         * @property {number|Long|null} [nextId] GateAccessCounter nextId
         */

        /**
         * Constructs a new GateAccessCounter.
         * @memberof types
         * @classdesc Represents a GateAccessCounter.
         * @implements IGateAccessCounter
         * @constructor
         * @param {types.IGateAccessCounter=} [properties] Properties to set
         */
        function GateAccessCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateAccessCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.GateAccessCounter
         * @instance
         */
        GateAccessCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GateAccessCounter instance using the specified properties.
         * @function create
         * @memberof types.GateAccessCounter
         * @static
         * @param {types.IGateAccessCounter=} [properties] Properties to set
         * @returns {types.GateAccessCounter} GateAccessCounter instance
         */
        GateAccessCounter.create = function create(properties) {
            return new GateAccessCounter(properties);
        };

        /**
         * Encodes the specified GateAccessCounter message. Does not implicitly {@link types.GateAccessCounter.verify|verify} messages.
         * @function encode
         * @memberof types.GateAccessCounter
         * @static
         * @param {types.IGateAccessCounter} message GateAccessCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateAccessCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified GateAccessCounter message, length delimited. Does not implicitly {@link types.GateAccessCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.GateAccessCounter
         * @static
         * @param {types.IGateAccessCounter} message GateAccessCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateAccessCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateAccessCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.GateAccessCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.GateAccessCounter} GateAccessCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateAccessCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.GateAccessCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateAccessCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.GateAccessCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.GateAccessCounter} GateAccessCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateAccessCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateAccessCounter message.
         * @function verify
         * @memberof types.GateAccessCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateAccessCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GateAccessCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.GateAccessCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.GateAccessCounter} GateAccessCounter
         */
        GateAccessCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.GateAccessCounter)
                return object;
            var message = new $root.types.GateAccessCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GateAccessCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.GateAccessCounter
         * @static
         * @param {types.GateAccessCounter} message GateAccessCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GateAccessCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this GateAccessCounter to JSON.
         * @function toJSON
         * @memberof types.GateAccessCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GateAccessCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GateAccessCounter
         * @function getTypeUrl
         * @memberof types.GateAccessCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GateAccessCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.GateAccessCounter";
        };

        return GateAccessCounter;
    })();

    types.ReputationVote = (function() {

        /**
         * Properties of a ReputationVote.
         * @memberof types
         * @interface IReputationVote
         * @property {number|Long|null} [id] ReputationVote id
         * @property {number|Long|null} [guildId] ReputationVote guildId
         * @property {string|null} [proposalId] ReputationVote proposalId
         * @property {Uint8Array|null} [voterAddress] ReputationVote voterAddress
         * @property {string|null} [choice] ReputationVote choice
         * @property {number|Long|null} [weight] ReputationVote weight
         * @property {number|Long|null} [height] ReputationVote height
         */

        /**
         * Constructs a new ReputationVote.
         * @memberof types
         * @classdesc Represents a ReputationVote.
         * @implements IReputationVote
         * @constructor
         * @param {types.IReputationVote=} [properties] Properties to set
         */
        function ReputationVote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReputationVote id.
         * @member {number|Long} id
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReputationVote guildId.
         * @member {number|Long} guildId
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReputationVote proposalId.
         * @member {string} proposalId
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.proposalId = "";

        /**
         * ReputationVote voterAddress.
         * @member {Uint8Array} voterAddress
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.voterAddress = $util.newBuffer([]);

        /**
         * ReputationVote choice.
         * @member {string} choice
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.choice = "";

        /**
         * ReputationVote weight.
         * @member {number|Long} weight
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.weight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReputationVote height.
         * @member {number|Long} height
         * @memberof types.ReputationVote
         * @instance
         */
        ReputationVote.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ReputationVote instance using the specified properties.
         * @function create
         * @memberof types.ReputationVote
         * @static
         * @param {types.IReputationVote=} [properties] Properties to set
         * @returns {types.ReputationVote} ReputationVote instance
         */
        ReputationVote.create = function create(properties) {
            return new ReputationVote(properties);
        };

        /**
         * Encodes the specified ReputationVote message. Does not implicitly {@link types.ReputationVote.verify|verify} messages.
         * @function encode
         * @memberof types.ReputationVote
         * @static
         * @param {types.IReputationVote} message ReputationVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReputationVote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.guildId);
            if (message.proposalId != null && Object.hasOwnProperty.call(message, "proposalId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.proposalId);
            if (message.voterAddress != null && Object.hasOwnProperty.call(message, "voterAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.voterAddress);
            if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.choice);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.weight);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.height);
            return writer;
        };

        /**
         * Encodes the specified ReputationVote message, length delimited. Does not implicitly {@link types.ReputationVote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ReputationVote
         * @static
         * @param {types.IReputationVote} message ReputationVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReputationVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReputationVote message from the specified reader or buffer.
         * @function decode
         * @memberof types.ReputationVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ReputationVote} ReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReputationVote.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ReputationVote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint64();
                        break;
                    }
                case 2: {
                        message.guildId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.proposalId = reader.string();
                        break;
                    }
                case 4: {
                        message.voterAddress = reader.bytes();
                        break;
                    }
                case 5: {
                        message.choice = reader.string();
                        break;
                    }
                case 6: {
                        message.weight = reader.uint64();
                        break;
                    }
                case 7: {
                        message.height = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReputationVote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ReputationVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ReputationVote} ReputationVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReputationVote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReputationVote message.
         * @function verify
         * @memberof types.ReputationVote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReputationVote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                    return "guildId: integer|Long expected";
            if (message.proposalId != null && message.hasOwnProperty("proposalId"))
                if (!$util.isString(message.proposalId))
                    return "proposalId: string expected";
            if (message.voterAddress != null && message.hasOwnProperty("voterAddress"))
                if (!(message.voterAddress && typeof message.voterAddress.length === "number" || $util.isString(message.voterAddress)))
                    return "voterAddress: buffer expected";
            if (message.choice != null && message.hasOwnProperty("choice"))
                if (!$util.isString(message.choice))
                    return "choice: string expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight) && !(message.weight && $util.isInteger(message.weight.low) && $util.isInteger(message.weight.high)))
                    return "weight: integer|Long expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReputationVote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ReputationVote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ReputationVote} ReputationVote
         */
        ReputationVote.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ReputationVote)
                return object;
            var message = new $root.types.ReputationVote();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.guildId != null)
                if ($util.Long)
                    (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                else if (typeof object.guildId === "string")
                    message.guildId = parseInt(object.guildId, 10);
                else if (typeof object.guildId === "number")
                    message.guildId = object.guildId;
                else if (typeof object.guildId === "object")
                    message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
            if (object.proposalId != null)
                message.proposalId = String(object.proposalId);
            if (object.voterAddress != null)
                if (typeof object.voterAddress === "string")
                    $util.base64.decode(object.voterAddress, message.voterAddress = $util.newBuffer($util.base64.length(object.voterAddress)), 0);
                else if (object.voterAddress.length >= 0)
                    message.voterAddress = object.voterAddress;
            if (object.choice != null)
                message.choice = String(object.choice);
            if (object.weight != null)
                if ($util.Long)
                    (message.weight = $util.Long.fromValue(object.weight)).unsigned = true;
                else if (typeof object.weight === "string")
                    message.weight = parseInt(object.weight, 10);
                else if (typeof object.weight === "number")
                    message.weight = object.weight;
                else if (typeof object.weight === "object")
                    message.weight = new $util.LongBits(object.weight.low >>> 0, object.weight.high >>> 0).toNumber(true);
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ReputationVote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ReputationVote
         * @static
         * @param {types.ReputationVote} message ReputationVote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReputationVote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guildId = options.longs === String ? "0" : 0;
                object.proposalId = "";
                if (options.bytes === String)
                    object.voterAddress = "";
                else {
                    object.voterAddress = [];
                    if (options.bytes !== Array)
                        object.voterAddress = $util.newBuffer(object.voterAddress);
                }
                object.choice = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.weight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.weight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.guildId != null && message.hasOwnProperty("guildId"))
                if (typeof message.guildId === "number")
                    object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                else
                    object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
            if (message.proposalId != null && message.hasOwnProperty("proposalId"))
                object.proposalId = message.proposalId;
            if (message.voterAddress != null && message.hasOwnProperty("voterAddress"))
                object.voterAddress = options.bytes === String ? $util.base64.encode(message.voterAddress, 0, message.voterAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.voterAddress) : message.voterAddress;
            if (message.choice != null && message.hasOwnProperty("choice"))
                object.choice = message.choice;
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (typeof message.weight === "number")
                    object.weight = options.longs === String ? String(message.weight) : message.weight;
                else
                    object.weight = options.longs === String ? $util.Long.prototype.toString.call(message.weight) : options.longs === Number ? new $util.LongBits(message.weight.low >>> 0, message.weight.high >>> 0).toNumber(true) : message.weight;
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            return object;
        };

        /**
         * Converts this ReputationVote to JSON.
         * @function toJSON
         * @memberof types.ReputationVote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReputationVote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReputationVote
         * @function getTypeUrl
         * @memberof types.ReputationVote
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReputationVote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ReputationVote";
        };

        return ReputationVote;
    })();

    types.VoteCounter = (function() {

        /**
         * Properties of a VoteCounter.
         * @memberof types
         * @interface IVoteCounter
         * @property {number|Long|null} [nextId] VoteCounter nextId
         */

        /**
         * Constructs a new VoteCounter.
         * @memberof types
         * @classdesc Represents a VoteCounter.
         * @implements IVoteCounter
         * @constructor
         * @param {types.IVoteCounter=} [properties] Properties to set
         */
        function VoteCounter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoteCounter nextId.
         * @member {number|Long} nextId
         * @memberof types.VoteCounter
         * @instance
         */
        VoteCounter.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new VoteCounter instance using the specified properties.
         * @function create
         * @memberof types.VoteCounter
         * @static
         * @param {types.IVoteCounter=} [properties] Properties to set
         * @returns {types.VoteCounter} VoteCounter instance
         */
        VoteCounter.create = function create(properties) {
            return new VoteCounter(properties);
        };

        /**
         * Encodes the specified VoteCounter message. Does not implicitly {@link types.VoteCounter.verify|verify} messages.
         * @function encode
         * @memberof types.VoteCounter
         * @static
         * @param {types.IVoteCounter} message VoteCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nextId);
            return writer;
        };

        /**
         * Encodes the specified VoteCounter message, length delimited. Does not implicitly {@link types.VoteCounter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.VoteCounter
         * @static
         * @param {types.IVoteCounter} message VoteCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoteCounter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VoteCounter message from the specified reader or buffer.
         * @function decode
         * @memberof types.VoteCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.VoteCounter} VoteCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteCounter.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.VoteCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VoteCounter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.VoteCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.VoteCounter} VoteCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoteCounter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoteCounter message.
         * @function verify
         * @memberof types.VoteCounter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoteCounter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (!$util.isInteger(message.nextId) && !(message.nextId && $util.isInteger(message.nextId.low) && $util.isInteger(message.nextId.high)))
                    return "nextId: integer|Long expected";
            return null;
        };

        /**
         * Creates a VoteCounter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.VoteCounter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.VoteCounter} VoteCounter
         */
        VoteCounter.fromObject = function fromObject(object) {
            if (object instanceof $root.types.VoteCounter)
                return object;
            var message = new $root.types.VoteCounter();
            if (object.nextId != null)
                if ($util.Long)
                    (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                else if (typeof object.nextId === "string")
                    message.nextId = parseInt(object.nextId, 10);
                else if (typeof object.nextId === "number")
                    message.nextId = object.nextId;
                else if (typeof object.nextId === "object")
                    message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a VoteCounter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.VoteCounter
         * @static
         * @param {types.VoteCounter} message VoteCounter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoteCounter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextId = options.longs === String ? "0" : 0;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                if (typeof message.nextId === "number")
                    object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                else
                    object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
            return object;
        };

        /**
         * Converts this VoteCounter to JSON.
         * @function toJSON
         * @memberof types.VoteCounter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoteCounter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VoteCounter
         * @function getTypeUrl
         * @memberof types.VoteCounter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VoteCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.VoteCounter";
        };

        return VoteCounter;
    })();

    types.FeeParams = (function() {

        /**
         * Properties of a FeeParams.
         * @memberof types
         * @interface IFeeParams
         * @property {number|Long|null} [sendFee] FeeParams sendFee
         * @property {number|Long|null} [registerProfileFee] FeeParams registerProfileFee
         * @property {number|Long|null} [giveVibeFee] FeeParams giveVibeFee
         * @property {number|Long|null} [createGuildFee] FeeParams createGuildFee
         * @property {number|Long|null} [postQuestFee] FeeParams postQuestFee
         * @property {number|Long|null} [submitProofFee] FeeParams submitProofFee
         * @property {number|Long|null} [attestContributionFee] FeeParams attestContributionFee
         * @property {number|Long|null} [issueBadgeFee] FeeParams issueBadgeFee
         * @property {number|Long|null} [createGateFee] FeeParams createGateFee
         * @property {number|Long|null} [checkGateAccessFee] FeeParams checkGateAccessFee
         * @property {number|Long|null} [castReputationVoteFee] FeeParams castReputationVoteFee
         */

        /**
         * Constructs a new FeeParams.
         * @memberof types
         * @classdesc Represents a FeeParams.
         * @implements IFeeParams
         * @constructor
         * @param {types.IFeeParams=} [properties] Properties to set
         */
        function FeeParams(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeeParams sendFee.
         * @member {number|Long} sendFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.sendFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams registerProfileFee.
         * @member {number|Long} registerProfileFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.registerProfileFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams giveVibeFee.
         * @member {number|Long} giveVibeFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.giveVibeFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams createGuildFee.
         * @member {number|Long} createGuildFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.createGuildFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams postQuestFee.
         * @member {number|Long} postQuestFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.postQuestFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams submitProofFee.
         * @member {number|Long} submitProofFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.submitProofFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams attestContributionFee.
         * @member {number|Long} attestContributionFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.attestContributionFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams issueBadgeFee.
         * @member {number|Long} issueBadgeFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.issueBadgeFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams createGateFee.
         * @member {number|Long} createGateFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.createGateFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams checkGateAccessFee.
         * @member {number|Long} checkGateAccessFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.checkGateAccessFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FeeParams castReputationVoteFee.
         * @member {number|Long} castReputationVoteFee
         * @memberof types.FeeParams
         * @instance
         */
        FeeParams.prototype.castReputationVoteFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new FeeParams instance using the specified properties.
         * @function create
         * @memberof types.FeeParams
         * @static
         * @param {types.IFeeParams=} [properties] Properties to set
         * @returns {types.FeeParams} FeeParams instance
         */
        FeeParams.create = function create(properties) {
            return new FeeParams(properties);
        };

        /**
         * Encodes the specified FeeParams message. Does not implicitly {@link types.FeeParams.verify|verify} messages.
         * @function encode
         * @memberof types.FeeParams
         * @static
         * @param {types.IFeeParams} message FeeParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sendFee != null && Object.hasOwnProperty.call(message, "sendFee"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sendFee);
            if (message.registerProfileFee != null && Object.hasOwnProperty.call(message, "registerProfileFee"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.registerProfileFee);
            if (message.giveVibeFee != null && Object.hasOwnProperty.call(message, "giveVibeFee"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.giveVibeFee);
            if (message.createGuildFee != null && Object.hasOwnProperty.call(message, "createGuildFee"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.createGuildFee);
            if (message.postQuestFee != null && Object.hasOwnProperty.call(message, "postQuestFee"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.postQuestFee);
            if (message.submitProofFee != null && Object.hasOwnProperty.call(message, "submitProofFee"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.submitProofFee);
            if (message.attestContributionFee != null && Object.hasOwnProperty.call(message, "attestContributionFee"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint64(message.attestContributionFee);
            if (message.issueBadgeFee != null && Object.hasOwnProperty.call(message, "issueBadgeFee"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.issueBadgeFee);
            if (message.createGateFee != null && Object.hasOwnProperty.call(message, "createGateFee"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.createGateFee);
            if (message.checkGateAccessFee != null && Object.hasOwnProperty.call(message, "checkGateAccessFee"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint64(message.checkGateAccessFee);
            if (message.castReputationVoteFee != null && Object.hasOwnProperty.call(message, "castReputationVoteFee"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint64(message.castReputationVoteFee);
            return writer;
        };

        /**
         * Encodes the specified FeeParams message, length delimited. Does not implicitly {@link types.FeeParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.FeeParams
         * @static
         * @param {types.IFeeParams} message FeeParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeParams message from the specified reader or buffer.
         * @function decode
         * @memberof types.FeeParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.FeeParams} FeeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeParams.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.FeeParams();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sendFee = reader.uint64();
                        break;
                    }
                case 14: {
                        message.registerProfileFee = reader.uint64();
                        break;
                    }
                case 15: {
                        message.giveVibeFee = reader.uint64();
                        break;
                    }
                case 16: {
                        message.createGuildFee = reader.uint64();
                        break;
                    }
                case 17: {
                        message.postQuestFee = reader.uint64();
                        break;
                    }
                case 18: {
                        message.submitProofFee = reader.uint64();
                        break;
                    }
                case 19: {
                        message.attestContributionFee = reader.uint64();
                        break;
                    }
                case 20: {
                        message.issueBadgeFee = reader.uint64();
                        break;
                    }
                case 21: {
                        message.createGateFee = reader.uint64();
                        break;
                    }
                case 22: {
                        message.checkGateAccessFee = reader.uint64();
                        break;
                    }
                case 23: {
                        message.castReputationVoteFee = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeeParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.FeeParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.FeeParams} FeeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeParams message.
         * @function verify
         * @memberof types.FeeParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sendFee != null && message.hasOwnProperty("sendFee"))
                if (!$util.isInteger(message.sendFee) && !(message.sendFee && $util.isInteger(message.sendFee.low) && $util.isInteger(message.sendFee.high)))
                    return "sendFee: integer|Long expected";
            if (message.registerProfileFee != null && message.hasOwnProperty("registerProfileFee"))
                if (!$util.isInteger(message.registerProfileFee) && !(message.registerProfileFee && $util.isInteger(message.registerProfileFee.low) && $util.isInteger(message.registerProfileFee.high)))
                    return "registerProfileFee: integer|Long expected";
            if (message.giveVibeFee != null && message.hasOwnProperty("giveVibeFee"))
                if (!$util.isInteger(message.giveVibeFee) && !(message.giveVibeFee && $util.isInteger(message.giveVibeFee.low) && $util.isInteger(message.giveVibeFee.high)))
                    return "giveVibeFee: integer|Long expected";
            if (message.createGuildFee != null && message.hasOwnProperty("createGuildFee"))
                if (!$util.isInteger(message.createGuildFee) && !(message.createGuildFee && $util.isInteger(message.createGuildFee.low) && $util.isInteger(message.createGuildFee.high)))
                    return "createGuildFee: integer|Long expected";
            if (message.postQuestFee != null && message.hasOwnProperty("postQuestFee"))
                if (!$util.isInteger(message.postQuestFee) && !(message.postQuestFee && $util.isInteger(message.postQuestFee.low) && $util.isInteger(message.postQuestFee.high)))
                    return "postQuestFee: integer|Long expected";
            if (message.submitProofFee != null && message.hasOwnProperty("submitProofFee"))
                if (!$util.isInteger(message.submitProofFee) && !(message.submitProofFee && $util.isInteger(message.submitProofFee.low) && $util.isInteger(message.submitProofFee.high)))
                    return "submitProofFee: integer|Long expected";
            if (message.attestContributionFee != null && message.hasOwnProperty("attestContributionFee"))
                if (!$util.isInteger(message.attestContributionFee) && !(message.attestContributionFee && $util.isInteger(message.attestContributionFee.low) && $util.isInteger(message.attestContributionFee.high)))
                    return "attestContributionFee: integer|Long expected";
            if (message.issueBadgeFee != null && message.hasOwnProperty("issueBadgeFee"))
                if (!$util.isInteger(message.issueBadgeFee) && !(message.issueBadgeFee && $util.isInteger(message.issueBadgeFee.low) && $util.isInteger(message.issueBadgeFee.high)))
                    return "issueBadgeFee: integer|Long expected";
            if (message.createGateFee != null && message.hasOwnProperty("createGateFee"))
                if (!$util.isInteger(message.createGateFee) && !(message.createGateFee && $util.isInteger(message.createGateFee.low) && $util.isInteger(message.createGateFee.high)))
                    return "createGateFee: integer|Long expected";
            if (message.checkGateAccessFee != null && message.hasOwnProperty("checkGateAccessFee"))
                if (!$util.isInteger(message.checkGateAccessFee) && !(message.checkGateAccessFee && $util.isInteger(message.checkGateAccessFee.low) && $util.isInteger(message.checkGateAccessFee.high)))
                    return "checkGateAccessFee: integer|Long expected";
            if (message.castReputationVoteFee != null && message.hasOwnProperty("castReputationVoteFee"))
                if (!$util.isInteger(message.castReputationVoteFee) && !(message.castReputationVoteFee && $util.isInteger(message.castReputationVoteFee.low) && $util.isInteger(message.castReputationVoteFee.high)))
                    return "castReputationVoteFee: integer|Long expected";
            return null;
        };

        /**
         * Creates a FeeParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.FeeParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.FeeParams} FeeParams
         */
        FeeParams.fromObject = function fromObject(object) {
            if (object instanceof $root.types.FeeParams)
                return object;
            var message = new $root.types.FeeParams();
            if (object.sendFee != null)
                if ($util.Long)
                    (message.sendFee = $util.Long.fromValue(object.sendFee)).unsigned = true;
                else if (typeof object.sendFee === "string")
                    message.sendFee = parseInt(object.sendFee, 10);
                else if (typeof object.sendFee === "number")
                    message.sendFee = object.sendFee;
                else if (typeof object.sendFee === "object")
                    message.sendFee = new $util.LongBits(object.sendFee.low >>> 0, object.sendFee.high >>> 0).toNumber(true);
            if (object.registerProfileFee != null)
                if ($util.Long)
                    (message.registerProfileFee = $util.Long.fromValue(object.registerProfileFee)).unsigned = true;
                else if (typeof object.registerProfileFee === "string")
                    message.registerProfileFee = parseInt(object.registerProfileFee, 10);
                else if (typeof object.registerProfileFee === "number")
                    message.registerProfileFee = object.registerProfileFee;
                else if (typeof object.registerProfileFee === "object")
                    message.registerProfileFee = new $util.LongBits(object.registerProfileFee.low >>> 0, object.registerProfileFee.high >>> 0).toNumber(true);
            if (object.giveVibeFee != null)
                if ($util.Long)
                    (message.giveVibeFee = $util.Long.fromValue(object.giveVibeFee)).unsigned = true;
                else if (typeof object.giveVibeFee === "string")
                    message.giveVibeFee = parseInt(object.giveVibeFee, 10);
                else if (typeof object.giveVibeFee === "number")
                    message.giveVibeFee = object.giveVibeFee;
                else if (typeof object.giveVibeFee === "object")
                    message.giveVibeFee = new $util.LongBits(object.giveVibeFee.low >>> 0, object.giveVibeFee.high >>> 0).toNumber(true);
            if (object.createGuildFee != null)
                if ($util.Long)
                    (message.createGuildFee = $util.Long.fromValue(object.createGuildFee)).unsigned = true;
                else if (typeof object.createGuildFee === "string")
                    message.createGuildFee = parseInt(object.createGuildFee, 10);
                else if (typeof object.createGuildFee === "number")
                    message.createGuildFee = object.createGuildFee;
                else if (typeof object.createGuildFee === "object")
                    message.createGuildFee = new $util.LongBits(object.createGuildFee.low >>> 0, object.createGuildFee.high >>> 0).toNumber(true);
            if (object.postQuestFee != null)
                if ($util.Long)
                    (message.postQuestFee = $util.Long.fromValue(object.postQuestFee)).unsigned = true;
                else if (typeof object.postQuestFee === "string")
                    message.postQuestFee = parseInt(object.postQuestFee, 10);
                else if (typeof object.postQuestFee === "number")
                    message.postQuestFee = object.postQuestFee;
                else if (typeof object.postQuestFee === "object")
                    message.postQuestFee = new $util.LongBits(object.postQuestFee.low >>> 0, object.postQuestFee.high >>> 0).toNumber(true);
            if (object.submitProofFee != null)
                if ($util.Long)
                    (message.submitProofFee = $util.Long.fromValue(object.submitProofFee)).unsigned = true;
                else if (typeof object.submitProofFee === "string")
                    message.submitProofFee = parseInt(object.submitProofFee, 10);
                else if (typeof object.submitProofFee === "number")
                    message.submitProofFee = object.submitProofFee;
                else if (typeof object.submitProofFee === "object")
                    message.submitProofFee = new $util.LongBits(object.submitProofFee.low >>> 0, object.submitProofFee.high >>> 0).toNumber(true);
            if (object.attestContributionFee != null)
                if ($util.Long)
                    (message.attestContributionFee = $util.Long.fromValue(object.attestContributionFee)).unsigned = true;
                else if (typeof object.attestContributionFee === "string")
                    message.attestContributionFee = parseInt(object.attestContributionFee, 10);
                else if (typeof object.attestContributionFee === "number")
                    message.attestContributionFee = object.attestContributionFee;
                else if (typeof object.attestContributionFee === "object")
                    message.attestContributionFee = new $util.LongBits(object.attestContributionFee.low >>> 0, object.attestContributionFee.high >>> 0).toNumber(true);
            if (object.issueBadgeFee != null)
                if ($util.Long)
                    (message.issueBadgeFee = $util.Long.fromValue(object.issueBadgeFee)).unsigned = true;
                else if (typeof object.issueBadgeFee === "string")
                    message.issueBadgeFee = parseInt(object.issueBadgeFee, 10);
                else if (typeof object.issueBadgeFee === "number")
                    message.issueBadgeFee = object.issueBadgeFee;
                else if (typeof object.issueBadgeFee === "object")
                    message.issueBadgeFee = new $util.LongBits(object.issueBadgeFee.low >>> 0, object.issueBadgeFee.high >>> 0).toNumber(true);
            if (object.createGateFee != null)
                if ($util.Long)
                    (message.createGateFee = $util.Long.fromValue(object.createGateFee)).unsigned = true;
                else if (typeof object.createGateFee === "string")
                    message.createGateFee = parseInt(object.createGateFee, 10);
                else if (typeof object.createGateFee === "number")
                    message.createGateFee = object.createGateFee;
                else if (typeof object.createGateFee === "object")
                    message.createGateFee = new $util.LongBits(object.createGateFee.low >>> 0, object.createGateFee.high >>> 0).toNumber(true);
            if (object.checkGateAccessFee != null)
                if ($util.Long)
                    (message.checkGateAccessFee = $util.Long.fromValue(object.checkGateAccessFee)).unsigned = true;
                else if (typeof object.checkGateAccessFee === "string")
                    message.checkGateAccessFee = parseInt(object.checkGateAccessFee, 10);
                else if (typeof object.checkGateAccessFee === "number")
                    message.checkGateAccessFee = object.checkGateAccessFee;
                else if (typeof object.checkGateAccessFee === "object")
                    message.checkGateAccessFee = new $util.LongBits(object.checkGateAccessFee.low >>> 0, object.checkGateAccessFee.high >>> 0).toNumber(true);
            if (object.castReputationVoteFee != null)
                if ($util.Long)
                    (message.castReputationVoteFee = $util.Long.fromValue(object.castReputationVoteFee)).unsigned = true;
                else if (typeof object.castReputationVoteFee === "string")
                    message.castReputationVoteFee = parseInt(object.castReputationVoteFee, 10);
                else if (typeof object.castReputationVoteFee === "number")
                    message.castReputationVoteFee = object.castReputationVoteFee;
                else if (typeof object.castReputationVoteFee === "object")
                    message.castReputationVoteFee = new $util.LongBits(object.castReputationVoteFee.low >>> 0, object.castReputationVoteFee.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a FeeParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.FeeParams
         * @static
         * @param {types.FeeParams} message FeeParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sendFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.registerProfileFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.registerProfileFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.giveVibeFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.giveVibeFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createGuildFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createGuildFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.postQuestFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.postQuestFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.submitProofFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.submitProofFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.attestContributionFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.attestContributionFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.issueBadgeFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.issueBadgeFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createGateFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createGateFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.checkGateAccessFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.checkGateAccessFee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.castReputationVoteFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.castReputationVoteFee = options.longs === String ? "0" : 0;
            }
            if (message.sendFee != null && message.hasOwnProperty("sendFee"))
                if (typeof message.sendFee === "number")
                    object.sendFee = options.longs === String ? String(message.sendFee) : message.sendFee;
                else
                    object.sendFee = options.longs === String ? $util.Long.prototype.toString.call(message.sendFee) : options.longs === Number ? new $util.LongBits(message.sendFee.low >>> 0, message.sendFee.high >>> 0).toNumber(true) : message.sendFee;
            if (message.registerProfileFee != null && message.hasOwnProperty("registerProfileFee"))
                if (typeof message.registerProfileFee === "number")
                    object.registerProfileFee = options.longs === String ? String(message.registerProfileFee) : message.registerProfileFee;
                else
                    object.registerProfileFee = options.longs === String ? $util.Long.prototype.toString.call(message.registerProfileFee) : options.longs === Number ? new $util.LongBits(message.registerProfileFee.low >>> 0, message.registerProfileFee.high >>> 0).toNumber(true) : message.registerProfileFee;
            if (message.giveVibeFee != null && message.hasOwnProperty("giveVibeFee"))
                if (typeof message.giveVibeFee === "number")
                    object.giveVibeFee = options.longs === String ? String(message.giveVibeFee) : message.giveVibeFee;
                else
                    object.giveVibeFee = options.longs === String ? $util.Long.prototype.toString.call(message.giveVibeFee) : options.longs === Number ? new $util.LongBits(message.giveVibeFee.low >>> 0, message.giveVibeFee.high >>> 0).toNumber(true) : message.giveVibeFee;
            if (message.createGuildFee != null && message.hasOwnProperty("createGuildFee"))
                if (typeof message.createGuildFee === "number")
                    object.createGuildFee = options.longs === String ? String(message.createGuildFee) : message.createGuildFee;
                else
                    object.createGuildFee = options.longs === String ? $util.Long.prototype.toString.call(message.createGuildFee) : options.longs === Number ? new $util.LongBits(message.createGuildFee.low >>> 0, message.createGuildFee.high >>> 0).toNumber(true) : message.createGuildFee;
            if (message.postQuestFee != null && message.hasOwnProperty("postQuestFee"))
                if (typeof message.postQuestFee === "number")
                    object.postQuestFee = options.longs === String ? String(message.postQuestFee) : message.postQuestFee;
                else
                    object.postQuestFee = options.longs === String ? $util.Long.prototype.toString.call(message.postQuestFee) : options.longs === Number ? new $util.LongBits(message.postQuestFee.low >>> 0, message.postQuestFee.high >>> 0).toNumber(true) : message.postQuestFee;
            if (message.submitProofFee != null && message.hasOwnProperty("submitProofFee"))
                if (typeof message.submitProofFee === "number")
                    object.submitProofFee = options.longs === String ? String(message.submitProofFee) : message.submitProofFee;
                else
                    object.submitProofFee = options.longs === String ? $util.Long.prototype.toString.call(message.submitProofFee) : options.longs === Number ? new $util.LongBits(message.submitProofFee.low >>> 0, message.submitProofFee.high >>> 0).toNumber(true) : message.submitProofFee;
            if (message.attestContributionFee != null && message.hasOwnProperty("attestContributionFee"))
                if (typeof message.attestContributionFee === "number")
                    object.attestContributionFee = options.longs === String ? String(message.attestContributionFee) : message.attestContributionFee;
                else
                    object.attestContributionFee = options.longs === String ? $util.Long.prototype.toString.call(message.attestContributionFee) : options.longs === Number ? new $util.LongBits(message.attestContributionFee.low >>> 0, message.attestContributionFee.high >>> 0).toNumber(true) : message.attestContributionFee;
            if (message.issueBadgeFee != null && message.hasOwnProperty("issueBadgeFee"))
                if (typeof message.issueBadgeFee === "number")
                    object.issueBadgeFee = options.longs === String ? String(message.issueBadgeFee) : message.issueBadgeFee;
                else
                    object.issueBadgeFee = options.longs === String ? $util.Long.prototype.toString.call(message.issueBadgeFee) : options.longs === Number ? new $util.LongBits(message.issueBadgeFee.low >>> 0, message.issueBadgeFee.high >>> 0).toNumber(true) : message.issueBadgeFee;
            if (message.createGateFee != null && message.hasOwnProperty("createGateFee"))
                if (typeof message.createGateFee === "number")
                    object.createGateFee = options.longs === String ? String(message.createGateFee) : message.createGateFee;
                else
                    object.createGateFee = options.longs === String ? $util.Long.prototype.toString.call(message.createGateFee) : options.longs === Number ? new $util.LongBits(message.createGateFee.low >>> 0, message.createGateFee.high >>> 0).toNumber(true) : message.createGateFee;
            if (message.checkGateAccessFee != null && message.hasOwnProperty("checkGateAccessFee"))
                if (typeof message.checkGateAccessFee === "number")
                    object.checkGateAccessFee = options.longs === String ? String(message.checkGateAccessFee) : message.checkGateAccessFee;
                else
                    object.checkGateAccessFee = options.longs === String ? $util.Long.prototype.toString.call(message.checkGateAccessFee) : options.longs === Number ? new $util.LongBits(message.checkGateAccessFee.low >>> 0, message.checkGateAccessFee.high >>> 0).toNumber(true) : message.checkGateAccessFee;
            if (message.castReputationVoteFee != null && message.hasOwnProperty("castReputationVoteFee"))
                if (typeof message.castReputationVoteFee === "number")
                    object.castReputationVoteFee = options.longs === String ? String(message.castReputationVoteFee) : message.castReputationVoteFee;
                else
                    object.castReputationVoteFee = options.longs === String ? $util.Long.prototype.toString.call(message.castReputationVoteFee) : options.longs === Number ? new $util.LongBits(message.castReputationVoteFee.low >>> 0, message.castReputationVoteFee.high >>> 0).toNumber(true) : message.castReputationVoteFee;
            return object;
        };

        /**
         * Converts this FeeParams to JSON.
         * @function toJSON
         * @memberof types.FeeParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeeParams
         * @function getTypeUrl
         * @memberof types.FeeParams
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeeParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.FeeParams";
        };

        return FeeParams;
    })();

    types.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof types
         * @interface ISignature
         * @property {Uint8Array|null} [publicKey] Signature publicKey
         * @property {Uint8Array|null} [signature] Signature signature
         */

        /**
         * Constructs a new Signature.
         * @memberof types
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {types.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature publicKey.
         * @member {Uint8Array} publicKey
         * @memberof types.Signature
         * @instance
         */
        Signature.prototype.publicKey = $util.newBuffer([]);

        /**
         * Signature signature.
         * @member {Uint8Array} signature
         * @memberof types.Signature
         * @instance
         */
        Signature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof types.Signature
         * @static
         * @param {types.ISignature=} [properties] Properties to set
         * @returns {types.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link types.Signature.verify|verify} messages.
         * @function encode
         * @memberof types.Signature
         * @static
         * @param {types.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link types.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Signature
         * @static
         * @param {types.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof types.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Signature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.publicKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.signature = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof types.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Signature)
                return object;
            var message = new $root.types.Signature();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Signature
         * @static
         * @param {types.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.publicKey = "";
                else {
                    object.publicKey = [];
                    if (options.bytes !== Array)
                        object.publicKey = $util.newBuffer(object.publicKey);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof types.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Signature
         * @function getTypeUrl
         * @memberof types.Signature
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Signature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Signature";
        };

        return Signature;
    })();

    return types;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
