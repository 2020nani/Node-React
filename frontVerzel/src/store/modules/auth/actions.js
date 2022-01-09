export function signInRequest(email, password) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { email, password },
    };
  }

  export function signInSuccess(token, user) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { token, user },
    };
  }

  export function signUpRequest( nome, email, password, admin) {
    return {
      type: '@auth/SIGN_UP_REQUEST',
      payload: {nome, email, password, admin },
    };
  }

  export function signFailure() {
    return {
      type: '@auth/SIGN_IN_FAILURE',
    };
  }

  export function signOut() {
    return {
      type: '@auth/SIGN_OUT',
    };
  }