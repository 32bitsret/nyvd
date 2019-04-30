const {Expo} = require('expo-server-sdk');

let expo = new Expo();

module.exports = async (messages, title, pushTokens) => {
  // for (let pushToken of pushTokens) {
    console.log('1');
    if (!Expo.isExpoPushToken(pushTokens)) {
      console.error(`Push token ${pushTokens} is not a valid Expo push token`);
      continue;
    }
    console.log('2');

    await messages.push({
      to: pushTokens,
      sound: 'default',
      body: title,
      data: { withSome: 'data' },
    })
  // }
  console.log('3');

  let chunks = await expo.chunkPushNotifications(messages);
  console.log('4');

  let tickets = [];
  (async () => {
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
      }
      catch (error) {
        console.error(error);
      }
    }
  })();

  let receiptIds = [];
  for (let ticket of tickets) {
    // NOTE: Not all tickets have IDs; for example, tickets for notifications
    // that could not be enqueued will have error information and no receipt ID.
    if (ticket.id) {
      receiptIds.push(ticket.id);
    }
  }

  let receiptIdChunks = await expo.chunkPushNotificationReceiptIds(receiptIds);
  (async () => {
    for (let chunk of receiptIdChunks) {
      try {
        let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
        console.log(receipts);
        for (let receipt of receipts) {
          if (receipt.status === 'ok') {
            continue;
          } else if (receipt.status === 'error') {
            console.error(`There was an error sending a notification: ${receipt.message}`);
            if (receipt.details && receipt.details.error) {
              console.error(`The error code is ${receipt.details.error}`);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  })();
}