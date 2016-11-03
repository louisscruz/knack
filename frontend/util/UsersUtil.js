export const login = (user, success, error) => {
  $.ajax({
    url: '/api/session',
    type: 'POST',
    dataType: 'json',
    data: { user },
    success,
    error
  });
};

export const logout = success => {
  $.ajax({
    url: '/api/session',
    type: 'DELETE',
    dataType: 'json',
    success
  });
};

export const signUp = (user, success, error) => {
  $.ajax({
    url: '/api/users',
    type: 'POST',
    dataType: 'json',
    data: { user },
    success,
    error
  });
};
