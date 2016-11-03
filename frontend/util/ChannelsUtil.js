export const getChannels = success => {
  $.ajax({
    url: '/api/channels',
    type: 'GET',
    dataType: 'json',
    success
  });
};
