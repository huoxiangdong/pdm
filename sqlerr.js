{ Error: ER_DUP_ENTRY: Duplicate entry '3323345' for key 'PRIMARY'
    at Query.Sequence._packetToError (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/sequences/Sequence.js:52:14)
    at Query.ErrorPacket (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/sequences/Query.js:77:18)
    at Protocol._parsePacket (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Protocol.js:279:23)
    at Parser.write (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Parser.js:76:12)
    at Protocol.write (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Protocol.js:39:16)
    at Socket.<anonymous> (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/Connection.js:103:28)
    at Socket.emit (events.js:159:13)
    at addChunk (_stream_readable.js:265:12)
    at readableAddChunk (_stream_readable.js:252:11)
    at Socket.Readable.push (_stream_readable.js:209:10)
    --------------------
    at Protocol._enqueue (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Protocol.js:145:48)
    at PoolConnection.query (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/Connection.js:208:25)
    at /Volumes/DATA/workspace/pdm/server/database/curd.js:28:28
    at Handshake.onConnect (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/Pool.js:64:7)
    at Handshake.Sequence.end (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/sequences/Sequence.js:88:24)
    at Handshake.Sequence.OkPacket (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/sequences/Sequence.js:97:8)
    at Protocol._parsePacket (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Protocol.js:279:23)
    at Parser.write (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Parser.js:76:12)
    at Protocol.write (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/protocol/Protocol.js:39:16)
    at Socket.<anonymous> (/Volumes/DATA/workspace/pdm/node_modules/mysql/lib/Connection.js:103:28)
  code: 'ER_DUP_ENTRY',
  errno: 1062,
  sqlMessage: 'Duplicate entry \'3323345\' for key \'PRIMARY\'',
  sqlState: '23000',
  index: 0,
  sql: 'INSERT INTO `material` SET `MaterialNumber` = 3323345, `Preset` = 342342, `MaterialClass` = 42342, `BarCode` = 42342, `MaterialName` = 42342, `BatchNumber` = 342, `Standard_1` = 23, `Standard_2` = 23, `Unit` = 23, `Quantity` = 23' }
