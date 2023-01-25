const admin = require("../config/firebase.config");
const schedule = require("node-schedule");
const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};

const sendNotification = (regTokens, notificationMsg, options) => {
  admin
    .messaging()
    .sendToDevice(regTokens, notificationMsg, options)
    .then((res) => {
      console.log("Notification sent successfully", res);
    })
    .catch((error) => {
      console.log(error);
    });
};
/**
 *
 * @param {*} uniqueName       identify the job for Cancelation
 * @param {*} date             Either specific dateTime or Pass cron time for daily basis i.e. 0 15 0 * * *
 * @param {*} regTokens        List of devicTokens
 * @param {*} notificationMsg  in form of title and body
 */
exports.sendScheduledNotification = ({
  uniqueName,
  date,
  regTokens,
  notificationMsg,
}) => {
  schedule.scheduleJob(uniqueName, date, function () {
    sendNotification(
      regTokens,
      notificationMsg,
      (options = notification_options)
    );
  });
};

exports.sendUnscheduledNotification = ({ regTokens, notificationMsg }) => {
  sendNotification(
    regTokens,
    notificationMsg,
    (options = notification_options)
  );
};

exports.cancelScheduledNotification = (uniqueName) => {
  var job = schedule.scheduledJobs[uniqueName];
  if (job != undefined) {
    job.cancel();
  }
};

exports.dailyJob = (hour, minute, second) => {
  var rule = new schedule.RecurrenceRule();
  rule.hour = hour;
  rule.minute = minute;
  rule.second = second;
  rule.dayOfWeek = new schedule.Range(0, 6);
  return rule;
};
