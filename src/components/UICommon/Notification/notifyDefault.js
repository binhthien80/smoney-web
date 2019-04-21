export default {
  content: 'Open the notification box', // content button notifycation
  message: 'Notification Title', // title notifycation
  description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.', // decription notifycation
  style: {
    width: 600,
    marginLeft: 335 - 600,
  }, // code same styled-component
  styleButton:``, // code same styled-component
  type: "open"
}

// e.g:
// const config = {
//   content: 'Click button now',
//   message: 'Thanks for click',
//   description: 'This is the content of the notification.',
//   style: {
//     width: 450,
//     marginLeft: -100
//   },
//   styleButton:``,
//   type: 'success'
// }