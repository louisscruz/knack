export const login = (user, success, error) => {
  $.ajax({
    url: '/api/session',
    type: 'POST',
    dataType: 'json',
    data: {user},
    success,
    error
  });
};
