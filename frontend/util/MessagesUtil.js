export const postMessage = (message, success) => {
  $.ajax({
    url: '/api/messages',
    type: 'POST',
    dataType: 'json',
    data: { message },
    success
  });
};
