export const getChannels = success => {
  $.ajax({
    url: '/api/channels',
    type: 'GET',
    dataType: 'json',
    success
  });
};

export const getChannel = (id, success) => {
  $.ajax({
    url: `/api/channels/${id}`,
    type: 'GET',
    dataType: 'json',
    success
  });
};
