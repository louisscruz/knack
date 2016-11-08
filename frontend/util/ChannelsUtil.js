export const getChannels = (directMessage, success) => {
  let url = '/api/channels';
  if (directMessage) url = url.concat('?direct_message=true');
  $.ajax({
    url: url,
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

export const createChannel = (channel, success) => {
  $.ajax({
    url: '/api/channels',
    type: 'POST',
    dataType: 'json',
    data: { channel },
    success
  });
};

export const convertDirectMessageName = (name, currentUser) => {
  let people = name.split('_');
  people.splice(people.indexOf(currentUser.username), 1);
  return people.join(', ');
};
