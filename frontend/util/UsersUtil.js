export const login = (username, password, success) => {
  $.ajax({
    url: 'api/session',
    type: 'POST',
    dataType: 'json',
    success
  });
};
