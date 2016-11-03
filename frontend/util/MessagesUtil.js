export const postMessage = (message, success) => {
  console.log('hitting ajax');
  $.ajax({
    url: '/api/messages',
    type: 'POST',
    dataType: 'json',
    data: { message },
    success
  });
};
