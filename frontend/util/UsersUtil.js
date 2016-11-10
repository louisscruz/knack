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

export const searchUsers = (value, success) => {
  $.ajax({
    url: '/api/users/search',
    type: 'GET',
    dataType: 'json',
    data: { value },
    success
  });
};

export const usernameValidation = (value, success) => {
  $.ajax({
    url: '/api/users/username-validation',
    type: 'GET',
    dataType: 'json',
    data: { value },
    success
  });
};
